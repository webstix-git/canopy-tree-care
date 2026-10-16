# Canopy Tree Care

Marketing site for Canopy Tree Care, LLC: tree care in Madison, WI and Dane County, led by an ISA Certified Arborist.

Built with Next.js 16 (App Router, Cache Components), React 19, Tailwind CSS v4, and `lucide-react` icons.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/layout.tsx`: fonts (Fraunces + Plus Jakarta Sans), metadata, header, footer, mobile call bar
- `src/app/page.tsx`: homepage composition and LocalBusiness JSON-LD
- `src/app/globals.css`: design tokens (forest / leaf / cream / sun palette) and base styles
- `src/components/`: shared UI (`Header`, `Footer`, `Logo`, `ArboristBadge`, `MobileCallBar`)
- `src/components/home/`: homepage sections
- `src/lib/site.ts`: business details, navigation, and service list

## Before launch

- **Testimonials**: `src/components/home/Testimonials.tsx` contains placeholder reviews. Replace them with real customer testimonials.
- **Estimate form**: `src/components/home/EstimateForm.tsx` shows a success state but does not send data yet. Connect it to email, a CRM, or a Server Action.
- **Photography**: the images in `src/assets/images` are placeholders. Swap in Canopy's own job-site photos where possible.
- **Inner pages**: navigation links point to `/services`, `/about`, `/gallery`, `/testimonials`, `/blog`, and `/contact`, which are not built yet.

## Placeholder photo credits

| File | Source | License |
| --- | --- | --- |
| `hero-arborist-climbing.jpg` | [Tree Climbing Arborist](https://commons.wikimedia.org/wiki/File:Tree_Climbing_Arborist.jpg), Wikimedia Commons | CC BY-SA |
| `arborist-at-work.jpg` | [Stephane Climbing](https://commons.wikimedia.org/wiki/File:Stephane_Climbing.jpg), Wikimedia Commons | CC BY-SA |
| `service-pruning.jpg` | [Tree Pruning](https://commons.wikimedia.org/wiki/File:Tree_Pruning.jpg), Wikimedia Commons | CC BY-SA |
| `service-removal.jpg` | [Crane-Action](https://commons.wikimedia.org/wiki/File:Crane-Action.jpg), Wikimedia Commons | CC BY-SA |
| `service-stump-grinding.jpg` | [Stump grinder](https://commons.wikimedia.org/wiki/File:Stump_grinder.jpg), Wikimedia Commons | CC0 |
| `service-plant-health.jpg` | Rawpixel, via Openverse | CC0 |
| `canopy-autumn.jpg` | StockSnap, via Openverse | CC0 |
| `canopy-looking-up.jpg` | WordPress Photo Directory, via Openverse | CC0 |

CC BY-SA images require visible attribution if used in production; replacing them with original photos avoids this.
