const fs = require('fs');
const path = require('path');

const filePath = 'c:\\Users\\Lucian\\Desktop\\Levio Digital\\levio_live\\viral4hype\\src\\app\\page.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Find the problematic section
const startTag = '<section className="home-testimonials-marquee';
const endTag = '</section>';

const si = content.indexOf(startTag);
const ei = content.indexOf(endTag, si);

if (si !== -1 && ei !== -1) {
    const sectionRaw = content.substring(si, ei + endTag.length);
    // Let's see how many open / close divs/section we have in THIS block
    const opens = (sectionRaw.match(/<div/g) || []).length;
    const closes = (sectionRaw.match(/<\/div>/g) || []).length;
    console.log(`Analyzing Testimonials Section: Opens=${opens}, Closes=${closes}`);
    
    // If closes > opens, we have too many close tags
    if (closes > opens) {
        const diff = closes - opens;
        console.log(`Fixing: Removing ${diff} extra </div> tags`);
        let newSection = sectionRaw;
        for(let i=0; i<diff; i++) {
            // Remove from the very end of the block, just before </section>
            newSection = newSection.replace(/<\/div>\s*<\/section>/, '</section>');
        }
        content = content.substring(0, si) + newSection + content.substring(ei + endTag.length);
    }
}

// Final check on overall page
const totalOpens = (content.match(/<div/g) || []).length;
const totalCloses = (content.match(/<\/div>/g) || []).length;
console.log(`Total Page Trace: Opens=${totalOpens}, Closes=${totalCloses}`);

// If still unbalanced, let's fix the footer area too
if (totalCloses > totalOpens) {
   // Usually it's at the end of the sections
   content = content.replace(/<\/div>\s*<\/main>/, '</main>');
   console.log("Fixed main closure gap.");
}

fs.writeFileSync(filePath, content);
console.log("Done");
