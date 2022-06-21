
// JAVASCRIPT IS MY NEW FAVOURITE LANGUAGE
// Create a "close" button and append it to each list item
var mylist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < mylist.length; i++) {
  var span = document.createElement("SPAN");
  // var txt = document.createTextNode("\u00D7");
  var txt = document.createTextNode("\uD83D\uDDD1");
  // var animate = document.getElementById('errorMsg2');
  span.className = "close";
  mylist[i].appendChild(span);
}




// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}




// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);



// Create a new list item when clicking on the "Add" button
function myElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  var animate = document.getElementById('errorMsg');
  

  li.appendChild(t);
  if (inputValue === '') {
    // alert("Your list can't be blank!"); with a hidden feature after animation
    document.getElementById("errorMsg").style.display = 'block';
    setTimeout(function(){
      errorMsg.style.display = 'none'; }, 2500); 
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  // var txt = document.createTextNode("\u00D7");
  var txt = document.createTextNode("\u2421");
  
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



//Delete all listed items and reload the page

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