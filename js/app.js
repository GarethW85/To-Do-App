//////////////////////////////////////////////////////////
////// JAVASCRIPT IS MY NEW FAVOURITE LANGUAGE ///////////
//////////////////////////////////////////////////////////
// window.addEventListener('DOMContentLoaded', () => {
//   refreshDom();
// });


// Create a "close" button X
//////////////////////////////////////////////////////////
var mylist = document.getElementsByTagName("li");
var i;
for (i = 0; i < mylist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\uD83D\uDDD1");
  span.className = "close";
  mylist[i].appendChild(span);
}


// Click on a close button to hide the current list item
////////////////////////////////////////////////////////
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


// Create a new list item when clicking on the "Add" button
///////////////////////////////////////////////////////////
function myElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  var animate = document.getElementById('errorMsg');
  
  // get date from input field
var new_data = document.getElementById('myInput').value;
const input = document.getElementById('myInput');

//validation on blank fields
if (input.value === ""){
  // alert ('You cant save empty fields');
  swal("Sorry!", "You cant save empty fields!", "error");
  return false;
}

// it storage is empty then 
if (localStorage.getItem('data') == null ) {
  localStorage.setItem('data', '[]')
}

//get old data
var old_data = JSON.parse(localStorage.getItem('data'));
old_data.push(new_data);

//save new data
localStorage.setItem('data', JSON.stringify(old_data));


  li.appendChild(t);
  if (inputValue === '') {
    document.getElementById("errorMsg").style.display = 'block';
    setTimeout(function(){
      errorMsg.style.display = 'none'; }, 2000); 
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  //Strikethrough on List items
  /////////////////////////////////////////////////////////
  li.addEventListener('dblclick', function () {
    li.style.textDecoration = "line-through"
  })

  li.addEventListener('click', function () {
    li.style.textDecoration = "none"
  })

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u2717");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


// Delete all listed items and reload the page
/////////////////////////////////////////////
function clearAll(x) {
  
  switch (x) {
    case 'removeList':
      document.getElementById('myUL').style.display='none';
      location.reload();
      break; 
    default :
    console.log ('Cant clear list');   
  }
}


// Sort by alphabetical order on click
//////////////////////////////////////////////////////////
function sortList() {

  var list, i , switching, listitems, shouldSwitch;
    list = document.getElementById('myUL');
    switching = true;
 
    while (switching) {
       switching = false;
       listitems = list.getElementsByTagName("li");
 
       for (i = 0 ; i < (listitems.length-1); i++ ){
       shouldSwitch = false;
       if(listitems[i].innerHTML.toLowerCase() > listitems[i+1].innerHTML.toLowerCase()){
          shouldSwitch = true;
          break;
          }
       }
       listitems[i].parentNode.insertBefore(listitems[i+1],listitems[i]);
       switching = true;
    }
}


// // Local Storage
// ///////////////////////////////////////////////////////

// function save() {
// // get date from input field
// var new_data = document.getElementById('myInput').value;
// const input = document.getElementById('myInput');

// //validation on blank fields
// if (input.value === ""){
//   alert ('You cant save empty fields');
//   return false;
// }


// // it storage is empty then 
// if (localStorage.getItem('data') == null ) {
//   localStorage.setItem('data', '[]')
// }

// //get old data
// var old_data = JSON.parse(localStorage.getItem('data'));
// old_data.push(new_data);

// //save new data
// localStorage.setItem('data', JSON.stringify(old_data));
// }


//Edit List Items
///////////////////////////////////////////////////////
function edit() {

  var editMe = document.querySelectorAll("[contenteditable=false]");
  // document.getElementById("editList").style.visibility = 'hidden';
  // document.getElementById("completed").style.visibility = 'visible';
  // var icon = document.getElementById("editList");
  // el.classList.toggle('fa-check');
  // icon.classList.toggle('fa-check');

  for(var i=0; i<editMe.length; i++)
    editMe[i].setAttribute("contenteditable", true);
    
    var keydown = document.getElementById("myUL");
    keydown.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  
        validate(e);
    }
  });
 
  
  }
  
//Completed edits
  function completed() {
    var doneEdit = document.querySelectorAll("[contenteditable=true]");
    for(var i=0; i<doneEdit.length; i++)
    doneEdit[i].setAttribute("contenteditable", false);
    
    
  
  }
  

  