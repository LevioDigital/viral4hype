with open(r'c:\Users\Lucian\Desktop\Levio Digital\levio_live\viral4hype\src\app\page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

opens = content.count('<section')
closes = content.count('</section>')
print(f"Sections: opens={opens}, closes={closes}")

main_opens = content.count('<main')
main_closes = content.count('</main>')
print(f"Main: opens={main_opens}, closes={main_closes}")

div_opens = content.count('<div')
div_closes = content.count('</div>')
print(f"Divs: opens={div_opens}, closes={div_closes}")
