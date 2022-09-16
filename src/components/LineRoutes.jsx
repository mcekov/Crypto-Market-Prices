import React from 'react'
import { Link } from 'react-router-dom'
import { Sparklines, SparklinesLine } from 'react-sparklines'

function LineRoutes({ line, idx }) {
  return (
    <tr className="h-[80px] border-b overflow-hidden">
      <td>{idx + 1}</td>
      <td>
        <div className="hover:text-blue-700 font-medium">{line.name}</div>
      </td>
      <td>
        <div className="hover:text-blue-700 font-medium">{line.dataPoints}</div>
      </td>
      <td>
        <div className="font-medium">
          {!isNaN(line.averagePeople) ? (
            line.averagePeople < 0 ? (
              <span className="text-red-700">{line.averagePeople}</span>
            ) : (
              line.averagePeople
            )
          ) : (
            'No Data'
          )}
        </div>
      </td>
    </tr>
  )
}

export default LineRoutes
