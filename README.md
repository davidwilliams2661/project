# GENEAOLOGY CITATION GENERATOR
#### Video Demo:  <URL HERE>
#### Description:
    This project is a genealogical citation maker. It is designed to be a static Chrome Extention with which users can quickly create citations from genealogical source materials. Even though there are plenty of citation makers currently available on the web, this one is specifically for a genealogical citation format that is not found on Easybib et. al...

    The HTML page is composed of several <div> elements, including a drop down menu, some usage instructions, a long list of inputs, a 'Generate Citaiton' button, and finlly the citations themselves. The inputs are changed via the drop down menu. When the user selects a different source material, it sends the id of that option to a JavaScript function called "showFields". This changes the display value of the relevant div (bookFields, imageFields, etc) from 'none' to 'block'.

    The displayed options can be filled out by the user with whatever source they'd like to cite. All the inputs are then passed to a JS function called 'generateCitation', which does just that by concatenating the inputs together with all the tedious syntax required by the citation format. There are three different forms of citation that are all generated from the same function. Ultimately the product of this function is three different strings, all passed to a 'citationContainer' div via JS.
    This gives the user a running list of all the citaitons they've made while on the webpage.

    The CSS hides the input fields that aren't relevant to the current source type selected, spaces out all the appropriate elements, gives the page a color shceme, and highlights some important elements with color changes.

    TODO: 
    Minor typo fixes/clarifications - Done
    Add extra source types
    Upload as Chrome Extention

    Future features to add:
    1- JS logic to create a correct citation even if certain fields are missing
        This is likely achieved with a conditional wrapping each value.
        If value exists then include it and it's relevant punctuation, otherwise omit it entirely. - Not necessary -
    2- Some kind of history page to store user's previous sessions.
    3- More helpful tips for how to cite each source type.
    4- Add a page of helpful links.