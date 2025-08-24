var map = L.map('map').setView([-1.287526, 36.828763], 19); // Paris

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);


 // Clean, minimal tile layer from CARTO
  // L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  //   attribution:
  //     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
  //   subdomains: 'abcd',
  //   maxZoom: 19
  // }).addTo(map);

  L.marker([-1.287526, 36.828763]).addTo(map)
    .bindPopup('Nairobi Workshop!')
    .openPopup();


