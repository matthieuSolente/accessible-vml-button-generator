# Accessible vml button generator for email
An accessible vml button generator for Email

## A normal Html link with two vml shapes


Here is another generator, to obtain a rounded button on Outlook (windows). 

Unlike classic button shapes using the vml v:roundrect component, here I surround the html link with two vml v:shape components to create the round corners. 

The path of these two shapes is calculated from the font size, the border-radius, the font itself, the padding etc. 

To ensure the correct placement of the shapes around the link, a fixed width and height are automatically calculated. All you have to do is copy and paste the code. 

## An accessible vml buton on Narrator and NVDA (Jaws etc.)

The classic vml button which uses the v:roundrect component is not recognized by many, if not all screen readers (NVDA, Jaws etc). 

The link and the link text are completely ignored. This is why it is not recommended to use vml to round the buttons.

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


as you can see on these two screenshots, the link is correctly interpreted.

So here we have an accessible link with rounded corners on Outlook (windows) : ) 


Testing was performed on Outlook 365 and Windows 10 Mail with Narrator and NVDA.

For the visual rendering, the tests were carried out on Testi@ for Outlook 2019, 2021 (120 & 200 DPI), 365, Windows 10 & 11, Outlook 2007/2010/2013/2016 (120 & 200 DPI)

### cons
As the button is surrounded by two vml blocks, the difference will be visible in darkmode. If you use this button, you will need to find a way to harmonize the colors.

To adjust the line height simply adjust the value of mso-text-raise in the generated code


