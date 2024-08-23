# Magic Lab

Magic Lab is a React-based project built using modern web development tools. The project leverages several libraries for component styling, chart rendering, and routing. This README outlines the steps to set up, develop, and build the project, as well as highlights the libraries used.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Libraries and Tools](#libraries-and-tools)
3. [Setup Instructions](#setup-instructions)
4. [Running the Project](#running-the-project)
5. [Building the Project](#building-the-project)
6. [Linting](#linting)
7. [Previewing the Build](#previewing-the-build)

## Project Overview

Magic Lab is built with a focus on dynamic charts and rich UI components, utilizing `React`, `Vite`, and Material UI (`@mui`). It integrates multiple charting libraries, such as `Chart.js` and `Recharts`, for flexible data visualization.

This project is a TypeScript project, ensuring type safety throughout the codebase. The development environment is powered by Vite for fast builds and HMR (Hot Module Replacement).

## Libraries and Tools

### Main Dependencies

- **React**: A JavaScript library for building user interfaces.
- **React DOM**: DOM-specific methods for React.
- **React Router DOM**: Handles navigation and routing in the application.
- **Material UI (`@mui/material`)**: A popular React UI framework with pre-built components.
- **Emotion (`@emotion/react`, `@emotion/styled`)**: A CSS-in-JS library for writing scoped and dynamic styles.
- **React Chart.js 2**: React wrapper for `Chart.js`, enabling the use of customizable and powerful charts.
- **Recharts**: A charting library that provides a range of components for data visualization.
- **Chart.js**: A popular JavaScript library for creating responsive and flexible charts.
- **TailwindCSS**: A utility-first CSS framework for rapidly building custom designs.

### Development Dependencies

- **Vite**: A fast development build tool that supports modern frontend frameworks like React.
- **TypeScript**: A typed superset of JavaScript that enhances the development process with static types.
- **ESLint**: A tool for identifying and fixing problems in JavaScript/TypeScript code.
- **PostCSS/Autoprefixer**: Tools to process CSS and add vendor prefixes automatically.
- **TypeScript-ESLint**: An ESLint plugin to lint TypeScript code.

### Vite Plugins

- **vite-plugin-svgr**: A Vite plugin to import SVGs as React components.

## Setup Instructions

To set up the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd magic-lab
   ```

2. **Install dependencies:**
   Ensure you have Node.js and npm installed, then run:
   ```bash
   npm install
   ```

## Running the Project

To start the project in development mode with Vite, use the following command:

```bash
npm run dev
```

This will launch the project at `http://localhost:3000/` (default port) and enable HMR for a seamless development experience.

## Building the Project

To create a production-ready build, run:

```bash
npm run build
```

This will generate a static build of the project in the `dist` directory. The project will be compiled using TypeScript and optimized by Vite.

## Linting

To maintain code quality, use ESLint. Run the following command to lint your code:

```bash
npm run lint
```

## Previewing the Build

Once you have built the project, you can preview the production build locally with:

```bash
npm run preview
```

This command will start a local server that serves the static build, allowing you to test the final output.

---

With the setup complete, you're ready to begin development on the Magic Lab project. Happy coding!
