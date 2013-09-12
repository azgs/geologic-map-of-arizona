# The Geologic Map of Arizona

![Geologic Map of Arizona](http://a.tiles.mapbox.com/v3/rclark.geo-map-az/-111.8079,34.2345,7/600x650.png)

This site contains data files representing the Geologic Map of Arizona at 1:1,000,000-scale. This map was built by the Arizona Geological Survey (AZGS) as a compilation of data from a wide variety of sources. The publication is available as part of the AZGS [Digital Geologic Map Series](http://repository.azgs.az.gov/facets/results/og%3A432) and can be purchased at the [AZGS Store](http://store.azgs.az.gov/product/maps/geologic-map-arizona-39x27).

This site contains an up-to-date dump of the data behind the map. There are a variety of files available, and additionally, [the map can be viewed online](http://azgs.github.io/geologic-map-of-arizona/map.html). What follows is a description of each file, a link to preview the file on GitHub, or download the file to your computer:

- __GeoJSON Files__ representing geologic features in an [NCGMP09](http://ncgmp09.github.io)-style format:
    - __ContactsAndFaults.geojson__ [_view_](https://github.com/azgs/geologic-map-of-arizona/blob/master/ContactsAndFaults.geojson) | [_download_](http://azgs.github.io/geologic-map-of-arizona/ContactsAndFaults.geojson)
    - __MapUnitPolys.geojson__ [_view_](https://github.com/azgs/geologic-map-of-arizona/blob/master/MapUnitPolys.geojson) | [_download_](http://azgs.github.io/geologic-map-of-arizona/MapUnitPolys.geojson)
    - __OtherLines.geojson__ [_view_](https://github.com/azgs/geologic-map-of-arizona/blob/master/OtherLines.geojson) | [_download_](http://azgs.github.io/geologic-map-of-arizona/OtherLines.geojson)
    
- __CSV Files__ for a quick look at the attribute tables for the above GeoJSON files
    - __ContactsAndFaults.csv__ [_view_](https://github.com/azgs/geologic-map-of-arizona/blob/master/ContactsAndFaults.csv) | [_download_](http://azgs.github.io/geologic-map-of-arizona/ContactsAndFaults.csv)
    - __MapUnitPolys.csv__ [_view_](https://github.com/azgs/geologic-map-of-arizona/blob/master/MapUnitPolys.csv) | [_download_](http://azgs.github.io/geologic-map-of-arizona/MapUnitPolys.csv)
    - __OtherLines.csv__ [_view_](https://github.com/azgs/geologic-map-of-arizona/blob/master/OtherLines.csv) | [_download_](http://azgs.github.io/geologic-map-of-arizona/OtherLines.csv)

- __CSS Files__ which describe the symbology used to produce the map. These files follow [CartoCSS](http://www.mapbox.com/tilemill/docs/manual/carto/) syntax, which can be used directly in a handful of applications, or easily read and adapted to other environments.
    - __geolines.css__ [_view_](https://github.com/azgs/geologic-map-of-arizona/blob/master/geolines.css) | [_download_](http://azgs.github.io/geologic-map-of-arizona/geolines.css) describes the symbology for contacts and faults
    - __mapunitpolys.css__ [_view_](https://github.com/azgs/geologic-map-of-arizona/blob/master/mapunitpolys.css) | [_download_](http://azgs.github.io/geologic-map-of-arizona/mapunitpolys.css) describes the symbology for the various colored map units
    
- __TopoJSON Files__ these compressed, topologically aware files can be viewed directly on GitHub
    - __AllFeatures.topojson__ [_view_](https://github.com/azgs/geologic-map-of-arizona/blob/master/AllFeatures.topojson) | [_download_](http://azgs.github.io/geologic-map-of-arizona/AllFeatures.topojson): This single file encapsulates all of the geographic data from the three GeoJSON files.
    - __ContactsAndFaults.topojson__ [_view_](https://github.com/azgs/geologic-map-of-arizona/blob/master/ContactsAndFaults.topojson) | [_download_](http://azgs.github.io/geologic-map-of-arizona/ContactsAndFaults.topojson)
    - __MapUnitPolys.topojson__ [_view_](https://github.com/azgs/geologic-map-of-arizona/blob/master/MapUnitPolys.topojson) | [_download_](http://azgs.github.io/geologic-map-of-arizona/MapUnitPolys.topojson)
    - __OtherLines.topojson__ [_view_](https://github.com/azgs/geologic-map-of-arizona/blob/master/OtherLines.topojson) | [_download_](http://azgs.github.io/geologic-map-of-arizona/OtherLines.topojson)

- __CSV Files__ for each of the following tables which contain information related to the geologic features:
    - __DataSources.csv__ [_view_](https://github.com/azgs/geologic-map-of-arizona/blob/master/DataSources.csv) | [_download_](http://azgs.github.io/geologic-map-of-arizona/DataSources.csv)
    - __DescriptionOfMapUnits.csv__ [_view_](https://github.com/azgs/geologic-map-of-arizona/blob/master/DescriptionOfMapUnits.csv) | [_download_](http://azgs.github.io/geologic-map-of-arizona/DescriptionOfMapUnits.csv)
    - __ExtendedAttributes.csv__ [_view_](https://github.com/azgs/geologic-map-of-arizona/blob/master/ExtendedAttributes.csv) | [_download_](http://azgs.github.io/geologic-map-of-arizona/ExtendedAttributes.csv)
    - __GeologicEvents.csv__ [_view_](https://github.com/azgs/geologic-map-of-arizona/blob/master/GeologicEvents.csv) | [_download_](http://azgs.github.io/geologic-map-of-arizona/GeologicEvents.csv)
    - __Glossary.csv__ [_view_](https://github.com/azgs/geologic-map-of-arizona/blob/master/Glossary.csv) | [_download_](http://azgs.github.io/geologic-map-of-arizona/Glossary.csv)

- __An HTML File__: 
    - __map.html__ [_view_](https://github.com/azgs/geologic-map-of-arizona/blob/master/http://azgs.github.io/geologic-map-of-arizona/map.html): presents a browsable map of the data contained in this folder.
    
_Please note:_ while GitHub is capable of visualizing `.csv`, `.geojson` and `.topojson` files, many of the files in this repository are too big for GitHub's system. These files can be viewed in a variety of other applications. Generally, you will be able to look at the `.topojson` files, but not the `.geojson` ones. Some of the `.csv` files are too large to view as well.

_Also_: while these files roughly obey the [NCGMP09 database standard](http://ncgmp09.github.io), they are not perfect, and are under-construction. For more information about what the attributes of the data mean, please read [the documentation available online](http://ncgmp09.github.io/core-content.html)
