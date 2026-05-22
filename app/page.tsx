import Link from "next/link";
import { ExternalLink, MapPinned, ShieldCheck } from "lucide-react";
import { contactLinks, pageMetadata, site } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: site.name,
  description: site.description,
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <section className="map-hero">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">{site.heroEyebrow}</p>
            <h1 className="display-title">{site.heroTitle}</h1>
            <p className="hero-copy">{site.heroDescription}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="btn-primary" href={site.telegramGroup} target="_blank" rel="nofollow noopener noreferrer">
                <MapPinned size={18} />
                Check Official Links
              </a>
              <Link className="btn-secondary" href="/faq">
                Read Area FAQ
              </Link>
            </div>
          </div>
          <div className="route-board">
            {site.contextCards.map((item, index) => (
              <article key={item.title} style={{ "--i": index } as React.CSSProperties}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="area-grid-section">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">{site.sections.highlightsEyebrow}</p>
          <h2 className="section-title">{site.sections.highlightsTitle}</h2>
          <div className="area-tiles">
            {site.highlights.map((item) => (
              <article key={item.title}>
                <ShieldCheck size={20} />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="route-steps">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">{site.sections.stepsEyebrow}</p>
          <h2 className="section-title">{site.sections.stepsTitle}</h2>
          <div className="route-line">
            {site.steps.map((step, index) => (
              <div key={step}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="map-cta">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {contactLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="nofollow noopener noreferrer">
              <strong>{link.label}</strong>
              <small>{link.description}</small>
              <ExternalLink size={16} />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
