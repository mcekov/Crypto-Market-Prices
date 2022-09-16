import React from 'react'
import { Link } from 'react-router-dom'
import { Sparklines, SparklinesLine } from 'react-sparklines'

function LineItem({ line, idx }) {
  return (
    <tr className="h-[80px] border-b overflow-hidden">
      <td>{idx + 1}</td>
      <td>
        <div>{line.line}</div>
      </td>
      <td>
        {line.routes.map((route, index) => (
          <Link to={`/line/${route.id}`} state={route} key={index}>
            <div key={index} className="hover:text-blue-700 font-medium">
              {route.name}
            </div>
          </Link>
        ))}
      </td>
      <td>
        <div>
          <Sparklines
            height={100}
            width={200}
            data={[
              Math.random(),
              Math.random(),
              Math.random(),
              Math.random(),
              Math.random(),
              Math.random(),
              Math.random(),
              Math.random(),
              Math.random(),
            ]}
          >
            <SparklinesLine color="blue" />
          </Sparklines>
        </div>
      </td>
      <td>
        {line.routes.map((p) => (
          <div key={p.id}>{p.dataPoints}</div>
        ))}
      </td>
    </tr>
  )
}

export default LineItem
