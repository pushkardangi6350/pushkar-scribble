var allpostbutton = document.getElementById("allPostB");
allpostbutton.onclick = function(){
    window.location.assign("html/bloglist.html")
}
var crModal = document.getElementById("createPostM"); 
var crMbut = document.getElementById("createPostB"); //button open modal 
var spanC = document.getElementsByClassName("closepost")[0]; //<span> element that closes the modal

// When the user clicks on the button, open the modal
crMbut.onclick = function() {
  crModal.style.display = "block";}
// When the user clicks on <span> (x), close the modal
spanC.onclick = function() {
  crModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == crModal) {
    crModal.style.display = "none";
  }
}
