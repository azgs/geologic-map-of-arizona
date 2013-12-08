// Wrapping this in a function allows me to worry less about "polluting the global namespace"
(function () {
  // ## Make an object in the global namespace that will house any variables I want to be global
  this.geomapaz = {};

  // ## Make some private variables:
  // - Urls for tile sets
  var urls = {
      geologicMap: 'http://a.tiles.usgin.org/geo-map-az/tiles.json',
      terrainBase: 'azgs.gg2fma89',
      roadsAndLabels: 'azgs.gg2gcchk'
    },

    // - An interaction layer that utilizes UTFGrids
    gridLayer = L.mapbox.gridLayer(urls.geologicMap),

    // - The map itself, with the terrain as a base layer
    map = this.geomapaz.map = L.mapbox.map('map', urls.terrainBase, {
      center: [34.1618,-111.6211],
      zoom: 7,
      maxZoom: 12
    });

  // ## Add other layers to the map
  // - Tiles for the Geologic Map
  L.mapbox.tileLayer(urls.geologicMap).addTo(map);

  // - Tiles for roads and labels as an overlay
  L.mapbox.tileLayer(urls.roadsAndLabels).addTo(map);

  // ## Put togther map interactions:
  // - Add the grid layer to the map
  gridLayer.addTo(map);

  // - Add a control to display information from the grid layer
  map.addControl(L.mapbox.gridControl(gridLayer, {
    sanitizer: function (stuff) { return stuff; }
  }));

  // ## Show/Hide the Legend
  var showLegend = this.geomapaz.showLegend = function (label) {
    var wrapper = document.getElementById('wrapper'),
      classes = wrapper.className,
      show = ' legend-showing';
    if (classes.indexOf(show) === -1) wrapper.className = classes + show;

    label = label
      .replace('{', 'Cz')
      .replace(':', 'Pe')
      .replace('}', 'Mz')
      .replace('^', 'Tr')
      .replace('|', 'Pz')
      .replace('*', 'Pn')
      .replace('_', 'C')
      .replace('=', 'pC')
      .replace('<', 'Pr')
      .replace('`', 'Y3')
      .replace('~', 'Y2');

    var currentPosition = $('#legend').scrollTop(),
      unitPosition = $('#' + label + '-label').position().top;
    $('#legend').scrollTop(currentPosition + unitPosition);
  };

  var hideLegend = this.geomapaz.hideLegend = function () {
    var wrapper = document.getElementById('wrapper');
    wrapper.className = wrapper.className.replace(/ legend-showing/g, '');
  };

}).call(this);