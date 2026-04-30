# White-Label Orchestrator Checklist

Use this as the command/control checklist when Colton gives only a dealer website URL.

## One-Line Intake

Input format:

```text
White-label dealer demo for: <dealer website URL>
Optional: desired alias/project notes, uploaded logo asset, keep/filter products preference.
```

## Execution Checklist

### Phase 1 — Research Lock

- [ ] Fetch homepage.
- [ ] Fetch products index.
- [ ] Fetch every product-line page.
- [ ] Fetch about/company page.
- [ ] Fetch contact/showroom page.
- [ ] Use `https://r.jina.ai/http://r.jina.ai/http://<URL>` when direct fetch misses body content.
- [ ] Extract exact brand list by product line.
- [ ] Extract exact showroom locations/phones/emails.
- [ ] Extract logo/color/assets.
- [ ] Save brief under `docs/white-label/<dealer-slug>.md`.

### Phase 2 — Parallel Workstreams

- [ ] Brand/UI pass.
- [ ] Product/category/nav/brand pass.
- [ ] Copy/content pass.
- [ ] Imagery pass.

### Phase 3 — QA Gate

Source checks:

```bash
grep -R "Aaron\|aaronsfireplaceco\|/logo.png\|demo catalog\|actually carries\|publicly lists\|what they" -n apps/superstore-demo/src apps/superstore-demo/public apps/superstore-demo/data
```

Build checks:

```bash
cd apps/superstore-demo
npm run typecheck
npm run build
```

Deploy:

```bash
cd apps/superstore-demo
vercel --prod --yes --archive=tgz
```

Live checks:

```bash
base=https://superstore-demo.vercel.app
for path in / /about /brand /contact /showrooms /favicon.ico /icon.png /apple-touch-icon.png; do
  curl -s -o /tmp/check -w "%{http_code} $path %{size_download}\n" "$base$path"
done
```

Rendered HTML checks:

```bash
curl -sSL "$base/" -o /tmp/home.html
python3 - <<'PY'
from pathlib import Path
s = Path('/tmp/home.html').read_text(errors='ignore')
checks = ['<title>', 'rel="icon"', 'old brand name', 'demo catalog', 'actually carries']
for c in checks:
    print(c, c in s)
PY
```

Brand route checks:

- [ ] Every carried brand returns 200.
- [ ] Every explicitly removed/unrelated brand returns 404 or is absent from `/brand`.
- [ ] `/brand` contains only source-of-truth brands.

Category route checks:

- [ ] Every top-nav category returns 200.
- [ ] Category image matches category.
- [ ] Category copy is customer-facing.

## Completion Standard

Do not tell Colton it is done until:

- Production deploy completed.
- Live alias is updated.
- Favicon/title/logo verified live.
- Showroom/contact facts verified live.
- Brand list verified live.
- Top nav/category routes verified live.
- No obvious old-brand/internal language remains.
- At least homepage, brand index, one carried brand page, one category page, and one product page are inspected.
