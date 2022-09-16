import React from 'react'
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  Polyline,
} from 'react-leaflet'
import { useSelector } from 'react-redux'

function Map({ state }) {
  let polyline = [
    /* [42.72954667409261, 23.24703833262125],
    [42.65107669830321, 23.36790167490642],
    [42.68266830444337, 23.37227166493733],
    [42.68456497192383, 23.24059500694275], */
  ]

  const stops = []
  const segments = []

  const getStops = () => {
    state.forEach((el, i) => {
      stops.push(el.routes[0].stops[i])
      stops.push(el.routes[1].stops[i])
      segments.push(el.routes[0].segments[i].coordinates[i])
      segments.push(el.routes[1].segments[i].coordinates[i])
    })
  }

  getStops()

  segments.map((segment) => {
    polyline.push(Object.values(segment))
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
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* {coords.map((line) =>
            line.routes.map((c) => c.stops.map((coords) => <RoutingMachine />)),
          )} */}

          {stops.map((s) => (
            <Marker position={[s.location.lat, s.location.lon]}>
              <Popup>{s.name}</Popup>
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
