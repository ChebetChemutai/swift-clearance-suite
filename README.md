# Swift Clearance Suite

This repository is a customs and logistics web app built with TanStack React Start and Vite.
It has been cleaned of Lovable branding and configuration, and it is ready for deployment to Vercel.

## What changed
- Removed Lovable metadata and branding from the app.
- Replaced Lovable Vite config with a native Vite setup using `@tanstack/react-start/plugin/vite`.
- Removed the `.lovable` artifact directory.
- Added a Vercel deployment configuration and serverless SSR entrypoint.
- Added simple backend API endpoints under `api/` for seamless frontend integration.

## Local setup
```bash
npm install
npm run dev
```

Open http://localhost:4173 in your browser.

## Build
```bash
npm run build
```

## Preview
```bash
npm run preview
```

## Vercel deployment
The repository already includes `vercel.json` and an API-based SSR entrypoint at `api/server.js`.

Recommended Vercel settings:
- Build command: `npm run build`
- Output directory: `dist/client`

Vercel will serve static client assets from `dist/client`, and all app routes will be handled by the SSR function in `api/server.js`.

### API endpoints
The frontend can use these backend routes directly:
- `GET /api/admin/shipments`
- `POST /api/estimate`
- `GET /api/status`
- `POST /api/admin/login`

## Backend integration
This repo includes a ready-to-use backend stub under `api/`.
It is designed to work with the frontend using simple `fetch()` calls.

Example client call from a React component:
```ts
const response = await fetch('/api/shipments');
const data = await response.json();
console.log(data);
```

Example POST request for a quote:
```ts
const response = await fetch('/api/estimate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ origin: 'Nairobi', destination: 'Mombasa', weightKg: 120 }),
});
const quote = await response.json();
```

## Extending the backend
You can replace the stubbed API handlers with real services quickly:
- connect to a database (PostgreSQL, MongoDB, Supabase)
- integrate a customs clearance engine
- add authentication and user profiles
- add real shipment tracking data

The backend stubs are intentionally simple and ready to be expanded.

## Notes
- `.lovable` has been removed from the repository.
- The app is now configured as an original Swift Clearance Suite project.
