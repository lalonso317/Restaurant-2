
$(document).ready(function(){
  $('#menu').on('load',function(e){
    e.preventDefault()
  var app = data.appetizers
  var entre = data.entre 
  var des = data.desserts
    

  $.get('https://obscure-tundra-54269.herokuapp.com/bar-food' + app).done(function(data) {
     const result = data.result[0]
  const price = result.price
  const name = result.name
  const description = result.description
  const extra = result.extra
    
     const html = $('appetizers').map(item =>{
      
      `
      <p class="appname">name: ${name}</p>
      <p class="apppri">price: ${price}</p>
      <p class="appdescr">description: ${description}</p>
      <p class="appext">extra: ${extra}<p>
  `
  console.log(html)
    }).join('')
    return $('.appertizers').html(html)
    
  })
}) 
})
  // const html = `
  //   price: ${price},
  //   name: ${name},
  //   description: ${description},
  //   extra: ${extra}
  // `
  // $('#appetizers').html(html)
  //  app.map(item =>{
  //     `
  //     <p class="">${name}</p>
  //     <p class="apppri">${price}</p>
  //     <p class="appdescr">${description}</p>
  //     <p class="appext">${extra}</p>
  //   `

// .join('')





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

