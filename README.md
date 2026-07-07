# Arthur Viegas — Portfolio

Personal portfolio website built with React and Vite, deployed on Netlify.

**Live:** https://arthurviegas.netlify.app

---

## Stack

- **React 18** — UI
- **Vite 8** — build tool
- **EmailJS** — contact form
- **Swiper** — testimonials carousel
- **Boxicons / Unicons** — icons
- **CSS custom properties** — theming (light/dark mode)

## Features

- Bilingual (PT-BR / EN) via context-based i18n
- Responsive design
- Dark/light theme toggle
- Sections: Home, About, Skills, Work, Case Studies, Services, Qualification, Contact

## Local setup

```bash
npm install
cp .env.example .env.local   # fill in your EmailJS keys
npm run dev
```

Open http://localhost:5173

## Environment variables

| Variable | Description |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |
| `VITE_STUDIO_HASH` | Optional. SHA-256 of the Studio passphrase; overrides the built-in default |

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build locally |

## Security

A static React SPA with no backend: the only runtime network call is the EmailJS POST from the contact form. The hardening focuses on that endpoint, hosting headers, and defence in depth.

- **Contact form abuse.** The form has a hidden honeypot field plus a minimum time-to-submit check, so scripted submissions are dropped client-side before hitting the EmailJS quota. The EmailJS public key is public by design (the recipient is fixed in the template); domain allowlist and reCAPTCHA should also be enabled in the EmailJS dashboard.
- **Security headers.** `netlify.toml` sets a Content-Security-Policy (`default-src 'self'`, with the icon CDNs and `api.emailjs.com` allowlisted), `X-Frame-Options: DENY`, `frame-ancestors 'none'`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`, and HSTS.
- **Studio gate.** The `/studio` CV generator sits behind a client-side passphrase gate. It is a privacy barrier, not authentication (the CV data is already in the public bundle): the passphrase hash carries no cleartext in the source and is overridable via `VITE_STUDIO_HASH`.
- **Secrets and rendering.** EmailJS IDs are read from environment variables (not hardcoded); `.gitignore` covers every `.env` variant except `.env.example`; rendering is through escaped JSX with no `dangerouslySetInnerHTML`, and every external link uses `rel="noreferrer"`.

The icon stylesheets are still loaded from CDNs (allowlisted in the CSP); adding Subresource Integrity or self-hosting them is a further hardening step.

## Deploy

Deployed automatically via Netlify on push to `main`. Build config is in [`netlify.toml`](netlify.toml).
