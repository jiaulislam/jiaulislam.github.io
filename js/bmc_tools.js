// COMMA SEPERATED SITE CODE GENERATOR SECTION
let sitecodes = document.getElementById("w3review");
let genButton = document.getElementById("submit");
let queryBox = document.getElementById("query-output");
let impactBox = document.getElementById("format-output")
let clrButton = document.getElementById("clear-btn");

genButton.addEventListener('click', function(){
    // wait for the click event from user to generate the string
    let formattedString;
    let parseSites = sitecodes.value.split("\n");
    let pureSite = [];

    // trim all the spaces around the site codes
    for (let i = 0; i < parseSites.length; i++){
        if (parseSites[i] != ""){
            pureSite.push(parseSites[i].trim());
        }
    }
    // generate the relationship query string
    generateQueryString(pureSite);

    // join each element with ',' in puresite elements and return a string
    formattedString = pureSite.join(",");

    // set the value with formattedstring in the output textarea
    impactBox.value = formattedString;
})

function generateQueryString(siteArray){
    let queryList = [];
    for(let i = 0; i < siteArray.length; i++){
        if(siteArray[i].length == 7){
            queryList.push("'Name'LIKE\"%" + siteArray[i] + "\"");
        }
    }
    queryFormattedText = queryList.join("OR");
    queryBox.value = queryList;
}
function clear(){
   sitecodes.value = "";
   queryBox.value = "";
   impactBox.value = "";
}

clrButton.addEventListener('click', function(){
    // Clear the text box's
    clear();
})