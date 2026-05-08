import Image from "next/image";
import Link from "next/link";

const photos = [
  { src: "/photos/above-sailboat-post-regatta.webp", alt: "Aerial view of sailboats after a regatta" },
  { src: "/photos/above-cat-forest-beach-ocean.webp", alt: "Aerial view of a forested coastline with beach and ocean" },
  { src: "/photos/above-rock.webp", alt: "Aerial view of a rocky outcrop" },
  { src: "/photos/above-pano-sunset-cats.webp", alt: "Panoramic aerial view of catamarans at sunset" },
  { src: "/photos/above-harbor-land-beach-ocean.webp", alt: "Aerial view of a harbor with beach and ocean" },
  { src: "/photos/above-sailboat-winner-regatta.webp", alt: "Aerial view of the winning sailboat at a regatta" },
];

export default function PhotographySection() {
  return (
    <section id="photography" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-xs font-medium tracking-widest uppercase text-muted">
            Photography
          </h2>
          <Link
            href="/photography"
            className="text-xs text-muted hover:text-fg transition-colors"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="aspect-square relative bg-surface rounded-sm overflow-hidden"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-4">
          Aerial and sailing photography from regattas and coastal landscapes.
          Full gallery and Instagram at{" "}
          <a
            href="https://www.instagram.com/chahramii/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg hover:text-accent transition-colors"
          >
            @chahramii
          </a>
          .
        </p>
      </div>
    </section>
  );
}
