import { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet-routing-machine'
import { useMap } from 'react-leaflet'

export default function Routing({ state }) {
  const map = useMap()

  useEffect(() => {
    if (!map) return

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(42.72954667409262, 23.24703833262125),
        L.latLng(42.72839501698812, 23.249529997507732),
        L.latLng(42.726473363240565, 23.253188339869183),
        L.latLng(42.72548001607258, 23.25497166315715),
      ],
      lineOptions: {
        styles: [{ color: '#6FA1EC', weight: 4 }],
      },
      routeWhileDragging: true,
      show: false,
      addWaypoints: false,
      draggableWaypoints: true,
      fitSelectedRoutes: true,
      showAlternatives: false,
    }).addTo(map)

    return () => map.removeControl(routingControl)
  }, [map])

  return null
}
