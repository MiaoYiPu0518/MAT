This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploying to Static Hosting (COS)

The project is configured for static export, making it compatible with Cloud Object Storage (COS) or other static hosting services.

### 1. Generate Static Export

Run the build script to generate the static files:

```bash
npm run build
```

This will create an `out/` directory at the root of the project containing all static HTML, CSS, JS, and media assets.

### 2. Upload to COS

Upload the **contents** of the `out/` directory to your COS bucket. Do not upload the `out/` folder itself, only its contents.

### 3. Bucket Configuration

To ensure the website functions correctly, configure your COS bucket as follows:
- **Enable Static Website Hosting**: Set the "Index Document" to `index.html`.
- **404 Page**: Set the "Error Document" to `404.html` (which is also generated in the `out/` directory).
