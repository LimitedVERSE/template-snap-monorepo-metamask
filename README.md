# template-snap-monorepo-metamask

<<<<<<< HEAD
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
=======
A MetaMask Snap monorepo template to quickly bootstrap your snap development.

## Prerequisites

- Node.js >= 18.0.0
- Yarn (classic)
- MetaMask Flask (for testing snaps in development)

## Getting Started

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Start the development server:
   ```bash
   yarn start
   ```

   This will:
   - Start the snap development server on http://localhost:8080
   - Start the demo site on http://localhost:3000

3. Open http://localhost:3000 in your browser with MetaMask Flask installed
>>>>>>> main

## Project Structure

```
.
├── packages/
<<<<<<< HEAD
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
=======
│   ├── snap/          # MetaMask Snap package
│   └── site/          # Demo React application
└── package.json       # Root workspace configuration
>>>>>>> main
```

## Available Scripts

<<<<<<< HEAD
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
=======
- `yarn install` - Install all dependencies
- `yarn start` - Start the development server (site + snap)
- `yarn build` - Build all packages
- `yarn clean` - Clean all build artifacts

## Packages

### @limitedverse/snap

The MetaMask Snap package that runs in the MetaMask extension.

### @limitedverse/site

A React demo application to interact with the snap.
>>>>>>> main

## Learn More

- [MetaMask Snaps Documentation](https://docs.metamask.io/snaps/)
<<<<<<< HEAD
- [Snaps API Reference](https://docs.metamask.io/snaps/reference/snaps-api/)
=======
- [Snaps API Reference](https://docs.metamask.io/snaps/reference/)
>>>>>>> main
