# Admin/SPEC.md — bagboys.com Site Specification

Source of truth for the rebuild. Update this document as content is
confirmed, corrected, or filled in.

**Research method:** Live site was unreachable (ECONNREFUSED) during
initial session. Content below was gathered from Google's index cache,
search snippets, and third-party sources. Items marked ⚠️ need
verification against the live site or by Frank.

---

## 1. Site Overview

**Domain:** bagboys.com
**Original platform:** Weebly / Square
**Target platform:** Astro + Cloudflare Pages
**Character:** The band describes it as "the online cabin home of the
Bagboys" — a warm, informal, slightly rustic feel.

---

## 2. The Band

**Full name:** The Bagboys
**Based in:** Boston / Cambridge, MA
**Active since:** ~1987 (25+ years)
**Genre:** Bluegrass, Western Swing, Old Time, Americana originals
**Style notes:** Family-friendly. Mix of originals and trad. Move
easily from driving bluegrass to bouncy Western swing. Known for humor.

### Band Members (current lineup)

| Name | Instruments | Notes |
|---|---|---|
| Harvey Bag | Bass, occasional guitar, vocals | Co-founder. "Dusty soul of a cowboy fresh off the cattle drive." Prolific composer. |
| Frank Drake | Mandolin, guitar, bass, vocals | Longtime Boston music scene stalwart. Prolific composer. |
| Gretchen Bowder | Five-string banjo, guitar, vocals | Respected banjo practitioner. |
| Jon Ross | Mandolin, dobro, guitar, bass, vocals | Wide musical experience, played all over the world. |

### Discography (confirmed from Our Music page screenshots)

Listed here in probable reverse chronological order (most recent first,
matching how they should appear on the Our Music page):

---

**The Bagboys Present the Continuing Adventures of Kernel Korn and the Silk Brocade Featuring the Tail of Charlie Muttonchops and the Conclusion of the Dream Trilogy**
- Year: ⚠️ confirm
- 100% original Harvey Bag songs
- Cover: colorful illustrated / pulp-comic style art
- Track list (confirmed from YouTube):
  1. We'll Meet Again
  2. Work Song
  3. The Siren Sang Stardust
  4. My Baby's Smile
  5. The Senescence Blues
  6. Lullabye
  7. Closer to the End
  8. Was That a Dream?
  9. Ain't No Flies on Me
  10. Ain't Seen My Home
  11. Sigh No More
  12. Goodbye
- YouTube playlist: https://youtube.com/playlist?list=OLAK5uy_mRmJ6FLAs8lFrNYriHhHiWMXXuHEDGaIw
- Originally promoted on homepage as "new CD" — now should live on Our Music page only

---

**Four Kinds Of Pie** (2011)
- "All original songs!"
- Cover: photo of 4 actual pies in 2×2 grid on colorful patterned backgrounds
- Track list:
  1. Take Me To The Show
  2. Brand New Old Joe Clark
  3. Back From the Brink
  4. Interlude
  5. I Still Dream of You
  6. Maggie Be Mine
  7. You Can't Go Home Again
  8. Judith in the Rain
  9. Hard Times
  10. What's the Name of That Song?
  11. Mercy in Paint
  12. Somerville
  13. Secrets
- ⚠️ "SAMPLES:" section visible but cut off — audio samples likely follow

---

**PLUMS!**
- Subtitle: "Live stage and radio performances, hand picked!"
- Year: ⚠️ confirm ("est. 1985" appears on cover — likely band founding date, not release year)
- Cover: vintage fruit-crate label design — blue/orange/yellow, plums, "The Bagboys Brand LIVE!"
- Track list:
  1. You Know I'm Right
  2. My Dixie Darling
  3. Dad's Song
  4. Kisses Saved
  5. Waiting For G
  6. Sweet Molly Brown
  7. Jigglin' Pigs
  8. Baby-O
  9. Dinah
  10. Cold Rain And Snow
  11. Nashville
  12. Mom & Dad
  13. Sublimation Blues

---

**Just Say Moo**
- Described in press as "second CD"
- Cover: cartoon grinning cow in circle, brown kraft-paper background
- Track list:
  - Lost & I'll Never Find the Way
  - What Do You Dream
  - Hank's Song
  - Deep Water
  - Hindsight is 50/50
  - A Two Step's One Too Many
  - Just Say Moo
  - Blues For You
  - Thats Right I May Be Wrong
  - Unpackin' Jackson
  - Wild Bill Jones
  - Days of August
