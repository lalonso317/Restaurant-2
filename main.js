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
  console.log(html)
    }).join('')
    $('.appetizers').html(html)
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

