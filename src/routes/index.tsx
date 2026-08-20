import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Bot,
  CalendarDays,
  Check,
  ChevronRight,
  FileText,
  LayoutDashboard,
  Mail,
  Menu,
  MessageSquare,
  Monitor,
  Shield,
  Users,
  Wifi,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lelo's Creation — IT Helpdesk in a Box" },
      {
        name: "description",
        content:
          "AI-powered IT support and appointment booking for small businesses in Johannesburg. Remote, on-site, and monthly support plans.",
      },
      {
        property: "og:title",
        content: "Lelo's Creation — IT Helpdesk in a Box",
      },
      {
        property: "og:description",
        content:
          "AI-powered IT support and appointment booking for small businesses in Johannesburg.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { to: "/#how-it-works", label: "How it works" },
    { to: "/#features", label: "Features" },
    { to: "/#services", label: "Services" },
    { to: "/#pricing", label: "Pricing" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="landing-header">
        <nav className="landing-nav" aria-label="Primary">
          <Link to="/" className="landing-brand">
            <span className="landing-brand-box">LC</span>
            <span className="landing-brand-text">
              Lelo's Creation
              <span>IT Helpdesk in a Box</span>
            </span>
          </Link>

          <div className="landing-nav-links">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="landing-nav-cta">
            <Link to="/#pricing" className="landing-btn landing-btn-ghost hidden sm:inline-flex">
              See pricing
            </Link>
            <a
              href="mailto:hello@lelocreations.co.za?subject=IT%20Support%20Request"
              className="landing-btn landing-btn-primary"
            >
              Book an appointment
            </a>
            <button
              className="landing-nav-toggle"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        <div className={`landing-mobile-menu ${mobileOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link to="/#pricing" onClick={() => setMobileOpen(false)}>
            Book an appointment
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="landing-hero">
        <div className="landing-wrap">
          <div className="landing-hero-grid">
            <div>
              <p className="landing-eyebrow">IT support for small business</p>
              <h1 className="landing-h1">
                IT support that answers on the <span className="accent-text">first message</span>.
              </h1>
              <p className="landing-hero-lead">
                Lelo's Creation gives your business a dedicated helpdesk — customers text or email
                us, our AI assistant triages the issue and books the right appointment, and a real
                technician follows up. No hold music, no ticket portals.
              </p>
              <div className="landing-hero-actions">
                <a
                  href="mailto:hello@lelocreations.co.za?subject=IT%20Support%20Request"
                  className="landing-btn landing-btn-primary"
                >
                  Book an appointment
                  <ChevronRight size={16} />
                </a>
                <Link to="/#how-it-works" className="landing-btn landing-btn-ghost">
                  See how it works
                </Link>
              </div>
              <div className="landing-hero-trust">
                <div>
                  <div className="num">2 min</div>
                  <div className="lab">Avg. response time</div>
                </div>
                <div>
                  <div className="num">24/7</div>
                  <div className="lab">AI intake</div>
                </div>
                <div>
                  <div className="num">100%</div>
                  <div className="lab">Local & hands-on</div>
                </div>
              </div>
            </div>

            <div className="landing-mock" aria-label="Chat assistant preview">
              <div className="landing-mock-head">
                <span className="landing-mock-dot" />
                <span className="landing-mock-dot" />
                <span className="landing-mock-dot" />
                <span className="landing-mock-title">lelo-assistant.chat</span>
              </div>
              <div className="landing-mock-chat">
                <div className="landing-mock-bubble user">
                  Hi, our office WiFi keeps dropping
                </div>
                <div className="landing-mock-bubble ai">
                  Sorry to hear that! Is this happening all day or at certain times? And would you
                  prefer an on-site visit or remote diagnosis?
                </div>
                <div className="landing-mock-bubble user">
                  Mostly afternoons. On-site would be best
                </div>
                <div className="landing-mock-bubble ai">
                  Got it — I can get a technician out tomorrow at 2:00 PM. Confirming your details
                  now.
                </div>
              </div>
              <div className="landing-mock-status">
                <span className="dot" />
                Appointment booked · confirmation sent
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="landing-logos" aria-label="Trusted by">
        <div className="landing-wrap">
          <span>NOVA RETAIL</span>
          <span>KELO BAKERY</span>
          <span>BRIGHT DENTAL</span>
          <span>ATLAS LOGISTICS</span>
          <span>HAVEN CO-WORK</span>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="landing-section">
        <div className="landing-wrap">
          <div className="landing-sec-head">
            <p className="landing-eyebrow">How it works</p>
            <h2 className="landing-h2">From "it's broken" to booked, in one chat.</h2>
            <p className="landing-muted">
              Three steps, entirely handled by the assistant your customers already have —
              messaging.
            </p>
          </div>
          <div className="landing-steps">
            <div className="landing-step-card">
              <div className="landing-step-num">01 / Chat</div>
              <h3 className="landing-h3">Customer describes the problem</h3>
              <p>
                They message our AI chat assistant in plain language — no forms, no ticket numbers,
                no jargon required.
              </p>
            </div>
            <div className="landing-step-card">
              <div className="landing-step-num">02 / Plan</div>
              <h3 className="landing-h3">AI plans the visit</h3>
              <p>
                The assistant asks the right follow-up questions, picks a visit type, and hands
                off a structured task plan to the technician.
              </p>
            </div>
            <div className="landing-step-card">
              <div className="landing-step-num">03 / Confirm</div>
              <h3 className="landing-h3">Appointment booked by email</h3>
              <p>
                A confirmation email goes out immediately with the date, time, and what to expect —
                editable and approved by our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="landing-section">
        <div className="landing-wrap">
          <div className="landing-sec-head">
            <p className="landing-eyebrow">Inside the helpdesk</p>
            <h2 className="landing-h2">Built on the same dashboard our team uses.</h2>
            <p className="landing-muted">
              Every customer interaction runs through the tools our technicians see every day.
            </p>
          </div>
          <div className="landing-feat-grid">
            <FeatureCard
              icon={<MessageSquare size={18} />}
              title="AI chat assistant"
              description="Answers customer messages instantly, asks the right diagnostic questions, and hands off clean, structured requests."
            />
            <FeatureCard
              icon={<Bot size={18} />}
              title="AI task planner"
              description="Turns any job description into an ordered, editable checklist — so nothing gets missed on-site."
            />
            <FeatureCard
              icon={<CalendarDays size={18} />}
              title="Appointment booking"
              description="Customers book on-site, remote, or drop-off visits, with an editable confirmation email sent automatically."
            />
            <FeatureCard
              icon={<LayoutDashboard size={18} />}
              title="Live dashboard"
              description="Our team sees every appointment, ticket, and AI conversation in one place, updated in real time."
            />
            <FeatureCard
              icon={<Mail size={18} />}
              title="Email composer"
              description="Every follow-up, quote, and reminder is drafted by AI in the right tone, then reviewed before it's sent."
            />
            <FeatureCard
              icon={<FileText size={18} />}
              title="Meeting notes summarizer"
              description="Turns raw meeting notes into decisions, action items, and deadlines our team can act on immediately."
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="landing-section">
        <div className="landing-wrap">
          <div className="landing-sec-head">
            <p className="landing-eyebrow">What we fix</p>
            <h2 className="landing-h2">IT support built for businesses without an IT department.</h2>
          </div>
          <div className="landing-services">
            <ServiceCard
              num="01"
              icon={<Wifi size={18} />}
              title="Remote & on-site support"
              description="Troubleshooting, setup, and network fixes — priced per visit or bundled into a monthly plan."
            />
            <ServiceCard
              num="02"
              icon={<Monitor size={18} />}
              title="Device & software management"
              description="Keeping laptops, printers, and licenses patched, backed up, and running."
            />
            <ServiceCard
              num="03"
              icon={<Shield size={18} />}
              title="Basic cybersecurity"
              description="Antivirus setup, password managers, and phishing-awareness training for your team."
            />
            <ServiceCard
              num="04"
              icon={<Users size={18} />}
              title="New hire onboarding kits"
              description="Laptops arrive pre-configured with email, VPN, and software — ready on day one."
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="landing-section">
        <div className="landing-wrap">
          <div className="landing-sec-head">
            <p className="landing-eyebrow">Pricing</p>
            <h2 className="landing-h2">Simple plans, no lock-in.</h2>
            <p className="landing-muted">
              Pick a monthly retainer, or pay per callout — upgrade any time.
            </p>
          </div>
          <div className="landing-pricing-grid">
            <PricingCard
              name="Basic"
              price="R1,200"
              description="For businesses that need occasional support."
              features={[
                "2 support hours / month",
                "AI chat & email intake",
                "Business-hours response",
              ]}
            />
            <PricingCard
              name="Standard"
              price="R2,800"
              description="For teams that rely on IT daily."
              featured
              features={[
                "6 support hours / month",
                "AI chat, planner & email tools",
                "Priority same-day response",
                "Monthly device health check",
              ]}
            />
            <PricingCard
              name="Priority"
              price="R5,500"
              description="For businesses that can't afford downtime."
              features={[
                "Unlimited support hours",
                "Full AI helpdesk dashboard access",
                "< 1 hour response, any day",
                "Quarterly security review",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="landing-section" style={{ paddingTop: 0 }}>
        <div className="landing-wrap">
          <div className="landing-testimonial">
            <p>
              "We messaged Lelo's Creation about our WiFi at 8am and had a technician confirmed for
              that afternoon — no phone tag, no waiting on hold."
            </p>
            <div className="who">
              <strong>Sarah N.</strong> — Operations Manager, Nova Retail
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="landing-section" style={{ paddingTop: 0 }}>
        <div className="landing-wrap">
          <div className="landing-cta-band">
            <h2 className="landing-h2">Got an IT problem right now?</h2>
            <p>Message our assistant or email us — we'll get a technician booked in minutes.</p>
            <div className="landing-cta-actions">
              <a
                href="mailto:hello@lelocreations.co.za?subject=IT%20Support%20Request"
                className="landing-btn landing-btn-primary"
              >
                <Mail size={16} />
                Email us to book
              </a>
              <a
                href="mailto:hello@lelocreations.co.za?subject=IT%20Support%20Request&body=Hi%20Lelo's%20Creation%2C%0A%0AMy%20issue%20is%3A%20"
                className="landing-btn landing-btn-ghost"
              >
                <MessageSquare size={16} />
                Open chat assistant
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="landing-wrap">
          <div className="landing-foot-grid">
            <div className="landing-foot-brand">
              <Link to="/" className="landing-brand">
                <span className="landing-brand-box">LC</span>
                <span className="landing-brand-text">Lelo's Creation</span>
              </Link>
              <p>IT Helpdesk in a Box — AI-powered support and appointment booking for small businesses.</p>
            </div>
            <div className="landing-foot-col">
              <h4>Product</h4>
              <Link to="/#how-it-works">How it works</Link>
              <Link to="/#features">Features</Link>
              <Link to="/#pricing">Pricing</Link>
            </div>
            <div className="landing-foot-col">
              <h4>Company</h4>
              <Link to="/#services">Services</Link>
              <a href="mailto:hello@lelocreations.co.za">Contact</a>
            </div>
            <div className="landing-foot-col">
              <h4>Get in touch</h4>
              <a href="mailto:hello@lelocreations.co.za">hello@lelocreations.co.za</a>
              <a href="mailto:hello@lelocreations.co.za?subject=IT%20Support%20Request">Chat with us</a>
            </div>
          </div>
          <div className="landing-foot-bottom">
            <span>© {currentYear} Lelo's Creation. All rights reserved.</span>
            <span>Johannesburg, South Africa</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="landing-feat-card">
      <div className="landing-feat-icon">{icon}</div>
      <h3 className="landing-h3">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function ServiceCard({
  num,
  icon,
  title,
  description,
}: {
  num: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="landing-svc-row">
      <div className="landing-feat-icon">{icon}</div>
      <div>
        <div className="landing-svc-num">{num}</div>
        <h3 className="landing-h3">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function PricingCard({
  name,
  price,
  description,
  features,
  featured = false,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <div className={`landing-price-card ${featured ? "featured" : ""}`}>
      {featured && <span className="landing-price-tag">Most popular</span>}
      <div className="landing-price-name">{name}</div>
      <div className="landing-price-amount">
        {price} <span>/ mo</span>
      </div>
      <div className="landing-price-desc">{description}</div>
      <ul className="landing-price-list">
        {features.map((feature) => (
          <li key={feature}>
            <Check size={16} />
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={`mailto:hello@lelocreations.co.za?subject=Get%20started%20with%20${encodeURIComponent(name)}%20plan`}
        className="landing-btn landing-btn-primary w-full"
      >
        Get started
      </a>
    </div>
  );
}
