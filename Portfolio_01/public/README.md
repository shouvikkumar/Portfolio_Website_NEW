# Shouvik Kumar Maity | Developer Portfolio

A modern, high-impact portfolio website built with React, Vite, and Tailwind CSS to showcase engineering expertise, product thinking, and technical leadership. The project is designed with a cyber-inspired dark theme, glassmorphism layout, and polished interactive sections that highlight projects, skills, work experience, and contact information.

![React](https://img.shields.io/badge/React-19-61dafb)
![Vite](https://img.shields.io/badge/Vite-8-4f46e5)
![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8)
![License](https://img.shields.io/badge/Status-Portfolio%20Website-22c55e)

## Overview

This portfolio is a personal brand website for a full-stack software engineer focused on building scalable systems, resilient backend services, and user-centered frontend experiences. It presents:

- professional identity and personal bio
- technical skills in frontend, backend, databases, and cloud/devops
- featured project case studies
- experience timeline and engineering impact
- direct contact options and social profiles
- an interactive terminal-style interface for an immersive experience

The site is designed to feel premium and technical, and it is built to be easy to customize for any developer or engineering professional.

## Project Goals

The website aims to:

- present a strong digital-first personal brand
- increase recruiter and client engagement
- show technical depth through visual hierarchy and project storytelling
- create a memorable interactive experience using motion and UI polish
- provide a clean, responsive single-page portfolio for desktop and mobile users

## Features

### 1. Cyber-Glass Visual Design
- dark background with glowing neon accents
- glassmorphism cards and layered gradients
- clean typography and modern spacing
- subtle motion effects and hover states

### 2. Interactive Hero Section
- animated role rotation or dynamic title display
- prominent personal branding area
- CTA buttons for contact and portfolio browsing
- direct copy-to-clipboard email interaction

### 3. Skills Section
- categorized technology display
- frontend, backend, database, and cloud skill groups
- proficiency levels and highlighted specialties
- clean card-based UI for scanning technical capabilities

### 4. Featured Projects Showcase
- project cards with short summaries and tags
- project category filters
- technology stack display per project
- modal-based architecture details for deeper context

### 5. Experience Timeline
- structured career/history overview
- role progression and highlights
- metrics and accomplishments representation

### 6. Interactive Terminal
- faux command-line interface embedded in the app
- commands such as help, about, skills, projects, stats, contact, hire, and clear
- terminal toggled via floating action button and nav trigger

### 7. Contact Section
- direct email copy support
- contact form validation
- social links integration
- confetti celebration effect on successful form submission

### 8. Responsive Layout
- mobile-friendly design
- sticky navigation and responsive hero layout
- optimized single-page structure for smooth presentation

## Tech Stack

### Frontend
- React 19
- Vite 8
- Tailwind CSS 3
- PostCSS
- Lucide React icons

### Additional Libraries
- canvas-confetti for interactive success animations

### Build and Tooling
- npm package scripts
- Vite development server and production build
- Oxlint for linting

## Project Structure

```bash
Portfolio 1/
├── README.md
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── public/
├── dist/
└── src/
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── App.css
    ├── components/
    │   ├── About.jsx
    │   ├── Contact.jsx
    │   ├── Experience.jsx
    │   ├── Footer.jsx
    │   ├── Hero.jsx
    │   ├── Icons.jsx
    │   ├── InteractiveTerminal.jsx
    │   ├── Navbar.jsx
    │   ├── ProjectModal.jsx
    │   ├── Projects.jsx
    │   └── Skills.jsx
    └── data/
        └── portfolioData.js
```

## Important Files

### src/data/portfolioData.js
This is the main content source for the portfolio. It stores:

- personal info
- professional title and bio
- social links
- skills data
- project cards
- experience entries
- interactive terminal command responses

This file is the easiest place to update content without editing the layout code.

### src/App.jsx
Defines the main page layout and orchestrates section rendering, terminal modal behavior, and the floating terminal button.

### src/components/
These components implement the different sections of the portfolio, including navigation, hero, projects, skills, experience, footer, and contact interaction.

## Local Setup

### Prerequisites
- Node.js 18 or later
- npm 9 or later

### Installation

```bash
# from the project root
npm install
```

### Run in Development Mode

```bash
npm run dev
```

Then open the local URL shown in the terminal, typically:

```bash
http://localhost:5173
```

### Production Build

```bash
npm run build
```

This generates static assets inside the `dist/` folder ready for deployment.

### Preview Production Build

```bash
npm run preview
```

## Customize the Portfolio

Edit the content in [src/data/portfolioData.js](src/data/portfolioData.js) to personalize the site:

1. Update profile information
   - name
   - title
   - email
   - location
   - GitHub and LinkedIn links
   - tagline and bio

2. Update skills
   - skill categories
   - item names
   - experience level
   - highlight flags

3. Update project entries
   - titles
   - tags
   - summaries
   - project metrics
   - technology stacks
   - demo and repository links

4. Update timeline/work experience
   - company names
   - dates
   - responsibilities
   - achievements

5. Modify terminal outputs
   - change help content
   - define command responses for about, skills, projects, stats, and hire

## Deployment

### Vercel
1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Vercel should detect the Vite app automatically.
4. Set build command to:

```bash
npm run build
```

5. Set output directory to:

```bash
dist
```

### Netlify
1. Drag and drop the `dist` folder to Netlify, or connect the GitHub repo.
2. Set build command:

```bash
npm run build
```

3. Set publish directory:

```bash
dist
```

### GitHub Pages
This can also be adapted for static hosting, though Vercel or Netlify are usually easier for Vite apps.

## Contact

For professional inquiries, opportunities, or collaborations:

- Email: shouvik4611@gamil.com
- GitHub: https://github.com/shouvikkumar
- LinkedIn: https://www.linkedin.com/in/shouvik-kumar-maity-050844364
- Location: Tamluk, West Bengal, India

## Notes

This portfolio is intended to be a personal brand site for a software engineer, but it is also easy to adapt for:

- freelancers
- startup founders
- product engineers
- full-stack developers
- cloud-focused engineers
- technical consultants

It functions as a visually polished and technically credible landing page for showcasing expertise and attracting professional opportunities.

## License

This project is a personal portfolio website and is intended for educational, portfolio, or professional use. If you plan to reuse or adapt it, ensure you replace personal information, branding, and project references with your own content before publishing.

## Summary

This portfolio combines modern UI/UX styling with practical career storytelling, making it suitable for technical professionals who want to stand out online. It is a flexible, responsive, and elegant web presence with a strong engineering aesthetic and a high degree of customizability.
