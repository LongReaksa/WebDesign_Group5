 // Initialize the map
 function initMap() {
    // Set the university location coordinates
    const universityLocation = { lat: 11.563654, lng: 104.911888 }; // Example coordinates - change to your university's location
    
    // Create the map centered on university
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: universityLocation,
        mapTypeControl: false,
        streetViewControl: true,
        fullscreenControl: true,
    });
    
    // Add a marker for the university
    const marker = new google.maps.Marker({
        position: universityLocation,
        map: map,
        title: "University Main Campus"
    });
    
    // Add info window
    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div class="p-2">
                <h3 class="font-bold">University Main Campus</h3>
                <p>Welcome to our main campus!</p>
            </div>
        `
    });
    
    // Open info window when marker is clicked
    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });
}