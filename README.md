# GENEALOGY CITATION GENERATOR
#### Video Demo:  <https://youtu.be/bKXVos8Srt4>
#### Description:
Overview:
The Genealogy Citation Helper is a Chrome Extension designed to facilitate the creation of citations specifically for genealogical research. This tool addresses the need for a specialized citation generator that adheres to the unique formats required in genealogical documentation, distinguishing it from generic citation tools.

Key Features:
Source Type Selection: Users can select from various genealogical source types, such as church books, image copies, and census data, through a dropdown menu.
Dynamic Input Fields: Based on the selected source type, relevant input fields are displayed, guiding users to input precise details for accurate citation generation.

Custom Citation Formats: 
The tool generates three forms of citations: Full Reference Note, Subsequent Short Note, and Source List Entry, catering to different documentation needs in genealogical research.


TECHNICAL COMPONENTS

Manifest File (manifest.json)
-Defines the extension's basic settings, such as version, name, and default popup, linking to the index.html file.
Sets the icon for the extension as open-book.png.

HTML Structure (index.html)
-Contains the layout for the citation generator, including source type selection, input fields for different record types, and the citation display area.
Integrates the script.js and styles.css files for functionality and styling.

JavaScript Logic (script.js)
-Handles the dynamic display of input fields based on the selected source type through the showFields() function.
-Converts dates to the required format using the dateFormat() function, ensuring consistency in citation formatting.
-Generates citations based on the inputted data, creating three different citation types for each source material.

CSS Styling (styles.css)
-Provides a visually appealing and user-friendly interface, with styles that highlight important elements and ensure a clean layout conducive to efficient data entry and citation review.


WORKFLOW

Initialization: 
Upon loading, the DOMContentLoaded event triggers the showFields() function, setting up the appropriate fields for the default source type.

Source Selection: 
The user selects a source type from the dropdown menu, dynamically changing the input fields displayed via the showFields() function.
Data Entry: The user inputs data into the fields relevant to the chosen source type.

Citation Generation: 
Clicking the 'Generate Citation' button activates the generateCitation() function, which constructs the citations based on the provided data and the selected source type.

Citation Display: 
Generated citations are displayed in the citationContainer div, offering users a compiled list of their citations for reference.
Future Enhancements

Field Validation: 
Integrate advanced validation rules to ensure the accuracy and completeness of input data.


FUTURE IMPROVEMENTS

History Tracking: 
Implement a feature to save and manage previous citation sessions, allowing users to retrieve and edit past citations.

Expanded Source Types: 
Extend the tool's capabilities by adding more source types and corresponding fields to accommodate a broader range of genealogical records.

User Guide: 
Develop a comprehensive guide or tooltips within the extension to assist users in correctly inputting data and understanding citation formats.


CONCLUSION

The Genealogy Citation Helper is an invaluable tool for genealogists and researchers, providing a tailored solution for the precise and systematic generation of genealogical citations. Its specialized functionality, coupled with planned future enhancements, positions it as a standout resource in the field of genealogical research.
    