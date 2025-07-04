# Project Configuration for AI Agents

## Framework
- **Next.js 15+** with App Router
- **TypeScript**
- **Static Site Generation (SSG)** and **Client-Side Rendering (CSR)** only. output: 'export' configuration in next.config.ts

## UI Libraries
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** components (configured via `components.json`) with icons from lucide-react

## Project Structure
- App Router (`src/app/`)
- Components (`src/components/`)
- Utilities (`src/lib/utils.ts` - includes `cn()` function)

## Development
- `npm run serve-static` / `npm