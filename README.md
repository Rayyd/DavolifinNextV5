# Davolifin — Next.js (BDO-like + Actus RSS)

## Lancer
```bash
npm i
npm run dev
# http://localhost:3000/fr
```

## Déployer sur Vercel
- Import GitHub → Next auto.
- Runtime Node pour pages FR/NL/EN (déclaré).
- Section Actus auto via `lib/news.ts` (revalidate 1h).

## Variables (optionnel)
- RESEND_API_KEY + CONTACT_TO (API /api/contact)
- NEXT_PUBLIC_FORMSPREE_ID (fallback)
