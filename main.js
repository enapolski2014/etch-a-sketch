const container = document.getElementById("container");
let divArray = [];


function createDivs() {
    for (let i = 0; i < 16; i++) {
      let newDiv = document.createElement("div")
      newDiv.classList.add("newDiv");
      divArray.push(newDiv);
      container.appendChild(divArray[i]);
    }
}
createDivs();