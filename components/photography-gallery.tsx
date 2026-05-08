"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type Photo = { src: string; alt: string; ratio: number };

// ratio = width/height. flex: ratio + aspect-ratio: ratio on each item
// forces every photo in a row to the same height regardless of mix.
const photos: Photo[] = [
  // --- portraits (ratio ~0.667) ---
  { src: "/photos/20260412-IMGL5331-2_WebP.webp",  alt: "Portrait",          ratio: 0.667 },
  { src: "/photos/20260412-IMGL5423-2_WebP.webp",  alt: "Portrait",          ratio: 0.667 },
  { src: "/photos/20260412-IMGL5452_WebP.webp",    alt: "Portrait",          ratio: 0.667 },
  { src: "/photos/20260413-IMGL6446_WebP.webp",    alt: "Portrait",          ratio: 0.667 },
  { src: "/photos/20260103-IMGL2280_WebP.webp",    alt: "Sailing panorama",  ratio: 2.0   },
  { src: "/photos/20260414-IMGL6948_WebP.webp",    alt: "Portrait",          ratio: 0.667 },
  { src: "/photos/20260125-IMGL2978_WebP.webp",    alt: "Sailing panorama",  ratio: 2.0   },
  { src: "/photos/20260414-IMGL7042_WebP.webp",    alt: "Portrait",          ratio: 0.667 },
  { src: "/photos/20260125-IMGL3001_WebP.webp",    alt: "Sailing panorama",  ratio: 2.0   },
  { src: "/photos/20260414-IMGL7231-2_WebP.webp",  alt: "Portrait",          ratio: 0.667 },
  { src: "/photos/20260130-IMGL3078_WebP.webp",    alt: "Sailing panorama",  ratio: 2.0   },
  { src: "/photos/20260414-IMGL7170_WebP.webp",    alt: "Portrait",          ratio: 0.75  },
  { src: "/photos/20260411-IMGL5222-3_WebP.webp",  alt: "Sailing panorama",  ratio: 2.0   },
  { src: "/photos/untitled-9827_WebP.webp",        alt: "Portrait",          ratio: 0.667 },
  { src: "/photos/20260413-IMGL5814-2_WebP.webp",  alt: "Sailing panorama",  ratio: 2.0   },
  // --- double panoramas ---
  { src: "/photos/20260413-IMGL6127-2_WebP.webp",  alt: "Sailing panorama",  ratio: 2.0   },
  { src: "/photos/20260413-IMGL6347_WebP.webp",    alt: "Sailing panorama",  ratio: 2.0   },
  { src: "/photos/20260414-IMGL6957-4_WebP.webp",  alt: "Sailing panorama",  ratio: 2.0   },
  { src: "/photos/20260414-IMGL7197-2_WebP.webp",  alt: "Sailing panorama",  ratio: 2.0   },
  // --- 3:2 landscape pairs ---
  { src: "/photos/20251225-IMG_1987_WebP.webp",    alt: "December 2025",     ratio: 1.5   },
  { src: "/photos/20251225-IMG_1988_WebP.webp",    alt: "December 2025",     ratio: 1.5   },
  { src: "/photos/20260304-IMGL3696_WebP.webp",    alt: "March 2026",        ratio: 1.5   },
  { src: "/photos/20260412-IMGL5579-2_WebP.webp",  alt: "Sailing regatta",   ratio: 1.5   },
  { src: "/photos/20260413-IMGL5850-3_WebP.webp",  alt: "Sailing regatta",   ratio: 1.5   },
  { src: "/photos/20260413-IMGL5912_WebP.webp",    alt: "Sailing regatta",   ratio: 1.5   },
  { src: "/photos/20260414-IMGL7020-2_WebP.webp",  alt: "Sailing regatta",   ratio: 1.5   },
  { src: "/photos/20260414-IMGL7137-2_WebP.webp",  alt: "Sailing regatta",   ratio: 1.5   },
  { src: "/photos/20260414-IMGL7279_WebP.webp",    alt: "Sailing regatta",   ratio: 1.5   },
  { src: "/photos/20260414-IMGL7305_WebP.webp",    alt: "Sailing regatta",   ratio: 1.5   },
  { src: "/photos/20260416-IMGL8653_WebP.webp",    alt: "Sailing regatta",   ratio: 1.5   },
  { src: "/photos/20260416-IMGL8656_WebP.webp",    alt: "Sailing regatta",   ratio: 1.5   },
  { src: "/photos/20260416-IMGL8658-2_WebP.webp",  alt: "Sailing regatta",   ratio: 1.5   },
  { src: "/photos/20260417-IMGL8991_WebP.webp",    alt: "Sailing regatta",   ratio: 1.5   },
  // --- 4:3 + 1.42 row ---
  { src: "/photos/20260102-BM3A2105_WebP.webp",    alt: "January 2026",      ratio: 1.25  },
  { src: "/photos/20260102-BM3A2157_WebP.webp",    alt: "January 2026",      ratio: 1.25  },
  { src: "/photos/20260413-IMGL5795_WebP.webp",    alt: "Sailing regatta",   ratio: 1.42  },
  // --- aerial / 16:9 ---
  { src: "/photos/above-cat-forest-beach-ocean.webp",   alt: "Aerial view of forested coastline with beach and ocean", ratio: 1.78 },
  { src: "/photos/above-pano-sunset-cats.webp",         alt: "Panoramic aerial view of catamarans at sunset",          ratio: 1.65 },
  { src: "/photos/above-harbor-land-beach-ocean.webp",  alt: "Aerial view of a harbor with beach and ocean",           ratio: 1.78 },
  { src: "/photos/above-rock.webp",                     alt: "Aerial view of a rocky outcrop",                         ratio: 1.78 },
  { src: "/photos/above-sailboat-post-regatta.webp",    alt: "Aerial view of sailboats after a regatta",               ratio: 1.78 },
  { src: "/photos/above-sailboat-winner-regatta.webp",  alt: "Aerial view of the winning sailboat at a regatta",       ratio: 1.78 },
  { src: "/photos/NotQuiteToCabin60FPS_01_01_36%3B39_WebP.webp", alt: "Sailing footage still", ratio: 1.78 },
  { src: "/photos/Timeline%201_01_00_32_10_WebP.webp",  alt: "Sailing footage still",           ratio: 1.78 },
  { src: "/photos/Timeline%201_01_01_02_23_WebP.webp",  alt: "Sailing footage still",           ratio: 1.78 },
  { src: "/photos/Timeline%201_01_03_07%3B11_WebP.webp",alt: "Sailing footage still",           ratio: 1.78 },
];

