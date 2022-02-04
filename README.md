# origo-mapillary

Mapillary + MapillaryJS som plugin för Origo.

**OBS!**
MapillaryJS CSS måste inkluderas.
```HTML
<link href="https://unpkg.com/mapillary-js@4.0.0/dist/mapillary.css" rel="stylesheet" >
```

**Parametrar:**
- `clientToken` : `string` Client token från Mapillary, bör inte användas för externa kartor. **Obligatorisk**.
- `organizationId` : `integer` Filtering på organisations-ID. Om inget anges visas allt. **Valfri**.
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
organizationId: 2515762671903562
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
