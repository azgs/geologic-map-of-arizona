The Geologic Map of Arizona
===========================

The Geologic Map of Arizona at 1:1,000,000-scale.

Included are three GeoJSON files:
- `mapunitpolys.geojson`: Polygons that represent the areas of distinct geologic units throughout Arizona.
- `contactsandfaults.geojson`: Lines that represent the contacts and faults that form the boundaries between various geologic units.
- `otherlines.geojson`: Other lines that help to for a more complete map.

There are two [CartoCSS](http://www.mapbox.com/tilemill/docs/manual/carto/) files included. These can be used to style the map in [TileMill](http://www.mapbox.com/tilemill/). They can also be read, such that you could use a text editor and some smart find/replace to form them to do your bidding.
- `mapunits.css`: Gives the polygons the appropriate color depending on thier `mapunit` attribute.
- `geolines.css`: Styles the lines appropriately for visualization according to the [cartographic standards] that are common for geologic maps.

Generally speaking, the data conforms to the [NCGMP09 database model](http://ncgmp09.github.io/).
