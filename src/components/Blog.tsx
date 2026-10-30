"use client";

import { useState } from "react";
import { ARTICLES, type Article } from "@/data/articles";
import { ArrowRight, BookOpen, Clock, X } from "lucide-react";

export function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="blog" className="py-24 px-6 max-w-7xl mx-auto border-b border-[#222222]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="font-[family-name:var(--font-space-mono)] text-xs text-[#777777] uppercase tracking-[0.2em] block mb-2">
            RÉFLEXIONS
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-6xl font-bold tracking-tight uppercase text-white">
            LE BLOG.
          </h2>
        </div>
        <div className="font-[family-name:var(--font-space-mono)] text-xs text-[#888888] tracking-widest uppercase border border-[#222222] bg-[#0a0a0a] px-4 py-2 self-start md:self-auto flex items-center gap-2">
          <BookOpen size={13} />
          <span>VEILLE & ARCHITECTURE</span>
        </div>
      </div>

      {/* Articles List (Bordered Rows) */}
      <div className="border-b border-[#222222]">
        {ARTICLES.map((article) => (
          <div
            key={article.id}
            onClick={() => setSelectedArticle(article)}
            className="group border-t border-[#222222] py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer hover:bg-[#0a0a0a] px-2 sm:px-4 -mx-2 sm:-mx-4 transition-all duration-200"
          >
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-3 font-[family-name:var(--font-space-mono)] text-[11px] text-[#777777]">
                <span className="uppercase text-[#aaaaaa]">
                  {article.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-[#666666]">
                  <Clock size={11} />
                  {article.readingTime}
                </span>
              </div>

              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl sm:text-2xl font-bold uppercase text-white group-hover:text-white transition-colors tracking-tight">
                {article.title}
              </h3>

              <p className="font-[family-name:var(--font-space-mono)] text-xs text-[#888888] line-clamp-2">
                {article.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-4 font-[family-name:var(--font-space-mono)] text-xs tracking-wider shrink-0">
              <span className="border border-[#222222] bg-[#111111] px-3 py-1 text-[#999999] uppercase text-[11px] group-hover:border-[#444444] transition-colors">
                {article.category}
              </span>
              <div className="w-8 h-8 rounded-none border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all">
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#0a0a0a] border border-[#333333] p-6 sm:p-10 my-8 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 text-[#888888] hover:text-white transition-colors p-2 cursor-pointer"
              aria-label="Fermer"
            >
              <X size={20} />
            </button>

            {/* Meta */}
            <div className="flex items-center gap-3 font-[family-name:var(--font-space-mono)] text-xs text-[#888888] uppercase mb-4">
              <span>{selectedArticle.date}</span>
              <span>•</span>
              <span className="text-white border border-[#333333] px-2 py-0.5">
                {selectedArticle.category}
              </span>
              <span>•</span>
              <span>{selectedArticle.readingTime}</span>
            </div>

            {/* Title */}
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-4xl font-bold uppercase text-white mb-6 leading-tight">
              {selectedArticle.title}
            </h3>

            <div className="w-full h-px bg-[#222222] my-6" />

            {/* Content */}
            <div className="space-y-5 font-[family-name:var(--font-space-mono)] text-xs sm:text-sm text-[#cccccc] leading-relaxed">
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-10 pt-6 border-t border-[#222222] flex items-center justify-between font-[family-name:var(--font-space-mono)] text-xs">
              <span className="text-[#666666]">
                Par Anass Asrir — Architecte SDET
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="border border-[#333333] text-[#888888] px-5 py-2.5 uppercase hover:text-white hover:border-[#666666] transition-colors cursor-pointer"
              >
                Fermer la lecture
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
