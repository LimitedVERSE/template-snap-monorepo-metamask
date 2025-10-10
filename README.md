# template-snap-monorepo-metamask

A MetaMask Snap monorepo template with a development environment and example site.

## Features

- 🔌 MetaMask Snap with TypeScript support
- 🌐 React-based demo site with Vite
- 📦 Yarn workspaces for monorepo management
- 🔥 Hot reload for both snap and site during development

## Prerequisites

- Node.js >= 18
- MetaMask Flask browser extension (for testing snaps)

## Quick Start

```bash
# Install dependencies
yarn install

# Start development servers
yarn start
```

This will start:
- Snap development server on http://localhost:8080
- Demo site on http://localhost:3000

## Project Structure

```
.
├── packages/
│   ├── snap/              # MetaMask Snap
│   │   ├── src/
│   │   │   └── index.ts   # Snap entry point
│   │   ├── snap.config.ts # Snap configuration
│   │   └── snap.manifest.json
│   └── site/              # Demo website
│       ├── src/
│       │   ├── App.tsx    # Main app component
│       │   └── main.tsx   # Entry point
│       └── vite.config.ts
└── package.json           # Root package.json with workspaces
```

## Available Scripts

- `yarn start` - Start development servers for all packages
- `yarn build` - Build all packages for production
- `yarn clean` - Clean build artifacts

## Testing the Snap

1. Install [MetaMask Flask](https://metamask.io/flask/)
2. Run `yarn start`
3. Open http://localhost:3000 in your browser
4. Click "Connect Snap" to install the snap
5. Click "Send Hello" to test the snap functionality

## Development

The snap will automatically rebuild when you make changes to files in `packages/snap/src/`.
The site will hot-reload when you make changes to files in `packages/site/src/`.

## Learn More

- [MetaMask Snaps Documentation](https://docs.metamask.io/snaps/)
- [Snaps API Reference](https://docs.metamask.io/snaps/reference/snaps-api/)
