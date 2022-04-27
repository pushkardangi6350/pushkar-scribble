
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@pushkardangi6350 
Prat-ksha
/
scribbler-project
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
scribbler-project/js/sign.js /
@Prat-ksha
Prat-ksha Create sign.js
Latest commit 2dd4661 10 days ago
 History
 1 contributor
45 lines (44 sloc)  1.53 KB
   
var modal3 = document.getElementById("deleteId");
var modal1 = document.getElementById("signUp");
// Get the button that opens the modal
var btn1 = document.getElementById("signUpB");
// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];
// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
  modal3.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
// *************
// modal for sign in 
var modal2 = document.getElementById("signIn");
var signinbut = document.getElementById("signInB"); //button open modal 
var span2 = document.getElementsByClassName("close")[0]; //<span> element that closes the modal
signinbut.onclick = function() {     //user clicks on the button, open the modal
  modal2.style.display = "block";}
  span2.onclick = function() {
    modal2.style.display = "none";  //user clicks on <span> (x), close the modal
  }
  // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";

  }
}
var sp=document.getElementById("redirect");
sp.onclick=function()
{
  modal2.style.display = "none";
  modal1.style.display = "block";
  modal3.style.display = "block";
}
