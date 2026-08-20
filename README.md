# Helpdesk Assistant

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Lelo's Creation — IT Helpdesk in a Box</title>
<style>
  :root {
    --bg: #0B0F17;
    --surface: #111726;
    --surface-2: #182036;
    --border: #263252;
    --text: #EAF0FB;
    --muted: #8494B3;
    --accent: #4FD1C5;
    --accent-soft: rgba(79,209,197,0.12);
    --amber: #F2B94D;
    --radius: 14px;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.5;
  }
  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; display: block; }
  button { font-family: inherit; cursor: pointer; }
  .wrap { max-width: 1120px; margin: 0 auto; padding: 0 24px; }
  section { padding: 90px 0; }
  h1, h2, h3 { font-weight: 800; letter-spacing: -0.02em; }
  .eyebrow { font-size: 12px; text-transform: uppercase; letter-spacing: 0.12em; color: var(--accent); font-weight: 700; margin-bottom: 12px; display: flex; align-items: center; gap: 8px; }
  .eyebrow::before { content: ''; width: 16px; height: 1px; background: var(--accent); }
  .muted { color: var(--muted); }
  .btn { display: inline-flex; align-items: center; gap: 8px; padding: 13px 22px; border-radius: 10px; font-size: 14px; font-weight: 700; border: none; }
  .btn-accent { background: var(--accent); color: #06201C; }
  .btn-accent:hover { opacity: 0.9; }
  .btn-ghost { background: transparent; border: 1px solid var(--border); color: var(--text); }
  .btn-ghost:hover { border-color: var(--muted); }

  /* ---------- Header ---------- */
  header {
    position: sticky; top: 0; z-index: 50;
    background: rgba(11,15,23,0.85); backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border);
  }
  .nav { display: flex; align-items: center; justify-content: space-between; padding: 16px 24px; max-width: 1120px; margin: 0 auto; }
  .nav-brand { display: flex; align-items: center; gap: 10px; }
  .nav-brand .box { width: 32px; height: 32px; border-radius: 8px; background: linear-gradient(135deg, var(--accent), #2C8C82); display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 14px; color: #06201C; }
  .nav-brand-text { font-weight: 800; font-size: 15px; letter-spacing: -0.01em; }
  .nav-brand-text span { display: block; font-size: 10px; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; }
  .nav-links { display: flex; align-items: center; gap: 28px; font-size: 13.5px; font-weight: 600; color: var(--muted); }
  .nav-links a:hover { color: var(--text); }
  .nav-cta { display: flex; align-items: center; gap: 10px; }
  .nav-toggle { display: none; background: var(--surface-2); border: 1px solid var(--border); border-radius: 8px; width: 36px; height: 36px; align-items: center; justify-content: center; }
  .mobile-menu { display: none; flex-direction: column; gap: 4px; padding: 12px 24px 18px; border-top: 1px solid var(--border); }
  .mobile-menu a { padding: 10px 4px; font-size: 14px; font-weight: 600; color: var(--muted); border-bottom: 1px solid var(--border); }
  .mobile-menu.open { display: flex; }

  /* ---------- Hero ---------- */
  .hero { padding: 100px 0 80px; position: relative; overflow: hidden; }
  .hero::before {
    content: ''; position: absolute; top: -200px; right: -150px; width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(79,209,197,0.16), transparent 70%); pointer-events: none;
  }
  .hero-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 50px; align-items: center; position: relative; }
  .hero h1 { font-size: 46px; line-height: 1.08; margin-bottom: 18px; }
  .hero h1 .accent-text { color: var(--accent); }
  .hero p.lead { font-size: 16.5px; color: var(--muted); max-width: 480px; margin-bottom: 30px; }
  .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 34px; }
  .hero-trust { display: flex; gap: 26px; flex-wrap: wrap; }
  .hero-trust div { }
  .hero-trust .num { font-size: 21px; font-weight: 800; }
  .hero-trust .lab { font-size: 11.5px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.05em; }

  /* Hero mock panel */
  .mock { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 18px; box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6); }
  .mock-head { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; }
  .mock-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--border); }
  .mock-title { font-size: 11.5px; color: var(--muted); margin-left: 6px; font-family: 'JetBrains Mono', monospace; }
  .mock-chat { display: flex; flex-direction: column; gap: 9px; }
  .mock-bubble { max-width: 80%; padding: 9px 13px; border-radius: 12px; font-size: 12.5px; line-height: 1.45; }
  .mock-bubble.user { align-self: flex-end; background: var(--accent); color: #06201C; border-bottom-right-radius: 3px; }
  .mock-bubble.ai { align-self: flex-start; background: var(--surface-2); border: 1px solid var(--border); border-bottom-left-radius: 3px; }
  .mock-status { margin-top: 14px; display: flex; align-items: center; gap: 7px; font-size: 11px; color: var(--accent); }
  .mock-status .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); animation: pulse 1.8s infinite ease-in-out; }
  @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:.4; } }

  /* ---------- Logos / trust bar ---------- */
  .logos { border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 26px 0; }
  .logos .wrap { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px; }
  .logos span { font-size: 12.5px; color: var(--muted); font-weight: 600; letter-spacing: 0.02em; }

  /* ---------- Section headers ---------- */
  .sec-head { max-width: 560px; margin-bottom: 46px; }
  .sec-head h2 { font-size: 32px; margin-bottom: 12px; }

  /* ---------- How it works ---------- */
  .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .step-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 26px 22px; position: relative; }
  .step-num { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--accent); margin-bottom: 16px; }
  .step-card h3 { font-size: 17px; margin-bottom: 8px; }
  .step-card p { font-size: 13.5px; color: var(--muted); }
  .step-arrow { display: none; }

  /* ---------- Features ---------- */
  .feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
  .feat-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 24px; }
  .feat-icon { width: 38px; height: 38px; border-radius: 10px; background: var(--accent-soft); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; color: var(--accent); }
  .feat-card h3 { font-size: 15.5px; margin-bottom: 7px; }
  .feat-card p { font-size: 13px; color: var(--muted); }

  /* ---------- Services ---------- */
  .services { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
  .svc-row { display: flex; gap: 16px; align-items: flex-start; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 20px; }
  .svc-num { font-family: 'JetBrains Mono', monospace; font-size: 13px; color: var(--accent); flex-shrink: 0; padding-top: 2px; }
  .svc-row h3 { font-size: 15px; margin-bottom: 5px; }
  .svc-row p { font-size: 12.5px; color: var(--muted); }

  /* ---------- Pricing ---------- */
  .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; align-items: stretch; }
  .price-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 26px 22px; display: flex; flex-direction: column; }
  .price-card.featured { border-color: var(--accent); background: linear-gradient(180deg, rgba(79,209,197,0.06), transparent 40%); position: relative; }
  .price-tag { position: absolute; top: -12px; right: 20px; background: var(--accent); color: #06201C; font-size: 10.5px; font-weight: 800; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.04em; }
  .price-name { font-size: 14px; color: var(--muted); font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 10px; }
  .price-amount { font-size: 32px; font-weight: 800; margin-bottom: 4px; }
  .price-amount span { font-size: 13px; color: var(--muted); font-weight: 500; }
  .price-desc { font-size: 12.5px; color: var(--muted); margin-bottom: 20px; }
  .price-list { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px; flex: 1; }
  .price-list li { font-size: 13px; display: flex; gap: 9px; align-items: flex-start; }
  .price-list li::before { content: '✓'; color: var(--accent); font-weight: 800; flex-shrink: 0; }

  /* ---------- Testimonial ---------- */
  .testimonial { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 42px; text-align: center; }
  .testimonial p { font-size: 20px; font-weight: 600; max-width: 680px; margin: 0 auto 20px; line-height: 1.45; }
  .testimonial .who { font-size: 13px; color: var(--muted); }
  .testimonial .who strong { color: var(--text); }

  /* ---------- CTA ---------- */
  .cta-band { background: linear-gradient(135deg, var(--surface-2), var(--surface)); border: 1px solid var(--border); border-radius: var(--radius); padding: 50px 40px; text-align: center; }
  .cta-band h2 { font-size: 28px; margin-bottom: 10px; }
  .cta-band p { color: var(--muted); margin-bottom: 26px; }
  .cta-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

  /* ---------- Footer ---------- */
  footer { border-top: 1px solid var(--border); padding: 44px 0 30px; }
  .foot-grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 30px; margin-bottom: 34px; }
  .foot-brand .nav-brand { margin-bottom: 12px; }
  .foot-brand p { font-size: 13px; color: var(--muted); max-width: 260px; }
  .foot-col h4 { font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--muted); margin-bottom: 12px; }
  .foot-col a { display: block; font-size: 13.5px; color: var(--text); margin-bottom: 9px; }
  .foot-col a:hover { color: var(--accent); }
  .foot-bottom { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border); padding-top: 20px; font-size: 12px; color: var(--muted); flex-wrap: wrap; gap: 10px; }

  /* ---------- Responsive ---------- */
  @media (max-width: 900px) {
    .hero-grid { grid-template-columns: 1fr; }
    .steps { grid-template-columns: 1fr; }
    .feat-grid { grid-template-columns: 1fr 1fr; }
    .services { grid-template-columns: 1fr; }
    .pricing-grid { grid-template-columns: 1fr; }
    .foot-grid { grid-template-columns: 1fr 1fr; }
    .nav-links { display: none; }
    .nav-cta .btn-ghost { display: none; }
    .nav-toggle { display: flex; }
  }
  @media (max-width: 600px) {
    section { padding: 60px 0; }
    .hero h1 { font-size: 32px; }
    .feat-grid { grid-template-columns: 1fr; }
    .foot-grid { grid-template-columns: 1fr; }
    .hero-trust { gap: 18px; }
    .cta-band { padding: 34px 20px; }
    .testimonial { padding: 28px 20px; }
    .testimonial p { font-size: 17px; }
  }
  @media (prefers-reduced-motion: reduce) {
    * { animation-duration: 0.001ms !important; scroll-behavior: auto !important; }
  }
  a:focus-visible, button:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }







    
      

