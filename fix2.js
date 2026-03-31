const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

// Fix invalid CSS prop: { -SliderCount: '5' } -> remove and use data attr
c = c.replace(/style=\{\{ -SliderCount: '5' \}\}/g, '');

// Fix autocomplete -> autoComplete (React prop)
c = c.replace(/autocomplete=/g, 'autoComplete=');

// Fix tabindex -> tabIndex (React prop)
c = c.replace(/tabindex=/g, 'tabIndex=');

// Fix srcset -> srcSet (React prop)
c = c.replace(/srcset=/g, 'srcSet=');

// Fix rows="4" on textarea to rows={4}
c = c.replace(/rows="4"/g, 'rows={4}');

// Fix data-astro-cid-7vowqn2k="true" -> just remove the ="true" part
c = c.replace(/data-astro-cid-7vowqn2k="true"/g, 'data-astro-cid-7vowqn2k');

// Fix data-astro-cid props (not valid but harmless, keep as-is — they just need to not have values with booleans)
// Actually remove all data-astro-cid props since they serve no purpose in React
c = c.replace(/\s*data-astro-cid-[a-z0-9]+/g, '');
c = c.replace(/\s*data-astro-cid-xvhbia3p/g, '');

fs.writeFileSync('src/app/page.tsx', c);
console.log('Done fixing JSX!');
