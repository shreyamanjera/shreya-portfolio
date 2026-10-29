export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  url: string;
  preview: string;
  summary: string;
  role: string;
  outcome: string;
  focus: readonly string[];
  technical: readonly { title: string; detail: string }[];
  systems: readonly { label: string; value: string }[];
  gallery: readonly { src: string; alt: string; label: string }[];
};

export const projects: readonly Project[] = [
  {
    slug: "alfabet-finance", number: "01", title: "Alfabet Finance", category: "Financial education platform", year: "2026", url: "https://www.alfabetfinance.com/", preview: "/images/alfabet-finance-project-cover-exact.png",
    summary: "A learning-led finance platform structured around courses, workshops and practical calculation tools.",
    role: "Product-focused web design and responsive experience direction",
    outcome: "A modular acquisition journey that lets visitors move from a broad learning proposition into courses, workshops, calculators and direct enquiries.",
    focus: ["Responsive landing system", "Course discovery hierarchy", "CTA-led conversion paths", "Interactive utility surfaces"],
    technical: [
      { title: "Information architecture", detail: "The navigation separates high-intent destinations—courses, workshops and calculators—so learners can enter through the topic that best matches their confidence level and goal." },
      { title: "Reusable course modules", detail: "Course cards use a repeatable content model for format, level, duration, modules and learner signals. This makes the catalogue scalable without redesigning each offering." },
      { title: "Calculator experience", detail: "The calculator interface is treated as a focused tool: inputs, value outputs, investment breakdowns and chart space are grouped into a clear interaction hierarchy for desktop and smaller screens." },
      { title: "Conversion routing", detail: "Persistent calls to action connect educational content to workshops and contact routes, giving exploratory visitors a clear next step at every depth of the site." },
    ],
    systems: [
      { label: "Entry points", value: "Courses · Workshops · Calculators" }, { label: "Content model", value: "Reusable cards and utility modules" }, { label: "Responsive focus", value: "Readable data, forms and course grids" }, { label: "Primary action", value: "Course discovery and direct enquiry" },
    ],
    gallery: [
      { src: "https://image.thum.io/get/width/1200/https://www.alfabetfinance.com/courses/", alt: "Alfabet Finance course catalogue interface", label: "Course catalogue and programme discovery" },
      { src: "https://image.thum.io/get/width/1200/https://www.alfabetfinance.com/workshops/", alt: "Alfabet Finance workshop experience", label: "Workshop content and learner expectations" },
      { src: "https://image.thum.io/get/width/1200/https://www.alfabetfinance.com/calculators/", alt: "Alfabet Finance financial calculator interface", label: "Interactive financial calculator tools" },
      { src: "https://api.microlink.io/?url=https%3A%2F%2Fwww.alfabetfinance.com%2Fcontact%2F&screenshot=true&meta=false&embed=screenshot.url", alt: "Alfabet Finance Contact Us page with WhatsApp, email and phone contact cards", label: "Contact channels and lead capture flow" },
    ],
  },
  {
    slug: "osew", number: "02", title: "OSEW", category: "Marine engineering website", year: "2026", url: "https://www.osew.in/", preview: "/images/osew-project-cover-exact.png",
    summary: "A marine-engineering website that turns specialised equipment and capability information into a concise, credible product story.",
    role: "Web experience design for technical product communication",
    outcome: "A focused digital surface for translating engineering capability into an accessible path through solutions, applications and enquiry-led contact points.",
    focus: ["Technical product taxonomy", "Industrial visual direction", "Capability-led navigation", "Responsive information design"],
    technical: [
      { title: "Capability-first structure", detail: "The content hierarchy foregrounds applications and engineering capability before deep product detail, helping operational buyers understand relevance before they compare specifications." },
      { title: "Product classification", detail: "Product content is organised as a repeatable taxonomy so equipment families, supporting components and service information can be expanded without fragmenting the navigation." },
      { title: "High-intent journeys", detail: "Clear enquiry and contact routes are placed beside capability content, shortening the distance between a technical question and a qualified conversation." },
      { title: "Media with purpose", detail: "Large marine visuals and product imagery support recognition while structured copy blocks preserve readability for specification-led visitors." },
    ],
    systems: [
      { label: "Audience", value: "Marine operators and technical buyers" }, { label: "Content model", value: "Solutions · products · applications" }, { label: "Responsive focus", value: "Technical content legibility" }, { label: "Primary action", value: "Capability enquiry" },
    ],
    gallery: [
      { src: "/images/osew-cnc-machining.png", alt: "CNC shaft machining at the OSEW manufacturing facility", label: "CNC machining and in-house quality control" },
      { src: "/images/osew-dynamic-balancing.png", alt: "Dynamic balancing rig at OSEW", label: "Dynamic balancing and performance testing" },
      { src: "/images/osew-testing-facility.png", alt: "Engineering testing facility at OSEW", label: "Hydraulic assembly and validation" },
      { src: "/images/osew-project-cover-exact.png", alt: "OSEW engineering performance website view", label: "Engineering capability and product communication" },
    ],
  },
  {
    slug: "sattva-law", number: "03", title: "Sattva Law & Associates", category: "Legal services website", year: "2026", url: "https://www.sattvalawandassociates.com/", preview: "/images/sattva-law-project-cover.jpg",
    summary: "A legal-services experience designed to balance authority, editorial clarity and direct access to practice-area expertise.",
    role: "Digital experience design for professional services",
    outcome: "An editorial-led site system that presents a complex practice offering with the composure and navigational clarity expected by corporate and commercial clients.",
    focus: ["Editorial content hierarchy", "Practice-area navigation", "Trust-first visual system", "Responsive service pages"],
    technical: [
      { title: "Practice-area taxonomy", detail: "The information architecture groups legal services into clear practice areas, allowing visitors to locate relevant expertise without scanning a long undifferentiated services list." },
      { title: "Authority through hierarchy", detail: "Typography, restrained contrast and supporting imagery establish a measured editorial system that keeps the page credible while allowing key actions to remain prominent." },
      { title: "Content scalability", detail: "The page structure supports repeatable attorney, insight and practice-area templates, so future content can be added with consistent metadata, summaries and calls to action." },
      { title: "Contact conversion", detail: "Consultation prompts sit alongside service context to give prospective clients a clear, appropriate path from research to initial discussion." },
    ],
    systems: [
      { label: "Audience", value: "Corporate and commercial clients" }, { label: "Content model", value: "Practice areas · expertise · insights" }, { label: "Responsive focus", value: "Long-form readability and navigation" }, { label: "Primary action", value: "Service exploration and consultation" },
    ],
    gallery: [
      { src: "/images/sattva-case-practice-areas.png", alt: "Sattva Law company incorporation and practice-area page", label: "Business registration and incorporation services" },
      { src: "/images/sattva-case-testimonials.png", alt: "Sattva Law client testimonials page", label: "Client testimonials and trust signals" },
      { src: "/images/sattva-case-ra-practice.png", alt: "Sattva Law research analyst practice page", label: "RA practice and regulatory services" },
      { src: "/images/sattva-case-contact.png", alt: "Sattva Law contact and enquiry page", label: "Contact and enquiry experience" },
    ],
  },
  {
    slug: "smisha-share-market", number: "04", title: "Smisha Share Market", category: "Market learning academy", year: "2026", url: "https://www.smishasharemarket.com/", preview: "/images/smisha-share-market-project-cover-exact.png",
    summary: "A course and mentorship platform that makes market education easier to navigate through a structured learning journey.",
    role: "Conversion-oriented education platform design",
    outcome: "A modular academy experience that introduces expertise, programs and a clear enrolment route without overwhelming first-time learners.",
    focus: ["Program discovery flows", "Conversion-focused CTAs", "Modular learning sections", "Responsive academy interface"],
    technical: [
      { title: "Program discovery", detail: "The content flow introduces the academy proposition before moving into programs, workshops and proof points, helping visitors understand both the value and the next action." },
      { title: "Conversion hierarchy", detail: "Primary actions are differentiated from secondary exploration so enrolment and consultation paths remain easy to find through long-form landing-page content." },
      { title: "Reusable education blocks", detail: "Program and benefit areas are designed as modular sections that can support new courses, cohorts, testimonials and event announcements without breaking visual consistency." },
      { title: "Mobile-first accessibility", detail: "Type scale, action targets and visual grouping are designed to retain hierarchy on smaller screens where learners are most likely to browse and enquire." },
    ],
    systems: [
      { label: "Audience", value: "New and developing market learners" }, { label: "Content model", value: "Programs · workshops · proof points" }, { label: "Responsive focus", value: "Mobile discovery and enrolment" }, { label: "Primary action", value: "Program enquiry and registration" },
    ],
    gallery: [
      { src: "/images/smisha-case-courses.png", alt: "Smisha Share Market courses page", label: "Course discovery and programme cards" },
      { src: "/images/smisha-case-faq.png", alt: "Smisha Share Market frequently asked questions section", label: "Learner FAQ and guided-support experience" },
      { src: "/images/smisha-case-calculators.png", alt: "Smisha Share Market calculator page", label: "Interactive investment-calculator system" },
      { src: "/images/smisha-case-library.png", alt: "Smisha Share Market digital library", label: "Long-form learning and reading interface" },
    ],
  },
];
