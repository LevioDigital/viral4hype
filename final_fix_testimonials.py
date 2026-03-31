import re

path = r'c:\Users\Lucian\Desktop\Levio Digital\levio_live\viral4hype\src\app\page.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Define the clean cards
cards_content = """
              <div className="marquee-card bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/10 p-8 transition-opacity duration-300">
                <div className="flex gap-[3px] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="url(#home-testimonials-star-grad)" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-white/50 leading-[1.7] mb-4">
                  "I am blown away by the work of Brilliant Digital. The website they have produced is stunning. They delivered to the brief and then exceeded expectations."
                </p>
                <p className="text-[0.8rem] font-semibold text-white">Sarah S.</p>
              </div>

              <div className="marquee-card bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/10 p-8 transition-opacity duration-300">
                <div className="flex gap-[3px] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="url(#home-testimonials-star-grad)" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-white/50 leading-[1.7] mb-4">
                  "He guided the entire process, brought my ideas to life and offered his advice to make them better. I've used other developers before. I'll never go anywhere else."
                </p>
                <p className="text-[0.8rem] font-semibold text-white">Ryan H.</p>
              </div>

              <div className="marquee-card bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/10 p-8 transition-opacity duration-300">
                <div className="flex gap-[3px] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="url(#home-testimonials-star-grad)" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-white/50 leading-[1.7] mb-4">
                  "The whole process was clearly explained and went very smoothly. He even provided training for me to learn how to use my website."
                </p>
                <p className="text-[0.8rem] font-semibold text-white">Wendy B.</p>
              </div>

              <div className="marquee-card bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/10 p-8 transition-opacity duration-300">
                <div className="flex gap-[3px] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="url(#home-testimonials-star-grad)" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-white/50 leading-[1.7] mb-4">
                  "Consistently provided outstanding support over the years. I went back because they did such an amazing job the first time."
                </p>
                <p className="text-[0.8rem] font-semibold text-white">Katy W.</p>
              </div>

              <div className="marquee-card bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/10 p-8 transition-opacity duration-300">
                <div className="flex gap-[3px] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="url(#home-testimonials-star-grad)" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-white/50 leading-[1.7] mb-4">
                  "The website is super-modern looking and it's already ranking highly on Google. I wouldn't hesitate to recommend Brilliant Digital."
                </p>
                <p className="text-[0.8rem] font-semibold text-white">Adam F.</p>
              </div>

              <div className="marquee-card bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/10 p-8 transition-opacity duration-300">
                <div className="flex gap-[3px] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="url(#home-testimonials-star-grad)" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-white/50 leading-[1.7] mb-4">
                  "Very professional, incredibly talented, with a great ability to listen and understand personal needs. Super easy to work with."
                </p>
                <p className="text-[0.8rem] font-semibold text-white">Edyta L.</p>
              </div>
"""

new_section = f"""
        <section className="home-testimonials-marquee bg-dark relative py-32 overflow-hidden border-t border-white/5">
          <div className="container-reveal-mask absolute inset-0 pointer-events-none z-10" style={{{{
            maskImage: 'radial-gradient(circle 450px at var(--rx, -1000px) var(--ry, -1000px), black 0%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle 450px at var(--rx, -1000px) var(--ry, -1000px), black 0%, transparent 100%)'
          }}}}>
            <div className="max-w-[1400px] mx-auto px-container-x">
              <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 pt-10">
                {cards_content}
              </div>
            </div>
          </div>
          
          <div className="max-w-[1400px] mx-auto px-container-x opacity-10">
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 pt-10 pointer-events-none">
              {cards_content}
            </div>
          </div>

          <svg width="0" height="0" className="hidden">
            <defs>
              <linearGradient id="home-testimonials-star-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff" />
                <stop offset="100%" stopColor="#666" />
              </linearGradient>
            </defs>
          </svg>
        </section>
"""

# Replace anything from <section className="home-testimonials-marquee to the next </section>
pattern = re.compile(r'<section className="home-testimonials-marquee.*?</section>', re.DOTALL)
new_content = pattern.sub(new_section.strip(), content)

with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Success")
