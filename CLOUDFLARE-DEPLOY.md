# Publish from GitHub to Cloudflare Workers

Connect `theda-vvy/Portfolio`, branch `main`, using the repository root.

- Worker name: `oluwaseyi-david-portfolio`
- Build command: `PORTFOLIO_PUBLIC_BUILD=true pnpm run build`
- Deploy command: `pnpm exec wrangler deploy --config dist/server/wrangler.json`
- Node.js: 22 or newer

The public build omits the Sites preview plugin and enables indexing. Local builds retain the preview plugin and noindex. The canonical domain is https://oluwaseyidavid.com.

Deploy and verify the workers.dev preview before connecting the domain. Add the domain to Cloudflare, preserve existing DNS records (especially email MX/TXT records), and enter the assigned Cloudflare nameservers in Namecheap. Once the zone is active, attach oluwaseyidavid.com as a Worker custom domain. Configure www to redirect to the canonical domain. Cloudflare manages the HTTPS certificate.

No API keys or account credentials belong in this repository.
