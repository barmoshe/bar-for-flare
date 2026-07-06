'use client';

import { useRef } from 'react';
import { gsap, useGSAP, FULL_MOTION_QUERY } from '../../lib/gsap';
import './marketing-base.css';
import './flare.css';

/**
 * FlareApp — an ad-hoc, personalized application page for Bar Moshe's
 * "AI Engineer" application to Flare (legal tech, Tel Aviv). Built in
 * Flare's REAL visual language, read live off helloflare.com (computed
 * styles, 2026-07-03): off-white #FCFCFC surface, UPPERCASE serif display
 * headlines ("Century Old Style Std"; Playfair Display stands in) in navy
 * #111C38, italic serif eyebrows and card numerals, DM Sans body,
 * rectangular (radius-0) navy CTAs with trailing arrows, a pale-blue band
 * (#DAE8F5) behind a floating app mock with chat bubbles and sage-green
 * (~#5B8A68) accents, a pale-green band (#E9EDC9) with numbered
 * promise-style cards, and a navy close. Motion is calm: fade-ups and a
 * gentle float, exactly their register.
 *
 * Copy is terse CV register. Self-contained: mounts `.mp-root` only to
 * inherit the marketing reset (carried locally as marketing-base.css),
 * then overrides everything via `.fl-root`. All motion is gated on
 * prefers-reduced-motion; the page is fully legible with no JS.
 * Standalone sibling (the ADR-0132 pattern).
 */

const EMAIL =
  'mailto:1barmoshe1@gmail.com?subject=AI%20Engineer%20-%20Bar%20Moshe';
const CV = '/Bar_Moshe_CV_Flare.pdf';
const LINKEDIN = 'https://www.linkedin.com/in/barmoshe/';
const GITHUB = 'https://github.com/barmoshe';
const WHATSAPP = 'https://wa.me/972546561465';

/* ── One-line stack strip. ───────────────────────────────────────────── */
const STACK = [
  'Python',
  'TypeScript',
  'Go',
  'React',
  'Next.js',
  'Node.js',
  'Temporal',
  'MCP',
  'OpenAI',
  'Anthropic',
  'AWS',
  'Kubernetes',
  'CI/CD',
];

/* ── Selected work: numbered promise-style cards. Credential = no link. ─ */
type Work = {
  num: string;
  tag: string;
  title: string;
  desc: string;
  href?: string;
  open?: string;
};

const WORK: Work[] = [
  {
    num: '01',
    tag: 'MCP · npm · open source',
    title: 'MDP',
    desc: 'Markdown to document and deck compiler on npm. MCP server plus Claude Code and Codex plugins others install.',
    href: 'https://barmoshe.github.io/mdp/',
    open: 'Open',
  },
  {
    num: '02',
    tag: 'Agents · orchestration',
    title: 'temporal-plugin',
    desc: 'Temporal.io orchestration plugin for Claude Code. Durable, resumable workflows for agents.',
    href: 'https://github.com/Base67-AI/temporal-plugin',
    open: 'Code',
  },
  {
    num: '03',
    tag: 'Pipelines · Code Exchange',
    title: 'Cross-language Temporal service',
    desc: 'One workflow orchestrating Go, Python and TypeScript workers. Featured on Temporal Code Exchange.',
    href: 'https://temporal.io/code-exchange/cross-language-data-processing-service-with-temporal',
    open: 'Writeup',
  },
  {
    num: '04',
    tag: 'LLM pipeline · retries',
    title: 'MIDI GPT REST API',
    desc: 'Multi-step generation pipeline on Temporal calling OpenAI. Retries and validation at every step.',
    href: 'https://github.com/barmoshe/AI_MIDI_API',
    open: 'Code',
  },
  {
    num: '05',
    tag: 'Evals · open source',
    title: 'entailer',
    desc: 'Logic-validity toolkit: checks whether a conclusion follows from its premises. Useful next to LLMs.',
    href: 'https://github.com/barmoshe/entailer',
    open: 'Code',
  },
  {
    num: '06',
    tag: 'Agents · real time',
    title: 'MIDI Agent',
    desc: 'Live call-and-response agent: answers a MIDI phrase with editable in-key MIDI in the DAW. Python.',
    href: 'https://github.com/barmoshe/midi-agent',
    open: 'Code',
  },
  {
    num: '07',
    tag: 'Full stack · live',
    title: 'Biome Synth',
    desc: 'Browser instrument with an AI DJ across five states. React, Tone.js, Three.js, Canvas2D.',
    href: 'https://biome-synth.lovable.app/',
    open: 'Play',
  },
  {
    num: '08',
    tag: 'Current role · production',
    title: 'Joomsy',
    desc: 'Primary developer at a five-person startup: full stack plus the DevOps that runs it. Named, not linked.',
  },
];

