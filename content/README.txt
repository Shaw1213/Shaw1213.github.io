CONTENT DROP FOLDER
===================
Dump your raw assets and text into the matching project folder.
Then tell Claude to assemble them into the detail page.

Supported file types:
  - Text:   .txt, .md, .docx, .pdf
  - Images: .png, .jpg, .jpeg, .gif, .webp
  - Video:  .mp4, .webm, .mov
  - Docs:   .pdf (GDDs, design docs, etc.)

Folder structure:
  content/
    bricks-over-blocks/
    beamdown/
    hampter-ball/
    greatsword/
    dungeons-and-drinks/
    remote-code-execution/
    level-design/

Workflow:
  1. Drop files into the project folder
  2. Tell Claude: "assemble greatsword" (or whichever project)
  3. Claude reads your files, copies media to Images/, and builds the detail page
