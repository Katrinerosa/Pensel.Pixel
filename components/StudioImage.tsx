import images from "./studio-images.json";

export type StudioImageName = keyof typeof images;

export default function StudioImage({
  image,
  alt,
  sizes,
  className,
  priority = false,
}: {
  image: StudioImageName;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  const { width, height, widths } = images[image];
  const source = (size: number) => `/images/studio/${image}-${size}.webp`;

  return (
    // These responsive WebP files are built ahead of time and served directly.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={alt}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
      srcSet={widths.map((size) => `${source(size)} ${size}w`).join(", ")}
      src={source(widths[0])}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
    />
  );
}