- Press quote (Bluegrass Breakdown):
  > "From the sparkling banjo introduction to Lost and I'll Never Find
  > the Way through the sentimental closer Days of August, this
  > self-described 'post modern string band' has put together a coherent
  > and infectious set of tunes for its second CD. ...the overall sound
  > is defined by the band's strong harmonies, inventive picking, and
  > enviable sense of timing."

---

**Paper or Plastic**
- Year: ⚠️ confirm
- Out of print (per Merchandise page)
- ⚠️ Track list not yet captured; cover not yet seen
- Digital copy available by inquiry

---

**Sensible Music For Troubled Times** (1987)
- Debut CD
- Out of print (per Merchandise page)
- ⚠️ Track list not yet captured; cover not yet seen
- Digital copy available by inquiry

---

⚠️ Confirm complete album order with Frank. **Six albums confirmed total.**
Probable chronological order (oldest → newest):
1. Sensible Music for Troubled Times (1987)
2. Paper or Plastic (⚠️ year?)
3. Just Say Moo (described as "2nd CD" in one review — ⚠️ reconcile)
4. PLUMS! — live compilation (⚠️ year?)
5. Four Kinds Of Pie (2011)
6. Kernel Korn (most recent, ⚠️ year?)

### Notable Quote

> "Local legends the Bagboys were creating Americana long before the
> genre had a website." — Paul Burch

---

## 3. Navigation Structure

Navigation items confirmed from Google's index (order approximated —
⚠️ verify exact order and grouping against live site):

**Original nav (for reference):**
UPCOMING SHOWS | BIO | RESIDENCIES | OUR MUSIC | BOOK US! | CONTACT US | PRESS | MORE...
MORE... contained: Merchandise, Archives, Scrapbook, Plough, Ossipee, Burren,
Promo Photos, "Historical" Posters, Videos, Past Gigs

**Rebuilt nav (decided):**
HOME | BIO | OUR MUSIC | HISTORY | CONTACT US

