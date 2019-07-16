]function checkVMclicks(){

var region = document.querySelectorAll('.regionSelect')

region[1].addEventListener('click', function(event) { console.log(event.currentTarget);
console.log("East Coast Region was clicked"); })

region[0].addEventListener('click', function(event) { console.log(event.currentTarget);
console.log("West Coast Region was clicked"); })

region[2].addEventListener('click', function(event) { console.log(event.currentTarget);
console.log("Europe Region was clicked"); })



var checkboxes = document.querySelectorAll('div.sectionF .circleOpt')

checkboxes[0].addEventListener('click', function(event) { console.log(event.currentTarget);
console.log("Auto-Shutdown was clicked"); })

checkboxes[1].addEventListener('click', function(event) { console.log(event.currentTarget);
console.log("Auto Snapshot was clicked"); })

checkboxes[2].addEventListener('click', function(event) { console.log(event.currentTarget);
console.log("Public IP was clicked"); })


var region = document.querySelectorAll('.row .os_block ')

region[1].addEventListener('click', function(event) { console.log(event.currentTarget);
console.log("Windows 7 was clicked"); })

region[0].addEventListener('click', function(event) { console.log(event.currentTarget);
console.log("Windows 10 was clicked"); })

region[2].addEventListener('click', function(event) { console.log(event.currentTarget);
console.log("Windows 10 (Bring your own license) was clicked"); })
/*
document.getElementsByClassName("os_block")[2].click();
var agree = document.querySelectorAll(' #acceptButton ')
agree[0].addEventListener('click', function(event) { console.log(event.currentTarget);
console.log("Windows 10 BYOL agree button was clicked"); })
document.getElementById("acceptButton").click();
*/
}
checkVMclicks();


function clickVM(){

function region(){
document.getElementsByClassName("regionSelect")[0].click();
document.getElementsByClassName("regionSelect")[1].click();
document.getElementsByClassName("regionSelect")[2].click();
document.getElementsByClassName("regionSelect")[1].click();
}
region();

function OSoptions(){
document.getElementsByClassName("strong tab")[3,2,1,0].click();
return true;
};
if ( OSoptions() === true ) {
var elements = document.getElementsByClassName("strong tab");

for (i = 0; i < elements.length; i++) {
    console.log(elements[i].innerHTML + " " + "was clicked");
}
};

document.getElementsByClassName("strong tab")[0].click();
document.getElementsByClassName("os_block")[0,1].click();
document.getElementsByClassName("os_block")[2].click();

var agree = document.querySelectorAll(' #acceptButton ')

agree[0].addEventListener('click', function(event) { console.log(event.currentTarget);
console.log("Windows 10 BYOL agree button was clicked"); })

document.getElementById("acceptButton").click();


document.getElementsByClassName("strong tab")[1].click();
document.getElementsByClassName("templateTileIcon")[0,1].click();

document.getElementsByClassName("strong tab")[2].click();
document.getElementsByClassName("templateTileIcon")[0,1,2,3].click();

document.getElementsByClassName("strong tab")[3].click();
document.getElementsByClassName("strong tab")[1].click();
document.getElementsByClassName("os_block")[0].click();


function switchRight(){
document.getElementsByClassName("custom-switch")[1].click();
document.getElementsByClassName("vmType")[0,1,2,3].click();
}
switchRight();

function tilesForRightSwitch(){
document.getElementsByClassName("vmType")[0,1,2,3,4,5,6,7].click();
}
tilesForRightSwitch();


function switchLeft(){
document.getElementsByClassName("custom-switch")[1].click();
document.getElementsByClassName("vmType")[0,1,2,3].click();
}

switchLeft();

function tilesForLeftSwitch(){
document.getElementsByClassName("vmType")[0,1,2,3,4,5,6,7].click();
}
tilesForLeftSwitch();

function checkAllwithDefault(){
document.getElementsByClassName("circleOpt")[2].click();
}
checkAllwithDefault();

function uncheckAll(){
document.getElementsByClassName("circleOpt")[2].click();
document.getElementsByClassName("circleOpt")[1].click();
document.getElementsByClassName("circleOpt")[0].click();
}
uncheckAll()

function checkDefault(){
document.getElementsByClassName("circleOpt")[1].click();
document.getElementsByClassName("circleOpt")[0].click();
}
checkDefault();
/*
function createPaperspace(){
document.getElementById("submitPaymentInfo").click();
}
createPaperspace();
*/
}
clickVM();