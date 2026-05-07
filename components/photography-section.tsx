import Link from "next/link";

/*
  Replace these placeholder entries with real photos.
  For each photo:
    1. Add the image file to public/photos/ (WebP format, max 200KB each)
    2. Change placeholder: true to false
    3. Set src to "/photos/your-filename.webp"
    4. Write a real alt description for screen readers

  Or host on Cloudinary and use the full URL as src.
  Use next/image (imported below) instead of the placeholder div.
*/

type Photo = {
  src: string;
  alt: string;
  placeholder: boolean;
};

const photos: Photo[] = [
  { src: "", alt: "Wildfire smoke over Boulder foothills", placeholder: true },
  { src: "", alt: "Charred hillside after controlled burn", placeholder: true },
  { src: "", alt: "Aerial view of fire perimeter", placeholder: true },
  { src: "", alt: "Emergency response vehicles at fire line", placeholder: true },
  { src: "", alt: "Boulder Canyon landscape", placeholder: true },
  { src: "", alt: "Recovery vegetation after fire", placeholder: true },
  { src: "", alt: "Golden hour over the Flatirons", placeholder: true },
  { src: "", alt: "Smoke column at dusk", placeholder: true },
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
            className="text-xs text-muted hover:text-foreground transition-colors"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="aspect-square bg-subtle rounded-sm overflow-hidden"
              role={photo.placeholder ? undefined : "img"}
              aria-label={photo.placeholder ? undefined : photo.alt}
            >
              {/* Replace this div with:
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              */}
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-4">
          Documentary and landscape photography from Boulder County and beyond.
          Full gallery and Instagram at{" "}
          <a
            href="https://www.instagram.com/chahramii/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent transition-colors"
          >
            @chahramii
          </a>
          .
        </p>
      </div>
    </section>
  );
}
