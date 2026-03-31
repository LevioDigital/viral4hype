const fs = require('fs');

const content = fs.readFileSync('brilliant.html', 'utf-8');

// Extract style
const styleMatch = content.match(/<style>([\s\S]*?)<\/style>/);
if (styleMatch) {
  fs.writeFileSync('src/app/globals.css', styleMatch[1]);
}

// Extract body inner HTML
const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/);
if (!bodyMatch) {
  console.log("No body found");
  process.exit(1);
}

let bodyContent = bodyMatch[1];

// Convert some HTML to JSX
// 1. class -> className
bodyContent = bodyContent.replace(/class=/g, 'className=');

// 2. stroke-width -> strokeWidth
bodyContent = bodyContent.replace(/stroke-width=/g, 'strokeWidth=');
bodyContent = bodyContent.replace(/stroke-linecap=/g, 'strokeLinecap=');
bodyContent = bodyContent.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
bodyContent = bodyContent.replace(/fill-rule=/g, 'fillRule=');
bodyContent = bodyContent.replace(/clip-rule=/g, 'clipRule=');

// 3. style="string" -> style={{ string }}
// Very basic replacement for inline styles: Let's manually fix it since it's hard to regex properly.
// Or just regex standard simple styles: style="property: value; prop2: val2;"
bodyContent = bodyContent.replace(/style="([^"]+)"/g, (match, p1) => {
  const parts = p1.split(';').filter(p => p.trim() !== '');
  const styleObj = parts.map(part => {
    let [key, val] = part.split(':');
    key = key.trim();
    if (val) val = val.trim();
    // camelCase the key
    key = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    return `${key}: '${val}'`;
  }).join(', ');
  return `style={{ ${styleObj} }}`;
});

// 4. self-closing tags
const voidTags = ['img', 'br', 'hr', 'input', 'meta', 'link'];
for (const tag of voidTags) {
  const regex = new RegExp(`<${tag}([^>]*[^/])>`, 'g');
  bodyContent = bodyContent.replace(regex, `<${tag}$1 />`);
}

// Clean up scripts inside body
bodyContent = bodyContent.replace(/<script>[\s\S]*?<\/script>/g, '');

const tsxCode = `export default function Home() {
  return (
    <>
      ${bodyContent}
    </>
  );
}
`;

fs.writeFileSync('src/app/page.tsx', tsxCode);
console.log("Converted successfully!");
