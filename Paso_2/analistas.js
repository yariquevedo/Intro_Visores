
function detectCentroids(){
    let centroids=[];
    drawnLayers.forEach(
        function(layer){
            //try para ejecutar acciones que pueden fallar
            try{
                let centroid = turf.centroid(layer.toGeoJSON());
                centroids.push(centroid);
                L.geoJSON(centroid,{
                    style:{
                        color:"red",
                        fillColor:"green"
                    }
                }).addTo(map);
                console.log(centroid);
            }catch(error){
                console.warn("Error al detectar centroides", error)

            }
        }
    )
    return centroids; // Retorna la lista de centroides
}

function calculateAreas(){
    drawnLayers.forEach(
        function(layer){
            try{

                let area = turf.area(layer.toGeoJSON());
                let centroid = turf.centroid(layer.toGeoJSON());
                x=centroid.geometry.coordinates[1];
                y=centroid.geometry.coordinates[0];
                L.marker([x,y],{
                    icon: L.divIcon(
                        {
                            className: "area_label",
                            html:`${area}m2`
                        }
                    )
                }
                ).addTo(map);
                console.log(area);

            }catch(error){
                console.warn("Hubo un error al calcular el área.", error)
            }
        }
    )
}

function centroidDistance(){
    let centroids = detectCentroids(); // Obtener los centroides detectados
    for (let i = 0; i < centroids.length - 1; i++) {
            try{
                let distance = turf.distance(centroids[i], centroids[i + 1], {units: 'kilometers'});
                console.log(`Distancia entre el centroide ${i} y el centroide ${i + 1}: ${distance} km`);
            }catch(error){
                console.warn("Hubo un error al calcular la distancia entre centroides", error)
            }
        }
    
}