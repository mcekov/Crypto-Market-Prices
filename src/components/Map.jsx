import React from 'react'
import { useNavigate } from 'react-router-dom'

import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import { useSelector } from 'react-redux'

function Map() {
  const state = useSelector((state) => state)
  console.log('stattteee: ', state)
  let navigate = useNavigate()

  const polyline = []

  const stops = []
  const segments = []

  const getStops = () => {
    state.allLines.forEach((el, i) => {
      stops.push(el.routes[0])
      stops.push(el.routes[1])
      segments.push(el.routes[0].segments[i].coordinates[i])
      segments.push(el.routes[1].segments[i].coordinates[i])
    })
  }

  getStops()

  segments.map((segment) => {
    polyline.push(Object.values(segment))
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

          {stops.map((s, i) => (
            <Marker
              key={s.id}
              eventHandlers={{
                click: () => {
                  navigate(`/line/${s.id}`, { state: { stops: s.stops } })
                },
              }}
              position={[s.stops[i].location.lat, s.stops[i].location.lon]}
            >
              <Popup>{s.stops[i].name}</Popup>
            </Marker>
          ))}

          <Polyline pathOptions={fillBlueOptions} positions={polyline} />
        </MapContainer>
      </div>
    </>
  )
}

export default Map
