# 🎲 Advanced Random Number Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Tech Stack](https://img.shields.io/badge/tech-React%20%7C%20TypeScript%20%7C%20Tailwind-blueviolet)](https://reactjs.org/)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()

> A professional-grade, cryptographically secure random number generation suite built for accuracy, performance, and modern web standards.

<div align="center">
  <h3>🚀 <a href="https://numbergenerator.doodax.com" target="_blank">LIVE DEMO: NumberGenerator.doodax.com</a></h3>
</div>

---

## 📖 Overview

In the digital age, true randomness is critical for security, simulation, and fair play. Standard browser tools often rely on predictable algorithms unsuitable for sensitive tasks. 

**Advanced RNG** bridges this gap by providing a sophisticated interface that leverages the **Web Crypto API** (`crypto.getRandomValues`) to harvest entropy from the underlying operating system, ensuring non-deterministic results suitable for cryptographic keys, passwords, and scientific sampling.

## ✨ Key Features

-   **🛡️ Cryptographic Security**: Toggle between standard PRNG and CSPRNG (Cryptographically Secure Pseudo-Random Number Generator) modes.
-   **🔢 Precision Control**: Define custom ranges (Min/Max), quantity (up to 10,000), and floating-point precision.
-   **🌌 Immersive UI**: Features a dynamic, GPU-accelerated nebula background simulation using pure CSS and React.
-   **⚡ Client-Side Privacy**: Zero server dependencies. All numbers are generated locally in the user's browser, ensuring 100% privacy.
-   **📱 Responsive Design**: Fully optimized for mobile, tablet, and desktop experiences.
-   **📚 Educational Resources**: Includes a comprehensive, SEO-optimized guide on the mechanics of randomness.

## 🛠️ Technology Stack

-   **Frontend Framework**: [React 18](https://reactjs.org/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/) for robust type safety.
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) with Typography plugin.
-   **State Management**: React Hooks.
-   **Build Tooling**: ES Modules / Vite (implied).

## 🚀 Quick Start

To run this project locally:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/hsinidev/advanced-rng.git
    cd advanced-rng
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Start Development Server**
    ```bash
    npm start
    ```

4.  **Build for Production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
/
├── public/
│   ├── favicon.svg       # Branding assets
│   ├── robots.txt        # SEO crawler directives
│   └── sitemap.xml       # Search engine indexing
├── components/
│   ├── Layout.tsx        # Core application wrapper & modals
│   ├── RNGTool.tsx       # Main generator logic component
│   └── SEOArticle.tsx    # Content-heavy educational module
├── services/
│   └── NumberGenerator.ts# Pure TS crypto logic
├── types/                # TypeScript definitions
└── App.tsx               # Root component
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

**HSINI MOHAMED**  
Full Stack Developer & Open Source Enthusiast

-   **GitHub**: [@hsinidev](https://github.com/hsinidev)
-   **Email**: [hsini.web@gmail.com](mailto:hsini.web@gmail.com)
-   **Website**: [doodax.com](https://doodax.com)

---
<div align="center">
  <p>Made with ❤️ by HSINI MOHAMED</p>
</div>
