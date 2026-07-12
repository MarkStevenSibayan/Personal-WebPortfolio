"use client"

import Image from "next/image"
import { graphicDesigns } from "../data/graphicDesigns"
import { useState } from "react"

export default function GraphicDesignsShowcase() {
  const [filter, setFilter] = useState<"all" | "landscape" | "portrait">("all")

  const filteredDesigns =
    filter === "all" ? graphicDesigns : graphicDesigns.filter((design) => design.category === filter)

  return (
    <section className="py-16 sm:py-24 px-4" id="graphic-designs">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">Complete Collection</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Graphic Design Portfolio
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl">
            A curated collection of landscape and portrait graphic designs showcasing diverse creative styles and technical expertise.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              filter === "all"
                ? "bg-accent text-accent-foreground"
                : "bg-secondary border border-border/60 text-foreground hover:border-accent/40"
            }`}
          >
            All Designs
          </button>
          <button
            onClick={() => setFilter("landscape")}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              filter === "landscape"
                ? "bg-accent text-accent-foreground"
                : "bg-secondary border border-border/60 text-foreground hover:border-accent/40"
            }`}
          >
            Landscape
          </button>
          <button
            onClick={() => setFilter("portrait")}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              filter === "portrait"
                ? "bg-accent text-accent-foreground"
                : "bg-secondary border border-border/60 text-foreground hover:border-accent/40"
            }`}
          >
            Portrait
          </button>
        </div>

        {/* Designs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDesigns.map((design) => (
            <div
              key={design.id}
              className="group bg-card rounded-2xl overflow-hidden transition-all duration-300 border border-border/60 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-secondary/30">
                <Image
                  src={design.image}
                  alt={design.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {design.title}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap">
                    {design.category}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{design.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredDesigns.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No designs found for the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  )
}
