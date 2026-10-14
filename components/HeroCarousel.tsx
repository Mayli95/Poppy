"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ImageBox } from "./ImageBox";
import { heroSlides, getProduct } from "@/lib/catalog";

// Hero — one full-bleed swipeable carousel, one flagship product per state.
// The product is the whole point: enormous, centered, sitting directly on
// the background color with nothing boxing it in. The fixed "Poppy"
// wordmark sits behind it at full opacity so its first and last letters
// read clearly on either side. Copy is a small, compact block in the top
// corner — out of the product's way — not a competing headline block.

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);
  const slide = heroSlides[index];
  const product = getProduct(slide.productSlug);
  const trackStyle = {
    width: `${heroSlides.length * 100}%`,
    transform: `translateX(-${index * (100 / heroSlides.length)}%)`,
  };

  const go = (next: number) => {
    setIndex((next + heroSlides.length) % heroSlides.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(delta) > 50) go(index + (delta < 0 ? 1 : -1));
    touchX.current = null;
  };

  const copy = (
    <>
      <h1 className="max-w-[280px] font-[family-name:var(--font-serif)] text-2xl font-bold leading-tight text-[var(--dark-ink)] sm:max-w-xs sm:text-3xl">
        <em className="italic">Whatever</em> your state, there&apos;s a{" "}
        <em className="rounded-md bg-[var(--background)] px-2 py-0.5 italic text-[var(--dark)]">Poppy</em>{" "}
        for that.
      </h1>
      <p key={slide.productSlug} className="hero-fade-in mt-4 max-w-[260px] text-[15px] leading-snug text-[var(--dark-ink)]/90 sm:max-w-xs">
        {slide.blurb}
      </p>
      <Link
        href={`/product/${slide.productSlug}`}
        className="mt-5 inline-block rounded-full bg-[var(--background)] px-6 py-3 text-sm font-bold text-[var(--foreground)] transition-transform duration-200 hover:-translate-y-0.5"
      >
        Shop Now
      </Link>
    </>
  );

  const dots = (
    <div className="flex gap-2">
      {heroSlides.map((s, i) => (
        <button
          key={s.productSlug}
          aria-label={`Show slide ${i + 1}`}
          onClick={() => setIndex(i)}
          className={`h-2.5 rounded-full transition-all duration-300 ${
            i === index ? "w-6 bg-[var(--background)]" : "w-2.5 bg-[var(--background)]/40"
          }`}
        />
      ))}
    </div>
  );

  const prevButton = (
    <button
      type="button"
      aria-label="Previous state"
      onClick={() => go(index - 1)}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--background)]/90 text-[var(--foreground)] transition-transform duration-200 hover:scale-105"
    >
      <svg width="9" height="15" viewBox="0 0 9 15" fill="none" aria-hidden="true">
        <path d="M8 1L1.5 7.5L8 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
  const nextButton = (
    <button
      type="button"
      aria-label="Next state"
      onClick={() => go(index + 1)}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--background)]/90 text-[var(--foreground)] transition-transform duration-200 hover:scale-105"
    >
      <svg width="9" height="15" viewBox="0 0 9 15" fill="none" aria-hidden="true">
        <path d="M1 1L7.5 7.5L1 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );

  return (
    <section
      className="relative isolate overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Sliding background color */}
      <div className="absolute inset-0 z-0 flex transition-transform duration-[600ms] ease-out" style={trackStyle}>
        {heroSlides.map((s) => (
          <div key={s.productSlug} className="h-full" style={{ width: `${100 / heroSlides.length}%`, background: s.bgColor }} />
        ))}
      </div>

      {/* Soft spotlight behind the product — keeps the eye on center */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[5]"
        style={{ background: "radial-gradient(circle at 50% 62%, rgba(255,255,255,0.28), transparent 50%)" }}
      />

      {/* ---------- Mobile: simple stacked flow ---------- */}
      <div className="relative z-10 flex flex-col pb-10 pt-28 md:hidden">
        <div className="flex items-center justify-between px-3">
          {prevButton}
          <ImageBox
            id={product?.imageId ?? slide.productSlug}
            src={product?.realImage}
            aspect=""
            bare
            className="h-[46vh] w-[66vw] max-w-[320px]"
          />
          {nextButton}
        </div>
        <div className="px-5 pt-8">{copy}</div>
        <div className="mt-8 flex justify-center">{dots}</div>
      </div>

      {/* ---------- Desktop: product dominates, copy in the top-left corner ---------- */}
      <div className="relative z-10 hidden min-h-screen md:block">
        {/* Fixed giant wordmark, full opacity, bold — bottom-anchored so it
            never competes with the nav/copy corner at the top */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 top-[22vh] z-10 flex items-center justify-center overflow-hidden"
        >
          <span className="font-[family-name:var(--font-serif)] text-[22vw] font-black leading-none tracking-tight text-[var(--dark-ink)]">
            Poppy
          </span>
        </div>

        {/* Sliding product photo — huge, no frame, sits right on the color,
            bottom-anchored to clear the nav/copy corner */}
        <div className="absolute inset-x-0 bottom-0 top-[22vh] z-20 flex transition-transform duration-[600ms] ease-out" style={trackStyle}>
          {heroSlides.map((s) => {
            const p = getProduct(s.productSlug);
            return (
              <div key={s.productSlug} className="flex h-full items-end justify-center pb-[4vh]" style={{ width: `${100 / heroSlides.length}%` }}>
                <ImageBox id={p?.imageId ?? s.productSlug} src={p?.realImage} aspect="" bare className="h-[64vh] w-[38vw] max-w-[520px]" />
              </div>
            );
          })}
        </div>

        {/* Copy — compact, top-left corner, below the nav */}
        <div className="absolute left-5 top-28 z-30 sm:left-8 sm:top-32">{copy}</div>

        {/* Arrows */}
        <button
          type="button"
          aria-label="Previous state"
          onClick={() => go(index - 1)}
          className="absolute left-8 top-[61vh] z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--background)]/90 text-[var(--foreground)] transition-transform duration-200 hover:scale-105"
        >
          <svg width="9" height="15" viewBox="0 0 9 15" fill="none" aria-hidden="true">
            <path d="M8 1L1.5 7.5L8 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next state"
          onClick={() => go(index + 1)}
          className="absolute right-8 top-[61vh] z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--background)]/90 text-[var(--foreground)] transition-transform duration-200 hover:scale-105"
        >
          <svg width="9" height="15" viewBox="0 0 9 15" fill="none" aria-hidden="true">
            <path d="M1 1L7.5 7.5L1 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="absolute bottom-6 right-8 z-30">{dots}</div>
      </div>
    </section>
  );
}
