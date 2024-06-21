# Accessible vml button generator for email
An accessible vml button generator for Email

## A normal Html link with two vml shapes


Here is another generator, to obtain a rounded button on Outlook (windows). 

Unlike classic button shapes using the vml v:roundrect component, here I surround the html link with two vml v:shape components to create the round corners. 

The path of these two shapes is calculated from the font size, the border-radius, the font itself, and the padding. 

To ensure the correct placement of the shapes around the link, a fixed size and height are automatically calculated. All you have to do is copy and paste the code. 

## A complete accessible vml buton on Narrator and NVDA

The classic vml button which uses the v:roundrect component is not recognized by main screen readers (NVDA, Jaws etc). 

The link and the link text is completely ignored. This is why it is not recommended to use vml to round the buttons.

This technique, like two others that you can find here: https://codepen.io/matthieuSolente/pen/dygzpwr separates the html link from the vml code, in order to guarantee greater accessibility. 

The html link therefore remains intact and is correctly interpreted by screen readers

## Navigating with a screen reader
Classic navigation keys on Narrator and NVDA work normaly: 

### NVDA

The following shortcuts work, and the link is read normally

Start reading continuously from this point on : Insert + down arrow

List all links :	Insert + F7

Go to next link	: K

NVDA Link table :

Here I inserted two hyperlinks as well as my automatically generated button (with the text "show me the button!")

![NVDA Link table](https://github.com/matthieuSolente/accessible-vml-button-generator/blob/main/Nvda-element-list.PNG)



### Narrator:

The following shortcuts work, and the link is read normally

Start reading continuously from this point on	: Caps Lock + down arrow

List all links :	Caps Lock + F7

Go to the next link*: 	K


Narrator Link table :

Here I inserted several hyperlinks as well as my automatically generated button (with the text "show me the button!")

![Narrator Link table](https://github.com/matthieuSolente/accessible-vml-button-generator/blob/main/narrator-link-table.png)


as you can see on these two screenshots, the link is correctly interpreted
so it's a huge improvement over the classic vml button.

Testing was performed on Outlook 365 and Windows 10 Mail with Narrator and NVDA

### Disadvantage
As the button is surrounded by two vml blocks, the difference will be visible in darkmode.