/* ── On paper: the CV, compressed. ───────────────────────────────────── */
const CV_LINES: { h: string; lines: string[] }[] = [
  {
    h: 'Experience',
    lines: [
      'Software developer, Joomsy (2025-present). Primary developer, full stack + DevOps, team of five.',
      'Customer Support Engineer, Wochit (2021-present). Cloud video editor at scale; user issues into product fixes.',
    ],
  },
  {
    h: 'Education',
    lines: [
      'B.Sc. Computer Science, Afeka College of Engineering.',
      'Wix DevOps workshop (EKS, Kubernetes, Terraform). Coding Academy full-stack bootcamp.',
    ],
  },
];

/* ── The centerpiece: Flare's floating app mock, as an agent flow. ───── */
function AgentFlowMock() {
  return (
    <div
      className="fl-mock"
      role="img"
      aria-label="An app mock of an AI intake flow: a client message is summarized by an intake agent, a draft document is generated, an attorney approves, and the client gets a status update"
    >
      <div className="fl-mock__deco fl-mock__deco--a" data-chat aria-hidden="true">
        <span className="fl-mock__deco-dot" /> Evals green
      </div>
      <div className="fl-mock__deco fl-mock__deco--b" data-chat aria-hidden="true">
        <span className="fl-mock__deco-dot" /> Retries on
      </div>

      <div className="fl-phone">
        <div className="fl-phone__top" aria-hidden="true">
          <span className="fl-phone__time">9:41</span>
          <span className="fl-phone__title">Case activity</span>
        </div>

        <div className="fl-chat">
          <div className="fl-chat__bubble fl-chat__bubble--client" data-chat>
            I need help with my case.
          </div>
          <div className="fl-chat__step" data-chat>
            <span className="fl-chat__chip">AI intake agent</span>
            <p>Matter summarized, scored, routed.</p>
          </div>
          <div className="fl-chat__card" data-chat>
            <span className="fl-chat__tag">AI draft</span>
            <p className="fl-chat__card-title">Petition, first draft</p>
            <p className="fl-chat__card-sub">Generated with citations to review</p>
          </div>
          <div className="fl-chat__step" data-chat>
            <span className="fl-chat__chip fl-chat__chip--human">Attorney approves</span>
            <p>Nothing sends without review.</p>
          </div>
          <div className="fl-chat__bubble fl-chat__bubble--app" data-chat>
            Your case moved forward. Here&rsquo;s what happens next.
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FlareApp() {
  const scope = useRef<HTMLDivElement | null>(null);

  /* Flare's calm entrance language: rise the hero, fade-up sections,
     stagger the chat items when the mock scrolls into view. */
  useGSAP(
    () => {
      if (!matchMedia(FULL_MOTION_QUERY).matches) return;

      gsap.from('.fl-hero [data-rise]', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.09,
        delay: 0.05,
      });

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          y: 26,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });

      gsap.from('[data-chat]', {
        y: 14,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
        stagger: 0.16,
        scrollTrigger: { trigger: '.fl-mock', start: 'top 75%' },
      });
    },
    { scope },
  );

  return (
    <div className="mp-root fl-root" ref={scope}>
      <a className="fl-skip" href="#main">Skip to content</a>

      {/* ── Top navigation ──────────────────────────────────── */}
      <header className="fl-nav">
        <div className="fl-nav__inner">
          <a className="fl-brand" href="#main" aria-label="Bar Moshe for Flare">
            bar <span className="fl-brand__for">for</span> flare<span className="fl-brand__deg" aria-hidden="true">°</span>
          </a>
          <span className="fl-nav__tag">an AI Engineer application</span>
          <nav className="fl-nav__links" aria-label="Sections">
            <a className="fl-nav__link" href="#build">Build</a>
            <a className="fl-nav__link" href="#work">Work</a>
            <a className="fl-nav__link" href="#paper">CV</a>
          </nav>
          <a className="fl-btn fl-btn--navy fl-btn--sm" href={EMAIL}>
            Email me <span className="fl-btn__arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        {/* ── Hero: italic eyebrow + uppercase serif display ──── */}
        <section className="fl-hero">
          <div className="fl-hero__inner">
            <p className="fl-eyebrow" data-rise>
              Bar Moshe, applying to Flare.
            </p>
            <h1 className="fl-title" data-rise>
              Bar, for Flare
              <span className="fl-title__line2">AI builder &amp; full-stack engineer</span>
            </h1>
            <p className="fl-lede" data-rise>
              LLM apps, MCP servers, agents, durable pipelines on Temporal, and the
              DevOps around them. Shipped and public: npm, GitHub, Temporal Code Exchange.
              This page is my cover letter for Flare&rsquo;s AI Engineer role, in Flare&rsquo;s
              design language.
            </p>
            <div className="fl-hero__cta" data-rise>
              <a className="fl-btn fl-btn--navy" href="#work">
                See the work <span className="fl-btn__arrow" aria-hidden="true">→</span>
              </a>
              <a className="fl-link" href={CV} target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </div>
            <p className="fl-hero__meta" data-rise>
              Tel Aviv · full time
            </p>
          </div>

          <div className="fl-stack" data-rise aria-label="Stack">
            <ul className="fl-stack__row">
              {STACK.map((s) => (
                <li key={s} className="fl-stack__item">{s}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Centerpiece: their floating app mock, agent-flow shaped ── */}
        <section id="build" className="fl-section fl-section--blue">
          <div className="fl-wrap fl-build">
            <div className="fl-build__copy" data-reveal>
              <h2 className="fl-h2">What I&rsquo;d build at Flare</h2>
              <p className="fl-build__body">
                Agent systems in the shape Flare runs on: intelligent intake, document
                generation, case orchestration, client communication. Agents draft,
                humans approve, evals gate the merge.
              </p>
              <p className="fl-build__note">
                Every step below maps to shipped work in the next section.
              </p>
            </div>
            <div data-reveal>
              <AgentFlowMock />
            </div>
          </div>
        </section>

        {/* ── Work: numbered promise-style cards on the green band ── */}
        <section id="work" className="fl-section fl-section--green">
          <div className="fl-wrap">
            <h2 className="fl-h2 fl-h2--center" data-reveal>
              Selected work
            </h2>
            <p className="fl-sub" data-reveal>
              Live where possible. Employer work is named, not shown.
            </p>
            <div className="fl-work">
              {WORK.map((w) =>
                w.href ? (
                  <a
                    key={w.title}
                    className="fl-card"
                    href={w.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-reveal
                  >
                    <span className="fl-card__num">{w.num}</span>
                    <span className="fl-card__tag">{w.tag}</span>
                    <h3 className="fl-card__title">{w.title}</h3>
                    <p className="fl-card__desc">{w.desc}</p>
                    <span className="fl-card__link">
                      {w.open} <span aria-hidden="true">→</span>
                    </span>
                  </a>
                ) : (
                  <article key={w.title} className="fl-card fl-card--static" data-reveal>
                    <span className="fl-card__num">{w.num}</span>
                    <span className="fl-card__tag">{w.tag}</span>
                    <h3 className="fl-card__title">{w.title}</h3>
                    <p className="fl-card__desc">{w.desc}</p>
                  </article>
                ),
              )}
            </div>

            <div id="paper" className="fl-cv" data-reveal>
              {CV_LINES.map((col) => (
                <div key={col.h} className="fl-cv__col">
                  <h3 className="fl-cv__h">{col.h}</h3>
                  <ul className="fl-cv__list">
                    {col.lines.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="fl-cv__col fl-cv__col--cta">
                <h3 className="fl-cv__h">Full CV</h3>
                <p className="fl-cv__note">One page, PDF.</p>
                <a className="fl-btn fl-btn--navy fl-btn--sm" href={CV} target="_blank" rel="noopener noreferrer">
                  Download <span className="fl-btn__arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Close: navy, serif, their JOIN THE TEAM register ── */}
        <section className="fl-close">
          <div className="fl-close__inner" data-reveal>
            <p className="fl-eyebrow fl-eyebrow--light">AI Engineer at Flare, Tel Aviv.</p>
            <h2 className="fl-close__title">Flare, let&rsquo;s talk</h2>
            <p className="fl-close__sub">1barmoshe1@gmail.com</p>
            <div className="fl-close__cta">
              <a className="fl-btn fl-btn--paper" href={EMAIL}>
                Email me <span className="fl-btn__arrow" aria-hidden="true">→</span>
              </a>
              <a className="fl-btn fl-btn--ghost" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <a className="fl-btn fl-btn--ghost" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a className="fl-btn fl-btn--ghost" href={GITHUB} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a className="fl-btn fl-btn--ghost" href={CV} target="_blank" rel="noopener noreferrer">
                CV
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="fl-footer">
        <div className="fl-footer__inner">
          <span>
            An application page Bar Moshe built for the AI Engineer role.
            Not affiliated with Flare.
          </span>
          <span>Tel Aviv · 2026</span>
        </div>
      </footer>
    </div>
  );
}
