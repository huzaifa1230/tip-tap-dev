# HOW TO RUN THIS PROJECT
simply clone the project and then do "npm i" and then "npm run dev", it will open up in browser

## Workings
- Integration of TipTap from offical documentation
- Used useEditor because it manages the editor instance properly 
- added basic features in the toolbar including bold, italic, underline, headings (3) levels, bullet and numbered lsts
- added Persistence to show the last updated content to the user (used local storage for this because no backend was made for this)
- made a custom extension that will highlight the background of the selected text to a custom color (yellow).
- all the toolbar buttons can be clicked again to remove the style applied including the one for custom extension.
- all keyboard shortcuts are working like ctrl+b  for bold, ctrl+i for italic, ctr+alt+1 (or 2 or3 ) for changing headings sizes for h1,h2,h3
- it is completely Responsive  for editor updates in real-time 
- comments are added for better understanding of the code