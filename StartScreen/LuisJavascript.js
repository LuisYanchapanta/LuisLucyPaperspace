function region(){
document.getElementsByClassName("regionSelect")[0].click();
document.getElementsByClassName("regionSelect")[1].click();
document.getElementsByClassName("regionSelect")[2].click();
}
region();

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
document.getElementsByClassName("circleOpt checked")[2,1,0].click();
}
uncheckAll();

function createPaperspace(){
document.getElementById("submitPaymentInfo").click();
}
createPaperspace();
