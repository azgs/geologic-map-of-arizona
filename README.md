The Geologic Map of Arizona
===========================

The Geologic Map of Arizona at 1:1,000,000-scale.

## Open Data:

Included are three GeoJSON files:
- `mapunitpolys.geojson`: Polygons that represent the areas of distinct geologic units throughout Arizona.
- `contactsandfaults.geojson`: Lines that represent the contacts and faults that form the boundaries between various geologic units.
- `otherlines.geojson`: Other lines that help to for a more complete map.

## Open Style:

There are two [CartoCSS](http://www.mapbox.com/tilemill/docs/manual/carto/) files included. These can be used to style the map in [TileMill](http://www.mapbox.com/tilemill/). They can also be read, such that you could use a text editor and some smart find/replace to form them to do your bidding.
- `mapunits.css`: Gives the polygons the appropriate color depending on thier `mapunit` attribute.
- `geolines.css`: Styles the lines appropriately for visualization according to the [cartographic standards] that are common for geologic maps.

## Open Format:

Generally speaking, the data conforms to the [NCGMP09 database model](http://ncgmp09.github.io/).

## Need some other format?
GeoJSON can be used in a large number of applications. If you need the data in another format, you have loads of options for transformation. You could try http://geoproxy.worbly.org:
1. Copy the URL for one of these files:

  - https://raw.github.com/azgs/geologic-map-of-arizona/master/mapunitpolys.geojson
  - https://raw.github.com/azgs/geologic-map-of-arizona/master/contactsandfaults.geojson
  - https://raw.github.com/azgs/geologic-map-of-arizona/master/otherlines.geojson
    
2. Go to http://geoproxy.worbly.org and paste the URL into the box
3. Select "GeoJSON" as the input format, and your desired output format.
4. Push "Submit".
