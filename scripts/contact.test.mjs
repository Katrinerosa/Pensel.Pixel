import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import vm from "node:vm";
import test from "node:test";
import ts from "typescript";

const require = createRequire(import.meta.url);
const source = readFileSync(new URL("../app/contact/actions.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText;
const env = { SMTP_HOST: "smtp.simply.com", SMTP_PORT: "587", SMTP_SECURE: "false", SMTP_USER: "studio@example.com", SMTP_PASS: "test-only", CONTACT_FROM: "studio@example.com", CONTACT_TO: "studio@example.com" };

function setup(environment = env, result = { accepted: ["studio@example.com"] }) {
  const calls = [];
  const exports = {};
  const fakeMailer = { createTransport(options) { return { async sendMail(mail) { calls.push({ options, mail }); if (result instanceof Error) throw result; return result; } }; } };
  vm.runInNewContext(compiled, { exports, require: (name) => name === "nodemailer" ? fakeMailer : require(name), process: { env: environment }, console: { error() {} } });
  return { action: exports.submitContactForm, calls };
}
function form(overrides = {}) {
  const data = new FormData();
  for (const [key, value] of Object.entries({ name: "A visitor", email: "visitor@example.org", subject: "A new website", message: "I would like to discuss a website project.", ...overrides })) data.set(key, value);
  return data;
}

test("invalid input is rejected before attempting SMTP", async () => {
  const { action, calls } = setup();
  const state = await action({}, form({ email: "not-an-email", message: "short" }));
  assert.equal(state.success, false);
  assert.ok(state.errors.email && state.errors.message);
  assert.equal(calls.length, 0);
});

test("missing credentials never report success or expose configuration to the visitor", async () => {
  const { action, calls } = setup({ ...env, SMTP_PASS: "" });
  const state = await action({}, form());
  assert.equal(state.success, false);
  assert.equal(calls.length, 0);
  assert.ok(!state.message.includes("SMTP"));
  assert.equal(state.values.subject, "A new website");
});

test("mail uses authenticated STARTTLS, a fixed sender and the visitor only as reply-to", async () => {
  const { action, calls } = setup();
  const state = await action({}, form());
  assert.equal(state.success, true);
  const { options, mail } = calls[0];
  assert.equal(options.host, "smtp.simply.com");
  assert.equal(options.port, 587);
  assert.equal(options.secure, false);
  assert.equal(options.requireTLS, true);
  assert.equal(options.tls.minVersion, "TLSv1.2");
  assert.equal(mail.from, "studio@example.com");
  assert.equal(mail.to, "studio@example.com");
  assert.equal(mail.replyTo, "visitor@example.org");
  assert.equal(mail.subject, "[Contact] A new website");
  assert.equal(state.values.message, "");
});

for (const [label, result] of [["SMTP failure", new Error("Connection failed")], ["rejected recipient", { accepted: [] }]]) {
  test(`${label} retains the message and never reports success`, async () => {
    const { action } = setup(env, result);
    const state = await action({}, form());
    assert.equal(state.success, false);
    assert.equal(state.values.message, "I would like to discuss a website project.");
  });
}
