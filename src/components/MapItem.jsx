import React from 'react'

import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'

function Map({ state }) {
  const polyline = []
  const segments = []

  state.segments.forEach((seg) => {
    segments.push(seg)
  })

  // eslint-disable-next-line array-callback-return
  segments.map((segment) => {
    polyline.push(Object.values(segment.coordinates))
  })

  const fillBlueOptions = { fillColor: 'blue' }

  return (
    <>
      <div className="mt-4">
        <MapContainer
          center={[42.70342091086239, 23.328057523430676]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: '80vh', width: '100%', padding: 0 }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {state.stops.map((stop) => (
            <Marker
              key={stop.id}
              position={[stop.location.lat, stop.location.lon]}
            >
              <Popup>{stop.name}</Popup>
            </Marker>
          ))}

          <Polyline pathOptions={fillBlueOptions} positions={polyline} />
        </MapContainer>
      </div>
    </>
  )
}

export default Map
