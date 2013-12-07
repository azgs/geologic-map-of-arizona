# The Geologic Map of Arizona

![Geologic Map of Arizona](http://a.tiles.mapbox.com/v3/rclark.geo-map-az/-111.8079,34.2345,7/600x650.png)

This site contains data files representing the Geologic Map of Arizona at 1:1,000,000-scale. This map was built by the Arizona Geological Survey (AZGS) as a compilation of data from a wide variety of sources. The publication is available as part of the AZGS [Digital Geologic Map Series](http://repository.azgs.az.gov/facets/results/og%3A432) and can be purchased at the [AZGS Store](http://store.azgs.az.gov/product/maps/geologic-map-arizona-39x27).

This site contains an up-to-date dump of the data behind the map. There are a variety of files available, and additionally, [the map can be viewed online](http://azgs.github.io/geologic-map-of-arizona/). This repository also contains a [TileMill](https://mapbox.com/tilemill) project that can be used to re-create the map and adjust its symbology for your purposes. See [the readme for more information on setting up the project](https://github.com/azgs/geologic-map-of-arizona/tree/master/tilemill)

The [data directory](https://github.com/azgs/geologic-map-of-arizona/tree/master/data) contains vector data in [GeoJSON](http://geojson.org/) and [TopoJSON](https://github.com/mbostock/topojson/wiki) formats. Also included are a number of related tables in a set of CSV files. While these files roughly obey the [NCGMP09 database standard](http://ncgmp09.github.io), they are not perfect, and are under-construction. For more information about what the attributes of the data mean, please read [the NCGMP09 documentation available online](http://ncgmp09.github.io/core-content.html).

*Please note:* while GitHub is capable of visualizing `.csv`, `.geojson` and `.topojson` files, many of the files in this repository are too big for GitHub's system. These files can be downloaded and viewed in a variety of other applications.