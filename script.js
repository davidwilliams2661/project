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

function dateFormat(date) {
    // change input date to DD Month YYYY
    if (date) {
        // pass input into Date object
        const inputDate = new Date(date)

        // format each part of the date into separate variables
        const day = (inputDate.getDate() + 1);
        const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(inputDate);
        const year = inputDate.getFullYear();

        // combine three seperate variables into one string
        const formattedDate = `${day} ${month} ${year}`;
        return formattedDate;
    }
    else {
        return date;
    }
}

function extractYear(date) {
    if (date) {
        // pass input into Date object
        const inputDate = new Date(date)

        // separate year
        const year = inputDate.getFullYear();
        const formattedYear = `${year}`;
        return formattedYear;
    }
    else {
        return date;
    }
}

function generateCitation() {
    var record_type = document.getElementById("record_type").value;
    var citationContainer = document.getElementById("citationContainer");
    var citation = "";
    var citation_short = "";
    var citation_source = "";
    var blankline = "--";

    if (record_type === "book") {
        var church = document.getElementById("church").value;
        var location = document.getElementById("location").value;
        var title = document.getElementById("title").value;
        var page = document.getElementById("page").value;
        var itemNum = document.getElementById("itemNum").value;
        var itemName = document.getElementById("itemName").value;
        var itemOrd = document.getElementById("itemOrd").value;
        var year = document.getElementById("year").value;
        var repository = document.getElementById("repository").value;
        var repLocation = document.getElementById("repLocation").value;
        citation = "First (Full) Reference Note Note: 1. " +
            church + " (" +
            location + "), \"" + 
            title + "\" p. " + 
            page + ", no. " + 
            itemNum + ", " + 
            itemName + " " + 
            itemOrd + " (" + 
            year + "); " + 
            repository + ", " + 
            repLocation + ".";
        citation_short = "Subsequent (Short) Note: 11. " + 
            church + " (" +
            location + "), \"" + 
            title + "\" p. " + 
            page + ", no. " + 
            itemNum + ".";
        citation_source = "Source List Entry: " +
            church + " (" +
            location + "). \"" + 
            title + ".\" " + 
            repository + ", " + 
            repLocation + ".";
    } else if (record_type === "image") {
        var imageAuthor = document.getElementById("imageAuthor").value;
        var imageLocation = document.getElementById("imageLocation").value;
        var imageLabel = document.getElementById("imageLabel").value;
        var imagePage = document.getElementById("imagePage").value;
        var imageItem = document.getElementById("imageItem").value;
        var imageDate = dateFormat(document.getElementById("imageDate").value);
        var imageFormat = document.getElementById("imageFormat").value;
        var imageWeb = document.getElementById("imageWeb").value;
        var imageUrl = document.getElementById("imageUrl").value;
        var imageAccess = dateFormat(document.getElementById("imageAccess").value);
        citation = "First (Full) Reference Note: 1. " +
            imageAuthor + " (" +
            imageLocation + "), \"" + 
            imageLabel + "\" p. " + 
            imagePage + ", " + 
            imageItem + ", " + 
            imageDate + "; " + 
            imageFormat + ", " + 
            imageWeb + " (" + 
            imageUrl + ") : accessed " + 
            imageAccess + ".";
        citation_short = "Subsequent (Short) Note: 11. " + 
            imageAuthor + " (" +
            imageLocation + "), \"" + 
            imageLabel + "\" p. " + 
            imagePage + ", " + 
            imageItem + ", " + 
            imageDate + ".";
        citation_source = "Source List Entry: " +
            imageAuthor + " (" +
            imageLocation + "). " + 
            imageLabel + ". " + 
            imageFormat + ". " + 
            imageWeb + ". " + 
            imageUrl + " : " + 
            imageAccess + ".";
    } else if (record_type === "census") {
        var censusId = document.getElementById("censusId").value;
        var censusJurisdiction = document.getElementById("censusJurisdiction").value;
        var censusSchedule = document.getElementById("censusSchedule").value;
        var censusDivision = document.getElementById("censusDivision").value;
        var censusPage = document.getElementById("censusPage").value;
        var censusHousehold = document.getElementById("censusHousehold").value;
        var censusPerson = document.getElementById("censusPerson").value;
        var censusType = document.getElementById("censusType").value;
        var censusWebsite = document.getElementById("censusWebsite").value;
        var censusUrl = document.getElementById("censusUrl").value;
        var censusDate = dateFormat(document.getElementById("censusDate").value);
        var censusYear = extractYear(document.getElementById("censusDate").value)
        var censusCredit = document.getElementById("censusCredit").value;
        citation = "First (Full) Reference Note: 1. " +
            censusId + ", " +
            censusJurisdiction + ", " +
            censusSchedule + ", " +
            censusDivision + ", " +
            censusPage + ", " +
            censusHousehold + ", " +
            censusPerson + "; " +
            censusType + ", " +
            censusWebsite + " " +
            "(" + censusUrl + " " +
            ": accessed " + censusDate + "); "
            censusCredit + ".";
        citation_short = "Subsequent (Short) Note: 11. " + 
            // needs to be abbreviated
            censusId + ", " +
            censusJurisdiction + ", " +
            censusSchedule + ", " +
            censusPage + ", " +
            censusHousehold + ", " +
            censusPerson + ".";
        citation_source = "Source List Entry: " +
            censusJurisdiction + ". " +
            censusId + ", " +
            censusSchedule + ". " +
            censusType + ". " +
            censusWebsite + ". " +
            censusUrl + " " +
            ": " + censusYear;
    }

    // Display the generated citation
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