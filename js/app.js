//////////////////////////////////////////////////////////
////// JAVASCRIPT IS MY NEW FAVOURITE LANGUAGE ///////////
//////////////////////////////////////////////////////////

// Prevent white spaces from been added to the list
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("myInput");

  if (!input) return;
  input.addEventListener("input", (e) => {
    const value = e.target.value;
    const hasTrailingSpace =
      value !== " " && value.charAt(value.length - 1) === " ";
    const words = value.split(" ").filter((el) => el !== "");
    let sanitizedValue = words.join(" ");

    if (hasTrailingSpace) sanitizedValue += " ";
    e.target.value = sanitizedValue;
  });
});

// Create a "close" button X
var mylist = document.getElementsByTagName("li");
var i;
for (i = 0; i < mylist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\uD83D\uDDD1");
  span.className = "close";
  mylist[i].appendChild(span);
}

// Close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Create a new list item when clicking on the "Add" button
function myElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);

  // get date from input field
  let new_data = document.getElementById("myInput").value;
  const input = document.getElementById("myInput");

  //validation on empty submits
  if (input.value === "") {
    swal("Sorry!", "No empty fields accepted!", "error");
    return false;
  }

  // if storage is empty then
  if (localStorage.getItem("data") == null) {
    localStorage.setItem("data", "[]");
  }

  //get old data
  let old_data = JSON.parse(localStorage.getItem("data"));
  old_data.push(new_data);

  //save new data
  localStorage.setItem("data", JSON.stringify(old_data));

  li.appendChild(t);
  if (inputValue === "") {
    document.getElementById("errorMsg").style.display = "block";
    setTimeout(function () {
      errorMsg.style.display = "none";
    }, 2000);
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  //Strikethrough on List items
  /////////////////////////////////////////////////////////
  li.addEventListener("dblclick", function () {
    li.style.textDecoration = "line-through";
  });

  li.addEventListener("click", function () {
    li.style.textDecoration = "none";
  });

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u2717");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}

// Delete all listed items and reload the page
function clearAll(x) {
  switch (x) {
    case "removeList":
      document.getElementById("myUL").style.display = "none";
      location.reload();
      break;
    default:
      console.log("Cant clear list");
  }
}

// Sort by alphabetical order on click
function sortList() {
  let list, i, switching, listitems, shouldSwitch;
  list = document.getElementById("myUL");
  switching = true;

  while (switching) {
    switching = false;
    listitems = list.getElementsByTagName("li");

    for (i = 0; i < listitems.length - 1; i++) {
      shouldSwitch = false;
      if (
        listitems[i].innerHTML.toLowerCase() >
        listitems[i + 1].innerHTML.toLowerCase()
      ) {
        shouldSwitch = true;
        break;
      }
    }
    listitems[i].parentNode.insertBefore(listitems[i + 1], listitems[i]);
    switching = true;
    break;
  }
}

//Edit List Items
function edit() {
  let editMe = document.querySelectorAll("[contenteditable=false]");

  for (let i = 0; i < editMe.length; i++)
    editMe[i].setAttribute("contenteditable", true);
  document.addEventListener("keypress", function (e) {
    if (e.keyCode === 13 || e.which === 13) {
      e.preventDefault();
      return false;
    }
  });
}

//Complete button to click when done with edits
function completed() {
  let doneEdit = document.querySelectorAll("[contenteditable=true]");
  for (let i = 0; i < doneEdit.length; i++)
    doneEdit[i].setAttribute("contenteditable", false);
}

// Developer contact information using objects
const developerContact = {
  Name: "Gareth",
  Institution: "CodeSpace",
  GithubProfile: "github.com/garethw85",
  Email: "tidylad@hotmail.com",
};
console.log(developerContact);
localStorage.setItem("Developer Details", JSON.stringify(developerContact));