$(document).ready(function(){ 
  $.get('https://obscure-tundra-54269.herokuapp.com/bar-food').done(function(data) {
    var app = data.appetizers
    var entre = data.entre 
    var des = data.desserts
 
var html = `<div class="appetizers"> </div>`
 
      html += app.map(ap => {
      return `
      <p class="appname">name: ${ap.name}</p>
      <p class="apppri">price: ${ap.price}</p>
      <p class="appdescr">description: ${ap.description}</p>
      <p class="appext">extra: ${ap.extra}<p>
  `
    }).join('')
    $('.appetizers').html(html)
  
   var html2 = `<div class="entrees"> </div>`
 
   html2 += entre.map(ap => {
    return `
    <p class="entrname">${ap.name}</p>
    <p class="entpri">${ap.price}</p>
    <p class="entdescr">${ap.description}</p>
    <p class="entext">${ap.extra}</p>
    `
   }).join('')
   $('.entrees').html(html)
 
   var html3 = `<div class="desserts"></div>`
 
   html3 += des.map(ap => {
    return `
    <p class="desname">${ap.name}</p>
    <p class="despri">${ap.price}</p>
    <p class="desdescr">${ap.description}</p>
    <p class="desext">${ap.extra}</p>
    `
   }).join('')
    $('.desserts').html(html)
  })
}) 
 
 
 
var slideIndex = 1
showDivs(slideIndex)
 
function plusDivs(n) {
  showDivs((slideIndex += n))
}
 
function currentDiv(n) {
  showDivs((slideIndex = n))
}
 
function showDivs(n) {
  var i
  var x = document.getElementsByClassName("mySlides")
  var dots = document.getElementsByClassName("demo")
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "")
  }
  x[slideIndex - 1].style.display = "block"
  dots[slideIndex - 1].className += " w3-white"
}
