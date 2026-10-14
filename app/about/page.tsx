import { ImageBox } from "@/components/ImageBox";

// Composition: narrow single-column narrative — the one page on the site
// that reads like an essay, not a shelf. Two detail images break the text
// at the two points that need proof (the board, the cap stamp).

export default function AboutPage() {
  return (
    <div>
      <main className="mx-auto max-w-2xl px-5 py-16 sm:px-8 md:py-24">
        <h1 className="text-4xl font-bold sm:text-5xl">
          We used to press this at night and sell it until it ran out.
        </h1>

        <div className="mt-10 space-y-6 text-lg leading-relaxed">
          <p>
            Poppy started on a cargo bike at Torgallmenningen, pressing
            overnight in a rented kitchen in Møhlenpris and selling from a
            cooler until we ran out — which was most days by eleven.
            We&apos;re in Solheimsviken now, with our own fridges and a
            production board on the wall that&apos;s sorted into four
            columns: Wake Up, Refuel, Cool Down, Reset.
          </p>

          <ImageBox id="img-production-board" aspect="aspect-[16/9]" className="my-8" />

          <p>
            Everything we make goes on that board before it goes anywhere
            else, including this site. We don&apos;t sort by juice or
            kombucha or smoothie because our customers never did either —
            nobody at the fridge says &ldquo;I&apos;d like a fermented
            tea,&rdquo; they say &ldquo;I need to not feel like this
            anymore.&rdquo;
          </p>

          <p>
            We press cold, which means no heat touches any of it — and it
            also means everything has a real, short life. Seven days from
            the press, stamped on the cap the day it happens. If a drink&apos;s
            been sitting around longer than that, we&apos;d rather throw it
            out than sell it to you. That&apos;s not a marketing line,
            it&apos;s just the chemistry of not pasteurizing anything.
          </p>

          <ImageBox id="img-detail-cap-stamp" aspect="aspect-[4/3]" className="my-8" />

          <p>
            Flavors move with what&apos;s actually good: sea buckthorn shows
            up for about ten weeks in autumn, rhubarb takes over in June,
            black carrot turns up in the dead of January because that&apos;s
            when it&apos;s the only interesting thing left in a Bergen
            greenhouse. The core eight don&apos;t move. Everything else
            does.
          </p>
        </div>
      </main>
    </div>
  );
}
