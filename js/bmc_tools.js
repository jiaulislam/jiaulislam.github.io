// COMMA SEPERATED SITE CODE GENERATOR SECTION
let sitecodes = document.getElementById('box1');
let genButton = document.getElementById("submit");
let queryBox = document.getElementById("query-output");
let impactBox = document.getElementById("format-output")
let clrButton = document.getElementById("clear-btn");
let commaSites = document.getElementById("comma-sites");
let box = document.getElementsByClassName("container")

genButton.addEventListener('click', function(){
    // wait for the click event from user to generate the string
    if (sitecodes.value){
        let formattedString;
        let parseSites = sitecodes.value.split("\n");
        let pureSite = [];
        // trim all the spaces around the site codes
        for (let i = 0; i < parseSites.length; i++){
            if (parseSites[i] != ""){
                pureSite.push(parseSites[i].trim());
            }
        }
        // join each element with ',' in puresite elements and return a string
        formattedString = pureSite.join(",");
        // set the value with formattedstring in the output textarea
        impactBox.value = formattedString;
        // generate the relationship query string
        generateQueryString(pureSite);
        if (isBlank()) {
            clrButton.disabled = false;
        }
    }
})

function generateQueryString(siteArray){
    let queryList = [];
    for(let i = 0; i < siteArray.length; i++){
        if(siteArray[i].length == 7){
            queryList.push("'Name'LIKE\"%" + siteArray[i] + "\"");
        }
    }
    queryBox.value = queryList.join("OR");
   }
function clear() {
    sitecodes.value = "";
    queryBox.value = "";
    impactBox.value = "";

    if (!isBlank()) {
        clrButton.disabled = false;
    }
}

function isBlank() {
    if (sitecodes.value != "" || ( queryBox.value == "" || impactBox.value == "")) {
        return true;
    }
    return false;
}

function commaSeparetedSites(){
    if (!document.getElementsByClassName("comma-sites").value){
        let commaSites = document.getElementById("comma-sites").value.split(",");
        let finalQuery = [];
        for (let i = 0; i < commaSites.length; i++){
            finalQuery.push("'Name'LIKE\"%" + commaSites[i].trim() + "\"");
        }
        queryBox.value = finalQuery.join("OR");
    }
}

clrButton.addEventListener('click', function(){
    // Clear the text box's
    clear();
    // set the clear button disabled
    if (isBlank()){
        clrButton.disabled = true;
    }
})


// set the clear button disabled when the page loads.
document.addEventListener('DOMContentLoaded', function () {
    if (isBlank()){
        clrButton.disabled = true;
    }
},false);