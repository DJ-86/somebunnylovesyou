# 🐰 The Bunny Burrow — Complete Website

A free, fully-functional rabbit business website built with Astro, Tailwind CSS, and Decap CMS.

## What's Included

✅ **7 fully-designed pages** ready to use  
✅ **Beautiful, warm design** (cream, terracotta, sage colors)  
✅ **CMS dashboard** for non-technical editing  
✅ **Form handling** (enquiries, boarding requests)  
✅ **Mobile responsive**  
✅ **Zero hosting costs** (GitHub Pages + Netlify)  
✅ **SEO optimized**  

## Quick Start

### 1. Install Node.js
Download from [nodejs.org](https://nodejs.org) (LTS version)

### 2. Install dependencies
```bash
npm install
```

### 3. Run locally
```bash
npm run dev
```

Open **http://localhost:4321** in your browser — you'll see the site live.

## Next Steps

### Step 1: Get Web3Forms key (for form emails)

1. Go to **[web3forms.com](https://web3forms.com)**
2. Click **"Get Started"** (completely free)
3. Copy your **Access Key**
4. Create a file called `.env.local` in the root of your project
5. Add this line:
   ```
   WEB3FORMS_KEY=your_access_key_here
   ```
6. Replace `your_access_key_here` with your actual key from Web3Forms

**Important:** Never commit `.env.local` to GitHub (it's in `.gitignore` for security). The key stays on your computer and Netlify only.

Now all form submissions will email you directly.

### Step 2: Deploy to Netlify (for CMS + auto-deploy)

1. Go to **[netlify.com](https://netlify.com)** and sign up (free)
2. Create a GitHub account if you don't have one
3. Push this project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/bunny-burrow.git
   git push -u origin main
   ```
4. In Netlify: **"Add new site"** → **"Import an existing project"**
5. Select your GitHub repo and authorize
6. Netlify auto-detects Astro and deploys automatically
7. **Add your Web3Forms key:**
   - In Netlify, go to **Site settings** → **Build & deploy** → **Environment**
   - Click **Edit variables**
   - Add: `WEB3FORMS_KEY` = your actual key from web3forms.com
   - Save and redeploy

Your forms will now work on the live site with your key securely stored on Netlify's servers.

### Step 3: CMS Setup

Once deployed to Netlify, go to `your-site.netlify.app/admin`

Log in with your GitHub account and you can now:
- Add/edit rabbits (with photos and prices)
- Change boarding prices
- Add care guide articles
- Manage accessories

**No code changes needed — the owner can handle everything.**

### Step 4: Add your domain (optional)

1. Buy a domain from Namecheap, 123-reg, or GoDaddy (~£10–12/year)
2. In Netlify, go to **Domain settings** and add your domain
3. Update your domain's DNS to point to Netlify

## Project Structure

```
bunny-burrow/
├── src/
│   ├── pages/              # Website pages (/ /rabbits /boarding etc)
│   ├── components/         # Reusable parts (forms, cards, nav)
│   ├── layouts/            # Page templates
│   ├── styles/             # Global CSS
│   └── content/            # Where CMS content goes
├── public/
│   ├── admin/              # CMS dashboard (/admin)
│   └── images/uploads/     # CMS image uploads
├── astro.config.mjs        # Astro configuration
├── tailwind.config.mjs     # Tailwind CSS setup
├── tsconfig.json           # TypeScript config
└── package.json            # Dependencies
```

## Pages Included

| Page | URL | Purpose |
|---|---|---|
| Home | `/` | Hero, featured rabbits, services overview |
| Rabbits | `/rabbits` | All rabbits grid (filterable) |
| Rabbit detail | `/rabbits/[slug]` | Individual rabbit + enquiry form |
| Boarding | `/boarding` | Pricing, add-ons, booking form |
| Accessories | `/accessories` | Product listings (no checkout) |
| Care guides | `/care` | Guide index |
| Care article | `/care/[slug]` | Individual articles |
| Contact | `/enquire` | General enquiry form |

## Building for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready to deploy.

## Cost Breakdown

| Item | Cost |
|---|---|
| Netlify hosting | Free |
| GitHub | Free |
| Domain name | ~£10–12/year |
| Web3Forms (50+ enquiries) | Free up to 50/month, then ~£5/month |
| **Total** | **~£10–12/year** |

Everything else is completely free.

## Customization

### Change colors
Edit `tailwind.config.mjs` to customize the palette:
- `cream` — main background
- `terracotta` — call-to-action buttons
- `sage` — secondary elements
- `bunny` — text colors

### Change business name
Search the codebase for "The Bunny Burrow" and replace with your business name.

### Update prices
Edit inline prices in pages, or set them in the CMS for boarding/accessories.

### Add contact info
Open `src/components/Footer.astro` and add your phone, email, address.

## Common Questions

**Q: Can I add more pages?**  
A: Yes! Create new `.astro` files in `src/pages/`. Astro handles routing automatically.

**Q: How do I add a blog/news section?**  
A: Create a `news` collection in `public/admin/config.yml` and a corresponding page template.

**Q: Can I sell rabbits online with checkout?**  
A: Not easily with this setup. The site is designed for enquiry-based sales (in person or via form). For ecommerce, you'd need Shopify or similar.

**Q: How do I backup my content?**  
A: It's all in GitHub. Every edit is automatically committed. You can clone/download anytime.

**Q: Can I run this on my own server?**  
A: Yes, but Netlify is easier and free. If you want to self-host, use any static host that supports GitHub webhooks.

## Support

- **Astro docs**: [docs.astro.build](https://docs.astro.build)
- **Tailwind docs**: [tailwindcss.com](https://tailwindcss.com)
- **Decap CMS docs**: [decapcms.org](https://decapcms.org)
- **Netlify docs**: [netlify.com/docs](https://netlify.com/docs)

## Future Enhancements

The site is built to easily add:
- WhatsApp click-to-chat button
- Google Reviews embed
- Calendar booking widget (Cal.com)
- Email newsletter signup
- Social media feeds
- Photo gallery lightbox

None require code changes — just add plugins/embeds.

---

Built with ❤️ for rabbit lovers, by developers who care about sustainable, affordable web design.

🐰 Happy rabbit business! 🐰
