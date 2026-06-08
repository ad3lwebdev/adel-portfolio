import React, { useState, useEffect, useRef } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {
  Bot, Zap, Globe, Mail, MessageSquare, Database, Code, GitBranch,
  CheckCircle, Star, ArrowRight, Play, ChevronRight, Workflow, Brain,
  Settings, Users, TrendingUp, Clock, Award
} from 'lucide-react'

// ─── useCountUp Hook ──────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 2000, startCounting = false) {
  const [count, setCount] = useState(0)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    if (!startCounting) return
    const start = performance.now()
    const step = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step)
      } else {
        setCount(target)
      }
    }
    frameRef.current = requestAnimationFrame(step)
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
    }
  }, [target, duration, startCounting])

  return count
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const skills = [
  { name: 'AI Automation', pct: 95 },
  { name: 'n8n', pct: 95 },
  { name: 'Zapier', pct: 90 },
  { name: 'API Integrations', pct: 90 },
  { name: 'AI Agents', pct: 95 },
  { name: 'Workflow Design', pct: 95 },
  { name: 'Google Workspace', pct: 90 },
  { name: 'CRM Automation', pct: 85 },
  { name: 'Messenger Automation', pct: 90 },
  { name: 'OpenAI Integration', pct: 95 },
]

const services = [
  {
    icon: Bot,
    title: 'AI Agent Development',
    desc: 'Custom AI agents that handle complex tasks autonomously — from lead qualification to customer support, built on OpenAI and cutting-edge LLMs.',
  },
  {
    icon: Workflow,
    title: 'n8n Workflow Automation',
    desc: 'End-to-end business process automation using n8n, connecting your apps and eliminating manual repetitive tasks at scale.',
  },
  {
    icon: Zap,
    title: 'Zapier Integrations',
    desc: 'Rapid no-code automations linking 5,000+ apps. Get your business systems talking to each other in hours, not weeks.',
  },
  {
    icon: MessageSquare,
    title: 'Messenger Chatbots',
    desc: 'Intelligent Facebook Messenger bots that qualify leads, answer FAQs, and book appointments 24/7 without human intervention.',
  },
  {
    icon: Database,
    title: 'CRM Automation',
    desc: 'Automate your entire sales pipeline — contact syncing, follow-ups, deal updates, and reporting across HubSpot, Airtable, and more.',
  },
  {
    icon: Globe,
    title: 'API & Webhook Setup',
    desc: 'Connect any platform via REST APIs and webhooks. Real-time data flows between tools your team already uses every day.',
  },
]

const projects = [
  {
    gradient: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
    title: 'AI-Powered Lead Qualification System',
    tools: ['n8n', 'OpenAI', 'HubSpot', 'Messenger'],
    features: [
      'Qualifies 500+ leads per day automatically',
      'Personalised follow-up sequences via AI',
      'Real-time CRM sync with zero manual entry',
    ],
    result: '3x',
    resultLabel: 'Increase in qualified leads',
  },
  {
    gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)',
    title: 'E-Commerce Order Automation Pipeline',
    tools: ['Zapier', 'Google Sheets', 'Gmail', 'Shopify'],
    features: [
      'Auto-processes 200+ orders daily',
      'Inventory alerts and restock triggers',
      'Branded email notifications on every event',
    ],
    result: '80%',
    resultLabel: 'Reduction in manual processing',
  },
  {
    gradient: 'linear-gradient(135deg, #10B981, #06B6D4)',
    title: 'Customer Support AI Agent',
    tools: ['OpenAI', 'n8n', 'Notion', 'Slack'],
    features: [
      'Resolves 70% of tickets without human touch',
      'Escalates complex issues with full context',
      'Learns from your knowledge base continuously',
    ],
    result: '70%',
    resultLabel: 'Tickets resolved automatically',
  },
  {
    gradient: 'linear-gradient(135deg, #3B82F6, #6366F1)',
    title: 'Social Media Content Automation',
    tools: ['n8n', 'OpenAI', 'Meta API', 'Airtable'],
    features: [
      'Generates & schedules posts with AI copy',
      'Monitors engagement and auto-responds',
      'Monthly performance reports sent automatically',
    ],
    result: '10h',
    resultLabel: 'Saved per week on content tasks',
  },
]