LC


      

Lelo's CreationIT Helpdesk in a Box


    
    
      How it works
      Features
      Services
      Pricing
    
    


      See pricing
      Book an appointment
      
        
      
    


    How it works
    Features
    Services
    Pricing
    Book an appointment






    


      


        

IT support for small business


        

IT support that answers on the first message.


        

Lelo's Creation gives your business a dedicated helpdesk — customers text or email us, our AI assistant triages the issue and books the right appointment, and a real technician follows up. No hold music, no ticket portals.


        


          Book an appointment
          See how it works
        


        


          

2 min

Avg. response time


          

24/7

AI intake


          

100%

Local & hands-on


        


      


      


        

lelo-assistant.chat


        


          

Hi, our office WiFi keeps dropping


          

Sorry to hear that! Is this happening all day or at certain times? And would you prefer an on-site visit or remote diagnosis?


          

Mostly afternoons. On-site would be best


          

Got it — I can get a technician out tomorrow at 2:00 PM. Confirming your details now.


        


        

Appointment booked · confirmation sent


      


    



  


    


      NOVA RETAIL
      KELO BAKERY
      BRIGHT DENTAL
      ATLAS LOGISTICS
      HAVEN CO-WORK
    



  


    


      


        

How it works


        

From "it's broken" to booked, in one chat.


        

