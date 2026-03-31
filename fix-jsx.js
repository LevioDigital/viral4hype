const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf-8');

// Fix HTML comments
content = content.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

// Fix 'class=' if I missed any (wait, I already did 'class=' -> 'className=' in convert.js, but let's be sure)
content = content.replace(/class=/g, 'className=');

// Fix 'for=' -> 'htmlFor='
content = content.replace(/ for=/g, ' htmlFor=');

// Fix `<br>`
content = content.replace(/<br>/g, '<br />');

// Fix `<hr>`
content = content.replace(/<hr>/g, '<hr />');

// Unescaped entities
content = content.replace(/I'm/g, "I&apos;m");
content = content.replace(/You're/g, "You&apos;re");
content = content.replace(/They're/g, "They&apos;re");
content = content.replace(/We're/g, "We&apos;re");
content = content.replace(/let's/g, "let&apos;s");
content = content.replace(/Let's/g, "Let&apos;s");
content = content.replace(/won't/g, "won&apos;t");
content = content.replace(/don't/g, "don&apos;t");
content = content.replace(/doesn't/g, "doesn&apos;t");
content = content.replace(/'ve/g, "&apos;ve");

// Check for unclosed input
content = content.replace(/<input([^>]*?[^/])>/g, '<input$1 />');

// style changes that didn't camelCase correctly
content = content.replace(/stop-color/g, 'stopColor');
content = content.replace(/stroke-width/g, 'strokeWidth');
content = content.replace(/stroke-linecap/g, 'strokeLinecap');
content = content.replace(/stroke-linejoin/g, 'strokeLinejoin');

// Remove the import script at the end
content = content.replace(/<script[^>]*><\/script>/g, '');

fs.writeFileSync('src/app/page.tsx', content);
console.log("Fixes applied");
