# accessible-vml-button-generator
An accessible vml button generator

## A normal Html link with two vml shapes


Here is another generator, to obtain a rounded button on Outlook. Unlike classic button shapes using vml code (with the v:roundrect form), here I surround the html link with two vml shapes to create the rounding. (shapes). The path of these two shapes is calculated from the font size, the border-radius, the font itself, and the padding. To ensure the correct placement of the shapes around the link, a fixed size and height are automatically calculated. All you have to do is copy and paste the code. 

## A complete accessible vml buton on Narrator and NVDA

This form of button is much more accessible than a classic vml button (like that of buttons.cm). It is already read by screen readers, unlike the classic vml button which is ignored entirely. Classic navigation keys on Narrator and NVDA work: Autoplay reads the link. The tab key navigates the link. The K key (to navigate from link to link) also recognizes the link, and the table of elements, both on Narrator and on NVDA, lists the link.

so it's a huge improvement over the classic vml button
