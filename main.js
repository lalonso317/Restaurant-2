
$(document).ready(function() {
  var requeest = $.ajax({
    url: "https://obscure-tundra-54269.herokuapp.com/bar-food",
    type: "GET",
    data: "json"
  }).done(function(requeest) {
    $(".menu").html()
  })
})
function initMap() {
  var options = {
    zoom: 15,
    center: { lat: 36.1699, lng: -115.1398 }
  }
  var map = new google.maps.Map(document.getElementById("map"), options)

  var marker = new google.maps.Marker({
    postion: { lat: 36.1699, lng: -115.1398 },
    map: map,
    title: "NBW!"
  })
  marker.setMap(map)
}

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

$(document).ready(function(){
    var requesst = $.ajax({
        url: 'https://obscure-tundra-54269.herokuapp.com/bar-food',
        type: 'GET',
        data:['appestizers','entrees','desserts']
    })   
        .done(function(requeest){
            $('.menu').html()
        })
    
    })
    // function initMap(){
    //     var options = {
    //       zoom: 15,
    //       center:{lat:36.1699, lng: -115.1398}
    //       }
    //       var map = new google.maps.Map(document.getElementById("map"),options);
    
    //         marker.setMap(map)
    //   }

