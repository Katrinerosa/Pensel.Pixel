"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./StudioUpdates.module.css";

const instagram = {
  handle: "katrinerosan",
  href: "https://www.instagram.com/katrinerosan/",
  embedHref: "https://www.instagram.com/katrinerosan/embed/",
};

export default function StudioUpdates() {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [embedHeight, setEmbedHeight] = useState<number | null>(null);

  useEffect(() => {
    function resizeEmbed(event: MessageEvent) {
      if (event.source !== frameRef.current?.contentWindow ||
          !["https://www.instagram.com", "https://instagram.com"].includes(event.origin)) return;
      try {
        // Instagram's embed SDK uses MEASURE messages to fit the iframe to its content.
        const message = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        const height = message?.details?.height;
        if (message?.type === "MEASURE" && typeof height === "number" &&
            Number.isFinite(height) && height >= 100 && height <= 2000) {
          setEmbedHeight(Math.ceil(height));
        }
      } catch {
        // Ignore messages that are unrelated to the embed's height.
      }
    }
    window.addEventListener("message", resizeEmbed);
    return () => window.removeEventListener("message", resizeEmbed);
  }, []);

  return (
    <section className={styles.section} aria-labelledby="studio-updates-title">
      <div className={styles.copy}>
        <p className={styles.eyebrow}>Pensel &amp; Pixel</p>
        <h2 id="studio-updates-title">From the studio</h2>
        <p>Follow Katrine Rosa Beck on Instagram for illustration, storytelling and the making of ReadFlow.</p>
        <a className="rf-button rf-button--secondary" href={instagram.href}>
          @{instagram.handle} <span aria-hidden="true">↗</span>
        </a>
        <Link className={styles.project} href="/readflow">Explore ReadFlow <span aria-hidden="true">→</span></Link>
      </div>
      <div className={styles.feed}>
        <iframe
          ref={frameRef}
          style={embedHeight === null ? undefined : { height: embedHeight }}
          scrolling={embedHeight === null ? "auto" : "no"}
          src={instagram.embedHref}
          title={`Instagram posts from @${instagram.handle}`}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className={styles.embed}
        />
        <p>Can’t see the posts? <a href={instagram.href}>Open Instagram <span aria-hidden="true">↗</span></a></p>
      </div>
    </section>
  );
}
