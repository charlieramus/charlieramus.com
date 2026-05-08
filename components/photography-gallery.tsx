"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type Photo = {
  src: string
  alt: string
  ratio: number
  placeholder: boolean
  caption?: string  // CUSTOMIZE: add caption text here, leave undefined to show nothing
};

const photos: Photo[] = [
  // --- portraits (ratio ~0.667) ---
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260412-IMGL5331-2_WebP.webp",  alt: "Portrait",          ratio: 0.667, placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260412-IMGL5423-2_WebP.webp",  alt: "Portrait",          ratio: 0.667, placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260412-IMGL5452_WebP.webp",    alt: "Portrait",          ratio: 0.667, placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260413-IMGL6446_WebP.webp",    alt: "Portrait",          ratio: 0.667, placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260103-IMGL2280_WebP.webp",    alt: "Sailing panorama",  ratio: 2.0,   placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260414-IMGL6948_WebP.webp",    alt: "Portrait",          ratio: 0.667, placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260125-IMGL2978_WebP.webp",    alt: "Sailing panorama",  ratio: 2.0,   placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260414-IMGL7042_WebP.webp",    alt: "Portrait",          ratio: 0.667, placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260125-IMGL3001_WebP.webp",    alt: "Sailing panorama",  ratio: 2.0,   placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260414-IMGL7231-2_WebP.webp",  alt: "Portrait",          ratio: 0.667, placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260130-IMGL3078_WebP.webp",    alt: "Sailing panorama",  ratio: 2.0,   placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260414-IMGL7170_WebP.webp",    alt: "Portrait",          ratio: 0.75,  placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260411-IMGL5222-3_WebP.webp",  alt: "Sailing panorama",  ratio: 2.0,   placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/untitled-9827_WebP.webp",        alt: "Portrait",          ratio: 0.667, placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260413-IMGL5814-2_WebP.webp",  alt: "Sailing panorama",  ratio: 2.0,   placeholder: false },
  // --- double panoramas ---
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260413-IMGL6127-2_WebP.webp",  alt: "Sailing panorama",  ratio: 2.0,   placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260413-IMGL6347_WebP.webp",    alt: "Sailing panorama",  ratio: 2.0,   placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260414-IMGL6957-4_WebP.webp",  alt: "Sailing panorama",  ratio: 2.0,   placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260414-IMGL7197-2_WebP.webp",  alt: "Sailing panorama",  ratio: 2.0,   placeholder: false },
  // --- 3:2 landscape pairs ---
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20251225-IMG_1987_WebP.webp",    alt: "December 2025",     ratio: 1.5,   placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20251225-IMG_1988_WebP.webp",    alt: "December 2025",     ratio: 1.5,   placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260304-IMGL3696_WebP.webp",    alt: "March 2026",        ratio: 1.5,   placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260412-IMGL5579-2_WebP.webp",  alt: "Sailing regatta",   ratio: 1.5,   placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260413-IMGL5850-3_WebP.webp",  alt: "Sailing regatta",   ratio: 1.5,   placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260413-IMGL5912_WebP.webp",    alt: "Sailing regatta",   ratio: 1.5,   placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260414-IMGL7020-2_WebP.webp",  alt: "Sailing regatta",   ratio: 1.5,   placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260414-IMGL7137-2_WebP.webp",  alt: "Sailing regatta",   ratio: 1.5,   placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260414-IMGL7279_WebP.webp",    alt: "Sailing regatta",   ratio: 1.5,   placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260414-IMGL7305_WebP.webp",    alt: "Sailing regatta",   ratio: 1.5,   placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260416-IMGL8653_WebP.webp",    alt: "Sailing regatta",   ratio: 1.5,   placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260416-IMGL8656_WebP.webp",    alt: "Sailing regatta",   ratio: 1.5,   placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260416-IMGL8658-2_WebP.webp",  alt: "Sailing regatta",   ratio: 1.5,   placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260417-IMGL8991_WebP.webp",    alt: "Sailing regatta",   ratio: 1.5,   placeholder: false },
  // --- 4:3 + 1.42 ---
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260102-BM3A2105_WebP.webp",    alt: "January 2026",      ratio: 1.25,  placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260102-BM3A2157_WebP.webp",    alt: "January 2026",      ratio: 1.25,  placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260413-IMGL5795_WebP.webp",    alt: "Sailing regatta",   ratio: 1.42,  placeholder: false },
  // --- aerial / 16:9 ---
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/above-cat-forest-beach-ocean.webp",   alt: "Aerial view of forested coastline with beach and ocean", ratio: 1.78, placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/above-pano-sunset-cats.webp",         alt: "Panoramic aerial view of catamarans at sunset",          ratio: 1.65, placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/above-harbor-land-beach-ocean.webp",  alt: "Aerial view of a harbor with beach and ocean",           ratio: 1.78, placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/above-rock.webp",                     alt: "Aerial view of a rocky outcrop",                         ratio: 1.78, placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/above-sailboat-post-regatta.webp",    alt: "Aerial view of sailboats after a regatta",               ratio: 1.78, placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/above-sailboat-winner-regatta.webp",  alt: "Aerial view of the winning sailboat at a regatta",       ratio: 1.78, placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/truck1WebP.webp",  alt: "Sailing footage still", ratio: 1.78, placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/truck2WebP.webp",  alt: "Sailing footage still", ratio: 1.78, placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/truck3WebP.webp",  alt: "Sailing footage still", ratio: 1.78, placeholder: false },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/Timeline%201_01_03_07%3B11_WebP.webp", alt: "Sailing footage still", ratio: 1.78, placeholder: false },
];

export default function PhotographyGallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIdx(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIdx]);

  return (
    <>
      <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-4 max-w-4xl mx-auto">
        {photos.map((photo, idx) => (
          <div key={photo.src || String(idx)} className="break-inside-avoid mb-4">
            {photo.placeholder ? (
              <div
                className="w-full bg-neutral-800 rounded-sm"
                style={{ aspectRatio: String(photo.ratio) }}
              />
            ) : (
              <button
                onClick={() => setLightboxIdx(idx)}
                className="relative block w-full overflow-hidden focus:outline-none"
                style={{ aspectRatio: String(photo.ratio) }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:brightness-90 transition-[filter] duration-200 cursor-pointer"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                  priority={idx < 6}
                />
              </button>
            )}
          </div>
        ))}
      </div>

      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setLightboxIdx(null)}
        >
          <div className="flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <Image
                src={photos[lightboxIdx].src}
                alt={photos[lightboxIdx].alt}
                width={1200}
                height={900}
                className="max-w-[75vw] max-h-[75vh] w-auto h-auto rounded-sm"
                sizes="75vw"
                priority
              />
              <button
                onClick={() => setLightboxIdx(null)}
                aria-label="Close photo"
                className="absolute top-2 right-2 text-white/60 hover:text-white transition-colors duration-150"
              >
                <X size={20} />
              </button>
            </div>
            {photos[lightboxIdx].caption && (
              <p className="text-sm text-neutral-400 text-center mt-3 max-w-[75vw]">
                {photos[lightboxIdx].caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