- Upcoming Shows → dropped (band retired)
- Book Us! → dropped (band retired)
- Press → dropped (Frank's decision — see Admin/DROPPED.md)
- Residencies → moves under History hub
- MORE... dropdown → eliminated; all content either dropped or moves under History
- Merchandise → dropped as standalone; CD info folds into Our Music

**History hub — confirmed contents so far:**
- Residencies section (Plough & Stars, the Burren, Ossipee) — updated for retirement
- Past Gigs
- Videos
- Scrapbook
- "Historical" Posters
- Archives
- Promo Photos
- ⚠️ Plough, Burren, Ossipee sub-pages — keep as deep-links from History hub,
  or fold their content directly into a single History page? Decide as we
  review those pages.
- ⚠️ Frank may add new original historical narrative content to the hub

---

## 4. Pages — Content Inventory

### 4.1 Home — Upcoming Shows

**URL:** `/`
**Title:** "The Bagboys — UPCOMING SHOWS"

Content ⚠️:
- Likely shows a list of upcoming gig dates, venues, and times
- Search result noted: "upcoming gigs are listed at gretchenbowder.com"
  — the site may link out or embed from there
- ⚠️ Capture full content from live site when accessible

---

### 4.2 Bio

**URL:** `/bio.html` → Astro: `src/pages/bio.astro`

**Layout (confirmed from screenshots):**
- Four-panel individual member photo strip (side by side, same stage
  background), photo credit: Georgia Bowder-Newton
  L→R: Gretchen (banjo, white top), Harvey (electric guitar, black shirt),
  Frank (mandolin, blue shirt, glasses), Jon (mandolin, red shirt)
- Bio text: bold, centered, large — one continuous paragraph
- Press quotes: centered, three quotes
- Past members section: two-column list grouped by instrument

**Full bio text (verbatim):**

THE BAGBOYS!

For over 25 years Boston's Bagboys have been dazzling music-loving
audiences from festival, concert, and nightclub stages all throughout
New England with their irresistible, from-the-heart acoustic string
music. Founder Harvey Bag anchors the Bagboys with his bass and
occasional guitar, and sings with the dusty soul of a cowboy fresh off
the cattle drive. Frank Drake, singing and variously displaying his
prowess on guitar, mandolin, and bass, is a longtime, well-known Boston
music scene stalwart. Both Frank and Harvey keep the band well stocked
with their original compositions, all of which are bonafide
brand-new-old-time songs and future americana classics. Gretchen Bowder
sings and is a respected practitioner of the five-string banjo, and
takes her turn on guitar too. Gretchen shares with the Bagboys her love
and appreciation of a variety of classic and lesser-known material,
ranging from Appalachian melodies to favorites of the great American
songbook and bossa nova. Jon Ross brings to the Bagboys his lifetime of
wide musical experience, played all around the world. A typical
performance keeps Jon busy switching from mandolin to dobro to guitar to
bass, and singing, too. Singing, swinging, or taking it down to the old
home place, the Bagboys bring warmth, humor, honesty, and musical
excellence to each and every show!

**Press quotes (verbatim):**

> "Local legends the Bagboys were creating Americana long before the
> genre had a website and an army of preened publicists."
> — Nashville songwriter Paul Burch [paulburch.com]

> "The Bagboys have infectious energy, friendly voices, consistently
> pleasing picking, and a nice way with presenting popular but not
> overdone favorites. But what is especially appealing about this
> ensemble is that they can write great original material, and by Elsie,
> they do!" — Bluegrass Unlimited

> "I love this band. They are somewhat reminiscent of the Austin Lounge
> Lizards, Riders in the Sky or the Red Clay Ramblers. But don't let
> their over-the-top humor fool you; this is a band of serious, talented,
> and historically knowledgeable musicians. While they are capable of
> some pretty convincing genre hopping — moving easily from solid driving
> bluegrass to bouncy Western swing to contemporary folk — they're not
> content with merely aping these traditions but inhabit them as living,
> contemporary forms." — Freight Train Boogie

**Past members and frequent collaborators (verbatim from page):**

"Many superb players have worked with the Bagboys. We don't have room
to list everyone who has sat in with us over the years (although we'd
like to!) but some past members and frequent past collaborators have
included:"

| Instrument | Name | Link |
|---|---|---|
| Guitar | Bob Chabot | — |
| Guitar | Paul Burch | paulburch.com |
| Guitar | Larry Hirshberg | larryhirshberg.com |
| Guitar | Hide Kawatsure | — |
| Guitar | Jeremy Robin | — |
| Guitar | Becky Hall | — |
| Guitar | Brian Prindle | brianprindlemusic.com |
| Fiddle | Tom Sullivan | — |
| Fiddle | Grace McNamee | — |
| Fiddle | Michael Sortor | — |
| Fiddle | Dan Kellar | danielkellarviolinist.com |
| Fiddle | Nicky Sanders ★ | steepcanyon.com |
| Fiddle | Joel Glassman | — |
| Fiddle | Nate Leath | facebook.com/nateleath |
| Fiddle | Warren Hood | warrenhood.com |
| Dobro | Andy Hall ★ | thestringdusters.com |
| Dobro | Jerry Miller | facebook.com/jerrymillerguitar |
| Banjo | Chris Pandolfi ★ | thestringdusters.com |
| Percussion | John Payne | — |

★ Nicky Sanders — Steep Canyon Rangers
★ Andy Hall, Chris Pandolfi — The Stringdusters
(List consolidated from Bio page + Scrapbook page — one canonical list)

**Rebuild notes:**
- Bio text kept as-is; tense may need updating for retirement context
- Press quotes: keep all three — strong
- Past members list: keep; good historical record; links may need checking
- Final sentence updated for retirement — change:
  "...the Bagboys **bring** warmth, humor, honesty, and musical excellence
  to **each and every show**!"
  → "...the Bagboys **brought** warmth, humor, honesty, and musical excellence
  to **each and every show**."
- Future feature: **membership timeline** — visual history of how the lineup
  evolved; the ★ members make this especially worth doing
- Some content (bio text, press quotes) may partially migrate to History hub

---

### 4.3 Residencies

**URL:** `/residencies.html` → Astro: `src/pages/residencies.astro`

**Layout (confirmed from screenshots):**

Top: full-width wide concert photo (photo credit: Georgia Bowder-Newton)

Below: two-column block
- Left: photo of band playing in a dark bar setting (warm, Christmas lights)
- Right: intro text (dark olive/tan color):
  "The Bagboys are proud to have had some of the longest residencies in
  the Boston area. Click below to find out more about our current
  residency at the Plough & Stars, as well as other long-running
  engagements in New England."
  → In rebuild: update "current residency" language since band is retired

Three venue cards (equal-width columns, each with photo, title, dates,
"Learn More" button):

| Venue | Photo | Dates |
|---|---|---|
| The Plough & Stars | Exterior: green sign with gold lettering | 1989–2006 and Sep 2018–Mar 2020 |
| the Burren | Exterior: brick building, red doors, flower boxes | 2006–2018 |
| Ossipee Valley Music Festival | Band on stage under festival tent | 1999–2025 (first year was 1999, last show July 2025) |

"Learn More" buttons → link to sub-pages: Plough, Burren, Ossipee
(these are the dedicated sub-pages in the MORE... dropdown)

"Past Gigs" button at bottom of page → links to Past Gigs page

**Rebuild consideration — possible History hub:**
Frank is considering folding the Residencies page into a broader
History section or hub page, with more historical content about the
band's origins and arc. See Section 10 (Structure Options).

---

### 4.4 Our Music

**URL:** `/our-music.html` → Astro: `src/pages/our-music.astro`

**Layout (confirmed from screenshots):**

Top of page — two CTA buttons (dark olive/brown, rounded pill shape):
- "Hear the Bagboys on YouTube" → ⚠️ capture destination URL
- "Purchase CDs" → ⚠️ capture destination URL

Then albums in sequence, each as a two-column block:
- Left column: album cover image (with thin border/frame)
- Right column: album title (large bold heading) + track list (centered,
  numbered or unnumbered) + press quote if applicable

**Album order on page** (most recent → oldest, as seen):
1. Kernel Korn (moving here from homepage — no longer "new")
2. Four Kinds Of Pie
3. PLUMS!
4. Just Say Moo
5. Sensible Music For Troubled Times ⚠️ (confirm it appears here)

⚠️ There appear to be audio sample sections ("SAMPLES:") on some albums
— format unknown (HTML5 audio? embedded player?). Astro rebuild will
need a simple audio embed approach. Bandcamp is the cleanest option
for a static site if the band has a Bandcamp page.

**Design note:** The content area background on this page appears white
(not beige). The beige/tan is the outer page margin/body — the content
column sits on white. Confirm this applies to all interior pages.

---

### 4.5 Book Us!

**URL:** ⚠️ (likely `/book-us.html`) → Astro: `src/pages/book-us.astro`

Content (from search snippets):
> The Bagboys are available for all types of gigs, including pubs and
> concert halls, private functions, house concerts, and festivals.

Contact for booking:
- ⚠️ Booking email not confirmed — likely info@bagboys.com or a form
- Phone: 339-293-7565

⚠️ Does this page have a contact form, or just text + email/phone?

---

### 4.6 Contact Us

**URL:** `/contact.html` → Astro: `src/pages/contact.astro`

**Original content (confirmed from screenshot):**
- Heading: "Say hello or join our email list!!" (teal, handwriting/script font)
- Form: Name (first + last), Email, message textarea, marketing consent
  checkbox, submit button
- Mailing list pitch in form copy ("won't always have to come to our site
  to find out about special gigs")

**Rebuild — reworked:**
- Keep the page; drop all mailing list language
- New purpose: reach individual band members, who are all still active in
  other musical configurations and may be available for non-Bagboys gigs
- New heading: ⚠️ Frank to draft (something like "Get in touch with us")
- Form should let the sender choose which member to contact:
  - Harvey Bag
  - Frank Drake
  - Gretchen Bowder
  - Jon Ross
- ⚠️ Decide with Frank: dropdown to select recipient, or separate email
  links per member? Dropdown is cleaner; individual links are simpler.
- ⚠️ Collect preferred contact email for each member

**Technical approach:** Resend + Cloudflare Worker (same pattern as
frankdrake.org feedback form). Form POSTs to a Worker; Worker emails
the selected member via Resend. Member selection via dropdown on the form.

---

### 4.7 Press

**DROPPED.** Not included in the rebuild. See `Admin/DROPPED.md`.

---

### 4.8 Merchandise

**DROPPED.** CD purchase info folds into Our Music page. No separate
Merchandise page in the rebuild.

**What moves to Our Music:**
- Bottom section after the discography listing:
  - Four Kinds of Pie, Plums (Live), Just Say Moo available — inquire at [email]
  - Sensible Music for Troubled Times and Paper or Plastic out of print —
    digital copies available by inquiry
- ⚠️ Confirm contact email for CD inquiries (gbowder@verizon.net? Or another?)
- Remove from MORE... dropdown nav

---

### 4.9 Archives

**URL:** ⚠️ (likely `/archives.html`) → Astro: `src/pages/archives.astro`

Content ⚠️: Not captured. Likely an index of historical content.

---

### 4.10 Scrapbook

**URL:** `/scrapbook.html` → lives under History hub in rebuild

**Layout (confirmed from screenshot):**
- Heading: "Bagboys' Scrapbook" — teal, large script font (same font
  used across all page headings)
- Collaborators intro + list (see note below)
- Photo grid: 3 columns, black & white photos styled as film negatives
  (film-strip edge markings, Kodak stock visible). Photos continue well
  below the fold — quantity unknown, likely large.

**Collaborators list on this page** (slightly different from Bio version):

| Instrument | Names |
|---|---|
| Guitar | Bob Chabot, Paul Burch, Larry Hirshberg, Jeremy Robin, Hide Kawatsure, Becky Hall, Brian Prindle |
| Fiddle | Tom Sullivan, Grace McNamee, Michael Sortor, Joel Glassman, Nicky Sanders, Dan Kellar |
| Dobro | Andy Hall |
| Percussion | John Payne |

Note: Bio page and Scrapbook have overlapping but inconsistent collaborator
lists. Bio has Nate Leath, Warren Hood (fiddle), Chris Pandolfi (banjo),
Jerry Miller (dobro) — Scrapbook does not. Scrapbook adds Tom Sullivan,
Grace McNamee, Michael Sortor (fiddle), John Payne (percussion) — Bio
does not. ⚠️ Consolidate into one definitive list for the rebuild.

**Rebuild plan:**
- Drop the redundant collaborators list from Scrapbook — one canonical
  list lives on Bio; the consolidated version should combine both lists
- Scrapbook becomes a pure photo gallery under History hub
- Film-negative visual styling is worth preserving — it's distinctive
- ⚠️ Need all the photos (how many total? are they digital files Frank has,
  or only on the Weebly server?)

---

### 4.11 Plough

**URL:** `/plough.html` → lives under History hub in rebuild

**Address:** 914 Mass Ave, Cambridge, MA

**Full text (verbatim — needs past-tense update):**

Paragraph 1 (teal, smaller):
"We began playing at the Plough in 1989 and did a show there almost
every Saturday until May of 2006. At that time, the Plough closed for
awhile during a transition, so we moved over to the Burren in the fall
of 2006. We enjoyed a residency there until the spring of 2018."

Paragraph 2 (dark red/brown, larger — needs update):
"In September 2018, we moved back to the Plough, where we now play
every first and third Thursday of the month from 6–8pm."
→ Update to: "In September 2018, we moved back to the Plough, where
we played every first and third Thursday of the month from 6–8pm,
until March 2020."
⚠️ Frank to review wording

**Photo caption:** "2006 with the Laval Teachers' Hockey Club, from
Canada. Barry Grund, bartender and youth counselor extraordinaire in
attendance! Andy Hall played dobro with us back then."

**Photos:** 3-column grid, color photos from 2006 Plough sessions.
More photos below the fold.

**Linked from:** Residencies section of History hub
**Slideshow:** directory-driven from `public/images/plough/`

---

### 4.12 Ossipee

**URL:** `/ossipee.html` → lives under History hub in rebuild

**Full text (verbatim, needs past-tense update):**

"We LOVE the Ossipee Valley Music Festival!
They invited us to play during their very first year (1999) and we've
been there ever since. If you haven't been, you must come! Always in
late July in South Hiram, Maine. Check out this year's line-up at
www.ossipeevalley.com"

**Past-tense update for rebuild:**
"We LOVED the Ossipee Valley Music Festival! They invited us to play
during their very first year (1999) and we were there nearly every year
since. Always in late July in South Hiram, Maine."
— drop the "check out this year's line-up" line (band retired)
⚠️ Frank to review and finalize wording

**Photos:** 2019 festival performance photos, credit Lynne Fountain.
Lineup that year: Frank Drake, Harvey Bag, Brian Prindle, Gretchen Bowder.

**Date correction:** Festival start was 1999 (not 1998 as listed on
Residencies page). Update Residencies accordingly.

**Location:** South Hiram, Maine (previously logged as just "Hiram")

**Most recent appearance:** July 24, 2025 (from JamBase)

**Linked from:** History hub

---

### 4.13 Burren

**URL:** `/burren.html` → lives under History hub in rebuild

**Full text (verbatim — already largely past tense):**
"The Burren, 247 Elm St, Somerville, MA. Deeply committed to music,
Burren hosts bands every day of the week. The Bagboys had a residency
there on Saturday evenings from 2006–2018. We even toured the west
coast of Ireland under their sponsorship, and got to visit the actual
Burren!"

**Minor tense fix:** "Burren hosts bands" → "Burren hosted bands" (or
leave as-is since the venue still exists and hosts music)
⚠️ Frank to decide

**Photos:** Large collection of Burren interior performance shots —
red walls, art-covered walls, cozy bar setting; various lineup
configurations. Photos continue well below the fold.

**Linked from:** Residencies section of History hub

---

### 4.14 Promo Photos

**DROPPED as standalone page.** Photos from this page fold into the
Scrapbook collection. Frank will pull the images and add them there.

---

### 4.15 "Historical" Posters

**URL:** ⚠️ (likely `/posters.html`) → lives under History hub in rebuild

**Page heading:** "Various Posters" — dark red/burnt orange, plain display
font (not the teal script). Confirms dark red is used for some headings.

**Original format:** Weebly slideshow widget — one large poster displayed
at a time, with Play/autoplay, and prev/next controls. Thumbnail strip
below showing all posters as small previews.

**Content:** 15–16 posters visible in thumbnails, likely more. Styles range
from vintage colorized photos to handmade-looking residency flyers. Subjects
include:
- Full band posters (various eras)
- Burren residency posters ("Saturdays 5–7pm at the Burren, 247 Elm St,
  Somerville")
- Solo member spotlights ("Harvy Bag Bass Vocals", "Otis Ray Bag")
- Plough & Stars posters
- Record release party poster
- Various other gig announcements

**Rebuild plan:**
- Linked from History hub
- Build a clean slideshow page — style TBD, just make it nice
- ⚠️ Need all poster image files (same asset-gathering task as photos)

---

### 4.16 Videos

**DROPPED as standalone page.** Only two videos on the original page —
not enough to warrant a dedicated page.

**Plan:** Frank will gather all band videos and host them as a playlist
on his YouTube channel (youtube.com/@frankdrake57). Where to link from
the rebuilt site TBD — likely History hub or Our Music.

**Nice to have:** Frank creates the YouTube playlist. Then decide where
to surface the link on the site.

---

### 4.17 Past Gigs

**DROPPED as standalone page.** Short list, not worth recreating as-is.

**Nice to have:** A curated page of the band's most interesting/memorable
gigs — not a complete list, but a handpicked highlight reel with some
context for each. Frank to write. Would live under History hub.

---

## 5. Design and Visual Style

Documented from screenshots of the live site (May 2026).

### Color palette (working values — adjust to taste during build)
- **Teal:** `#3aada8` — nav bar, links, accent text, page headings
- **Dark red / maroon:** `#7a2a2a` — secondary headings, some body text
- **Dark charcoal:** `#222222` — main body text
- **Warm beige:** `#e8e0d0` — page background / outer margin

### Navigation bar
- Background: teal / turquoise (see palette above)
- Text: white, uppercase, bold, evenly spaced
- Bottom edge: decorative chevron notch (Weebly default styling)
- Items (left to right): UPCOMING SHOWS | BIO | RESIDENCIES | OUR MUSIC | BOOK US! | CONTACT US | PRESS | MORE...
- **MORE...** is a dropdown containing all secondary pages

### Page background
- Warm beige / tan — not pure white; a slightly textured or warm off-white
- ⚠️ Determine if this is a solid color, CSS gradient, or a Weebly
  background image/texture

### Typography
- Body text: dark charcoal (near-black), centered on homepage
- "Welcome" heading: same dark charcoal, **bold**, mixed with normal weight
  in the same sentence ("**Welcome** to our little log cabin home on the internet!")
- **Page heading font:** Pacifico (Google Font) — rounded, friendly
  handwriting style; used in teal on most page headings
- **Header title "The Bagboys":** likely a custom graphic/image rather
  than a web font — the brushstroke treatment is distinct from Pacifico
- **Body / nav font:** Open Sans or similar clean sans-serif (Weebly default)
- All font choices are working guesses — confirm and adjust during build

### Homepage layout (confirmed from screenshots)
1. Nav bar (full width)
2. Large hero photo of the band (full content-width, white border/frame)
3. Welcome text block (centered):
   - Line 1 (large): **Welcome** to our little log cabin home on the internet!
   - Line 2 (smaller): We're the Bagboys! We play bluegrass, western swing,
     and other fine varieties of acoustic music.
4. CD announcement block → **DROP in rebuild**
   (Frank's call: Kernel Korn is no longer "new" — it moves to Our Music
   page with the rest of the discography)
5. Horizontal rule → drops with the content above it
6. Shows section: "SEE OUR UPCOMING GIGS at gretchenbowder.com"
   → **DROP in rebuild** (band retired — see Section 8)
7. Booking blurb + gbowder@verizon.net
   → **DROP in rebuild** (band retired — see Section 8)

**Rebuilt homepage:** Nav → hero band photo → welcome text → (ends here)

### Hero photo description
Four band members seated at a wooden pub table, warm amber/orange interior.
Left to right: man in wide-brim cream cowboy hat (Harvey Bag), man in black
fedora + red bandana + suspenders (Frank Drake), woman with glasses + gray
cardigan + red scarf (Gretchen Bowder), man with glasses + dark red shirt
(Jon Ross). Letters "BB" visible in lights in background.

### Overall character
Warm, informal, unpretentious. Teal accent against warm beige gives it a
slightly folk-art, down-home feel — fits "log cabin home on the internet."
Not slick or corporate. Band photography is central.

### Header (above nav bar — confirmed from Bio page screenshot)
- Dark wood-grain texture background (horizontal plank pattern)
- "The Bagboys" in large white handwriting/script font (same script as
  Contact page heading — ⚠️ identify font name)
- Subtitle right of the title: "Traditional & Original Bluegrass & Western Swing"
  in lighter weight / smaller font
- Top right: Facebook, Email (envelope), YouTube icons + search box
- **Rebuild:** keep wood-grain + script aesthetic; drop search box;
  confirm which social accounts are still active; update/remove icons accordingly

---

## 6. Contact & Social

- **Phone:** 339-293-7565
- **Email:** ⚠️ Confirm primary contact email
- **Booking:** ⚠️ Confirm booking email
- **Facebook:** facebook.com/BagboysMusic
- **Upcoming shows:** Also listed at gretchenbowder.com

---

## 7. Technical Notes for the Rebuild

### Static vs. dynamic content

- **Shows list:** The original site appears to list upcoming gigs
  manually. Options for Astro:
  1. Hand-edit a data file (`.json` or frontmatter) and rebuild
  2. Pull from gretchenbowder.com or an external calendar source
  3. Embed a third-party calendar widget (Bandsintown, etc.)
  ⚠️ Decide with Frank which approach fits his workflow.

- **Merchandise:** If actual purchases are needed, Weebly's store won't
  transfer to a static site. Options: Bandcamp (for CDs), Square
  embed, or a simple "email to order" approach.

- **Audio:** Bandcamp embed is the simplest approach for music pages in
  a static site. If the band has a Bandcamp page, link/embed from there.

### URL strategy

Original Weebly URLs use `.html` extensions (`/bio.html`). Astro
generates clean URLs by default (`/bio`). This is fine — no need to
match the old URLs exactly since this is a fresh deployment on the
same domain.

### Images

⚠️ All band photos, promo images, and poster scans need to be gathered
and placed in `public/images/` before building image-heavy pages.

---

## 8. The Band Has Retired — What Changes

The Bagboys are no longer active. This site is a historical archive /
memorial to the band's career. The rebuild should reflect that.

### Confirmed drops (pending Frank's sign-off)
- "UPCOMING SHOWS" as a live page → **drop or repurpose** (see below)
- "BOOK US!" nav item and page → **drop** (no longer taking gigs)
- Shows section on homepage (gretchenbowder.com link) → **drop**
- Booking blurb and gbowder@verizon.net → **drop**

### Proposed nav for the rebuild (⚠️ confirm with Frank)
1. Home
2. Bio
3. Residencies
4. Our Music
5. Press
6. MORE... (dropdown with archives, photos, videos, etc.)

### Homepage treatment
The hero photo + welcome text + CD section stays — it's a great
archive snapshot. The shows/booking content below it gets cut.
Frank may want to add a brief note that the band is retired, e.g.
a small line below the welcome text. ⚠️ Decide with Frank.

---

## 9. Photo Slideshow Architecture — DECIDED

All photo-heavy pages use a **directory-driven slideshow** pattern.
Each venue/gallery has its own folder under `public/images/`. The
slideshow component reads whatever images are in that folder at build
time — no code changes needed to add or remove photos. Just drop files
in the folder and push.

```
public/images/
├── burren/        → populates Burren page slideshow
├── plough/        → populates Plough & Stars page slideshow
├── ossipee/       → populates Ossipee page slideshow
├── scrapbook/     → populates Scrapbook page slideshow
└── posters/       → populates Posters page slideshow
```

**How it works in Astro:** `import.meta.glob()` collects all images
from a directory at build time. The slideshow component loops over
them. Add a photo → push → it appears automatically.

**Structure:** Residencies section of History hub links to three
dedicated venue sub-pages. Each sub-page has narrative text at the
top and a slideshow below:
- History hub → Residencies → The Plough & Stars (+ slideshow)
- History hub → Residencies → The Burren (+ slideshow)
- History hub → Residencies → Ossipee Valley Music Festival (+ slideshow)
- History hub → Scrapbook (+ slideshow)
- History hub → Posters (+ slideshow)

---

## 10. Site Structure — DECIDED

**Navigation:** HOME | BIO | OUR MUSIC | HISTORY | CONTACT US

**History hub (Option B) — chosen.** "History" is a top-level nav item
linking to a hub page. The MORE... dropdown is eliminated entirely.
All content that was in MORE... either lives under History or is dropped.

**History hub page purpose:**
A landing page that organizes the band's full historical record. Frank
plans to add original narrative content here beyond what was on the
original site — the band's story, arc, key moments. The existing
sub-pages (Residencies, Plough, Burren, Ossipee, Past Gigs, Videos,
Scrapbook, Posters, Archives) link from here.

**Remaining question for History hub:**
As we review each sub-page, decide whether it stays as its own page
(linked from the hub) or gets folded directly into the hub as a section.
Sub-pages with rich photo/content (Plough, Burren, Ossipee) probably
warrant their own pages. Lighter pages may fold in.

---

## 10. Open Questions

- [x] Can Frank access the live site? — Yes (screenshots confirmed)
- [x] Contact Us and Book Us! are separate pages
- [x] Contact Us is a form (Name, Email, message, mailing list checkbox)
- [x] Merchandise: 3 CDs at $15 by check to Paul Jost — folded into Our Music
- [x] MORE... dropdown: "Archives" was a grouping label, not a standalone
  page — sub-pages under it were the ones reviewed (Scrapbook, Posters,
  Plough, Ossipee, Burren, Promo Photos, Videos, Past Gigs)
- [ ] Does the site have a logo / banner image above the nav?
- [ ] Where does "Listen here" / "Hear our songs" link to? (YouTube? Bandcamp?)
- [ ] Year of the Kernel Korn album?
- [ ] Confirm album chronological order (esp. Paper or Plastic vs. Just Say Moo)
- [ ] Should the homepage note that the band is retired? If so, what wording?
- [ ] Ossipee "1998–present" → update to "1998–2025"? Confirm last year.
- [ ] History hub vs. keep Residencies as-is — which structure direction?
- [ ] Contact emails for each band member (for the reworked Contact form)
- [ ] ⚠️ Sample teal and dark red hex values from the live site
- [ ] Images: photos exist elsewhere (not only on Weebly). Weebly editor
  currently inaccessible — resolve to pull assets directly if needed.
  Either way, gather all images into public/images/ before building
  photo-heavy pages (Scrapbook, Plough, Burren, Ossipee, Promo Photos,
  Historical Posters).
