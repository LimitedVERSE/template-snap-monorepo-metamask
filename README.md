# template-snap-monorepo-metamask

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

## Project Structure

```
.
├── packages/
│   ├── snap/          # MetaMask Snap package
│   └── site/          # Demo React application
└── package.json       # Root workspace configuration
```

## Available Scripts

- `yarn install` - Install all dependencies
- `yarn start` - Start the development server (site + snap)
- `yarn build` - Build all packages
- `yarn clean` - Clean all build artifacts

## Packages

### @limitedverse/snap

The MetaMask Snap package that runs in the MetaMask extension.

### @limitedverse/site

A React demo application to interact with the snap.

## Learn More

- [MetaMask Snaps Documentation](https://docs.metamask.io/snaps/)
- [Snaps API Reference](https://docs.metamask.io/snaps/reference/)