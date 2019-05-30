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
	{document.getElementById("first-semester-closed").classList.toggle("first-semester-open");	
	document.getElementById("module-1").setAttribute("class", "moduleoneopen");document.getElementById("module-2").setAttribute("class", "moduletwoopen");document.getElementById("module-3").setAttribute("class", "modulethreeopen");document.getElementById("module-4").setAttribute("class", "modulefouropen");}

function firstintro(){
 var x = document.getElementById("intro-text-one");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
document.getElementById("intro-text-two").setAttribute("class", "intro-text-1");var y = document.getElementById("intro-button-1");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }document.getElementById("intro-button-2").setAttribute("class", "next-button-1");
}

function secondintro(){
 var z = document.getElementById("intro-text-two" );
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }document.getElementById("intro-text-three").setAttribute("class", "intro-text-1");
	var p = document.getElementById("intro-button-2");
  if (p.style.display === "none") {
    p.style.display = "block";
  } else {
    p.style.display = "none";
  }document.getElementById("finish-button").setAttribute("class", "next-button-1");
}

function finishintro(){
  var f = document.getElementById("intro");if (f.style.display === "none") {
    f.style.display = "block";
  } else {
    f.style.display = "none";}}

function openleftbox(){document.getElementById("leftbox-closed").setAttribute("class","leftbox-open");}

function leftboxclose(){document.getElementById("leftbox-closed").setAttribute("class","");
						document.getElementById("leftbox-closed").setAttribute("class","leftbox-closed");}
function Teachingcurrenttaskdropdown(){document.getElementById("Teaching-material-closed").classList.toggle("current-task-dropdown");document.getElementById("inside-current-teach").classList.toggle("inside-currentteach")}

function backwardsweek22(){document.getElementById("week22").classList.toggle("week-22");document.getElementById("week23").setAttribute("class", "week-23")}

function onwardsweek23(){document.getElementById("week22").classList.toggle("week-22");document.getElementById("week23").setAttribute("class", "")}

function onwardsweek24(){document.getElementById("week23").classList.toggle("week-23");document.getElementById("week24").setAttribute("class", "")}

function backwardsweek23(){document.getElementById("week23").classList.toggle("week-23");document.getElementById("week24").setAttribute("class", "week-24")}

function Requirementscurrenttaskdropdown(){document.getElementById("Requirements-closed").classList.toggle("current-task-dropdown");document.getElementById("inside-current").classList.toggle("inside-current")}

function handcurrenttaskdropdown(){document.getElementById("hand-in-closed").classList.toggle("current-task-dropdownhand");document.getElementById("inside-currenthand").classList.toggle("inside-currenthand");}

function pdfonclick()
{document.getElementById("pdfonclick").setAttribute("class", "pdfget");}

document.querySelector("login").addEventListener("click", function(event){document.getElementById("login");event.preventDefault();window.location.href = "04.02.01_web_prototype.html";
}, false);

/*
const toggle=document.querySelectorAll(".toggle-class")

toggle.forEach((n)=>{n.addEventListener("click", toggleclass)})

function toggleclass(){
	this.classList.toggle("current-task-dropdown")
}*/
