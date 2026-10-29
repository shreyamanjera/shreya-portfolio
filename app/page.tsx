"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import FlowingMenu from "./FlowingMenu";

const rise: Variants = {
  hidden: { y: "110%", opacity: 0 },
  show: (delay: number) => ({ y: "0%", opacity: 1, transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }),
};

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <span className={`reveal ${className}`}><motion.span variants={rise} initial="hidden" animate="show" custom={delay}>{children}</motion.span></span>;
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "17%"]);
  const ringsY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  return (
    <main>
      <section className="hero" ref={heroRef}>
        <motion.div className="hero-portrait" style={{ y: portraitY }} aria-hidden="true">
          <img src="/images/shreya-front-portrait.png" alt="" />
        </motion.div>
        <motion.div className="rings" style={{ y: ringsY }} aria-hidden="true">
          <div className="rings-orbit">
            {['left', 'centre', 'right'].map((position) => (
              <div className={`ring-group ring-group-${position}`} key={position}>
                <span /><span /><span />
              </div>
            ))}
          </div>
        </motion.div>
        <div className="grain" aria-hidden="true" />

        <header className="hero-nav">
          <Link href="/" className="mark" aria-label="Shreya Manjera home">sm<span>°</span></Link>
          <div className="nav-links"><a href="#about">about</a><Link href="/projects">projects</Link><Link href="/contact">get in touch</Link></div>
          <a className="availability" href="mailto:shreyamanjera@gmail.com"><i /> available for select work</a>
        </header>

        <div className="hero-copy top-copy"><Reveal delay={0.35}>WEB DESIGNER</Reveal><Reveal delay={0.43}>&amp; FRONTEND DEVELOPER</Reveal></div>
        <div className="hero-copy side-copy"><Reveal delay={0.52}>SHREYA</Reveal><Reveal delay={0.59}>MANJERA</Reveal></div>
        <motion.h1 initial="hidden" animate="show" className="hero-title" aria-label="Shreya Manjera">
          {"SHREYA".split("").map((letter, index) => <Reveal key={`a-${index}`} delay={0.2 + index * 0.055}>{letter}</Reveal>)}<br />
          {"MANJERA".split("").map((letter, index) => <Reveal key={`b-${index}`} delay={0.42 + index * 0.055}>{letter}</Reveal>)}
        </motion.h1>

        <div className="hero-actions">
          <Link href="/projects" className="button button-light"><span>Explore projects</span><b>↗</b></Link>
          <a href="#about" className="text-link">Scroll to discover <span>↓</span></a>
        </div>
        <p className="hero-note">Every detail has a purpose.<br />Every interaction leaves a mark.</p>
        <div className="hero-index">01 <span>/</span> 03</div>
      </section>

      <section className="intro" id="about">
        <p className="eyebrow">01 — ABOUT</p>
        <div className="intro-grid">
          <h2>I design the feeling<br />before the interface.</h2>
          <div className="intro-body"><p>Delhi-based web designer, frontend developer and UI/UX designer creating precise digital experiences that are fast, human and memorable.</p><p>From Figma wireframes to a polished Vercel launch, I connect strategy, visual craft and code.</p><a href="mailto:shreyamanjera@gmail.com" className="arrow-link">Let&apos;s create something <span>↗</span></a></div>
        </div>
      </section>

      <section className="capabilities">
        <p className="eyebrow">02 — WHAT I DO</p>
        <div className="capabilities-menu">
          <FlowingMenu items={[
            { text: "Digital experiences", description: "UX-led websites that turn a clear story into an intuitive journey.", image: "https://images.unsplash.com/photo-1782977389500-dd7adad33ebe?q=80&w=600&h=400&fit=crop&sat=-100&auto=format" },
            { text: "Interface systems", description: "Considered layouts, typography and components designed to scale.", image: "https://images.unsplash.com/photo-1781499455083-6ccc3beb20cd?q=80&w=600&h=400&fit=crop&sat=-100&auto=format" },
            { text: "Frontend craft", description: "Responsive, high-performing builds with Next.js, React and CSS.", image: "https://images.unsplash.com/photo-1776394254711-4a0d7345269a?q=80&w=600&h=400&fit=crop&sat=-100&auto=format" },
          ]} />
        </div>
      </section>

      <section className="project-prompt">
        <p className="eyebrow">03 — SELECTED WORK</p>
        <div><h2>Built to be<br /><em>remembered.</em></h2><Link href="/projects" className="button button-dark"><span>View project showcase</span><b>↗</b></Link></div>
      </section>

      <footer id="contact"><p>Have a story worth shaping?</p><a href="mailto:shreyamanjera@gmail.com">shreyamanjera@gmail.com <span>↗</span></a><div className="footer-bar"><span>Delhi, India</span><div className="footer-actions"><a className="github-link" href="https://github.com/shreyamanjera" target="_blank" rel="noreferrer">GitHub <b>↗</b></a><a className="resume-link" href="/shreya-manjera-resume.pdf" target="_blank" rel="noreferrer">View résumé <b>↗</b></a></div><span>© 2026</span></div></footer>
    </main>
  );
}
