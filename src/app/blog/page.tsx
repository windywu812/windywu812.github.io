import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "../../data/blog";

export const metadata: Metadata = { title: "Blog · Windy" };

export default function BlogIndex() {
  return (
    <section className="px-6 md:px-11 pt-16 md:pt-18 pb-14 border-t border-[rgba(242,239,233,.13)]">
      <p className="font-mono text-xs tracking-[.18em] uppercase text-[#807C74] mb-3.5">
        Writing
      </p>
      <p className="font-['Instrument_Serif'] text-4xl md:text-[56px] leading-[.95] m-0 mb-10">
        Notes from the field.
      </p>

      <div className="grid gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block border border-[rgba(242,239,233,.13)] p-7 md:p-8 hover:bg-[#0f0f11] hover:border-[rgba(242,239,233,.28)] transition-colors"
          >
            <div className="flex justify-between items-center mb-4.5">
              <span className="font-mono text-[11px] tracking-[.1em] uppercase text-[#4F46E5]">
                {post.tags?.join(" · ")}
              </span>
              <span className="font-mono text-[11px] text-[#807C74]">
                {post.date}
              </span>
            </div>

            <p className="text-2xl md:text-[34px] font-black tracking-[-.03em] leading-[1.05] m-0 mb-3">
              {post.title}
            </p>

            <p className="text-[15px] leading-[1.65] text-[#ADA9A1] m-0 mb-4">
              {post.excerpt}
            </p>

            <span className="font-mono text-xs tracking-[.08em] uppercase text-[#4F46E5] inline-flex items-center gap-1.5">
              Read post
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
