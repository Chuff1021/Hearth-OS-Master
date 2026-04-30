# White-Label Dealer Demo Swarm Process

Goal: given a dealer website URL, produce a polished white-label Superstore demo with correct branding, product lines, brands, copy, imagery, metadata, deployment, and QA without repeated back-and-forth.

This process was created after the A Cozy Fireplace pass. The big lesson: do not stop at logo/color swaps. The swarm must verify every customer-facing surface and every product/brand claim against the dealer's own site.

## Inputs

Required:
- Dealer website URL
- Desired demo name/domain/alias if different from existing `superstore-demo`

Optional:
- Preferred logo asset from user
- Target Vercel project/alias
- Whether to preserve all Fireplace Superstore products or filter to dealer-carried brands only

Default behavior:
- Use dealer website as source of truth.
- Keep catalog structure, but only surface brands/product lines that the dealer appears to carry.
- If a product line page lists exact brands, use that page over summary snippets.
- Deploy from `apps/superstore-demo` with `vercel --prod --yes --archive=tgz`.

## Swarm Roles

### 1. Source-of-Truth Research Agent

Mission: crawl the dealer website and extract factual brand/business/product data.

Tasks:
- Fetch homepage, about/company page, contact/showroom page, products page, and every product-line page.
- Use `r.jina.ai` reader URLs when normal fetch/readability misses hidden page body content.
- Extract:
  - Store name
  - Tagline/value proposition
  - Logo URLs and favicon candidates
  - Theme colors from CSS/assets
  - Phone numbers and emails
  - Every showroom location: name, address, phone, map links
  - Product categories in top nav/products page
  - Exact brands by product category/page
  - Dealer-specific claims: years in business, service/install, collective experience, etc.
- Produce a structured JSON-like brief with citations/source URLs.

Non-negotiable QA:
- Do not rely only on search snippets.
- Do not infer brands from existing catalog.
- Do not include brands not found on dealer pages unless user explicitly says to.

### 2. Brand/UI Agent

Mission: make the UI look like the dealer's actual brand.

Tasks:
- Replace logo assets with the highest-quality available logo.
- Generate/update:
  - `public/<dealer-logo>.png`
  - `public/icon.png`
  - `public/apple-touch-icon.png`
  - `public/favicon.ico`
  - `src/app/icon.png`
  - `src/app/favicon.ico`
- Update `store-config.ts` theme colors, logo, metadata, contact info.
- Update `logo-resolver.ts` if fallback is still hardcoded.
- Sweep hardcoded old colors across header/footer/home/category/product/brand/about/support pages.
- Add versioned icon links if browser tab favicon caching is likely.
- Verify visible page title and tab icon source in rendered HTML.

Non-negotiable QA:
- Search for old logo refs: `/logo.png`, old business name, old domain.
- Check `/favicon.ico`, `/icon.png`, `/apple-touch-icon.png` return new assets.
- Check homepage HTML contains new title and icon links.

### 3. Product-Line/Brand Agent

Mission: align navigation, categories, brands, and product visibility with what the dealer actually sells.

Tasks:
- Update `productCategories` in `src/lib/store-config.ts` to match dealer product lines.
- Update top navigation to use those product lines, not generic inherited categories.
- Create a dealer brand allowlist from exact product-line pages.
- Filter `loadAllProducts()` to dealer-allowed brands when desired.
- Update `/brand` and `/brand/[slug]` so only dealer brands are listed/routable.
- Add showroom-style placeholder products for dealer lines that do not exist in the inherited catalog.
- Make non-carried brands 404 or disappear from promotion surfaces.

Non-negotiable QA:
- Verify carried brand routes return 200.
- Verify non-carried old brands return 404 or are absent.
- Verify `/brand` does not contain unrelated legacy brands.
- Verify category pages return 200 for each product line.

### 4. Copy/Content Agent

Mission: make all copy read like a real customer-facing dealer site.

Tasks:
- Rewrite homepage hero, category grid, brand section, footer, about page, contact/showroom blocks, category descriptions, brand pages, product cards where needed.
- Remove internal/demo language:
  - `demo catalog`
  - `actually carries`
  - `publicly lists`
  - `what they sell`
  - `stock photos`
  - old store/domain names
- Use customer-facing wording: visit showroom, call for current availability, installation planning, sizing help, service support.
- Preserve factual claims only when sourced from dealer pages.

