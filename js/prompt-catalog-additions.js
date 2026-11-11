/*
 * New South African-context prompts for the AI Design Prompts catalogue.
 * Long-form prompt copy lives here so the catalogue markup stays readable.
 * The library renders these as ordinary free cards and reads `prompt` for
 * preview, copy and detail-modal behaviour.
 */
window.LULA_PROMPT_ADDITIONS = [
  {
    id: "explore-stays-sa",
    title: "Explore stays — South African home screen",
    subtitle: "Prompt only · Mobile UI",
    category: "mobile appstore",
    image: "../public/images/promptsite-covers/explore-stays-sa.svg",
    alt: "Premium Explore stays app home screen with South African listings",
    prompt: `TASK: Design a single, high-fidelity Explore Home screen for a premium South African short-stay booking app.

SCREEN AND OUTPUT
- One iPhone portrait screen, 393 × 852 px, edge-to-edge and entirely inside the screen.
- Minimal, premium, image-led UI. Use Inter and an 8 px spacing system.
- Show only the app screen: no device bezel, no external background, no comparison layout, no Claude heading, no watermark.
- Crisp, correctly spelled interface text and realistic apartment photography.

VISUAL SYSTEM
- Background #FCFBF9, text #111111, accent #F0642D.
- Rounded cards, subtle shadows, generous whitespace and a calm editorial feel.
- Use the orange accent sparingly for active states and key actions.
- Localise naturally for South Africa: use South African English, local place names and rand (R) for any price. Use local address and postcode fields.

LAYOUT
1. Status bar: 9:41 with a Dynamic Island.
2. Header: title “Explore” on the left; notification bell on the right with a small orange dot.
3. Search card: “Where to?” as the title, “Anywhere · Any week · Guests” beneath it, with search and filter icons.
4. Category row with small apartment thumbnails and labels: Studios, Lofts, City flats, Long stays, Luxury. Give Studios a fine orange outline to show it is selected. Let the row crop slightly at the right to imply horizontal scrolling.
5. Featured stay: full-width rounded photograph of a modern Johannesburg apartment with a cream sofa, marble surfaces, dark accents and indoor plants. Add a dark lower gradient, the small badge “FEATURED STAY”, title “The Marble Suite, Rosebank”, subline “Johannesburg · 20% off weekend stays · from R1,450 a night”, and “Book now →”. Treat the price and promotion as editable demo content.
6. Listing section: heading “This week’s picks” with “See all” at the right. Show a bright living-room photo with a white sofa, black cushions, framed art and plants; a white-circle heart button; and a “★ Guest favourite” badge. Use a South African caption such as “Sea Point Light, Cape Town · from R1,250 a night”.
7. Bottom navigation: Home active, Saved, Inbox, Profile. Keep all labels and icons within the safe area.

REALISM AND FINISH
Use authentic, contemporary South African apartment interiors without flags or stereotyped decorative cues. Keep the hierarchy close to a polished travel-booking product: clear search first, categories second, a dominant featured stay, then the weekly pick. The result should feel ready for a product case study, not like a generic wireframe.`
  },
  {
    id: "kindred-dating-home",
    title: "Kindred dating home screen",
    subtitle: "Prompt only · Claude / ChatGPT / Figma Make",
    category: "mobile",
    image: "../public/images/promptsite-covers/kindred-dating-comparison.svg",
    alt: "Three dark dating-app home-screen previews labelled Claude, ChatGPT and Figma Make",
    prompt: `TASK
Create a clean, high-fidelity dark-mode dating-app discovery screen for the fictional South African app Kindred. Present it as a comparison preview for Claude, ChatGPT and Figma Make.

COMPARISON CANVAS
- PNG, 1440 × 1200 px, solid #E6E6E2 canvas.
- Show exactly three separate 375 × 812 px screen frames, side by side, with even gutters and centred as a group.
- Put these labels above the frames, in this exact left-to-right order: “Claude”, “ChatGPT”, “Figma Make”. These are plain text labels only, not product logos.
- Keep the same content and visual identity in all three screens, while giving each a distinct, polished layout interpretation. Labels sit outside the screens; do not add other external copy.
- Each frame has a plain 30 px corner radius, no bezel, no notch and no Dynamic Island. Screen background #09090A with a soft shadow.

VISUAL SYSTEM
Premium dark mode, photo-led, minimal brand colour and restrained glassmorphism. Use Inter Display bold for headings and Inter 400–600 for body. Side padding 22 px. Surfaces #161617; text #F4F4F6; muted text #8E8E98; orange #FF6A1F; verified blue #4C8DFF; star yellow #FFC24B. Glass uses a translucent white fill, 14–22 px blur and a fine translucent border. Orange is limited to the logo, the heart in the Like button and a small chat dot. No pink, no emoji, no extra text or watermark.

SHARED SCREEN CONTENT
1. Status bar: 9:41, signal, Wi-Fi and battery in white; no notch.
2. Top bar: 30 px orange rounded-square logo with a dark heart, “kindred” in 22 px extra-bold white, then 42 px filter and bell circles. Add a small orange notification dot to the bell.
3. “New matches” heading and muted “See all” link.
4. Horizontally scrollable row of 54 px circular profile photos with names: Naledi, Thabo, Amahle, Kabelo, Lerato and Sipho. First two avatars have white new-match rings; the rest have dark-grey rings. Crop the last avatar at the right edge to imply scrolling.
5. Large rounded profile photo card fills the remaining screen, leaving 12 px at the sides and bottom. Show a sharp, well-lit portrait of a South African woman with natural curly hair and a black top, face in the upper third. Add a bottom dark gradient for legibility.
6. Glass match badge “92% match”. Profile details: “Zinhle, 27” with a blue verified mark; pin icon and “Rosebank, Johannesburg · 3 km away”; white-tinted tag pills “Brunch”, “Travel”, “Art”.
7. Centre three actions above the nav: glass X button (54 px), glass yellow-star button (46 px), and white Like button (62 px) with an orange heart.
8. Floating glass bottom navigation, 24 px from the sides and 28 px from the bottom: active Discover/flame in a 50 px white circle with a dark icon, then heart, chat bubble with a tiny orange dot, and profile icons in white. Add a centred 128 × 5 px white home indicator 9 px from the bottom.

LOCAL DETAIL
Use Johannesburg, Gauteng as the sample discovery location, South African names and natural local context. Keep all locations and distances local to South Africa. The screen must remain legible and uncluttered at 375 × 812 px; keep orange minimal and let photography, glass and white carry the design.`
  },
  {
    id: "lacque-conveyor-checkout",
    title: "Lacqué conveyor-belt checkout",
    subtitle: "Prompt only · Interactive e-commerce",
    category: "ecom landing",
    image: "../public/images/promptsite-covers/lacque-conveyor-checkout.svg",
    alt: "Lacqué lip tint products travelling along a wine-coloured conveyor to a red cash register",
    prompt: `PROJECT
Build a one-screen, scroll- and swipe-driven cart and checkout for Lacqué, a glossy, playful, premium South African lip-tint brand. Deliver one self-contained HTML file with inline CSS and vanilla JavaScript; no frameworks. Use Google Fonts only for Montserrat, Manrope and Bodoni Moda.

SOUTH AFRICAN CONTEXT
Use South African English and South African rand throughout. The prices below are illustrative demo prices, not live offers. Use a South African delivery address with suburb, city, province, postal code and +27 phone number. Default the country to South Africa and use local currency, address and postcode conventions.

CONCEPT AND VISUAL SYSTEM
A wide, sideways-panning product world: a deep wine-plum conveyor carries lip-tint tubes lying at angles toward a lacquer-red vintage cash register with gold trim. Under each product is an editorial price label: glossy shade dot, name, small-caps note, hairline, price and slim − / quantity / + pill. The register’s arched crown shows a running split-flap total; each scan flips the digits, pops up a line-price flag and pulls a small side lever. Once all products arrive, the till asks “How would you like to pay?”. A successful demo payment prints a receipt, opens the drawer and changes the flag to PAID.

Brand: Lacqué. Product: Peptide Lip Tint, a tinted lip balm with peptides and hyaluronic acid. Tone: glossy, playful, premium beauty.
- Lacquer red #B0121E; deep lacquer #8C0E18; ink #1C1415; muted #6E6264; paper #FBFAF9; hairline #E3DADA; belt #3B1F2A; gold trim #D9B67E with shadow gold #9C7A45.
- Soft pastel page wash: peach glow top-left, lilac top-right and blush at the bottom over a pale rose gradient.
- Montserrat 600 for headings, italic 500 for red emphasis and tracked small-caps labels; Manrope 400–600 for body; Bodoni Moda only for the Lacqué wordmark and gold till engraving.
- Lacquer red is the only brand accent. Use rounded filled pills, fine hairlines, lots of air and no heavy boxes around products.

VIEWPORT AND LAYOUT
- Exactly one viewport tall (100svh); the page itself never scrolls. User input moves the product belt.
- Header: logo left, lowercase cart / pay / done step pills centred with the active step filled red, underlined “Keep shopping” link right.
- Title: “Your cart” at upper left, Montserrat 600, large responsive type; “cart” italic in lacquer red. No eyebrow or item-count line.
- Conveyor belt: full-width band below the title, about 38% of viewport height (max 420 px), rose-gold rails, fine texture and faint seams every 180 px.
- Product labels below the belt, centred under each item with no card background.
- Bottom bar: previous arrow, red range slider, next arrow, short input hint, then SUBTOTAL and total on the right.

CART CONTENT AND DEMO PRICING
Show six products on the belt. Single tubes lie diagonally at about −26° to +28°, with a strong soft shadow and a blurred shade-colour glow behind each. Stack duplicate tubes offset when quantity is above one. Fan bundle shades side by side with rotations spread over about 44°.
1. Cocoa Crush — Deep chocolate brown — R120 — quantity 1 — #8A3B33.
2. Nude Petal — Soft rosy nude — R120 — quantity 2 — #E8A895.
3. Nude Edit Duo — Bundle · Cocoa + Nude — R220 — quantity 1 — #8A3B33 and #E8A895.
4. Cherry Kiss — Classic glossy red — R120 — quantity 1 — #E0303D.
5. Blue Frost — Icy shimmer top coat — R140 — quantity 1 — #8FB2F0.
6. Full Gloss Set — Bundle · All 4 shades — R440 — quantity 1 — #8A3B33, #E8A895, #E0303D and #8FB2F0.
Default subtotal: R1,280.00. Free local delivery over R500; otherwise show R50 delivery. Recalculate subtotal and delivery whenever quantity changes.

THE TILL
A lacquer-red vintage cash register with gold trim, cream keyboard deck, gold feet and a gold side lever with a red knob. Its arched crown has a cream window with the Bodoni Lacqué wordmark, dark split-flap tiles with cream digits and a red small-caps message. Cycle messages through “Scroll to scan”, “Scanning 3 of 6”, “How would you like to pay?” and “Paid · thank you”. A cream flag on a gold rod pops up with the scanned line amount and reads PAID after checkout. The deep-red drawer has a gold outline, engraved Lacqué wordmark and a gold bar handle; slide it out 30 px on success. Place the till at the far end of the belt and scale it to fit without obscuring the title.

PAYMENT KEYS
Show four round typewriter keys with gold rings, pressed-down depth and staggered bobbing once scanning is complete:
- Card, with Visa and Mastercard marks.
- PayFast / Instant EFT, representing a familiar local checkout option.
- Apple Pay.
- PayShap.
Use monochrome or restrained payment marks so they do not compete with the Lacqué accent. Tapping a key sinks it 5 px and opens the checkout sheet.

INTERACTION AND MOTION
Ease a target progress value from 0 to 1; finish the belt pan by 90%, then pause at the till for the final 10%. Support mouse wheel/trackpad, touch swipe left or up, mouse drag on the belt, arrow keys, Page Up/Down, Space, Home/End, the range slider and previous/next buttons. Prevent document scrolling while the interaction is active. Mark item i scanned at progress ≥ (i+1)/6 × 0.97. Each scan flips the total, raises its price flag and pulls the lever. When all products are scanned, move the step pill to pay and update the hint. Respect prefers-reduced-motion.

CHECKOUT SHEET AND SUCCESS
Use a blurred blush backdrop and a responsive sheet that slides up; close with Escape, backdrop click or ×. Card form: card number with 4-4-4-4 spacing, expiry MM / YY, CVC, name, email, South African phone number, street address, suburb, city, province, postal code and country (South Africa selected; Namibia, Botswana, Lesotho, Eswatini and Other available). Show order summary, local delivery and “Pay R1,280.00” with the total recalculated from the cart. Wallet/local methods use their own branded title, the same shipping form and summary. Add inline validation, focus the first invalid field, then show “Processing…” and a receipt with a red tick, “Thank you, gorgeous.”, order number LQ-xxxxx, monospace receipt lines with a torn lower edge and “Back to the shop”. Behind it, open the drawer, show the final split-flap total and move the step to done.

RESPONSIVE, ACCESSIBILITY AND SAFETY
On phones, hide step pills and product notes, let the slider stretch, scale the till to the available width and use a bottom sheet. Respect safe-area insets, keyboard use, visible focus, reduced motion and no horizontal page scroll. This is a front-end demo only: do not collect or transmit card data and clearly note that Shopify, PayFast or another provider must be connected for real payments.`
  },
  {
    id: "detour-sa-travel-landing",
    title: "Detour South African travel landing page",
    subtitle: "Prompt + live preview + code",
    category: "landing hero",
    image: "../public/images/promptsite-covers/detour-sa-travel.svg",
    previewUrl: "./detour.html",
    downloadUrl: "./detour.html",
    alt: "Detour travel booking landing page featuring South African destinations",
    prompt: `TASK
Build a one-page landing website for a trip-booking app called Detour as one self-contained HTML file (HTML, CSS and vanilla JavaScript; no frameworks).

BRAND AND AUDIENCE
- Brand: Detour. Tagline: “Trips worth the detour”.
- Home city: Johannesburg, South Africa (JNB / OR Tambo).
- Audience: young South African travellers who want more than the usual tourist trips.
- Use South African English, local city and airport names, and ZAR for any displayed prices. Set Johannesburg (JNB) as the default departure city.
- Brand voice: warm, confident and conversational, with subtle South African character rather than slang overload.

VISUAL SYSTEM
- Cream #FFF7EC, navy #13294B, coral #FF7A59, coral-tint #FFE6DC, muted blue #4A5B78 and white.
- Coral is the only brand accent. Navy is for text, dark sections and overlays; coral tint for soft panels. No yellow or aqua accents.
- Yellowtail script for the logo, Fraunces 900 for large headlines and Archivo 500–800 for body and controls. Buttons and labels are uppercase with slight tracking.
- Primary buttons: coral pill with navy text, switching to navy with white text on hover. Secondary buttons: white with navy outline. On dark sections use transparent white outlines. Minimum button height 48 px.
- Special forms: scalloped stamp-photo edges, arch-topped images, a notched ticket with a dashed inner border, spinning circular text badges and large panels with about 40 px corners.

IMAGE DIRECTION
Use crisp, vivid travel-postcard photography with no lettering baked into images. Prefer recognisable South African scenery and diverse Black South African travellers without stereotypes. Generate local images for: Cape Town’s Table Mountain and Atlantic coast at golden hour; a joyful young Black woman on a boat; a teal campervan on the Garden Route; Drakensberg peaks and a hiking trail; Durban’s warm Indian Ocean shoreline; a dhow off Zanzibar; a smiling young Black man with a backpack at a scenic South African lake; and a plane wing over sunset clouds. If images cannot be generated, use attractive CSS illustrations rather than broken external URLs.

SECTIONS, IN ORDER
1. TOP TICKER — Thin navy bar with white uppercase text scrolling sideways: “Flights + stays in one booking · Curated by locals · Pay in instalments”. Use coral dots between items and pause on hover.

2. HERO — Full-height scenic Cape Town / coast image with rounded bottom corners, gentle Ken Burns zoom and slight scroll parallax. Add a navy gradient, darker on the left. Navigation: script logo; frosted pill links Trips, Destinations, Trip styles, The app; Sign in outline and coral Get the app button. Left headline: “Trips worth / the detour”, with “the detour” coral italic. Supporting copy: “Flights, stays and local experiences booked together in one easy app, for travellers who want more than the usual.” Buttons: “Plan my trip →” and “See featured trips”. On the right, a spinning circular “SEARCH · BOOK · GO · ALL-IN PRICES” badge with a gently bobbing coral centre and paper-plane icon.

3. BOOKING BAR — White card floating over the hero’s bottom edge, navy border and soft shadow. Tabs Full trip / Stays only. Fields: From “Johannesburg (JNB)”, Where to? placeholder “Cape Town, Durban, Zanzibar, anywhere…”, Leaving with a date picker set three weeks ahead, Travellers with − / +. Coral “Find trips” button with search icon and subtle pulse. On submit show an accessible toast: “Searching trips to [destination] for [number] travellers…”.

4. HOW IT WORKS — Two columns. Left coral eyebrow “How Detour works” and headline “Plan less. Go further.” Right explanatory copy and “Explore trips →”. Draw a winding road with small cars and coral map pins. Below, three tilted stamp photos with captions “Road trips 01”, “Island hopping 02”, “Sea views 03”; a coral “Your trip, your way” sticker on the middle card. Cards float gently and tilt toward the pointer on hover.

5. STORY — Left collage of Cape Town and Garden Route / Zanzibar photos, a spinning navy stamp reading “LOCAL HOSTS · REAL STORIES” and a coral badge “One booking / Flight + stay + more”. Right coral-tint ticket card with notched sides and dashed inset border: eyebrow “Why Detour”, headline “Off the usual path!”, two short paragraphs about trips built with local hosts and communities, and coral “Meet the trips →”.

6. SLOGAN TICKER — Slightly tilted coral strip with navy Fraunces text scrolling the opposite way: “Don’t just book it. Live it. · #TakeTheDetour”.

7. FEATURED TRIPS — Large coral-tint rounded panel. Top row has eyebrow “Featured trips”, headline “Trips people can’t stop talking about” and the note “Hover a trip to find it on the map, or tap a pin.” Beside it, an illustrated South African / regional map card with animated dashed routes and four coral pins. Below, a 2×2 desktop grid of white navy-bordered cards; one column on narrow phones. Include:
   - Coastline Unpacked — Cape Town, 5 nights, flight + stay.
   - Garden Route by Road — Garden Route, 6 nights, road trip + stays.
   - Drakensberg Reset — Drakensberg, 4 nights, guided hikes.
   - Dhow & Spice — Zanzibar, 7 nights, flight + stay.
Each card has a large photo, numbered tag, short useful description, location / nights / extra chips and “Book this trip →”. Hover lifts the card and zooms its image; the map pin bounces. Tapping a pin scrolls to the matching card; Book this trip fills that destination into the booking bar. Do not add fabricated reviews, traveller counts or performance statistics.

8. PICK YOUR KIND OF TRIP — Left arch-shaped image with thick white edge, navy “Beach · Zanzibar” label and coral “Start booking →” button overlapping its edge. Right side has eyebrow “Trip styles”, headline “Pick your kind of trip”, short copy and four icon pills: Beach, City breaks, Adventure, Culture. Selecting one turns it coral and swaps the arch photo with a smooth fade/zoom: Beach → Durban coast, City → Cape Town, Adventure → Drakensberg, Culture → Maputo.

9. DESTINATIONS — Eyebrow “Trending now”, headline “Where people are going” and outline “See all destinations →” button. Four white cards with arch-topped photography: Cape Town, Durban, Drakensberg and Zanzibar. Each has a round arrow that rotates and turns coral on hover; the photo zooms.

10. APP SECTION — Navy rounded panel with slowly moving coral glow. Left: coral eyebrow “The Detour app”, headline “Your whole trip. One app.” with “One app.” coral, paragraph, three numbered steps (Search where you want to go / Pick your flight, stay and extras / Pay once and pack your bag) and App Store / Google Play buttons. Right: a floating stamp photo of a South African traveller and a phone preview of a booking summary: “Garden Route Escape · JNB → CPT · Coastal stay · 6 nights · 2 adults” with rows sliding in and pulsing coral “Confirm trip”.

11. FOOTER — Sunset-through-plane-window image with navy gradient for legibility. Centre headline “Your next trip starts here.” with “starts here.” coral, supporting copy and frosted email pill with “Send me trips →” and a confirmation toast. Four-column links: logo and short blurb / Explore / Company / Help. Underlines slide in coral on hover. Bottom line “© 2026 Lulamile Mkhungela · Detour concept” and “Made for people who take the long way round.”

MOTION, RESPONSIVENESS AND ACCESSIBILITY
Reveal headline words as sections enter view; stagger section, card and button entrances; use small lifts, zooms and arrow nudges. Add floating stamps, wiggling stickers, spinning badges, tiny moving cars, dashed map routes and a back-to-top button after scrolling. Respect prefers-reduced-motion by showing everything still. Responsive nav and grids must work on phones without horizontal scrolling; use accessible buttons and links, useful alt text, strong contrast, keyboard support and reduced-motion handling. Keep every claim and price editable demo content, and do not invent reviews, user counts or statistics.`
  },
  {
    id: "lulamile-portfolio-hero",
    title: "Lulamile Mkhungela portfolio hero",
    subtitle: "Prompt only · Personal portfolio",
    category: "portfolio hero",
    image: "../public/images/promptsite-covers/lulamile-portfolio-hero.svg",
    alt: "Playful notebook-paper portfolio hero for Lulamile Mkhungela",
    prompt: `TASK
Build only the hero section and navigation bar of a personal portfolio as one self-contained HTML file using HTML, CSS and vanilla JavaScript. No frameworks. Use only the owner details below; the owner is Lulamile Mkhungela.

OWNER DETAILS
- Name: Lulamile Mkhungela.
- Short hero name: LULA.
- Brand: HalfMan-HalfMachine.
- Roles: Devsigner; Product Designer; UX/UI/CX Designer; UI Developer.
- Location: Johannesburg, Gauteng, South Africa.
- Availability: Available for select work.
- Headline start: “I design and build”. Rotate through “digital products”, “web experiences”, “design systems” and “useful tools”.
- Primary button: “Explore my work”. Secondary button: “Get in touch”.
- Nav links: Home, About, Work, Services, Contact.
Do not substitute another person’s name or invent biographical details. Use South African English.

STYLE
A playful designer scrapbook on ruled notebook paper: pixel-font name, handwritten notes, sticky-note tags, chunky black outlines and hard offset shadows, arranged as a bento grid. Avoid generic SaaS styling, purple gradients, glassmorphism, rounded tile corners and stock illustrations.

DESIGN TOKENS
- Paper #f4f4f1; ruled line #e2e3df; ink #141414; muted #5d5f5a; white card #ffffff; yellow #f6c945; pink #f0559a; green #21a35b; blue #2348d6; red outline #e2554a; sky #c9d6ff.
- Background: horizontal ruled lines every 28 px.
- Google fonts: Jersey 10 for pixel display name and city; Gaegu for handwritten notes; Space Mono for nav, tags, status and buttons; Instrument Sans for body/headline.
- Hero name clamp(84px, 12.5vw, 180px); city clamp(44px, 4.6vw, 60px); headline clamp(30px, 3.6vw, 50px), weight 500, tight spacing and 1.08 line height; labels 11 px mono uppercase.
- Desktop page padding 80 px, tablet 32 px and phone 16 px. Tile gap 16 px. Square tiles, 2 px ink borders and hard 8 px offset black shadow on hover. Circles only for logo, dots and badge.
- Spring easing cubic-bezier(.34,1.56,.64,1). All content visible on load; animations only settle elements into place. Turn animation off for prefers-reduced-motion.

NAVIGATION
Sticky at top with blurred paper background, thin bottom border and a short slide-down entrance. Left: 30 px pink circle with a white pixel L and slow spin; links Home, About, Work, Services, Contact in mono uppercase. Highlight the active link in yellow and draw an underline on hover. Right: three 14 px bouncing yellow/pink/green dots with ink outlines and an outlined “✉ Contact” button. On phones show only logo, active link, one more link and Contact.

HERO GRID
Desktop: three columns, 1.5fr / 1fr / 0.9fr, two rows and about 640 px minimum height. Main tile spans both rows on the left; portrait tile spans both rows in the middle; yellow Roles and sky-blue Location tiles stack on the right.
- Main tile: white, responsive padding. Start at the top with generous gaps. Handwritten “hey, my name is”; LULA in pixel font inside a white selected-layer box with a 2 px red outline and four square corner handles; pulsing green dot plus “AVAILABLE FOR SELECT WORK” in mono; headline “I design and build [rotating phrase] ✺”, rotating phrase in blue with type/delete motion and a blinking pink caret, pink star rotating slowly; black “▶ Explore my work →” button and white outlined “Get in touch” button. Buttons are square with mono uppercase, arrow nudge and hard pink hover shadow.
- Portrait tile: full-bleed photo with object-fit cover and focal point near 50% 22%. Use an attached real portrait of Lulamile if supplied. If no portrait is supplied, show a designed photo placeholder; do not invent or substitute another person’s identity. Add a white, ink-outlined handwritten “that’s me ✦” sticker rotated −4° and floating at bottom-left.
- Roles tile: yellow background, handwritten “I’m a…” and one white mono tag for each listed role, slightly rotated differently; tags slide in one by one, straighten and nudge on hover.
- Location tile: sky background, bobbing map-pin icon and handwritten “based in”; show JOHANNESBURG on one pixel-font line and SOUTH AFRICA below. Add a 118 px circular spinning badge at bottom-right with “AVAILABLE FOR WORK ✦ HALFMAN-HALFMACHINE ✦ JOHANNESBURG ✦” around a yellow core and gently pulsing star.

MOTION AND RESPONSIVE RULES
Tiles bounce into place one after another with a small rotation; name box wipes open and letters drop in; roles slide in; status, headline and buttons fade in last. Each tile lifts 4 px up-left and gains its hard shadow on hover. On desktop add an outlined custom cursor with a pink dot that grows and fills yellow over buttons; buttons pull slightly toward the pointer.
- At tablet width ≤980 px use two columns: main full width on top, portrait spanning two rows on the left, roles and location stacked on the right.
- At phone width ≤640 px use one column ordered Main, Portrait (about 440 px minimum), Roles, Location; badge shrinks to 96 px.
- No horizontal scroll at 390 px. Add visible focus states and useful portrait alt text. Keep the full name “Lulamile Mkhungela” available to screen readers even though the visual wordmark reads LULA.

OUTPUT
Return the complete self-contained HTML source. Google Fonts are the only external resource.`
  },
  {
    id: "meridian-freight-cinematic",
    title: "Meridian freight hero — cinematic",
    subtitle: "Prompt only · Website hero concept",
    category: "landing hero",
    image: "../public/images/promptsite-covers/meridian-freight-cinematic.svg",
    alt: "Cinematic Meridian freight landing-page hero over a South African port at sunset",
    prompt: `Create a premium modern logistics website hero UI design, desktop, 16:9 at 1440 × 810 px. Make it clean, cinematic, high-end SaaS, with crisp interface text and a photorealistic South African freight background.

CONTEXT
Meridian is a fictional freight brand serving South Africa and the wider SADC region. Bring local context into the scene: warm sunset over Durban harbour / the Indian Ocean, with the Port of Durban suggested in the distance. A white passenger jet flies straight toward the camera, centred low in frame with wings spread; blue sky and golden-orange clouds fill the top. Keep the plane proportionate and undistorted.

LAYOUT AND COPY
- Transparent header over the image. Left: orange outlined circle with a vertical line through it, then white bold “Meridian”. Centre links in white: Home (active with orange underline), Services, Tracking, Industries, Company. Right: solid orange “Get a Quote →” button.
- Apply a light navy gradient overlay, slightly darker at the top and behind copy while keeping the image warm and bright.
- Centre the hero copy horizontally. Eyebrow: small green live dot and widely spaced uppercase “LIVE FREIGHT TRACKING”.
- Large, tight sans headline on two lines: “Every container. Every mile.” with “Every mile.” in #FF6B1F, then “Accounted for.” in white.
- Subheadline: “Sea, air and road freight with live visibility from the Port of Durban to your doorstep.”
- White rounded search bar with soft shadow, grey magnifier, placeholder “Enter container or B/L number” and an orange “Track →” button inside on the right.
- At the bottom, two dark frosted-glass rounded stat panels flank the plane. Show “98.7% On-time arrival” and “340+ Ports worldwide” on the left; “180+ Routes served” and “24/7 Live support” on the right, with thin dividers, large white values and small pale labels.

COLOUR AND TYPE
Primary accent #FF6B1F orange; deep navy #08141F; white text; green live dot #2EE59D. Use Inter Display for the tight headline and Inter for body. Keep strong contrast and an uncluttered composition.

METRICS AND FINISH
The displayed figures are illustrative design placeholders for a fictional concept, not verified Meridian performance claims; keep them easy to replace before any real launch. Use South African English. No extra cards, misspelled text, watermark, clutter, distorted aircraft, unsupported claims or blurry UI.`
  },
  {
    id: "meridian-freight-split",
    title: "Meridian freight hero — split layout",
    subtitle: "Prompt only · Website hero concept",
    category: "landing hero",
    image: "../public/images/promptsite-covers/meridian-freight-split.svg",
    alt: "Split-layout Meridian freight landing-page hero with Durban port imagery",
    prompt: `Create a premium modern logistics website hero UI design for desktop, 16:9 at 1440 × 810 px. Clean split layout, high-end SaaS landing page, sharp crisp UI. Meridian is a fictional South African freight brand serving the wider SADC region.

HEADER
A separate solid-white header bar spans the top, clearly apart from the hero, with a thin light-grey bottom border. Left: orange outlined circle with a vertical line through it, dark navy bold wordmark “Meridian”, then links Home (active, orange underline), Services, Tracking, Industries, Company. Right: grey Sign in link and solid orange “Get a Quote →” button.

HERO AREA
Below the header, use a moody sunset-cloud image with a medium-dark navy overlay; keep the clouds faintly visible rather than black. Use a two-column layout.

LEFT COLUMN — about 45% width, vertically centred and left aligned:
- Small green live dot and widely spaced white uppercase “LIVE FREIGHT TRACKING”.
- Three-line, huge tight sans headline: “Every container.” in white; “Every mile.” in orange #FF6B1F; “Accounted for.” in white.
- Two-line light-white subheadline: “Sea, air and road freight with live visibility from port to doorstep. Track a shipment from Durban harbour to a Johannesburg warehouse.”
- Solid-white rounded search bar with soft shadow, grey magnifier, placeholder “Enter container or B/L number” and orange “Track →” button inside on the right.
- Four stats in one row under the search bar with thin vertical dividers: “98.7% On-time arrival”, “340+ Ports worldwide”, “180+ Routes served”, “24/7 Live support”. Large white values, small light labels.

RIGHT COLUMN
A tall rounded image card with a fine frosted-glass border and deep soft shadow. The photo shows a white jet flying toward the viewer above a large container ship moving through the Port of Durban, cranes visible along the harbour, golden-hour light with warm orange and cool ocean-blue tones. Keep plane, ship and cranes realistic and correctly proportioned.

COLOUR AND TYPE
Orange #FF6B1F is the primary accent; deep navy #08141F, white text and a green #2EE59D live dot. Use Inter Display for the headline and Inter for body. Keep the form legible and the image crisp.

METRICS AND FINAL RULES
The numbers are illustrative placeholders for a fictional design concept, not verified company claims; make them easy to replace before launch. Use South African English and local freight geography. No clutter, extra cards, misspelled text, watermark, distorted plane or ship, unsupported performance claims or blurry UI.`
  }
];
