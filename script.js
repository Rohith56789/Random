
// Tool:1
function priceCost() {
  var cartlist = parseInt(document.getElementById("cartlist").value);
  var pricein = parseInt(document.getElementById("pricein").value);
  if (cartlist == 24) {
    document.getElementById("result").value = pricein;
  }
  else if (cartlist ==22) {
    document.getElementById("result").value = (pricein * 91.6) / 100;
  }
  else if (cartlist ==20) {
    document.getElementById("result").value = (pricein * 83.3) / 100;
  }
  else if (cartlist == 18) {
    document.getElementById("result").value = (pricein* 75) / 100;
  }
}

function showLoader(top) {
document.getElementById("cartlist").style.display = "block";
document.getElementById("cartlist").style.top = top.toString();
}
// clear function Tool:1
function clearFun() {
 document.getElementById("pricein").value = "";
  document.getElementById("result").value = "";
}

// funtion Tool:2
function priceCost2() {
var cartlist2 = parseInt(document.getElementById("cartlist2").value);

var pricein2 = parseInt(document.getElementById("pricein2").value);

var wig = parseInt(document.getElementById("wig").value);

var mc = parseInt(document.getElementById("mc").value);
const g = 3 / 100;
var gst=
document.getElementById("gst").value = ((pricein2 * wig + mc) * g);  

   document.getElementById("fp").value =( pricein2 *(wig + mc + gst)) ;
}


//  clear fun tool:2
function clearFun2() {
document.getElementById("pricein2").value = "";
document.getElementById("weight").value = "";
document.getElementById("mkcharge").value = "";
document.getElementById("gst").value = "";
document.getElementById("fp").value = "";
}
// Functioning of Tool:3
function priceCost3()
{
var cartlist3 =parseInt(document.getElementById("cartlist3").value);

var weight3 =parseInt(document.getElementById("weight3").value);
var rgp=document.getElementById("rgp").value;
const f=(weight3* cartlist3* rgp) / 24;
document.getElementById("fPrice").value= f;
}


// function clearFun3()
{
document.getElementById("wig").value = "";
document.getElementById("rgp").value = "";
document.getElementById("fprice").value = "";
}

// Functioning of Tool:4
function priceCost4() {
var cartlist4=parseInt(document.getElementById("cartlist4").value);
var pricein4 = document.getElementById("pricein4").value;

var rgt = document.getElementById("rgt").value;

document.getElementById("Price4").value =
  (pricein4 * cartlist4 * rgt) / 100;
}

// Functioning of Tool:4
function clearFun4() {
document.getElementById("pricein4").value = "";
document.getElementById("rgt").value = "";
document.getElementById("Price4").value = "";
}

function addFunction() {
const gross = document.getElementById("gross").value;
const purity = document.getElementById("purity").value;
var gw = parseInt(document.getElementById("gw").value);
var grg = parseInt(document.getElementById("grg").value);
var amount = parseInt((document.getElementById("amount").value = gw * grg));
var table = document.getElementById("goldtable");

var row = table.insertRow(-1);

var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);

cell1.innerHTML = gross.toUpperCase();
cell2.innerHTML = purity + " CARAT";
cell3.innerHTML = gw + " Grams";
cell4.innerHTML = grg;
cell5.innerHTML = amount;

resetFun();
}
//  calculate: table amount 
function amountFun() {
var gw = parseInt(document.getElementById("gw").value);
var grg = parseInt(document.getElementById("grg").value);
var amount = parseInt((document.getElementById("amount").value = gw * grg));
}
//     Table input field  auto reset
function resetFun() {
document.getElementById("gross").value = "";
document.getElementById("purity").value = "";
document.getElementById("gw").value = "";
document.getElementById("grg").value = "";
document.getElementById("amount").value = "";
}
var myLoad;

// function showPage() {
// document.getElementById("loader").style.display = "none";
// }
// function hideLoader() {

// myLoad = setTimeout(showPage, 1000);
// }

// Nav-bar Yellow
function showOrHideCategory(category) {

  
// document.getElementById("loader").style.display = "block";
// document.getElementById("loader").style.left = "150%";
// document.getElementById("loader").style.top = "10%";
var jeweleryCollection = document.getElementsByClassName("jewelery");
var necklaceCollection = document.getElementsByClassName("necklace");
var jhumkasCollection = document.getElementsByClassName("jhumkas");
var banglesCollection = document.getElementsByClassName("bangles");
  for (let i = 0; i < jeweleryCollection.length; i++) {
    jeweleryCollection[i].style.display = "none";
  }
  for (let i = 0; i < necklaceCollection.length; i++) {
  necklaceCollection[i].style.display = "none";
}
for (let i = 0; i < jhumkasCollection.length; i++) {
  jhumkasCollection[i].style.display = "none";
}
for (let i = 0; i < banglesCollection.length; i++) {
  banglesCollection[i].style.display = "none";
}

switch (category) {
  case "jewelery":
    for (let i = 0; i < jeweleryCollection.length; i++) {
      jeweleryCollection[i].style.display = "block";
    }
    for (let i = 0; i < necklaceCollection.length; i++) {
      necklaceCollection[i].style.display = "block";
    }
    for (let i = 0; i < jhumkasCollection.length; i++) {
      jhumkasCollection[i].style.display = "block";
    }
    for (let i = 0; i < banglesCollection.length; i++) {
      banglesCollection[i].style.display = "block";
    }
    break;
  case "necklace":
    for (let i = 0; i < necklaceCollection.length; i++) {
      necklaceCollection[i].style.display = "block";
    }
    break;
  case "jhumkas":
    for (let i = 0; i < jhumkasCollection.length; i++) {
      jhumkasCollection[i].style.display = "block";
    }
    break;
  case "bangles":
    for (let i = 0; i < banglesCollection.length; i++) {
      banglesCollection[i].style.display = "block";
    }
    break;
}
hideLoader();

}
function showDp(s1, s2) {
var s1 = document.getElementById(s1);
var s2 = document.getElementById(s2);

s2.innerHTML = "";

if (s1.value == "gold") {
  var optionArray = [
    "ring|Ring",
    "necklace|necklace",
    "bangle|Bangle",
    "bracelet|Bracelet",
    "chain|Chain",
  ];
}
if (s1.value == "silver") {
  var optionArray = ["chain|Chain"];
}
if (s1.value == "diamond") {
  var optionArray = ["ring|Ring", "necklace|necklace"];
}
if (s1.value == "platinum") {
  var optionArray = ["bangle|Bangle", "bracelet|Bracelet"];
}
for (var option in optionArray) {
  var pair = optionArray[option].split("|");
  var newoption = document.createElement("option");

  newoption.value = pair[0];
  newoption.innerHTML = pair[1];
  s2.options.add(newoption);
}
}

