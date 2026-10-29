"use client";

import Link from "next/link";
import { FormEvent } from "react";

export default function ContactPage() {
  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get("name") || "a visitor"}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
    window.location.href = `mailto:shreyamanjera@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className="contact-page">
      <header className="contact-nav"><Link href="/" className="mark">sm<span>°</span></Link><Link href="/projects">Projects</Link><Link href="/" className="back">← Back home</Link></header>
      <section className="contact-hero"><p className="eyebrow">LET&apos;S MAKE SOMETHING LAST</p><h1>Get in<br /><em>touch.</em></h1><p>Have a project, idea or collaboration in mind? Tell me a little about it.</p></section>
      <section className="contact-layout">
        <form className="contact-form" onSubmit={sendMessage}>
          <label>Full name<input required name="name" type="text" placeholder="Your name" /></label>
          <label>Email address<input required name="email" type="email" placeholder="you@email.com" /></label>
          <label>Message<textarea required name="message" rows={4} placeholder="What would you like to create?" /></label>
          <button type="submit">Send message <span>↗</span></button>
        </form>
        <aside className="contact-card"><div className="contact-card-head"><i /> <p>Start a conversation.<br />Let&apos;s build something considered.</p><i /></div><a href="mailto:shreyamanjera@gmail.com"><b>↗</b><span><small>Email</small>shreyamanjera@gmail.com</span></a><a href="https://github.com/shreyamanjera" target="_blank" rel="noreferrer"><b>↗</b><span><small>GitHub</small>github.com/shreyamanjera</span></a><a href="/shreya-manjera-resume.pdf" target="_blank" rel="noreferrer"><b>↗</b><span><small>Résumé</small>View résumé</span></a></aside>
      </section>
      <footer className="contact-footer"><span>SHREYA MANJERA</span><span>DELHI, INDIA</span><span>© 2026</span></footer>
    </main>
  );
}
