# Sumiya Sayeed – Portfolio

A personal portfolio site built with [Create React App](https://github.com/facebook/create-react-app) and deployed to **GitHub Pages** at [www.sumiyasayeed.com](https://www.sumiyasayeed.com).

## Local development

```bash
yarn install
yarn start        # http://localhost:3000
```

## Deployment

The site is deployed automatically via GitHub Actions whenever a commit is pushed to the `main` branch.

The workflow (`.github/workflows/deploy.yml`) does the following:
1. Installs dependencies with `yarn install`.
2. Builds the production bundle with `yarn build`.
3. Publishes the `build/` directory to the `gh-pages` branch using [`peaceiris/actions-gh-pages`](https://github.com/peaceiris/actions-gh-pages).

GitHub Pages is configured to serve from the `gh-pages` branch.  
The `CNAME` file (`www.sumiyasayeed.com`) is automatically included in the deployed output so the custom domain binding is preserved on every deployment.

### Required DNS records

Configure the following records at your DNS provider to point `www.sumiyasayeed.com` at GitHub Pages:

| Type  | Name | Value                     |
|-------|------|---------------------------|
| CNAME | www  | sumiya-sayeed.github.io   |

For the apex domain (`sumiyasayeed.com` without `www`) you have two options:
- **Option A – redirect at the DNS level**: use your DNS provider's "URL redirect" feature to redirect `@`/`sumiyasayeed.com` → `https://www.sumiyasayeed.com`.
- **Option B – GitHub Pages A records**: add four `A` records for `@` pointing to the GitHub Pages IPs listed in [GitHub's documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain) (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`).

### GitHub Pages settings (one-time)

1. Go to **Settings → Pages** in this repository.
2. Under **Build and deployment → Source**, select **Deploy from a branch**.
3. Choose branch `gh-pages` / `/ (root)`.
4. Set **Custom domain** to `www.sumiyasayeed.com` and save.
5. Once DNS propagates, enable **Enforce HTTPS**.

## Available scripts

| Command        | Description                              |
|----------------|------------------------------------------|
| `yarn start`   | Start the development server             |
| `yarn build`   | Build for production (output: `build/`)  |
| `yarn test`    | Run tests                                |