Three steps, entirely handled by the assistant your customers already have — messaging.


      


      


        


          

01 / Chat


          

Customer describes the problem


          

They message our AI chat assistant in plain language — no forms, no ticket numbers, no jargon required.


        


        


          

02 / Plan


          

AI plans the visit


          

The assistant asks the right follow-up questions, picks a visit type, and hands off a structured task plan to the technician.


        


        


          

03 / Confirm


          

Appointment booked by email


          

A confirmation email goes out immediately with the date, time, and what to expect — editable and approved by our team.


        


      


    



  


    


      


        

Inside the helpdesk


        

Built on the same dashboard our team uses.


        

Every customer interaction runs through the tools our technicians see every day.


      


      


        


          


          

AI chat assistant


          

Answers customer messages instantly, asks the right diagnostic questions, and hands off clean, structured requests.


        


        


          


          

AI task planner


          

Turns any job description into an ordered, editable checklist — so nothing gets missed on-site.


        


        


          


          

Appointment booking


          

Customers book on-site, remote, or drop-off visits, with an editable confirmation email sent automatically.


        


        


          


          

Live dashboard


          

Our team sees every appointment, ticket, and AI conversation in one place, updated in real time.


        


        


          


          

Email composer


          

Every follow-up, quote, and reminder is drafted by AI in the right tone, then reviewed before it's sent.


        


        


          


          

Meeting notes summarizer


          

Turns raw meeting notes into decisions, action items, and deadlines our team can act on immediately.


        


      


    



  


    


      


        

What we fix


        

IT support built for businesses without an IT department.


      


      


        

01

Remote & on-site support

Troubleshooting, setup, and network fixes — priced per visit or bundled into a monthly plan.


        

02

Device & software management

Keeping laptops, printers, and licenses patched, backed up, and running.


        

03

Basic cybersecurity

Antivirus setup, password managers, and phishing-awareness training for your team.


        

04

New hire onboarding kits

Laptops arrive pre-configured with email, VPN, and software — ready on day one.


      


    



  


    


      


        

Pricing


        

Simple plans, no lock-in.


        

Pick a monthly retainer, or pay per callout — upgrade any time.


      


      


        


          

Basic


          

R1,200 / mo


          

For businesses that need occasional support.


          


            

2 support hours / month


            

AI chat & email intake


            

Business-hours response


          


          Get started
        


        


          

Most popular


          

Standard


          

R2,800 / mo


          

For teams that rely on IT daily.


          


            

6 support hours / month


            

AI chat, planner & email tools


            

Priority same-day response


            

Monthly device health check


          


          Get started
        


        


          

Priority


          

R5,500 / mo


          

For businesses that can't afford downtime.


          


            

Unlimited support hours


            

Full AI helpdesk dashboard access


            

< 1 hour response, any day


            

Quarterly security review


          


          Get started
        


      


    



  


    


      


        

"We messaged Lelo's Creation about our WiFi at 8am and had a technician confirmed for that afternoon — no phone tag, no waiting on hold."


        

Sarah N. — Operations Manager, Nova Retail


      


    



  


    


      


        

Got an IT problem right now?


        

Message our assistant or email us — we'll get a technician booked in minutes.


        


          @lelocreations.co.za?subject=IT%20Support%20Request" class="btn btn-accent">Email us to book
          Open chat assistant
        
      
    
  





    


      


        
          

LC


          

Lelo's Creation


        
        

IT Helpdesk in a Box — AI-powered support and appointment booking for small businesses.


      


      


        

Product


        How it works
        Features
        Pricing
      


      


        

Company


        Services
        Contact
      


      


        

Get in touch


        @lelocreations.co.za">hello@lelocreations.co.za</a>
        Chat with us
      
    
    


      © 2026 Lelo's Creation. All rights reserved.
      Johannesburg, South Africa

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://leloscreationbox.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/29f24281-524d-4b94-adf5-e09fda750b64).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