function showDp2(s2, s3) {
var s2 = document.getElementById(s2);
var s3 = document.getElementById(s3);

s3.innerHTML = "";

if (s2.value == "ring") {
  var optionArray1 = ["ring gem|Ring Gem", "ring casting|Ring Casting"];
}
if (s2.value == "necklace") {
  var optionArray1 = [
    "necklace pachi|necklace Pachi",
    "necklace plain|necklace Plain",
  ];
}
if (s2.value == "bangle") {
  var optionArray1 = ["bangle uncut|Bangle Uncut", "bangle cz|Bangle CZ"];
}
if (s2.value == "bracelet") {
  var optionArray1 = [
    "baby bracelet|Baby Bracelet",
    "fancy bracelet|Fancy Bracelet",
  ];
}
if (s2.value == "chain") {
  var optionArray1 = ["baby chain|Baby Chain", "big chain|Big Chain"];
}
for (var option in optionArray1) {
  var pair1 = optionArray1[option].split("|");
  var newoption1 = document.createElement("option");

  newoption1.value = pair1[0];
  newoption1.innerHTML = pair1[1];
  s3.options.add(newoption1);
}
}
function resetFunDp() {
document.getElementById("selc2").value = "";
document.getElementById("selc3").value = "";
}
function resetFunDp2() {
document.getElementById("selc3").value = "";
}


// ----------------- dropdown list 3 Gold,Silver,Diamond,Platinum---------------------
function showDp(s1, s2) {
var s1 = document.getElementById(s1);
var s2 = document.getElementById(s2);

s2.innerHTML = "";

if (s1.value == "gold") {
  var optionArray = [
    "ring|Ring",
    "necklace|necklace",
    "bangle|Bangle",
    "bracelet|Bracelet",
    "chain|Chain",
  ];
}
if (s1.value == "silver") {
  var optionArray = ["chain|Chain"];
}
if (s1.value == "diamond") {
  var optionArray = ["ring|Ring", "necklace|necklace"];
}
if (s1.value == "platinum") {
  var optionArray = ["bangle|Bangle", "bracelet|Bracelet"];
}
for (var option in optionArray) {
  var pair = optionArray[option].split("|");
  var newoption = document.createElement("option");

  newoption.value = pair[0];
  newoption.innerHTML = pair[1];
  s2.options.add(newoption);
}
}

function showDp2(s2, s3) {
var s2 = document.getElementById(s2);
var s3 = document.getElementById(s3);

s3.innerHTML = "";

if (s2.value == "ring") {
  var optionArray1 = ["ring gem|Ring Gem", "ring casting|Ring Casting"];
}
if (s2.value == "necklace") {
  var optionArray1 = [
    "necklace pachi|necklace Pachi",
    "necklace plain|necklace Plain",
  ];
}
if (s2.value == "bangle") {
  var optionArray1 = ["bangle uncut|Bangle Uncut", "bangle cz|Bangle CZ"];
}
if (s2.value == "bracelet") {
  var optionArray1 = [
    "baby bracelet|Baby Bracelet",
    "fancy bracelet|Fancy Bracelet",
  ];
}
if (s2.value == "chain") {
  var optionArray1 = ["baby chain|Baby Chain", "big chain|Big Chain"];
}
for (var option in optionArray1) {
  var pair1 = optionArray1[option].split("|");
  var newoption1 = document.createElement("option");

  newoption1.value = pair1[0];
  newoption1.innerHTML = pair1[1];
  s3.options.add(newoption1);
}
}
function resetFunDp() {
document.getElementById("selc2").value = "";
document.getElementById("selc3").value = "";
}
function resetFunDp2() {
document.getElementById("selc3").value = "";
}

function dpButton() {
if (document.getElementById("sgb")) {
  alert("Please Select Groupby");
}
}

function myFunction() {
  document.getElementById("card").className="necklace";
  }

 var loaderContainer = document.getElementById('loader-container');
 var loaderLink = document.getElementById('loader-link');
 loaderLink.addEventListener('click', function(event) {
   event.preventDefault();

loaderContainer.style.display = 'block';


  // Simulate loading completion
  setTimeout(function() {
    loaderContainer.style.display = 'none';
    // Add your logic here to handle the loaded content
  }, 2000); // Change the delay time as needed
});


// Function to show the loader
function showLoader() {
  var loader = document.getElementById("loader");
  loader.style.display = "block";
}

// Function to hide the loader
function hideLoader() {
  var loader = document.getElementById("loader");
  loader.style.display = "none";
}

