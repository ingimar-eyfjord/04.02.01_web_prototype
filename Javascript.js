// JavaScript Document

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function FirstsemesterOpen()
	{document.getElementById("first-semester-closed").setAttribute("class", "first-semester-open");	
	document.getElementById("module-1").setAttribute("class", "moduleoneopen");document.getElementById("module-2").setAttribute("class", "moduletwoopen");document.getElementById("module-3").setAttribute("class", "modulethreeopen");document.getElementById("module-4").setAttribute("class", "modulefouropen");}