const steps = [
  { num: '01', title: 'Discovery', desc: 'Deep-dive into your current workflows and pain points.' },
  { num: '02', title: 'Strategy', desc: 'Map out the automation architecture and tool stack.' },
  { num: '03', title: 'Design', desc: 'Create detailed workflow diagrams before any build.' },
  { num: '04', title: 'Build', desc: 'Develop and configure all automations and AI agents.' },
  { num: '05', title: 'Test', desc: 'Rigorous end-to-end testing with real data scenarios.' },
  { num: '06', title: 'Deploy', desc: 'Launch to production with monitoring and alerts live.' },
  { num: '07', title: 'Support', desc: 'Ongoing maintenance, optimisations, and expansions.' },
]

const testimonials = [
  {
    stars: 5,
    quote: 'Adel transformed our lead gen process completely. We went from manually chasing 50 leads a week to 500+ being qualified automatically. The ROI was immediate.',
    name: 'Maria Santos',
    role: 'CEO, GrowthLab PH',
  },
  {
    stars: 5,
    quote: 'The Messenger bot Adel built handles 80% of our customer inquiries. Our support team now focuses on complex issues only. Game-changing for a small business like ours.',
    name: 'James Reyes',
    role: 'Founder, ShopLocal',
  },
  {
    stars: 5,
    quote: 'Professional, fast, and incredibly skilled. The n8n workflows he built save us 20+ hours every week. Highly recommend to anyone serious about scaling efficiently.',
    name: 'Ana Cruz',
    role: 'Operations Director, TechBridge',
  },
]

const techRow1 = [
  { icon: Bot, name: 'n8n' },
  { icon: Zap, name: 'Zapier' },
  { icon: Brain, name: 'OpenAI' },
  { icon: MessageSquare, name: 'Messenger API' },
  { icon: Database, name: 'Airtable' },
  { icon: Globe, name: 'REST APIs' },
  { icon: Code, name: 'Webhooks' },
]

const techRow2 = [
  { icon: Settings, name: 'Google Workspace' },
  { icon: GitBranch, name: 'HubSpot' },
  { icon: Users, name: 'Notion' },
  { icon: TrendingUp, name: 'Google Sheets' },
  { icon: Mail, name: 'Gmail Automation' },
  { icon: Award, name: 'Make (Integromat)' },
  { icon: Clock, name: 'Slack' },
]

// ─── Workflow Diagram ─────────────────────────────────────────────────────────
const workflowNodes = [
  { id: 'ai', label: 'AI Agent', x: 160, y: 20, color: '#6366F1', dot: '#818CF8' },
  { id: 'n8n', label: 'n8n', x: 20, y: 130, color: '#F97316', dot: '#FB923C' },
  { id: 'openai', label: 'OpenAI', x: 300, y: 130, color: '#10B981', dot: '#34D399' },
  { id: 'messenger', label: 'Facebook Messenger', x: 10, y: 270, color: '#3B82F6', dot: '#60A5FA' },
  { id: 'gmail', label: 'Gmail', x: 260, y: 270, color: '#EF4444', dot: '#F87171' },
  { id: 'sheets', label: 'Google Sheets', x: 130, y: 330, color: '#10B981', dot: '#34D399' },
]

const svgLines = [
  { x1: 210, y1: 60, x2: 100, y2: 150 },
  { x1: 210, y1: 60, x2: 340, y2: 150 },
  { x1: 100, y1: 190, x2: 80, y2: 290 },
  { x1: 340, y1: 190, x2: 330, y2: 290 },
  { x1: 100, y1: 190, x2: 200, y2: 350 },
  { x1: 340, y1: 190, x2: 200, y2: 350 },
]

