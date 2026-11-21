import { mkdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = new URL("../", import.meta.url);
const publicFolder = new URL("public/", root);
const output = new URL("images/studio/", publicFolder);
const manifest = JSON.parse(await readFile(new URL("components/studio-images.json", root), "utf8"));
await mkdir(output, { recursive: true });

for (const [name, image] of Object.entries(manifest)) {
  const source = fileURLToPath(new URL(image.source, publicFolder));
  const dimensions = await sharp(source).metadata();
  if (dimensions.width !== image.width || dimensions.height !== image.height) {
    throw new Error("Update the dimensions in studio-images.json for " + image.source);
  }

  for (const width of image.widths) {
    const filename = name + "-" + width + ".webp";
    const result = await sharp(source)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: image.quality, alphaQuality: image.alphaQuality ?? 85, effort: 6 })
      .toFile(fileURLToPath(new URL(filename, output)));
    if (result.width !== width) {
      throw new Error("The requested image width exceeds the original for " + filename);
    }
    console.log(filename, result.size + " bytes");
  }
}

const iconSource = fileURLToPath(new URL("Wulfrivfav.png", publicFolder));

await sharp(iconSource)
  .resize(64, 64)
  .png({ palette: true, compressionLevel: 9 })
  .toFile(fileURLToPath(new URL("app/icon.png", root)));

await sharp(iconSource)
  .resize(180, 180)
  .png({ palette: true, compressionLevel: 9 })
  .toFile(fileURLToPath(new URL("app/apple-icon.png", root)));
