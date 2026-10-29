import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../data";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="case-page">
      <header className="case-nav"><Link href="/" className="mark">sm<span>°</span></Link><Link href="/projects" className="back">← All projects</Link></header>
      <section className="case-head">
        <p className="eyebrow">{project.number} — {project.category}</p>
        <h1>{project.title}</h1>
        <div className="case-head-copy"><p>{project.summary}</p><a className="case-live-link" href={project.url} target="_blank" rel="noreferrer">Visit live website <b>↗</b></a></div>
      </section>
      <section className="case-preview"><img src={project.preview} alt={`${project.title} project preview`} /><p>Live project preview / {project.year}</p></section>
      <section className="case-context">
        <p className="eyebrow">PROJECT CONTEXT</p>
        <div><h2>Designing a clearer route<br />from interest to action.</h2><div className="case-context-copy"><p><span>Scope</span>{project.role}</p><p><span>Outcome</span>{project.outcome}</p></div></div>
      </section>
      <section className="case-details">
        <p className="eyebrow">TECHNICAL CASE STUDY</p>
        <div><h2>Built for clarity<br />at every breakpoint.</h2><div className="case-focus">{project.technical.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div></article>)}</div></div>
      </section>
      <section className="case-system"><p className="eyebrow">SYSTEM SNAPSHOT</p><div className="case-system-grid">{project.systems.map((item) => <article key={item.label}><span>{item.label}</span><strong>{item.value}</strong></article>)}</div></section>
      <section className="case-gallery"><div><p className="eyebrow">VISUAL REFERENCE</p><p>Selected project imagery used to anchor the product story.</p></div><div className="case-gallery-grid">{project.gallery.map((image) => <figure key={image.src}><img src={image.src} alt={image.alt} /><figcaption>{image.label}</figcaption></figure>)}</div></section>
      <footer className="project-footer"><p>Explore the project online</p><a href={project.url} target="_blank" rel="noreferrer">{project.title} <span>↗</span></a></footer>
    </main>
  );
}
