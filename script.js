// script.js
document.addEventListener('DOMContentLoaded', function() {
    var panoramaContainer = document.getElementById('panorama');

    var panorama = new PANOLENS.Panorama('bus-interior.jpg');
    var viewer = new PANOLENS.Viewer({
        container: panoramaContainer,
        autoHideControlBar: false
    });

    viewer.add(panorama);

    // Optional: Add a button to guide users to specific areas or seats
    var infoButton = document.createElement('button');
    infoButton.textContent = 'View Seat Arrangement';
    infoButton.style.padding = '10px';
    infoButton.style.marginTop = '20px';
    infoButton.style.backgroundColor = '#007bff';
    infoButton.style.color = 'white';
    infoButton.style.border = 'none';
    infoButton.style.borderRadius = '5px';
    infoButton.style.cursor = 'pointer';
    
    infoButton.onclick = function() {
        // Custom logic to show information about seating
        alert("This is where the seating arrangement information can be shown!");
    };

    document.querySelector('.tour-container').appendChild(infoButton);
});
