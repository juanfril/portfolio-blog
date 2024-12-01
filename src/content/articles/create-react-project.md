---
title: Create React Project from scratch
description: In this article, we will create a React project from scratch
slug: create-react-project
tags:
  - TypeScript
  - React
---

1. Create the project:
```bash
npm create vite@latest
```
2. Install the vite’s plugin for react:

```bash
pnpm install @vitejs/plugin-react -E
```

3. Install react dependencies:

```bash
pnpm install react react-dom -E
```

4. Create vite config at root: **vite.config.js**

```jsx
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

5. Modify the **main.jsx** to get the root element, and render it:

```jsx
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('app'))

root.render(<h1>Hello world</h1>)

```

6. Make sure the main extension is **jsx**  and change it in the **index.html** as well.

7. Install linter **pnpm install standard -D** , and then add the config at package.json: 

```json
"eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json"
  }
```

8. Create folder src, and App component, then import it from **main.tsx**
