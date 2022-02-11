# origo-mapillary

Mapillary + MapillaryJS som plugin för Origo.  
I nuvarande version exponeras clientToken.  
**<ins>Det rekommenderas att inte använda denna plugin på externa kartor</ins>**.  
För att använda denna plugin på externa kartor bör OAuth 2.0 Authorization Code Flow implementeras.  (https://www.mapillary.com/developer/api-documentation#authentication)

MapillaryJS CSS måste inkluderas.
```HTML
<link href="https://unpkg.com/mapillary-js@4.0.0/dist/mapillary.css" rel="stylesheet" >
```

**Parametrar:**
- `clientToken` : `string` Client token från Mapillary, **exponeras, bör inte användas för externa kartor**. **Obligatorisk**.
- `mapillaryUrl` : `string` URL till Mapillarys VectorTile. **Valfri**.
- `organizationId` : `integer` Filtering på organisations-ID. Om inget anges visas allt. **Valfri**.
- `declutter` : `boolean` Om declutter ska användas på Mapillary-lagret. **Valfri**.
- `mapillaryLayerName` : `string` Namn på Mapillary-lagret. **Valfri**.
- `normalLegendLabel` : `string` Teckenförklaringens text för icke-360-bilder . **Valfri**.
- `panoLegendLabel` : `string` Teckensförklaringens text för 360-bilder. **Valfri**.
- `selectionStyleColor` : `string` Färgsättning på selektionspunkten. **Valfri**.
- `normalStyleColor` : `string` Färgsättning på icke-360-bilder. **Valfri**.
- `panoStyleColor` : `string` Färgsättning på 360-bilder. **Valfri**.
- `normalViewerHeight` : `string` Höjd på viewer i vanligt läge. **Valfri**.
- `normalViewerWidth` : `string` Bredd på viewer i vanligt läge. **Valfri**.
- `largeViewerHeight` : `string` Höjd på viewer i förstorat läge. **Valfri**.
- `largeViewerWidth` : `string` Bredd på viewer i förstorat läge. **Valfri**.

**Exempel:**
```JS
clientToken: 'MLY|1234567890|abcdef123456abc123456',
mapillaryUrl: 'https://tiles.mapillary.com/maps/vtp/mly1_public/2/{z}/{x}/{y}'
organizationId: 2515762671903562
declutter: true
mapillaryLayerName: 'Mapillary'
normalLegendLabel: 'Vanliga bilder'
panoLegendLabel: '360 bilder'
selectionStyleColor: '#0099ff'
normalStyleColor: '#5cb7ff'
panoStyleColor: '#ff8927'
normalViewerHeight: '20rem'
normalViewerWidth: '25rem'
largeViewerHeight: '40rem'
largeViewerWidth: '50rem'
```

### Demo
![](demomapillary.gif)
