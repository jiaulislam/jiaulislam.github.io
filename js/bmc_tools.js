// COMMA SEPERATED SITE CODE GENERATOR SECTION
let sitecodes = document.getElementById('box1');
let genButton = document.getElementById("submit");
let queryBox = document.getElementById("query-output");
let impactBox = document.getElementById("format-output")
let clrButton = document.getElementById("clear-btn");
let commaSites = document.getElementById("comma-sites");
let box = document.getElementsByClassName("container");
let copyBtn1 = document.querySelector("#copy-btn-1");
let copyBtn2 = document.querySelector("#copy-btn-2");

const REGEX = /([A-Z])\w+/gm;


function generateQueryString(siteArray){
    let queryList = [];
    for(let i = 0; i < siteArray.length; i++){
        if(siteArray[i].length == 7){
            queryList.push("'Name'LIKE\"%" + siteArray[i] + "\"");
        }
    }
   return queryList.join("OR");
}

function generateCommaSeperatedString(siteArray){
    return siteArray.join(",");
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

genButton.addEventListener("click", (event) => {
  // wait for the click event from user to generate the string
  if (sitecodes.value) {
    let parseSites = sitecodes.value.match(REGEX);

    // set the value with formattedstring in the output textarea
    impactBox.value = generateCommaSeperatedString(parseSites);
    // generate the relationship query string
    queryBox.value = generateQueryString(parseSites);
    if (isBlank()) {
      clrButton.disabled = false;
    }
  }
  event.preventDefault();
});

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
    sitecodes.focus()
    sitecodes.select()
},false);

// Impact List Copy Event
copyBtn1.addEventListener("click", (event) => {
    impactBox.select();
    document.execCommand("copy");
    event.preventDefault();
});

// Query List Copy Event
copyBtn2.addEventListener("click", (event) => {
  queryBox.select();
  document.execCommand("copy");
  event.preventDefault();
});

// for activating tooltip with bootstrap
let tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

