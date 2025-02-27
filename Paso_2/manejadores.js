let centroides = document.getElementById("centroid");
centroides.addEventListener('click', function(){
    console.log("Vamos a calcular los centroides");
    detectCentroids();
})

let areas = document.getElementById("areas");
areas.addEventListener('click', 
    function(){
        console.log("Vamos a calcular áreas");
        calculateAreas();
    }
)

let distanceCentroid = document.getElementById("centroidDistance");
distanceCentroid.addEventListener('click', 
    function(){
        console.log("Vamos a calcular la distancia entre centroides");
        centroidDistance();
    }
)