Non-negotiable QA:
- Grep rendered/static source for old business names and internal phrasing.
- Read homepage, `/brand`, at least three category pages, one product page, `/about`, `/contact`, `/showrooms` for tone.

### 5. Imagery Agent

Mission: replace mismatched inherited/stock imagery with correct product-line imagery.

Tasks:
- Download dealer-owned/product-line images from the dealer site when available.
- Store under `public/<dealer-slug>/`.
- Map product line/category images to correct placements.
- Replace generic fireplace/grill/door/stone/gas-log imagery when it is wrong for the placement.
- Avoid using unrelated product images just because they exist in inherited catalog.

Non-negotiable QA:
- Each homepage category tile image must match its category.
- Product placeholder images must not misrepresent the category.
- Fetch image URLs in production and verify 200.

### 6. QA/Deploy Agent

Mission: prove the demo is correct before final status.

Required gates:
- `npm run typecheck`
- `npm run build`
- `vercel --prod --yes --archive=tgz`
- Live endpoint checks:
  - `/`
  - `/about`
  - `/brand`
  - carried brand routes
  - removed/unrelated brand routes
  - every top-nav category route
  - representative product pages
  - `/favicon.ico`
  - `/icon.png`
  - `/apple-touch-icon.png`
- Rendered HTML checks:
  - page title
  - favicon links
  - logo refs
  - no old business/domain leakage
  - no internal/demo phrasing

Final report must include:
- Live URL
- What changed
- Source-of-truth brand/product list
- Verification results
- Known limitations/blockers

## Orchestrator Flow

1. Create a per-dealer work folder/brief under `docs/white-label/<dealer-slug>.md`.
2. Spawn Research Agent with the URL.
3. Wait for research brief.
4. Spawn Brand/UI, Product-Line/Brand, Copy/Content, and Imagery agents in parallel using the research brief.
5. Merge edits carefully.
6. Run QA/Deploy Agent.
7. If QA finds leakage, send focused fix tasks back to the responsible agent.
8. Only report completion after production verification passes.

## Reusable Spawn Prompts

### Research Agent Prompt

```text
Dealer URL: <URL>

Crawl the dealer website as source of truth. Extract store identity, logo/favicon assets, colors, contact info, showroom locations, product categories, and exact brands by product-line page. Use r.jina.ai reader URLs when normal fetch misses page content. Return a structured brief with source URLs. Do not infer brands from our existing catalog.
```

### Brand/UI Agent Prompt

```text
Using this research brief: <brief>
Update apps/superstore-demo branding assets, favicon/icon files, metadata, theme colors, header/footer/about/showroom surfaces, and hardcoded fallback logo paths. Verify no old logo/name/domain remains in source or rendered HTML.
```

### Product-Line/Brand Agent Prompt

```text
Using this research brief: <brief>
Update apps/superstore-demo categories, top navigation, brand allowlist, brand index/detail pages, and product filtering so only dealer product lines and brands are surfaced. Add showroom-style placeholder products only where the inherited catalog lacks needed dealer lines.
```

### Copy/Content Agent Prompt

```text
Using this research brief: <brief>
Rewrite customer-facing copy across homepage, brand pages, category pages, product placeholders, about/contact/showroom areas. Remove internal/demo language and make it read like a real dealer website.
```

### Imagery Agent Prompt

```text
Using this research brief: <brief>
Download appropriate product-line images from the dealer site into public/<dealer-slug>/ and map category/product images to correct placements. Remove mismatched inherited/stock images from customer-facing surfaces.
```

### QA/Deploy Agent Prompt

```text
Run typecheck/build, deploy with Vercel archive mode, and verify live routes/assets/rendered HTML. Check for old business leakage, old favicon/logo refs, unrelated brands, broken category/brand/product routes, and internal/demo phrasing. Return pass/fail with exact evidence.
```

## A Cozy Lessons To Never Repeat

- Favicon must be handled explicitly; replacing visible logo is not enough.
- Browser tab title can still show the URL unless metadata/head title is correct.
- Logo fallback paths can silently keep old branding alive.
- Product summary pages can omit details; crawl each product-line page.
- Search snippets are not enough for brand inclusion/exclusion.
- Do not use broad old-catalog brand lists for a dealer demo.
- Do not claim completion until the whole site, not just the hero/top section, is rebranded.
- Do not use internal language like “demo catalog” in customer-facing UI.
- Images must match placement; a generic inherited fireplace image is not acceptable for grills, doors, stone, gas logs, etc.
