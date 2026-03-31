const fs = require('fs');

// ── 1. Add ring transition CSS to globals.css
let css = fs.readFileSync('src/app/globals.css', 'utf8');
const ringCss = `\n/* Custom cursor ring transition */\n#cursor-ring { transition: width 0.3s cubic-bezier(0.16,1,0.3,1), height 0.3s cubic-bezier(0.16,1,0.3,1), opacity 0.3s; }\n.c-cursor { pointer-events: none; }\n`;
if (!css.includes('#cursor-ring')) {
  css = css + ringCss;
  fs.writeFileSync('src/app/globals.css', css);
  console.log('CSS updated');
} else {
  console.log('CSS already has ring styles');
}

// ── 2. Prepend import + component to page.tsx
let page = fs.readFileSync('src/app/page.tsx', 'utf8');
if (!page.includes('BrilliantInteractions')) {
  page = page.replace(
    'export default function Home() {',
    'import BrilliantInteractions from "./BrilliantInteractions";\n\nexport default function Home() {'
  );
  // Add component + progress bar inside the fragment, before the skip-link
  page = page.replace(
    '<><a href="#main-content"',
    '<><BrilliantInteractions /><div className="progress-bar" aria-hidden="true"></div><a href="#main-content"'
  );
  fs.writeFileSync('src/app/page.tsx', page);
  console.log('page.tsx updated');
} else {
  console.log('Already updated');
}
