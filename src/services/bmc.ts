// COMMA SEPERATED SITE CODE GENERATOR SECTION
const sitecodes = document.getElementById('box1') as HTMLInputElement;
const genButton = document.getElementById("submit") as HTMLButtonElement;
const queryBox = document.getElementById("query-output") as HTMLTextAreaElement;
const impactBox = document.getElementById("format-output") as HTMLTextAreaElement;
const clrButton = document.getElementById("clear-btn") as HTMLButtonElement;
const commaSites = document.getElementById("comma-sites") as HTMLInputElement;
const box: HTMLCollectionOf<Element>  = document.getElementsByClassName("container");
const copyBtn1 = document.querySelector("#copy-btn-1") as HTMLButtonElement;
const copyBtn2 = document.querySelector("#copy-btn-2") as HTMLButtonElement;


const REGEX = /([A-Z])\w+/gm;


function generateQueryString(siteArray: string[]): string {
    let queryList: string[] = [];
    for(let i = 0; i < siteArray.length; i++){
      if(siteArray[i].length == 7){
          queryList.push("'Name'LIKE\"%" + siteArray[i] + "\"");
      }
    }
    return queryList.join("OR");
  }

function generateCommaSeperatedString(siteArray: string[]) : string{
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

function isBlank(): boolean {
    if (sitecodes.value != "" || ( queryBox.value == "" || impactBox.value == "")) {
        return true;
    }
    return false;
}

genButton.addEventListener("click", (event) => {
  // wait for the click event from user to generate the string
  if (sitecodes.value) {
    let parseSites = sitecodes.value.match(REGEX)!;

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
        genButton.disabled = true;
    }
})


// Impact List Copy Event
copyBtn1.addEventListener("click", async (event) => {
    try {
      await navigator.clipboard.writeText(impactBox.value);
      console.log("Text copied to clipboard");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
    event.preventDefault();
  });
  
  // Query List Copy Event
  copyBtn2.addEventListener("click", async (event) => {
    try {
      await navigator.clipboard.writeText(queryBox.value);
      console.log("Text copied to clipboard");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
    event.preventDefault();
  });
  

document.addEventListener('DOMContentLoaded', () => {
    sitecodes.focus();
    sitecodes.select();
    clrButton.disabled=true;
    if (sitecodes.value) {
        genButton.disabled = false;
    }
    else{
        genButton.disabled = true;
    }
})

sitecodes.addEventListener('input', () => {
    if (sitecodes.value){
        genButton.disabled = false;
        clrButton.disabled=false;
    }else{
        clrButton.disabled = true;
        genButton.disabled = true;
    }
})