// Each inner array is one row; values are indices into photos[].
// All photos in a row share the same rendered height automatically.
const rows: number[][] = [
  [0, 1, 2],       // 3 portraits       — total ratio 2.0
  [3, 4],          // portrait + 2:1    — total ratio 2.667
  [5, 6],          // portrait + 2:1    — total ratio 2.667
  [7, 8],          // portrait + 2:1    — total ratio 2.667
  [9, 10],         // portrait + 2:1    — total ratio 2.667
  [11, 12],        // 3:4 portrait + 2:1 — total ratio 2.75
  [13, 14],        // portrait + 2:1    — total ratio 2.667
  [15, 16],        // 2:1 + 2:1         — total ratio 4.0
  [17, 18],        // 2:1 + 2:1         — total ratio 4.0
  [19, 20],        // 3:2 + 3:2         — total ratio 3.0
  [21, 22],        // 3:2 + 3:2         — total ratio 3.0
  [23, 24],        // 3:2 + 3:2         — total ratio 3.0
  [25, 26],        // 3:2 + 3:2         — total ratio 3.0
  [27, 28],        // 3:2 + 3:2         — total ratio 3.0
  [29, 30],        // 3:2 + 3:2         — total ratio 3.0
  [31, 32],        // 3:2 + 3:2         — total ratio 3.0
  [33, 34, 35],    // 4:3 + 4:3 + 1.42  — total ratio 3.92
  [36, 37],        // 16:9 + 1.65       — total ratio 3.43
  [38, 39],        // 16:9 + 16:9       — total ratio 3.56
  [40, 41],        // 16:9 + 16:9       — total ratio 3.56
  [42, 43],        // 16:9 + 16:9       — total ratio 3.56
  [44, 45],        // 16:9 + 16:9       — total ratio 3.56
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
      <div className="flex flex-col gap-4 max-w-4xl mx-auto">
        {rows.map((rowIndices, rowIdx) => (
          <div key={rowIdx} className="flex gap-4 items-start">
            {rowIndices.map((photoIdx) => {
              const photo = photos[photoIdx];
              const n = rowIndices.length;
              const sizes = `(max-width: 640px) 100vw, ${Math.round(100 / n)}vw`;
              return (
                <button
                  key={photo.src}
                  onClick={() => setLightboxIdx(photoIdx)}
                  className="relative overflow-hidden focus:outline-none"
                  style={{ flex: photo.ratio, aspectRatio: String(photo.ratio) }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover hover:brightness-90 transition-[filter] duration-200 cursor-pointer"
                    sizes={sizes}
                    priority={rowIdx < 2}
                  />
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setLightboxIdx(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
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
        </div>
      )}
    </>
  );
}
