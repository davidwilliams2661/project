document.addEventListener("DOMContentLoaded", function() {
    showFields();
});

function showFields() {
    var record_type = document.getElementById("record_type").value;

    // Hide all fields
    document.getElementById("bookFields").style.display = "none";
    document.getElementById("imageFields").style.display = "none";
    document.getElementById("censusFields").style.display = "none";

    // Show fields based on selected medium
    if (record_type === "book") {
        document.getElementById("bookFields").style.display = "block";
    } else if (record_type === "image") {
        document.getElementById("imageFields").style.display = "block";
    } else if (record_type === "census") {
        document.getElementById("censusFields").style.display = "block";
    }
}

document.getElementById("generateButton").addEventListener("click", generateCitation);

function generateCitation() {
    var record_type = document.getElementById("record_type").value;
    var citationContainer = document.getElementById("citationContainer");
    var citation = "";
    var citation_short = "";
    var citation_source = "";
    var blankline = "--";

    if (record_type === "book") {
        citation = "Full Reference Note (First Note): " +
            document.getElementById("church").value + " (" +
            document.getElementById("location").value + "), \"" + 
            document.getElementById("title").value + "\" p. " + 
            document.getElementById("page").value + ", no. " + 
            document.getElementById("itemNum").value + ", " + 
            document.getElementById("itemName").value + " " + 
            document.getElementById("itemOrd").value + " (" + 
            document.getElementById("year").value + "); " + 
            document.getElementById("repository").value + ", " + 
            document.getElementById("repLocation").value + ".";
        citation_short = "Subsequent (Short Note): " + 
            document.getElementById("church").value + " (" +
            document.getElementById("location").value + "), \"" + 
            document.getElementById("title").value + "\" p. " + 
            document.getElementById("page").value + ", no. " + 
            document.getElementById("itemNum").value + ".";
        citation_source = "Source List Entry: " +
            document.getElementById("church").value + " (" +
            document.getElementById("location").value + "). \"" + 
            document.getElementById("title").value + ".\" " + 
            document.getElementById("repository").value + ", " + 
            document.getElementById("repLocation").value + ".";
        // Add more book-specific fields to the citation as needed
    } else if (record_type === "image") {
        citation = "Full Reference Note (First Note): " +
            document.getElementById("imageAuthor").value + " (" +
            document.getElementById("imageLocation").value + "), \"" + 
            document.getElementById("imageLabel").value + "\" p. " + 
            document.getElementById("imagePage").value + ", " + 
            document.getElementById("imageItem").value + ", " + 
            document.getElementById("imageDate").value + "; " + 
            document.getElementById("imageFormat").value + ", " + 
            document.getElementById("imageWeb").value + " (" + 
            document.getElementById("imageUrl").value + ") :accessed" + 
            document.getElementById("imageAccess").value + ".";
        citation_short = "Subsequent (Short Note): " + 
            document.getElementById("imageAuthor").value + " (" +
            document.getElementById("imageLocation").value + "), \"" + 
            document.getElementById("imageLabel").value + "\" p. " + 
            document.getElementById("imagePage").value + ", " + 
            document.getElementById("imageItem").value + ", " + 
            document.getElementById("imageDate").value + ".";
        citation_source = "Source List Entry: " +
            document.getElementById("imageAuthor").value + " (" +
            document.getElementById("imageLocation").value + "). " + 
            document.getElementById("imageLabel").value + ". " + 
            document.getElementById("imageFormat").value + ". " + 
            document.getElementById("imageWeb").value + ". " + 
            document.getElementById("imageUrl").value + " :" + 
            document.getElementById("imageAccess").value + ".";
        // Add more image-specific fields to the citation as needed
    } else if (record_type === "census") {
        citation = "Census Citation: " +
            "Title: " + document.getElementById("censusTitle").value +
            ", Journal: " + document.getElementById("journal").value;
        // Add more census-specific fields to the citation as needed
    }

    // Display or use the generated citation as needed
    var citationParagraph = document.createElement("p");
    var citation_shortParagraph = document.createElement("p");
    var citation_sourceParagraph = document.createElement("p");
    var blanklineParagraph = document.createElement("p");
    citationParagraph.textContent = citation;
    citation_shortParagraph.textContent = citation_short;
    citation_sourceParagraph.textContent = citation_source;
    blanklineParagraph.textContent = blankline;
    citationContainer.appendChild(citationParagraph);
    citationContainer.appendChild(citation_shortParagraph);
    citationContainer.appendChild(citation_sourceParagraph);
    citationContainer.appendChild(blanklineParagraph);
    }