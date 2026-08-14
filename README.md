# Apna Dukaan — Website Files

This is a static website — no server or database required. It runs entirely
in the browser.

## Folder structure

```
apna-dukaan/
├── index.html      ← the page itself (structure + content)
├── css/
│   └── style.css   ← all styling
├── js/
│   └── app.js       ← product data, cart logic, filtering, animations
└── README.md
```

Keep these files and folders together, in the same relative positions —
`index.html` expects `css/style.css` and `js/app.js` to sit right next to it.

## How to view it locally

Just double-click `index.html` and it will open in your browser. Everything
(cart, filters, search, the spinning wheel) works fully offline except the
Google Fonts, which load from the internet.

## How to put it on the actual internet

Pick any of these — all have a free tier and take a few minutes:

**Netlify (easiest)**
1. Go to https://app.netlify.com/drop
2. Drag the whole `apna-dukaan` folder onto the page
3. You'll get a live URL immediately. You can add a custom domain later in Site settings.

**Vercel**
1. Go to https://vercel.com and create a free account
2. "Add New Project" → drag and drop the folder (or connect a GitHub repo)
3. Deploy — you'll get a live URL.

**GitHub Pages**
1. Create a new GitHub repository and upload these files (`index.html`, `css/`, `js/`)
2. Go to Settings → Pages → set the source to your main branch
3. Your site will be live at `https://yourusername.github.io/repo-name`

**Your own hosting (cPanel, Hostinger, GoDaddy, etc.)**
1. Log in to your host's file manager or connect via FTP
2. Upload the contents of this folder into `public_html` (or `www`)
3. Visit your domain — it should be live right away

## Editing things yourself later

- **Product names, prices, descriptions** → open `js/app.js`, look for the
  `PRODUCTS` array near the top.
- **Colors, fonts, spacing** → open `css/style.css`, colors are defined once
  at the top under `:root`.
- **WhatsApp / phone number** → search `js/app.js` and `index.html` for
  `50766036321` and replace it everywhere it appears.
- **Text content (headlines, footer, etc.)** → edit directly in `index.html`.

## Note on the checkout flow

There's no payment processor or backend connected. "Proceed to Checkout"
opens WhatsApp with the order pre-filled, addressed to the store's WhatsApp
number. If you want real online payments, order storage, or automatic
notifications without a manual WhatsApp send, that requires adding a small
backend (e.g. a form service, Shopify, or a custom server) — happy to help
with that whenever you're ready.
