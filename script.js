"use strict";

let inputDOM = document.querySelector("#task");
let liDOM = document.querySelector("#list");
let submitBtn = document.querySelector("#liveToastBtn");

const addElement = () => {
  if (inputDOM.value) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(inputDOM.value));
    liDOM.appendChild(li);
    li.onclick = checkElement;

    const removeBtn = document.createElement("span");
    removeBtn.classList.add("close");
    removeBtn.innerHTML = "X";
    removeBtn.onclick = deleteElement;
    li.appendChild(removeBtn);
    inputDOM.value = "";
    $(".success").toast("show");
  } else {
    $(".error").toast("show");
  }
};

submitBtn.addEventListener("click", addElement);

function checkElement() {
  this.classList.toggle("check");
}
function deleteElement() {
  this.parentElement.remove();
}
