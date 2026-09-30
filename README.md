# Touch of Saien

A custom editorial website for Touch of Saien, Family Salon & Academy, Barrackpore. Built with Next.js, React, TypeScript, Motion, self-hosted fonts and responsive local media. The project exports static pages and can run on a Node.js host or a static hosting service.

## Run locally

Use a current supported Node.js LTS release. Install dependencies with npm:

```sh
npm install
npm run dev
```

The development website is available at `http://localhost:3000`. Development output is isolated in `.next-dev` so a production build can run alongside the development server.

## Build and preview the production website

```sh
npm run typecheck
npm test
npm run build
npm start
```

`npm run build` writes the complete static website to `.next-production/` for this project. `npm start` serves that fresh production export using the included Node.js server, with media byte-range support for video seeking. If `.next-production/` is missing, `npm start` builds the site first. It uses `process.env.PORT || 3000`. To run the production preview on port 3001 in PowerShell:

```powershell
$env:PORT = '3001'
npm start
```

Rebuild after changing source files, content or the site URL. The production server serves the latest files in `.next-production/`; it does not compile source changes.

## Pages and features

| Route | Content |
| --- | --- |
| `/` | Supplied hero banner, brand story, interactive services, transformation section, gallery, unisex editorial, experience, academy, reviews and booking |
| `/services/` | Service details, direct enquiries and frequently asked questions |
| `/the-edit/` | Photo and video gallery with category and format filters |
| `/academy/` | Hair, makeup, skin and nail training enquiries |
| `/our-story/` | Brand and salon experience |
| `/visit/` | Appointment request, contact details, directions and embedded map |
| `/privacy/` | Privacy and appointment information |

The media viewer supports photos and portrait films, previous/next navigation, keyboard controls, mobile swiping, playback, seeking, sound controls and supported-browser fullscreen. Full films are loaded when selected. Short silent previews are separate, lightweight files. Motion respects the visitor's reduced-motion preference.

The booking form validates the request, shows a review step and composes a WhatsApp message addressed to **+91 62919 49526**. The visitor sends the message in WhatsApp, and the salon confirms the appointment personally. This static website does not store appointment details or reserve calendar slots.

## Edit content

- `lib/site.ts`: business information, contact links, service copy and social profiles.
- `lib/work-videos.json`: the 16 supplied work films, titles, categories, posters and audio flags.
- `lib/media.ts`: salon photography, two photo films, the `workPhotos` collection and genuine before/after pairs.
- `components/Reviews.tsx`: the six user-supplied sample testimonials and their visible sample labels.
- `public/media/`: local images, original-stream work films, lightweight previews, logo and favicon.
- `app/saien-final.css`: typography, colour, composition and responsive styles.

### Work photos and transformation pairs

The user has not yet supplied separate work photographs or verified before/after pairs. The gallery currently includes real salon films and supplied interior images. `workPhotos` and `transformations` are intentionally empty collections, ready to receive those assets. The comparison section uses a clearly labelled salon-interior comparison; it does not claim those photographs are client results.

To add a work photograph, place responsive WebP versions in `public/media/` using the existing `name-640.webp`, `name-1200.webp`, `name-1920.webp` pattern. Add a `Media` entry to `workPhotos` with a unique `id`, `type: 'photo'`, the image basename, an accurate title, description and tags. Do not upscale a small source merely to match the filename suffix.

Add only matching, genuine client before/after photographs to `transformations`, using the exported `Transformation` type. Keep labels and service categories accurate.

### Reviews, hours and profiles

The six testimonials are **sample copy supplied by the user**, visibly marked as design-preview samples. They are not verified customer reviews and are not included as review or rating schema. Replace them with approved genuine reviews before presenting them as customer feedback.

Only Saturday hours were confirmed from the supplied Google Maps listing: **10:30 am–9:30 pm**. The site links to Maps for current opening hours. The displayed Saturday hours currently appear in `components/Footer.tsx` and `app/layout.tsx`; update both if they change. No social profile URL has been invented: add confirmed profiles to `site.socials`.

## Production domain and deployment

Copy `.env.example` to `.env.local` and set the final public HTTPS origin before building:

```dotenv
NEXT_PUBLIC_SITE_URL=https://your-final-domain.example
```

This value controls absolute SEO URLs, including the sitemap and social metadata. Without it, the project intentionally uses the local development origin. Metadata, canonical links, a sitemap, robots output, social preview imagery and HairSalon structured data are included.

For Vercel, import the project, select the Next.js preset, set `NEXT_PUBLIC_SITE_URL`, and use `npm run build`. For another static host, deploy the generated static export from `.next-production/` and preserve directory `index.html` routing and `404.html`. For a Node.js host, install dependencies with `npm install`, then run `npm start`, setting `PORT` as required by the host. The static export does not use `next start`.

Keep the supplied MP4s available with the `video/mp4` content type and byte-range requests enabled. The original films are intentionally preserved at source quality and make up most of the site's media size. For larger traffic, the same files can be served from a CDN; update their `src` and `preview` values in the media catalogue accordingly.

## Validation

`npm run typecheck` checks TypeScript. `npm test` runs the booking-validation and message-composition tests. `npm run build` verifies static page generation. Browser checks should additionally cover responsive layouts, navigation, gallery filters, each film's playback and sound, viewer controls, keyboard focus, booking review and outgoing contact links. Automated booking tests do not certify every browser interaction or every mobile device.

See [ASSET-SOURCES.md](ASSET-SOURCES.md) for asset provenance, media quality and audio details.
