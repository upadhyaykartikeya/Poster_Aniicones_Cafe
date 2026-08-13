# Aniicone's Food & Coffee — Poster

Advertisement design for **ANIICONE'S FOOD & COFFEE** — Navlakkha Square, in front of RK Hospital.
Offer: **COLD COFFEE & BURGER at just ₹25/- each** · Tagline: *Great taste • Tiny price*
Instagram: **@aniicones** · Delivery / Call-to-order: **9203550033** · Footer: **8085510033**

---

## Final outputs (share these)
| File | What it is |
|---|---|
| `Aniicone_Poster.png` | Desktop flyer — 3240×4500 px (1080×1500 @3x) |
| `Aniicone_Poster_Mobile.png` | Mobile flyer — 3240×5760 px (1080×1920 @3x, 9:16) |
| `Aniicone_Poster.pdf` | Desktop print PDF (hyperlink on @aniicones works) |
| `Aniicone_Poster_Mobile.pdf` | Mobile print PDF (hyperlink works) |

## Editable design sources
| File | What it is |
|---|---|
| `poster.html` | Desktop design (HTML/CSS, renders to the PNG/PDF above) |
| `poster_mobile.html` | Mobile 9:16 design (HTML/CSS) |
| `aniicone_logo_transparent.png` | Logo with cream background removed (3000×3000) |
| `assets/Logo.pdf` | Original logo from Canva |
| `assets/WhatsApp Image *.jpeg` | Reference designs/ads used for the theme |

## Scripts
### Re-render PNG + PDF (`render.js`)
Uses Puppeteer + system Chrome (path set at line 29 of `render.js`).
```
node Poster\render.js
```
Re-renders both versions → overwrites the 2 PNGs + 2 PDFs above.
Requires: `node_modules` with `puppeteer` (installed in repo root).

### Self-host the mobile poster (`serve.js`)
Serves `Aniicone_Poster_Mobile.png` from your PC — no third party.
```
node Poster\serve.js
```
Then open `http://<your-LAN-IP>:8080/` — the page shows the image and
auto-downloads it. Phones must be on the **same Wi-Fi** as this PC.

### Deploy on Vercel (`site/`)
Ready-to-push static site: `index.html` + `poster.png`. Push `site/` to GitHub,
import it in Vercel, get a permanent public link, then generate a QR for it:
```
python Poster\make_qr.py https://<your-project>.vercel.app/
```

## QR codes
| File | Encodes to |
|---|---|
| `Aniicons_QR.png` | **Main QR (share this)** — `https://poster-aniicones-cafe.vercel.app/` |
| `aniicone_qr.png` | Instagram menu post (printed on the poster) — `https://www.instagram.com/p/DWy7nHOCOXe/` |

---

## Edit checklist (if the design changes)
1. Edit `poster.html` / `poster_mobile.html`.
2. Change phone numbers, Instagram link, or QR image inside the HTML as needed.
3. Re-render with `node Poster\render.js`.
4. Re-verify QR decodes (optional):
   ```
   python -c "import cv2; print(cv2.QRCodeDetector().detectAndDecode(cv2.imread(r'Poster\aniicone_qr.png'))[0])"
   ```
5. If you host a new image URL, regenerate the matching QR (see above).

## Key facts (keep in sync across files)
- Offer badge: **STARTS / 25 / RUPEES ONLY**
- Cafe name single line: **ANIICONE'S FOOD & COFFEE**
- Two phone numbers: **9203550033** (delivery/call-to-order), **8085510033** (footer)
- Address: **Navlakkha Square, in front of RK Hospital**
- Instagram: `@aniicones` → `https://www.instagram.com/aniicones?igsh=MW1lcXp4OWlxdHh0Mw==`
- Menu QR → `https://www.instagram.com/p/DWy7nHOCOXe/`
