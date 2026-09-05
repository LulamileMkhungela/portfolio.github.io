with open("about.html", "r", encoding="utf-8") as f:
    about_me = f.read()

# Adapt about_me to about-us.html with studio/agency perspective and frameworks
about_us = about_me

about_us = about_us.replace("<title>About Me | LulaSync</title>", "<title>About Us | LulaSync — Product Design &amp; Digital Studio</title>")
about_us = about_us.replace('content="Johannesburg-based product designer. 8+ years, 12+ shipped products, 6 industries."', 'content="Johannesburg-based digital product studio. 8+ years, 12+ shipped products, 6 industries across 3 continents."')
about_us = about_us.replace("How I build is just as important as what I build.", "How we build is just as important as what we build.")
about_us = about_us.replace("I build robust, revenue-driving digital products people love to use. Based in Johannesburg, working with tech companies worldwide.", "We build robust, revenue-driving digital products people love to use. Based in Johannesburg, partnering with high-growth startups and enterprise teams globally.")
about_us = about_us.replace("About me", "About us")
about_us = about_us.replace("ABOUT ME", "ABOUT US")
about_us = about_us.replace("I thrive in the spaces between.", "We thrive in the spaces between.")
about_us = about_us.replace("Built to fill a gap.", "Built as an embedded product studio.")

with open("about-us.html", "w", encoding="utf-8") as f:
    f.write(about_us)

print("Created about-us.html in Cosmos way successfully.")
