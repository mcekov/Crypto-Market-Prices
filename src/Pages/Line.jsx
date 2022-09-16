import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import LineRoutes from '../components/LineRoutes'
import Map from '../components/Map'

function Line() {
  const [searchText, setSearchText] = useState('')
  const location = useLocation()
  const data = location.state

  return (
    <>
      <Map />
      <div className="rounded-div my-4">
        <div className="flex flex-col md:flex-row justify-start pt-4 pb-6 text-center md:text-right mt-[45px]">
          <h1 className="text-2xl font-bold ml-[45px]">Search Stop</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-end mb-4">
          <form className="mr-[45px]">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full bg-primary border border-input px-4 py-2 rounded-[150px] shadow-xl focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1"
              placeholder="Search a stop"
              type="text"
            />
          </form>
        </div>

        <table className="w-full border-collapse text-center">
          <thead>
            <tr>
              <th className="px-4">#</th>
              <th>Stop</th>
              <th>Data Points</th>
              <th>Average People</th>
            </tr>
          </thead>
          <tbody>
            {data.stops
              // eslint-disable-next-line array-callback-return
              .filter((value) => {
                if (searchText === '') {
                  return value
                } else if (
                  value.name.toLowerCase().includes(searchText.toLowerCase())
                ) {
                  return value
                }
              })
              .map((stop, i) => (
                <LineRoutes key={i} idx={i} line={stop} />
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Line
