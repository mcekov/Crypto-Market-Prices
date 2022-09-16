import React from 'react'
import { useNavigate } from 'react-router-dom'

import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  Polyline,
} from 'react-leaflet'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Map({ state }) {
  console.log('mapItem: ', state)

  //  let navigate = useNavigate()

  const polyline = []
  const segments = []

  state.segments.forEach((seg) => {
    segments.push(seg)
  })

  console.log('seg: ', segments)

  segments.map((segment) => {
    polyline.push(Object.values(segment.coordinates))
  })

  const multiPolyline = [
    [
      [42.72954667409262, 23.24703833262125],
      [42.726473363240565, 23.253188339869183],
      [42.72548001607258, 23.25497166315715],
    ],
    [
      [42.72548001607258, 23.25497166315715],
      [42.726473363240565, 23.253188339869183],
      [42.72954667409262, 23.24703833262125],
    ],
  ]

  const fillBlueOptions = { fillColor: 'blue' }
  const blackOptions = { color: 'black' }
  const limeOptions = { color: 'lime' }
  const purpleOptions = { color: 'purple' }
  const redOptions = { color: 'red' }

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
          {/* {coords.map((line) =>
            line.routes.map((c) => c.stops.map((coords) => <RoutingMachine />)),
          )} */}

          {state.stops.map((stop, i) => (
            <Marker
              key={stop.id}
              position={[stop.location.lat, stop.location.lon]}
            >
              <Popup>{stop.name}</Popup>
            </Marker>
          ))}

          <Polyline pathOptions={fillBlueOptions} positions={polyline} />

          {/*  <Polyline pathOptions={fillBlueOptions} positions={multiPolyline} /> */}
        </MapContainer>
      </div>
    </>
  )
}

export default Map
