"use client";

import { useState } from "react";
import { PROJECTS, type Project } from "@/data/projects";
import { GithubIcon, YoutubeIcon } from "@/components/icons";
import { ArrowUpRight, CheckCircle2, Layers, X } from "lucide-react";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "sdet" | "apps" | "opensource" | "community"
  >("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: "all", label: "TOUS" },
    { id: "sdet", label: "SDET & IA" },
    { id: "apps", label: "APPLICATIONS & WEBSITES" },
    { id: "opensource", label: "OPEN SOURCE" },
    { id: "community", label: "FORMATION" },
  ] as const;

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projets" className="py-24 px-6 max-w-7xl mx-auto border-b border-[#222222]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="font-[family-name:var(--font-space-mono)] text-xs text-[#777777] uppercase tracking-[0.2em] block mb-2">
            SÉLECTION
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-6xl font-bold tracking-tight uppercase text-white">
            RÉALISATIONS.
          </h2>
        </div>
        <div className="font-[family-name:var(--font-space-mono)] text-xs text-[#888888] tracking-widest uppercase border border-[#222222] bg-[#0a0a0a] px-4 py-2 self-start md:self-auto">
          2022 — 2026 // PROD & LABS
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-12 font-[family-name:var(--font-space-mono)] text-xs tracking-wider">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`px-4 py-2 uppercase transition-all duration-200 border cursor-pointer ${
              activeFilter === tab.id
                ? "bg-white text-black border-white font-bold"
                : "bg-[#0a0a0a] text-[#888888] border-[#222222] hover:border-[#444444] hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="group relative flex flex-col justify-between bg-[#0a0a0a] border border-[#222222] hover:border-[#666666] transition-all duration-300 p-6 sm:p-7"
          >
            {/* Top metadata */}
            <div>
              <div className="flex items-center justify-between font-[family-name:var(--font-space-mono)] text-[11px] text-[#777777] mb-4">
                <span className="uppercase tracking-widest text-[#999999]">
                  {project.categoryLabel}
                </span>
                <span className="border border-[#222222] px-2 py-0.5 text-white/70">
                  {project.year}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold uppercase text-white group-hover:text-white tracking-tight mb-2">
                {project.title}
              </h3>
              <p className="font-[family-name:var(--font-space-mono)] text-xs text-[#888888] mb-4">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="font-[family-name:var(--font-space-mono)] text-xs text-[#aaaaaa] leading-relaxed line-clamp-3 mb-6">
                {project.description}
              </p>

              {/* Highlights / Metric */}
              {project.metrics && (
                <div className="mb-6 p-3 bg-[#111111] border border-[#1f1f1f] flex items-center justify-between">
                  <span className="font-[family-name:var(--font-space-mono)] text-[11px] text-[#888888] uppercase">
                    {project.metrics.label}
                  </span>
                  <span className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-white">
                    {project.metrics.value}
                  </span>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-8">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="font-[family-name:var(--font-space-mono)] text-[10px] bg-[#141414] text-[#888888] border border-[#222222] px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#1a1a1a] flex items-center justify-between font-[family-name:var(--font-space-mono)] text-xs">
              <button
                onClick={() => setSelectedProject(project)}
                className="text-white hover:text-[#aaaaaa] font-medium tracking-wider flex items-center gap-1.5 cursor-pointer uppercase py-1"
              >
                <span>DÉTAILS DU PROJET</span>
                <ArrowUpRight size={14} />
              </button>

              <div className="flex items-center gap-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#777777] hover:text-white transition-colors p-1"
                    title="Code source GitHub"
                    aria-label={`GitHub de ${project.title}`}
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {project.links.video && (
                  <a
                    href={project.links.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#777777] hover:text-white transition-colors p-1"
                    title="Playlist YouTube"
                    aria-label={`Vidéo de ${project.title}`}
                  >
                    <YoutubeIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#0a0a0a] border border-[#333333] p-6 sm:p-10 my-8 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-[#888888] hover:text-white transition-colors p-2 cursor-pointer"
              aria-label="Fermer"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="font-[family-name:var(--font-space-mono)] text-xs text-[#888888] uppercase tracking-widest mb-3">
              {selectedProject.categoryLabel} // {selectedProject.year}
            </div>
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold uppercase text-white mb-2">
              {selectedProject.title}
            </h3>
            <p className="font-[family-name:var(--font-space-mono)] text-sm text-[#999999] mb-6">
              {selectedProject.subtitle}
            </p>

            <div className="w-full h-px bg-[#222222] my-6" />

            {/* Description */}
            <div className="space-y-4 font-[family-name:var(--font-space-mono)] text-xs sm:text-sm text-[#cccccc] leading-relaxed">
              <p>{selectedProject.description}</p>
              <div className="p-4 bg-[#111111] border-l-2 border-white">
                <span className="text-white font-bold block mb-1 uppercase text-xs">
                  Impact Stratégique :
                </span>
                <span className="text-[#aaaaaa] text-xs">
                  {selectedProject.impact}
                </span>
              </div>
            </div>

            {/* Technical Highlights */}
            <div className="mt-8">
              <h4 className="font-[family-name:var(--font-space-mono)] text-xs uppercase tracking-widest text-white mb-4 flex items-center gap-2">
                <Layers size={14} />
                <span>Points Clés d&apos;Ingénierie</span>
              </h4>
              <ul className="space-y-2.5 font-[family-name:var(--font-space-mono)] text-xs text-[#999999]">
                {selectedProject.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={14}
                      className="text-white mt-0.5 shrink-0"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="mt-8">
              <div className="font-[family-name:var(--font-space-mono)] text-[11px] text-[#777777] uppercase tracking-widest mb-3">
                Technologies & Standards
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-[family-name:var(--font-space-mono)] text-xs bg-[#141414] text-white border border-[#333333] px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-10 pt-6 border-t border-[#222222] flex flex-wrap items-center justify-between gap-4 font-[family-name:var(--font-space-mono)] text-xs">
              <div className="flex items-center gap-3">
                {selectedProject.links.github && (
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white bg-white text-black px-5 py-2.5 uppercase font-bold hover:bg-neutral-200 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Dépôt GitHub ↗</span>
                  </a>
                )}
                {selectedProject.links.video && (
                  <a
                    href={selectedProject.links.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white bg-white text-black px-5 py-2.5 uppercase font-bold hover:bg-neutral-200 transition-colors"
                  >
                    <YoutubeIcon className="w-4 h-4" />
                    <span>Voir sur YouTube ↗</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="border border-[#333333] text-[#888888] px-5 py-2.5 uppercase hover:text-white hover:border-[#666666] transition-colors cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
