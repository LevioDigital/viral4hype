import re

file_path = r'c:\Users\Lucian\Desktop\Levio Digital\levio_live\viral4hype\src\app\page.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Testimonials Section to Static Grid with Reveal Logic
# Find the start of the section
section_pattern = re.compile(r'<section className="home-testimonials-marquee[^>]*>.*?</section>', re.DOTALL)

def transform_section(match):
    sect = match.group(0)
    # Change background and padding
    sect = sect.replace('bg-off-white py-section-y px-0 overflow-hidden', 'bg-dark py-section-y px-container-x overflow-hidden relative')
    # Update label text color
    sect = sect.replace('text-text-sec-dark', 'text-white/50')
    # Update heading color
    sect = sect.replace('text-text-dark', 'text-white')
    
    # Remove marquee wrappers and replace with grid
    sect = re.sub(r'<div className="home-testimonials-marquee-inner">.*?<div className="marquee-track marquee-track-left">', 
                  '<div className="home-testimonials-marquee-inner max-w-[1400px] mx-auto"> <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6">', sect, flags=re.DOTALL)
    
    # Remove row/track closures and transition markers
    sect = re.sub(r'</div> </div> </div> <div className="home-testimonials-marquee-row marquee-row"> <div className="marquee-track marquee-track-right">', '', sect, flags=re.DOTALL)
    
    # Clean up the end
    sect = re.sub(r'</div> </div> </div> </div> </div> </div> </div> </div> </section>', '</div> </div> </section>', sect, flags=re.DOTALL)
    
    # Update card styles (bg, border, opacity)
    sect = sect.replace('marquee-card bg-white rounded-xl shadow-md border border-dark/[0.05]', 'marquee-card bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/10 opacity-0 transition-opacity duration-300')
    # Fix card text colors
    sect = sect.replace('text-text-sec-dark', 'text-white/60')
    sect = sect.replace('text-text-dark', 'text-white')
    
    return sect

new_content = section_pattern.sub(transform_section, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done")
