# Asset sources and media notes

## Supplied brand and salon images

The displayed brand banner, logo and salon interiors were supplied by the user. They have not been independently authenticated as photography. Descriptions identify them as supplied salon images rather than verified client transformations.

| Website basename | User-supplied source |
| --- | --- |
| `brand-banner` | `C:/Users/ME/Pictures/Touch Of Saien/Hero Banner` |
| `official-logo` | `C:/Users/ME/Pictures/Touch Of Saien/Logo` |
| `original-mark` | Exact monogram crop from the supplied `Logo`; proportions retained |
| `favicon.png` | Resized crop from the same supplied original mark |
| `reception` | `ChatGPT Image 26 Sept 2026, 11_58_21.png` |
| `salon` | `ChatGPT Image 26 Sept 2026, 11_59_20.png` |
| `lounge` | `ChatGPT Image 26 Sept 2026, 11_59_35.png` |
| `atelier` | `ChatGPT Image 26 Sept 2026, 11_59_46.png` |
| `entrance` | `C:/Users/ME/Pictures/Touch Of Saien/entarence photo` |
| `stations` | `C:/Users/ME/AppData/Local/Temp/codex-clipboard-2d280c28-f471-4cf1-8beb-918065e75c13.png` |

The four named PNGs above came from `C:/Users/ME/Pictures/Touch Of Saien/`. Responsive WebP copies live in `public/media/`. Image variants are reduced as appropriate without enlarging the original source. The complete supplied hero composition is used on the homepage. The TS logo has not been redesigned or recreated.

## Supplied work films

All 16 work films came from the user's explicitly supplied MP4 files in `C:/Users/ME/Downloads/`, in the order shown below. Website filenames were simplified to `work-01.mp4` through `work-16.mp4`. Titles are editorial descriptions based on the supplied footage.

The full films retain their original **720 × 1280 portrait H.264 video streams**. Their existing audio streams were also copied. MP4 containers were remuxed with fast-start metadata for web delivery; the full video and audio streams were **not re-encoded**, so this step introduced no generational compression loss. These are source-resolution HD films, not native 4K files.

| File | Gallery title | Approx. duration | Source audio |
| --- | --- | ---: | --- |
| `work-01.mp4` | The smooth-hair story | 42.47 s | Preserved |
| `work-02.mp4` | A fresh colour perspective | 10.96 s | Preserved |
| `work-03.mp4` | Let's talk hair care | 58.12 s | Preserved |
| `work-04.mp4` | The pedicure pause | 32.25 s | Preserved |
| `work-05.mp4` | In the stylist's chair | 11.89 s | Preserved |
| `work-06.mp4` | The grooming ritual | 89.35 s | Preserved |
| `work-07.mp4` | Colour, in every movement | 33.78 s | Preserved |
| `work-08.mp4` | A new shape, a new feeling | 105.44 s | Preserved |
| `work-09.mp4` | Saien, at work | 34.83 s | **Original source is silent** |
| `work-10.mp4` | A little care, all around | 90.72 s | Preserved |
| `work-11.mp4` | Every texture has a story | 99.89 s | Preserved |
| `work-12.mp4` | Time to unwind | 15.86 s | Preserved |
| `work-13.mp4` | A beautifully smooth finish | 18.32 s | Preserved |
| `work-14.mp4` | Good grooming, great energy | 40.75 s | Preserved |
| `work-15.mp4` | Your signature cut | 68.33 s | Preserved |
| `work-16.mp4` | The sleek-hair edit | 105.97 s | Preserved |

The gallery posters are frames extracted from these films. Each `work-XX-preview.mp4` is a separate short, silent, compressed preview for lightweight gallery interaction. Preview quality does not determine the full-screen film's quality. The viewer loads the original-stream full film.

No music has been added to `work-09.mp4`. The interface identifies silent sources. Existing source audio is retained as supplied; browser autoplay policies may require an explicit play action.

## Salon photo films

- `saien-space.mp4`: an approximately 18-second silent moving photo story, composed from supplied salon interior images.
- `saien-details.mp4`: an approximately 12-second silent moving photo story, composed from supplied salon interior images.

These are identified as photo stories, not newly recorded salon footage. Together with the 16 supplied work films, the catalogue contains 18 video items.

## Work photos and testimonials

Separate client work photos and genuine before/after photo pairs have not yet been supplied. The `workPhotos` and `transformations` collections are ready for those additions. The current before/after-style interaction is expressly labelled as an interior comparison, not a client result.

The six displayed testimonial texts came from the user's pasted business-details document and are visibly labelled **sample testimonials**. No customer identities, verification status, ratings or review counts were fabricated.

## Fonts and icon library

- Cormorant Garamond and Manrope are self-hosted through their Fontsource packages. Their bundled licence files remain with the installed packages.
- Interface icons use Lucide React, installed as a project dependency.

## Unused reference assets

Two Pexels reference images were acquired during the earlier design pass and may remain in `public/media/` as `editorial-men.webp` and `editorial-women.webp`. The live unisex editorial uses frames from the supplied salon films instead.

- Pexels image 3998397, cottonbro studio: [original image](https://images.pexels.com/photos/3998397/pexels-photo-3998397.jpeg).
- Pexels image 7446913, Gustavo Fring: [original image](https://images.pexels.com/photos/7446913/pexels-photo-7446913.jpeg).

## Business information

The address, phone number and brand positioning were supplied by the user. The provided [Google Maps listing](https://maps.app.goo.gl/ZokkiuUkXsUKKvg6A) was used to check the contact/location details and the visible Saturday hours. The site links to that listing for current hours and reviews; it does not claim a complete verified weekly opening schedule.