function WorkflowDiagram() {
  return (
    <div style={{ position: 'relative', width: 420, height: 400, flexShrink: 0 }}>
      <svg
        width="420"
        height="400"
        style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {svgLines.map((l, i) => (
          <line
            key={i}
            x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
            stroke="url(#lineGrad)"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            style={{
              animation: `dashMove 2s linear infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </svg>
      {workflowNodes.map((node) => (
        <div
          key={node.id}
          className="workflow-node"
          style={{
            position: 'absolute',
            left: node.x,
            top: node.y,
            border: `1.5px solid ${node.color}`,
          }}
        >
          <span style={{
            display: 'inline-block',
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: node.dot,
            marginRight: 6,
            flexShrink: 0,
          }} />
          {node.label}
        </div>
      ))}
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────
function HomePage() {
  const [skillsVisible, setSkillsVisible] = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const skillsRef = useRef<HTMLElement | null>(null)
  const heroRef = useRef<HTMLDivElement | null>(null)

  const count50 = useCountUp(50, 2000, statsVisible)
  const count90 = useCountUp(90, 2000, statsVisible)
  const count100 = useCountUp(100, 2000, statsVisible)

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Skills bar observer
  useEffect(() => {
    const skillsEl = skillsRef.current
    if (!skillsEl) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSkillsVisible(true) },
      { threshold: 0.2 }
    )
    obs.observe(skillsEl)
    return () => obs.disconnect()
  }, [])

  // Stats counter observer
  useEffect(() => {
    const heroEl = heroRef.current
    if (!heroEl) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
      { threshold: 0.3 }
    )
    obs.observe(heroEl)
    return () => obs.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --color-bg: #0A0F1E;
          --color-bg2: #0F172A;
          --color-bg3: #1E293B;
          --color-primary: #6366F1;
          --color-accent: #8B5CF6;
          --color-secondary: #06B6D4;
          --color-text: #E2E8F0;
          --color-muted: #94A3B8;
          --color-border: rgba(99,102,241,0.2);
          --font-heading: 'Syne', sans-serif;
          --font-body: 'Inter', sans-serif;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--color-bg);
          color: var(--color-text);
          font-family: var(--font-body);
          line-height: 1.6;
          overflow-x: hidden;
        }

        /* ── NAV ── */
        .aa-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 60px;
          background: rgba(10,15,30,0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--color-border);
        }
        .aa-nav-logo {
          font-family: var(--font-heading);
          font-size: 22px; font-weight: 800;
          background: linear-gradient(135deg, #6366F1, #8B5CF6, #06B6D4);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .aa-nav-links { display: flex; gap: 32px; list-style: none; }
        .aa-nav-links a {
          color: var(--color-muted); text-decoration: none; font-size: 14px;
          font-weight: 500; transition: color 0.2s;
        }
        .aa-nav-links a:hover { color: #fff; }
        .aa-nav-cta {
          background: linear-gradient(135deg, #6366F1, #8B5CF6);
          color: #fff; border: none; padding: 10px 24px; border-radius: 8px;
          font-family: var(--font-body); font-size: 14px; font-weight: 600;
          cursor: pointer; transition: opacity 0.2s; text-decoration: none;
          display: inline-block;
        }
        .aa-nav-cta:hover { opacity: 0.85; }

        /* ── HERO ── */
        .hero-grid {
          min-height: 100vh;
          display: flex; align-items: center;
          padding: 120px 60px 80px;
          gap: 60px;
          background: radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.15), transparent);
        }
        .hero-left { flex: 0 0 60%; }
        .hero-right {
          flex: 0 0 40%;
          display: flex; justify-content: center; align-items: center;
        }

        .available-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.3);
          border-radius: 50px; padding: 6px 16px;
          font-size: 13px; color: #34D399; font-weight: 500; margin-bottom: 24px;
        }
        .pulse-dot {
          width: 8px; height: 8px; border-radius: 50%; background: #10B981;
          animation: aa-pulse 2s ease-in-out infinite;
        }
        @keyframes aa-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }

        .hero-h1 {
          font-family: var(--font-heading);
          font-size: clamp(48px, 6vw, 72px);
          font-weight: 800; line-height: 1.1;
          color: #fff; margin-bottom: 24px;
        }
        .gradient-text {
          background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #06B6D4 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-sub {
          font-size: 18px; color: var(--color-muted); max-width: 520px;
          margin-bottom: 36px; line-height: 1.7;
        }

        .btn-row { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 56px; }

        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, #6366F1, #8B5CF6);
          color: #fff; border: none; padding: 14px 28px; border-radius: 10px;
          font-family: var(--font-body); font-size: 15px; font-weight: 600;
          cursor: pointer; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 0 30px rgba(99,102,241,0.35);
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 40px rgba(99,102,241,0.5); }

        .btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: var(--color-text);
          border: 1.5px solid var(--color-border);
          padding: 14px 28px; border-radius: 10px;
          font-family: var(--font-body); font-size: 15px; font-weight: 600;
          cursor: pointer; text-decoration: none; transition: border-color 0.2s, color 0.2s;
        }
        .btn-outline:hover { border-color: var(--color-primary); color: #fff; }

        .stats-row { display: flex; gap: 48px; flex-wrap: wrap; }
        .stat-item { display: flex; flex-direction: column; }
        .stat-num {
          font-family: var(--font-heading);
          font-size: 40px; font-weight: 800;
          background: linear-gradient(135deg, #6366F1, #8B5CF6);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; line-height: 1;
        }
        .stat-label { font-size: 13px; color: var(--color-muted); margin-top: 4px; }

        /* ── WORKFLOW NODES ── */
        .workflow-node {
          display: inline-flex; align-items: center;
          background: rgba(15,23,42,0.9);
          border-radius: 10px; padding: 10px 16px;
          font-size: 13px; font-weight: 600;
          color: var(--color-text);
          backdrop-filter: blur(12px);
          white-space: nowrap;
          box-shadow: 0 4px 20px rgba(0,0,0,0.4);
        }
        @keyframes dashMove {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -20; }
        }

        /* ── SECTIONS ── */
        .aa-section { padding: 100px 60px; }

        .section-label {
          display: inline-block;
          font-size: 12px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: var(--color-primary);
          margin-bottom: 12px;
        }
        .section-title {
          font-family: var(--font-heading);
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 800; color: #fff; margin-bottom: 20px; line-height: 1.2;
        }
        .section-desc { font-size: 17px; color: var(--color-muted); max-width: 540px; line-height: 1.7; }

        /* ── ABOUT ── */
        .about-grid { display: flex; gap: 80px; align-items: flex-start; flex-wrap: wrap; }
        .about-left { flex: 1; min-width: 280px; }
        .about-right { flex: 0 0 340px; }

        .gradient-underline {
          display: inline-block;
          border-bottom: 3px solid transparent;
          border-image: linear-gradient(135deg, #6366F1, #8B5CF6) 1;
          padding-bottom: 4px; margin-bottom: 20px;
        }

        .about-bio { color: var(--color-muted); line-height: 1.8; margin-bottom: 28px; }

        .tools-row { display: flex; flex-wrap: wrap; gap: 10px; }
        .tool-badge {
          background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.25);
          border-radius: 6px; padding: 6px 14px;
          font-size: 13px; font-weight: 500; color: var(--color-text);
        }

        .profile-card {
          background: rgba(15,23,42,0.8);
          border: 1px solid var(--color-border);
          border-radius: 20px; padding: 36px;
          position: relative; overflow: hidden;
          backdrop-filter: blur(20px);
          animation: glowBorder 4s ease-in-out infinite alternate;
        }
        @keyframes glowBorder {
          from { box-shadow: 0 0 20px rgba(99,102,241,0.2), inset 0 0 20px rgba(99,102,241,0.05); }
          to   { box-shadow: 0 0 50px rgba(139,92,246,0.35), inset 0 0 30px rgba(139,92,246,0.08); }
        }
        .profile-avatar {
          width: 80px; height: 80px; border-radius: 50%;
          background: linear-gradient(135deg, #6366F1, #8B5CF6);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-heading); font-size: 26px; font-weight: 800;
          color: #fff; margin: 0 auto 20px;
        }
        .profile-name {
          font-family: var(--font-heading); font-size: 22px; font-weight: 800;
          color: #fff; text-align: center;
        }
        .profile-title-text { text-align: center; color: var(--color-muted); font-size: 14px; margin-top: 6px; }
        .profile-meta { display: flex; flex-direction: column; gap: 12px; margin-top: 24px; }
        .profile-meta-row { display: flex; align-items: center; gap: 10px; font-size: 14px; color: var(--color-muted); }
        .profile-meta-row svg { color: var(--color-primary); flex-shrink: 0; }

        /* ── SKILLS ── */
        .skills-bg { background: rgba(30,41,59,0.4); }
        .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px 64px; margin-top: 48px; }
        .skill-header { display: flex; justify-content: space-between; margin-bottom: 10px; }
        .skill-name { font-size: 14px; font-weight: 600; color: var(--color-text); }
        .skill-pct { font-size: 14px; font-weight: 700; color: var(--color-primary); }
        .skill-track { height: 6px; background: rgba(255,255,255,0.08); border-radius: 99px; overflow: hidden; }
        .skill-fill {
          height: 100%; border-radius: 99px;
          background: linear-gradient(90deg, #6366F1, #8B5CF6);
          transition: width 1.2s cubic-bezier(0.4,0,0.2,1);
        }

        /* ── SERVICES ── */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 28px; margin-top: 48px;
        }
        .service-card {
          background: rgba(15,23,42,0.8);
          border: 1px solid var(--color-border);
          border-radius: 16px; padding: 32px;
          transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
          opacity: 0; transform: translateY(20px);
        }
        .service-card.visible {
          opacity: 1; transform: none;
          transition: opacity 0.5s ease, transform 0.5s ease, border-color 0.25s, box-shadow 0.25s;
        }
        .service-card:hover { transform: translateY(-4px); border-color: var(--color-primary); box-shadow: 0 12px 40px rgba(99,102,241,0.2); }
        .service-icon {
          width: 52px; height: 52px; border-radius: 12px;
          background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.25);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px; color: var(--color-primary);
        }
        .service-title { font-family: var(--font-heading); font-size: 18px; font-weight: 700; color: #fff; margin-bottom: 12px; }
        .service-desc { font-size: 14px; color: var(--color-muted); line-height: 1.7; margin-bottom: 20px; }
        .service-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 13px; font-weight: 600; color: var(--color-primary);
          text-decoration: none; transition: gap 0.2s;
        }
        .service-link:hover { gap: 10px; }

        /* ── PROJECTS ── */
        .projects-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; margin-top: 48px; }
        .project-card {
          background: rgba(15,23,42,0.8); border: 1px solid var(--color-border);
          border-radius: 16px; overflow: hidden;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .project-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,0.4); }
        .project-bar { height: 5px; }
        .project-body { padding: 28px; }
        .project-title { font-family: var(--font-heading); font-size: 19px; font-weight: 700; color: #fff; margin-bottom: 16px; }
        .project-tools { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
        .project-tool {
          background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.2);
          border-radius: 50px; padding: 4px 12px; font-size: 12px; font-weight: 600; color: var(--color-primary);
        }
        .project-features { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px; }
        .project-feature { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: var(--color-muted); }
        .project-feature svg { color: #10B981; flex-shrink: 0; margin-top: 2px; }
        .project-result { font-family: var(--font-heading); font-size: 42px; font-weight: 800; }
        .project-result-label { font-size: 13px; color: var(--color-muted); margin-top: 4px; }

        /* ── PROCESS ── */
        .process-bg { background: rgba(30,41,59,0.3); }
        .steps-row { display: flex; gap: 0; margin-top: 56px; flex-wrap: wrap; }
        .step {
          flex: 1; min-width: 120px; text-align: center; position: relative; padding: 0 12px;
        }
        .step:not(:last-child)::after {
          content: '';
          position: absolute; top: 22px; right: -1px;
          width: 50%; height: 1px;
          background: linear-gradient(90deg, var(--color-border), transparent);
        }
        .step-number {
          width: 44px; height: 44px; border-radius: 50%;
          background: linear-gradient(135deg, #6366F1, #8B5CF6);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-heading); font-size: 14px; font-weight: 800; color: #fff;
          margin: 0 auto 16px;
        }
        .step-title { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 8px; }
        .step-desc { font-size: 12px; color: var(--color-muted); line-height: 1.5; }

        /* ── TESTIMONIALS ── */
        .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 48px; }
        .testimonial-card {
          background: rgba(15,23,42,0.8); border: 1px solid var(--color-border);
          border-radius: 16px; padding: 32px;
          transition: border-color 0.25s;
        }
        .testimonial-card:hover { border-color: var(--color-accent); }
        .stars { display: flex; gap: 4px; margin-bottom: 20px; }
        .testimonial-quote { font-size: 15px; color: var(--color-muted); line-height: 1.7; margin-bottom: 24px; font-style: italic; }
        .testimonial-author { font-size: 15px; font-weight: 700; color: #fff; }
        .testimonial-role { font-size: 13px; color: var(--color-accent); margin-top: 4px; }

        /* ── TECH STACK ── */
        .tech-overflow { overflow: hidden; }
        .marquee-wrapper { overflow: hidden; margin-top: 48px; }
        .marquee-row { display: flex; gap: 20px; margin-bottom: 20px; }
        .marquee-track {
          display: flex; gap: 20px; flex-shrink: 0;
          animation: marqueeLeft 30s linear infinite;
        }
        .marquee-track-reverse {
          display: flex; gap: 20px; flex-shrink: 0;
          animation: marqueeRight 30s linear infinite;
        }
        @keyframes marqueeLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .tech-card {
          display: flex; align-items: center; gap: 10px;
          background: rgba(15,23,42,0.8); border: 1px solid var(--color-border);
          border-radius: 10px; padding: 12px 20px; white-space: nowrap; flex-shrink: 0;
          font-size: 14px; font-weight: 600; color: var(--color-text);
          transition: border-color 0.2s;
        }
        .tech-card:hover { border-color: var(--color-primary); }
        .tech-card svg { color: var(--color-primary); }

        /* ── CONTACT ── */
        .contact-bg {
          background: radial-gradient(ellipse 70% 60% at 50% 100%, rgba(99,102,241,0.1), transparent);
        }
        .contact-grid { display: flex; gap: 80px; flex-wrap: wrap; }
        .contact-left { flex: 1; min-width: 280px; }
        .contact-right { flex: 1; min-width: 280px; }
        .contact-info-cards { display: flex; flex-direction: column; gap: 16px; margin-top: 36px; }
        .contact-info-card {
          display: flex; align-items: center; gap: 14px;
          background: rgba(15,23,42,0.8); border: 1px solid var(--color-border);
          border-radius: 12px; padding: 16px 20px;
        }
        .contact-info-icon {
          width: 40px; height: 40px; border-radius: 10px;
          background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.25);
          display: flex; align-items: center; justify-content: center;
          color: var(--color-primary); flex-shrink: 0;
        }
        .contact-info-label { font-size: 12px; color: var(--color-muted); }
        .contact-info-value { font-size: 15px; font-weight: 600; color: var(--color-text); margin-top: 2px; }

        .contact-form { display: flex; flex-direction: column; gap: 18px; }
        .input-field {
          width: 100%; background: rgba(15,23,42,0.9);
          border: 1px solid var(--color-border);
          border-radius: 10px; padding: 14px 18px;
          color: var(--color-text); font-family: var(--font-body); font-size: 15px;
          outline: none; transition: border-color 0.2s;
          resize: vertical;
        }
        .input-field::placeholder { color: var(--color-muted); }
        .input-field:focus { border-color: var(--color-primary); }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }

        .success-message {
          background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.3);
          border-radius: 10px; padding: 16px 20px;
          color: #34D399; font-size: 15px; text-align: center;
        }

        /* ── FOOTER ── */
        .aa-footer {
          background: #0F172A; border-top: 1px solid var(--color-border);
          padding: 32px 60px; display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 16px;
        }
        .footer-copy { font-size: 14px; color: var(--color-muted); }
        .footer-links { display: flex; gap: 24px; }
        .footer-links a { font-size: 14px; color: var(--color-muted); text-decoration: none; transition: color 0.2s; }
        .footer-links a:hover { color: #fff; }

        /* ── REVEAL ANIMATIONS ── */
        .reveal, .reveal-left, .reveal-right {
          opacity: 0; transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal { transform: translateY(30px); }
        .reveal-left { transform: translateX(-40px); }
        .reveal-right { transform: translateX(40px); }
        .reveal.visible, .reveal-left.visible, .reveal-right.visible {
          opacity: 1; transform: none;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .aa-nav { padding: 16px 24px; }
          .aa-nav-links { display: none; }
          .aa-section { padding: 60px 24px; }
          .hero-grid { flex-direction: column; padding: 100px 24px 60px; }
          .hero-left { flex: none; }
          .hero-right { display: none; }
          .projects-grid { grid-template-columns: 1fr; }
          .testimonials-grid { grid-template-columns: 1fr; }
          .steps-row { gap: 24px; }
          .step::after { display: none; }
          .skills-grid { grid-template-columns: 1fr; }
          .aa-footer { padding: 24px; flex-direction: column; text-align: center; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── SECTION 1: HERO ── */}
      <section id="home" className="hero-grid" ref={heroRef}>
        <div className="hero-left">
          <div className="available-badge">
            <span className="pulse-dot" />
            Available for Projects
          </div>
          <h1 className="hero-h1">
            Automate Your<br />
            <span className="gradient-text">Business</span> with AI
          </h1>
          <p className="hero-sub">
            I build intelligent automation systems and AI agents that eliminate repetitive work,
            scale your operations, and let you focus on what truly matters — growing your business.
          </p>
          <div className="btn-row">
            <a href="#contact" className="btn-primary">
              Book a Consultation <ArrowRight size={16} />
            </a>
            <a href="#projects" className="btn-outline">
              <Play size={16} /> View My Projects
            </a>
          </div>
          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-num">{count50}+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">{count90}%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">24/7</span>
              <span className="stat-label">Automations Running</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">{count100}%</span>
              <span className="stat-label">Remote Ready</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <WorkflowDiagram />
        </div>
      </section>

      {/* ── SECTION 2: ABOUT ── */}
      <section id="about" className="aa-section">
        <div className="about-grid">
          <div className="about-left reveal-left">
            <span className="section-label">About Me</span>
            <h2 className="section-title gradient-underline">
              AI Automation Specialist Based in the Philippines
            </h2>
            <p className="about-bio">
              I'm Adel Auditor, a freelance AI automation specialist with deep expertise in building
              end-to-end workflow automations, AI agents, and chatbot systems. I help businesses across
              Southeast Asia and globally cut costs, save time, and scale smarter using tools like n8n,
              Zapier, OpenAI, and the Meta Messenger API.
            </p>
            <p className="about-bio">
              With a background in systems thinking and a passion for emerging AI technology, I bridge
              the gap between complex automation possibilities and practical business outcomes — delivering
              solutions that actually work in the real world.
            </p>
            <div className="tools-row">
              {['n8n','Zapier','OpenAI','Google Workspace','Meta Messenger API','Webhooks','REST APIs','Airtable','Notion'].map((t) => (
                <span key={t} className="tool-badge">{t}</span>
              ))}
            </div>
          </div>
          <div className="about-right reveal-right">
            <div className="profile-card">
              <div className="profile-avatar">AA</div>
              <div className="profile-name">Adel Auditor</div>
              <div className="profile-title-text">AI Automation Specialist</div>
              <div className="profile-meta">
                <div className="profile-meta-row">
                  <Globe size={15} />
                  <span>Davao City, Philippines</span>
                </div>
                <div className="profile-meta-row">
                  <Clock size={15} />
                  <span>3+ Years Experience</span>
                </div>
                <div className="profile-meta-row">
                  <CheckCircle size={15} />
                  <span>50+ Projects Completed</span>
                </div>
                <div className="profile-meta-row">
                  <Award size={15} />
                  <span>Top Rated Freelancer</span>
                </div>
                <div className="profile-meta-row">
                  <Users size={15} />
                  <span>Clients across 12 countries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: SKILLS ── */}
      <section id="skills" className={`aa-section skills-bg`} ref={(el) => { skillsRef.current = el }}>
        <div className="reveal">
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-desc">Proficiency levels across the tools and technologies I use daily to deliver world-class automation solutions.</p>
        </div>
        <div className="skills-grid reveal">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-pct">{skill.pct}%</span>
              </div>
              <div className="skill-track">
                <div
                  className="skill-fill"
                  style={{ width: skillsVisible ? `${skill.pct}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 4: SERVICES ── */}
      <section id="services" className="aa-section">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 8 }}>
          <span className="section-label">What I Offer</span>
          <h2 className="section-title">Services</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            End-to-end automation and AI integration services tailored to your business goals.
          </p>
        </div>
        <div className="services-grid">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="service-card reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="service-icon">
                <svc.icon size={22} />
              </div>
              <div className="service-title">{svc.title}</div>
              <p className="service-desc">{svc.desc}</p>
              <a href="#contact" className="service-link">
                Learn More <ChevronRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 5: PROJECTS ── */}
      <section id="projects" className="aa-section">
        <div className="reveal">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">Real automations built for real businesses — with measurable results.</p>
        </div>
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <div key={proj.title} className="project-card reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="project-bar" style={{ background: proj.gradient }} />
              <div className="project-body">
                <div className="project-title">{proj.title}</div>
                <div className="project-tools">
                  {proj.tools.map((t) => <span key={t} className="project-tool">{t}</span>)}
                </div>
                <ul className="project-features">
                  {proj.features.map((f) => (
                    <li key={f} className="project-feature">
                      <CheckCircle size={15} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="project-result gradient-text">{proj.result}</div>
                <div className="project-result-label">{proj.resultLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 6: PROCESS ── */}
      <section id="process" className="aa-section process-bg">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">Methodology</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            A proven 7-step process that takes your automation from idea to fully operational system.
          </p>
        </div>
        <div className="steps-row reveal">
          {steps.map((step) => (
            <div key={step.num} className="step">
              <div className="step-number">{step.num}</div>
              <div className="step-title">{step.title}</div>
              <div className="step-desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 7: TESTIMONIALS ── */}
      <section id="testimonials" className="aa-section">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">Social Proof</span>
          <h2 className="section-title">What Clients Say</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={t.name} className="testimonial-card reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="stars">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} size={16} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">{t.name}</div>
              <div className="testimonial-role">{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 8: TECH STACK ── */}
      <section id="tech" className="aa-section tech-overflow">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">Tools & Platforms</span>
          <h2 className="section-title">Technology Stack</h2>
        </div>
        <div className="marquee-wrapper">
          <div className="marquee-row">
            <div className="marquee-track">
              {[...techRow1, ...techRow1].map((item, i) => (
                <div key={i} className="tech-card">
                  <item.icon size={18} />
                  {item.name}
                </div>
              ))}
            </div>
          </div>
          <div className="marquee-row">
            <div className="marquee-track-reverse">
              {[...techRow2, ...techRow2].map((item, i) => (
                <div key={i} className="tech-card">
                  <item.icon size={18} />
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: CONTACT ── */}
      <section id="contact" className="aa-section contact-bg">
        <div className="contact-grid">
          <div className="contact-left reveal-left">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">Let's Build Your Next Automation</h2>
            <p className="section-desc">
              Ready to eliminate manual work and scale your business with AI? Let's talk about
              how automation can transform your operations in 30 days or less.
            </p>
            <div className="contact-info-cards">
              <div className="contact-info-card">
                <div className="contact-info-icon"><Mail size={18} /></div>
                <div>
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-value">adel@adelauditor.com</div>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon"><Globe size={18} /></div>
                <div>
                  <div className="contact-info-label">Location</div>
                  <div className="contact-info-value">Davao City, Philippines (Remote)</div>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon"><Clock size={18} /></div>
                <div>
                  <div className="contact-info-label">Response Time</div>
                  <div className="contact-info-value">Within 24 hours</div>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon"><MessageSquare size={18} /></div>
                <div>
                  <div className="contact-info-label">Availability</div>
                  <div className="contact-info-value">Open to new projects</div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
              <a href="https://calendly.com" target="_blank" rel="noreferrer" className="btn-primary">
                Schedule a Call <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <div className="contact-right reveal-right">
            {formSubmitted ? (
              <div className="success-message">
                <CheckCircle size={32} style={{ margin: '0 auto 12px', display: 'block' }} />
                <strong>Message sent!</strong><br />
                Thank you for reaching out. I'll get back to you within 24 hours.
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <input className="input-field" type="text" placeholder="Your Name" required />
                  <input className="input-field" type="email" placeholder="Email Address" required />
                </div>
                <input className="input-field" type="text" placeholder="Company (optional)" />
                <textarea
                  className="input-field"
                  placeholder="Tell me about your automation needs..."
                  rows={6}
                  required
                />
                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <button type="submit" className="btn-primary">
                    Send Message <ArrowRight size={16} />
                  </button>
                  <a href="https://calendly.com" target="_blank" rel="noreferrer" className="btn-outline">
                    Schedule a Call
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

    </>
  )
}

export const Route = createFileRoute('/')({
  component: HomePage,
})
