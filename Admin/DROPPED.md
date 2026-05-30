# What We're Leaving Out — and Why

This document records the editorial choices made in rebuilding bagboys.com.
The original site was built on Weebly and is being migrated to a new
platform. Along the way, Frank Drake made a number of decisions about
what to keep, what to cut, and what to rework.

This doc exists so the other band members know what choices were made
and can weigh in if they disagree.

---

## 1. Upcoming Shows

**Dropped entirely.**

The Bagboys have retired. There are no upcoming shows to list, and
maintaining a shows calendar for a band that's no longer playing
doesn't make sense. The "Upcoming Shows" nav item and its page are
gone from the new site.

If individual members want to promote their other projects, the
Contact page is the right place for that (see below).

---

## 2. Book Us!

**Dropped entirely.**

Same reason as Upcoming Shows — the band is retired and not taking
gigs. The "Book Us!" nav item and its page are removed.

The new Contact page (see below) does allow people to reach individual
members about non-Bagboys projects, since we're all still playing music
in various configurations.

---

## 3. Press Page

**Dropped entirely.**

The Press page on the original site was not captured before the rebuild
began (the live site was unreachable during initial research). Rather
than try to reconstruct it, Frank decided to leave it out. The band's
history and critical reception are already well-represented on the Bio
and Our Music pages.

If any member has press clippings or reviews they'd like preserved,
let Frank know — we can revisit.

---

## 4. Merchandise as a Separate Page

**Dropped as a standalone page — content folded into Our Music.**

The original site had a separate Merchandise page reached by clicking
"Purchase CDs" from Our Music. It listed three CDs at $15 each, with
instructions to mail a check to Paul Jost in Melrose.

Since the band is retired, maintaining a separate purchase page with
a mail-order mechanism didn't seem right. Instead:

- The three available CDs (Four Kinds of Pie, Plums, Just Say Moo)
  will be listed at the bottom of the Our Music page with a note to
  get in touch if interested.
- Sensible Music for Troubled Times and Paper or Plastic remain noted
  as out of print, with digital copies available by inquiry.

The "Purchase CDs" button on Our Music will be removed or replaced
with a simple note. The "Hear our songs" button will remain (linking
to YouTube or wherever the music lives).

---

## 5. Mailing List on the Contact Page

**Dropped.**

The original Contact page doubled as a mailing list signup ("Click
'I agree' if you'd like to be on our mailing list"). Since the band
is no longer active, there's nothing to send a mailing list about.

The Contact page itself is kept, but reworked (see below).

---

## 6. Homepage — CD Announcement Block

**Dropped from the homepage — content moves to Our Music.**

The bottom half of the original homepage featured the Kernel Korn album
("We have a new CD!") with the album art and a "Listen here" link.
This made sense when it was new. It's been a while. The album belongs
on the Our Music page with the rest of the discography, not on the
homepage as a featured announcement.

---

## 7. Homepage — Shows and Booking Blurb

**Dropped.**

The lower portion of the homepage included:
- "SEE OUR UPCOMING GIGS at gretchenbowder.com"
- A paragraph about being available for all types of gigs, with
  Gretchen's email address for booking.

Both are gone. The band is retired.

---

## What's Being Reworked (Not Dropped)

### Contact Us
Kept but rebuilt. The new Contact page will:
- Drop all mailing list language
- Let visitors choose which band member they want to reach
  (Harvey, Frank, Gretchen, or Jon)
- Be clear that the Bagboys are retired but the members are still
  active musically in other contexts

### Our Music
The "Purchase CDs" button on the original Our Music page pointed to a
separate Merchandise page. In the rebuild, that button goes away and
the purchase/availability info lives directly on Our Music at the bottom
of the discography.

---

## 8. Videos Page

**Built as a standalone page at `/videos`.** The original Videos page had
only two clips, but Frank found five videos on YouTube across the band
channel and Gretchen's channel — enough to make a proper listing.

**What was built:** A curated video list page linked from the "Hear the
Bagboys on YouTube" button on Our Music. Each entry shows the title,
date, duration, and which channel posted it. Adding more videos in the
future just means adding a line to the `videos` array in the page file.

---

## 9. Promo Photos Page

**Dropped as a standalone page.** The original site had a Promo Photos
section under MORE... with additional band photos. Rather than maintain
it as its own page, Frank will pull those images and fold them into the
Scrapbook photo collection.

---

## 10. Past Gigs Page

**Dropped as a standalone page.** The original Past Gigs page had a
short list of dates — not enough to warrant recreating directly.

**What replaces it:** A future "nice to have" page under History — a
curated highlight reel of the band's most interesting and memorable
gigs, written by Frank with some context for each one. Quality over
quantity. Not a complete archive, but a good read.

---

## Questions for the Band

- **Press page:** Does anyone have press clips or reviews they'd like
  preserved? Frank is open to reconsidering if there's material worth
  keeping.
- **CD availability:** Is Paul still able/willing to fill CD orders by
  mail? If so, we should keep that information somewhere on the site.
- **Contact emails:** What's the preferred contact email for each
  member? These will be used to route messages from the Contact form.
- **Retirement note:** Should the site say anywhere, explicitly, that
  the Bagboys are retired? Or let it speak for itself as a historical
  record?
