# Aggregation

Aggregator of all totally sane services.

Aggregation is a Svelte-based project designed to combine and provide a central interface for various services developed by the Totally Sane team. It offers a streamlined development experience and easy deployment, powered by [svelte](https://github.com/sveltejs/cli).

---

## 🚀 Features

- **Modular Architecture** – Easily add or remove services.
- **Svelte-Powered** – Fast, reactive UI built with Svelte.
- **TypeScript Support** – Modern, type-safe codebase.
- **Production Ready** – Simple build and deployment process.
- **Customizable** – Easily adapt and extend for your needs.

---

## 🏁 Getting Started

### 1. Create a New Project

If you haven’t already, you can create a new Svelte project using `sv`:

```bash
# Create a new project in the current directory
npx sv create

# Or create a new project in a directory named my-app
npx sv create my-app
```

### 2. Install Dependencies

Install all required dependencies:

```bash
npm install
# or
pnpm install
# or
yarn
```

### 3. Start Development Server

Run the app locally:

```bash
npm run dev
# Or, to open automatically in your browser:
npm run dev -- --open
```

### 4. Build for Production

Generate a production build:

```bash
npm run build
```

You can preview the production build locally with:

```bash
npm run preview
```

> **Note:** To deploy your app, you may need an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

---

## 📁 Project Structure

```
aggrigation/
├── src/           # Source files
├── public/        # Static assets
├── package.json   # Project metadata and scripts
└── README.md      # Project documentation
```

---

## 🤝 Contributing

Contributions are welcome! Please open issues or pull requests for improvements, new features, or bug fixes.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to your fork and open a Pull Request

---

## 📚 Resources

- [Svelte Documentation](https://svelte.dev/docs)
- [Svelte CLI Documentation](https://github.com/sveltejs/cli)
- [SvelteKit Adapters](https://kit.svelte.dev/docs/adapters)

---

## 📝 License

This project is licensed under the MIT License.

---
