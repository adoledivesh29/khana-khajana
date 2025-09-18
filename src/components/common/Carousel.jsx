import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import SlideCard from "./SlideCard";

export default function Carousel({ slides = [] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',       // keep slide centered
    containScroll: false,  // allow peeking edges
  });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  // Autoplay (pauses on hover/visibility)
  useEffect(() => {
    if (!emblaApi) return;
    let raf = null;
    let isPaused = false;
    const tick = () => {
      if (!isPaused) emblaApi.scrollNext();
      raf = setTimeout(tick, 4500);
    };
    const onVisibility = () => (isPaused = document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    tick();
    return () => {
      clearTimeout(raf);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [emblaApi]);

  return (
    <section className="wrapper" aria-label="Featured recipes carousel">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, idx) => (
            <div
              className={`embla__slide ${idx === selected ? 'embla__slide--active' : ''}`}
              key={idx}
            >
              <SlideCard {...slide} />
            </div>
          ))}
        </div>
      </div>

      <div className="dots" role="tablist" aria-label="Slide dots">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === selected}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
            className={`dot${i === selected ? " active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
}