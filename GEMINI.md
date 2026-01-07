# Project: Personal Branding Website

This project is a personal portfolio and blog for an IT specialist, built with Next.js.

## Project Overview

The goal of this project is to create a professional, high-performance, and easily maintainable personal website. It serves as an online resume, project portfolio, and blog.

The project is divided into two main parts:
- **`client/`**: A Next.js application that constitutes the actual website.
- **`docs/`**: Documentation files including the technical specification, architecture proposal, and marketing ideas.

### Key Technologies
- **Framework**: Next.js (with React)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Managed via Markdown/MDX files within the repository.
- **Deployment**: Vercel

### Architecture
The site uses a Jamstack architecture, with pages being pre-rendered as static HTML (Static Site Generation - SSG) for optimal performance and SEO. The main part of the site is a single-page application, with a separate section for the blog.

## Building and Running the Project

The client application is located in the `client/` directory.

### Running in Development Mode
To run the website locally in development mode:

```bash
cd client
npm install
npm run dev
```
The site will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production
To create a production-ready build:

```bash
cd client
npm run build
```

### Starting the Production Server
To run the production server locally:

```bash
cd client
npm run start
```

## Development Conventions

### Content Management
All content, including blog posts, project descriptions, and personal information, is intended to be managed using Markdown (`.md` or `.mdx`) files stored directly in the project's Git repository. This allows for version control of content and a developer-centric workflow.

### Code Style
The project uses ESLint for code linting. To check for style issues, run:

```bash
cd client
npm run lint
```

### Key Files
- `client/src/app/page.tsx`: The main entry point for the single-page layout.
- `client/src/app/blog/page.tsx`: The main page for the blog, listing all articles.
- `client/public/`: Contains static assets like images and SVGs.
- `docs/technical-specification.md`: The primary technical requirements document.
- `docs/architecture-proposal.md`: Outlines the architectural decisions for the project.
