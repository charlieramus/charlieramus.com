"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

function isMothersDayToday(): boolean {
  const now = new Date();
  if (now.getMonth() !== 4) return false;
  let sundays = 0;
  const d = new Date(now.getFullYear(), 4, 1);
  while (d.getMonth() === 4) {
    if (d.getDay() === 0) sundays++;
    if (sundays === 2 && d.getDate() === now.getDate()) return true;
    d.setDate(d.getDate() + 1);
  }
  return false;
}

function MothersDayCard({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.6)" }}
      onClick={onDismiss}
    >
      <div
        className="relative bg-white rounded-2xl max-w-105 w-full mx-4"
        style={{ padding: "2.5rem", boxShadow: "0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.10)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onDismiss}
          aria-label="Close"
          className="absolute top-4 right-4 transition-colors duration-150"
          style={{ color: "#bbb" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#555")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#bbb")}
        >
          <X size={17} />
        </button>

        {/* Decorative top motif — a single centered rule */}
        <div className="flex items-center justify-center mb-8">
          <div style={{ height: "1px", width: "48px", background: "#d4d4d4" }} />
        </div>

        {/* CUSTOMIZE: heading line */}
        <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#1a1a1a", marginBottom: "1rem" }}>
          Happy Mother's Day
        </h2>

        {/* CUSTOMIZE: I know I'm not always great at saying it, but I think about how lucky I am to have you as my mom more than you'd guess. You have always been there, and always supported me. */}
        <div style={{ fontFamily: "Georgia, serif", fontSize: "16px", lineHeight: "1.8", color: "#555", marginBottom: "1.5rem" }}>
          <p>
            I know I'm not always great at saying it, but I think about how lucky I am to have you as my mom more than you'd guess. You have always been there, and always supported me. I hope we have another wonderful year together, and I cant't wait to see what new trips and adventures we get to share. I hope that when we part (college), this site can be used as another form of link between our realities, it features a website I will update frequently with all my photos and hopefully videos eventually. 
          </p>
          <p style={{ marginTop: "1rem" }}>
            Love you so much.
          </p>
        </div>

        {/* CUSTOMIZE: closing line */}
        <p style={{ fontSize: "13px", color: "#aaa", textAlign: "right" }}>— Charlie</p>
      </div>
    </div>
  );
}

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
  { src: "/photos/20260412-IMGL5331-2_WebP.webp",  alt: "Portrait",          ratio: 0.667, placeholder: false , caption: "Colorful coastal buildings in Reykjavik, Iceland"},
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260412-IMGL5423-2_WebP.webp",  alt: "Portrait",          ratio: 0.667, placeholder: false , caption: "A Lighthouse pearched on the coast of Reykjavik, Iceland" },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260412-IMGL5452_WebP.webp",    alt: "Portrait",          ratio: 0.667, placeholder: false , caption: "The Common Eider (Somateria mollissima) Swimming through a channel in Iceland." },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260413-IMGL6446_WebP.webp",    alt: "Portrait",          ratio: 0.667, placeholder: false , caption: "A Quiet evening at the Skógafoss waterfall in southern Iceland." },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260103-IMGL2280_WebP.webp",    alt: "Sailing panorama",  ratio: 2.0,   placeholder: false , caption: "The prominent red winged blackbirds that pearch themselves on the strands of grass surrounding Wonderland lake, Boulder CO." },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260414-IMGL6948_WebP.webp",    alt: "Portrait",          ratio: 0.667, placeholder: false , caption: "A Group of stickers stucken to a old bridge in the middle of soutern iceland. Reperesenting all that have been there." },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260125-IMGL2978_WebP.webp",    alt: "Sailing panorama",  ratio: 2.0,   placeholder: false , caption: "A Finch during a snow storm in Boulder, CO." },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260414-IMGL7042_WebP.webp",    alt: "Portrait",          ratio: 0.667, placeholder: false , caption: "A Figure Admiring the view of a mountain."},
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260125-IMGL3001_WebP.webp",    alt: "Sailing panorama",  ratio: 2.0,   placeholder: false , caption: "A Golden-crowned Kinglet holding onto a branch during a freak snow storm in Boulder, CO." },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260414-IMGL7231-2_WebP.webp",  alt: "Portrait",          ratio: 0.667, placeholder: false , caption: "Large peak hidden by the clouds during a rainy day in Iceland."},
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260130-IMGL3078_WebP.webp",    alt: "Sailing panorama",  ratio: 2.0,   placeholder: false , caption: "Ripple effect created by the mixing of sound waves and water." },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260414-IMGL7170_WebP.webp",    alt: "Portrait",          ratio: 0.75,  placeholder: false , caption: "One of Icelands taller peaks hidden by the clouds, measuring around 2000m (6000ft)."},
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260411-IMGL5222-3_WebP.webp",  alt: "Sailing panorama",  ratio: 2.0,   placeholder: false , caption: "Northern Lights while crossing over Greenland" },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/untitled-9827_WebP.webp",        alt: "Portrait",          ratio: 0.667, placeholder: false , caption: "Small House on the coast of a Island in the BVI. Sheltered by greenery."},
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260413-IMGL5814-2_WebP.webp",  alt: "Sailing panorama",  ratio: 2.0,   placeholder: false , caption: "A group of fuzzy horses on the coast of iceland. Surrounded by the barren landscape." },
  // --- double panoramas ---
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260413-IMGL6127-2_WebP.webp",  alt: "Sailing panorama",  ratio: 2.0,   placeholder: false , caption: "A Church, one of many identicle ones in Iceland. Surrounded by a large plateau." },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260413-IMGL6347_WebP.webp",    alt: "Sailing panorama",  ratio: 2.0,   placeholder: false , caption: "Lonely Horse. :(" },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260414-IMGL6957-4_WebP.webp",  alt: "Sailing panorama",  ratio: 2.0,   placeholder: false , caption: "A mountain range zoomed in to reveal its deep groves." },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260414-IMGL7197-2_WebP.webp",  alt: "Sailing panorama",  ratio: 2.0,   placeholder: false , caption: "A lonely abandoned barnhouse in the plains of south Iceland." },
  // --- 3:2 landscape pairs ---
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20251225-IMG_1987_WebP.webp",    alt: "December 2025",     ratio: 1.5,   placeholder: false , caption: "A satalite near Boulder, CO. In the past used for radio emissions from satellites, space weather, and atmospheric data and operated by NTIA/ITS and NOAA" },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20251225-IMG_1988_WebP.webp",    alt: "December 2025",     ratio: 1.5,   placeholder: false , caption: "The milky way. Taken in a bortle 4 on a F/4." },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260509-IMGL9576.webp", alt: "Ford F-150 parked on a gravel mountain road surrounded by tall pines under a dramatic cloudy sky", ratio: 0.667, placeholder: false, caption: "F-150 on a mountain road in Colorado." },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260509-IMGL9770.webp", alt: "Ford F-150 Tremor parked in a mountain meadow with snow-dusted peaks and pine trees in the background", ratio: 0.667, placeholder: false, caption: "Ford F-150 Tremor at elevation, Colorado." },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260304-IMGL3696_WebP.webp",    alt: "March 2026",        ratio: 1.5,   placeholder: false , caption: "Brand new fire Helicopter Flying over Boulder Colorado responding to the Heil fire." },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260412-IMGL5579-2_WebP.webp",  alt: "Sailing regatta",   ratio: 1.5,   placeholder: false , caption: "A looming mountain over Reykjavík in Iceland, Named Kambshorn." },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260413-IMGL5850-3_WebP.webp",  alt: "Sailing regatta",   ratio: 1.5,   placeholder: false , caption: "Seljalandsfoss from the front. Long exposures creating a milky water effect." },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260413-IMGL5912_WebP.webp",    alt: "Sailing regatta",   ratio: 1.5,   placeholder: false , caption: "Walking behind Seljalandsfoss in Iceland." },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260414-IMGL7020-2_WebP.webp",  alt: "Sailing regatta",   ratio: 1.5,   placeholder: false , caption: "A group of strangers looking at the battle ahead. One of the tallest mountains in Iceland." },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260414-IMGL7137-2_WebP.webp",  alt: "Sailing regatta",   ratio: 1.5,   placeholder: false , caption: "A relective lake In Iceland On a sunny spring day." },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260414-IMGL7279_WebP.webp",    alt: "Sailing regatta",   ratio: 1.5,   placeholder: false , caption: "Washed up Glacier on Dimond Beach - Iceland." },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260414-IMGL7305_WebP.webp",    alt: "Sailing regatta",   ratio: 1.5,   placeholder: false , caption: "A Unique Rock Laying in a washed up glacier on Dimond Beach - Iceland"},
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260416-IMGL8653_WebP.webp",    alt: "Sailing regatta",   ratio: 1.5,   placeholder: false , caption: "Land Rover, Built by @dannytkaze On Instagram"},
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260416-IMGL8656_WebP.webp",    alt: "Sailing regatta",   ratio: 1.5,   placeholder: false , caption: "Land Rover, Built by @dannytkaze On Instagram"},
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260416-IMGL8658-2_WebP.webp",  alt: "Sailing regatta",   ratio: 1.5,   placeholder: false , caption: "Land Rover, Built by @dannytkaze On Instagram"},
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260417-IMGL8991_WebP.webp",    alt: "Sailing regatta",   ratio: 1.5,   placeholder: false , caption: "Clouds forming over Denver during a flight back from Iceland" },
  // --- 4:3 + 1.42 ---
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260102-BM3A2105_WebP.webp",    alt: "January 2026",      ratio: 1.25,  placeholder: false , caption: "Whispy clouds rolling over the front range." },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260102-BM3A2157_WebP.webp",    alt: "January 2026",      ratio: 1.25,  placeholder: false , caption: "A Full Moon Over Colorado." },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/20260413-IMGL5795_WebP.webp",    alt: "Sailing regatta",   ratio: 1.42,  placeholder: false , caption: "A horse on the coast of iceland." },
  // --- aerial / 16:9 ---
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/above-cat-forest-beach-ocean.webp",   alt: "Aerial view of forested coastline with beach and ocean", ratio: 1.78, placeholder: false , caption: "Aerial view of forested coastline with beach and ocean." },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/above-pano-sunset-cats.webp",         alt: "Panoramic aerial view of catamarans at sunset",          ratio: 1.65, placeholder: false , caption: "Panoramic aerial view of catamarans at sunset." },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/above-harbor-land-beach-ocean.webp",  alt: "Aerial view of a harbor with beach and ocean",           ratio: 1.78, placeholder: false , caption: "Aerial view of a harbor with beach and ocean." },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/above-rock.webp",                     alt: "Aerial view of a rocky outcrop",                         ratio: 1.78, placeholder: false ,  caption: "Aerial view of a rocky outcrop." },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/above-sailboat-post-regatta.webp",    alt: "Aerial view of sailboats after a regatta",               ratio: 1.78, placeholder: false , caption: "Sailboat packing its sails after the regatta." },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/above-sailboat-winner-regatta.webp",  alt: "Aerial view of the winning sailboat at a regatta",       ratio: 1.78, placeholder: false , caption: "Winner of the The 52nd BVI Spring Regatta." },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/truck1WebP.webp",  alt: "Sailing footage still", ratio: 1.78, placeholder: false , caption: "Ford F-150 Driving Through Snow." },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/truck2WebP.webp",  alt: "Sailing footage still", ratio: 1.78, placeholder: false , caption: "Cars Flanking Boulder Canyon with @emerz.alt on insta" },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/truck3WebP.webp",  alt: "Sailing footage still", ratio: 1.78, placeholder: false, caption: "@emerz.alt on insta Driving Trucks Through Snow" },
  // CUSTOMIZE: add caption text here, leave undefined to show nothing
  { src: "/photos/Timeline%201_01_03_07%3B11_WebP.webp", alt: "Sailing footage still", ratio: 1.78, placeholder: false , caption: "Convoy Through Boulder Canyon, with @emerz.alt on insta" },
];

