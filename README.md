# Danial Tynymbay | Portfolio

**Live site:** https://danik0770007.github.io/iwamad-sis1-portfolio/

This is my personal portfolio, built for SIS Assignment 1 with plain HTML5, CSS3 and vanilla JavaScript. It has an About Me section, three projects from my first weeks of the web course, and a contact form with validation. It works on phones and desktops and has a dark and a light theme.

## Design decisions
1. **Layout:** I used one page with a sticky top menu, so a visitor can reach About Me, Projects and Contact in one tap. On a phone the projects are one column and the photo sits above the text; on desktop the projects become three columns and the photo moves beside the text, so the layout is rearranged and not just squeezed.
2. **Colours:** I picked one teal accent because it matches my profile card from the earlier weeks and looks calm. All colours are CSS variables, and the dark theme swaps the same set with one `data-theme` attribute, so text keeps strong contrast in both themes.
3. **After testing on a phone:** I made the navigation links wrap onto a second line and the page margins smaller, so nothing scrolls sideways at 375 px.
