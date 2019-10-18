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