export default function PhotographyGallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [captionOpen, setCaptionOpen] = useState(false);
  const [showMothersDay, setShowMothersDay] = useState(false);

  useEffect(() => {
    const key = `mothers-day-dismissed-${new Date().getFullYear()}`;
    if (isMothersDayToday() && !sessionStorage.getItem(key)) {
      setShowMothersDay(true);
    }
  }, []);

  const dismissMothersDay = () => {
    sessionStorage.setItem(`mothers-day-dismissed-${new Date().getFullYear()}`, "1");
    setShowMothersDay(false);
  };

  useEffect(() => {
    setCaptionOpen(false);
  }, [lightboxIdx]);

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
      {showMothersDay && <MothersDayCard onDismiss={dismissMothersDay} />}
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

      <div className="flex flex-col items-center mt-12 gap-3">
        <p className="text-xs text-neutral-600">That&apos;s everything for now. More adventures are in the works.</p>
        <Link
          href="/gear"
          className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors duration-150"
        >
          Gear List
        </Link>
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
              <>
                <button
                  onClick={() => setCaptionOpen((o) => !o)}
                  className="mt-3 text-xs text-neutral-500 hover:text-neutral-300 transition-colors duration-150 focus:outline-none"
                >
                  {captionOpen ? "Hide description" : "Show description"}
                </button>
                <div
                  style={{
                    maxHeight: captionOpen ? "200px" : "0",
                    overflow: "hidden",
                    transition: "max-height 250ms ease",
                  }}
                >
                  <div className="mt-2 px-4 py-3 rounded-lg max-w-[75vw] bg-black/8 dark:bg-black/40">
                    <p className="text-sm text-neutral-400 text-center">
                      {photos[lightboxIdx].caption}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
