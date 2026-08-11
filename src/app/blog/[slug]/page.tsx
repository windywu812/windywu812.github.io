import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "../../../data/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return { title: post ? `${post.title} · Windy` : "Windy" };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="px-6 md:px-11 pt-16 md:pt-18 pb-14 border-t border-[rgba(242,239,233,.13)]">
      <Link
        href="/blog"
        className="font-mono text-xs tracking-[.08em] uppercase text-[#807C74] hover:text-[#F2EFE9] transition-colors inline-flex items-center gap-1.5 mb-8"
      >
        ← All posts
      </Link>

      <div className="flex justify-between items-center mb-4.5">
        <span className="font-mono text-[11px] tracking-[.1em] uppercase text-[#4F46E5]">
          {post.tags?.join(" · ")}
        </span>
        <span className="font-mono text-[11px] text-[#807C74]">
          {post.date}
        </span>
      </div>

      <h1 className="font-['Instrument_Serif'] text-4xl md:text-[56px] leading-[1] m-0 mb-8 max-w-[20ch]">
        {post.title}
      </h1>

      <div className="grid gap-4 max-w-[65ch]">
        {post.body.map((paragraph, i) => (
          <p key={i} className="text-[15px] leading-[1.8] text-[#ADA9A1] m-0">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
