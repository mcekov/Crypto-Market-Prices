import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import DropdownFilter from './DropdownFilter'
import Map from '../components/Map'

import LineItem from './LineItem'

function LineSearch() {
  const [searchText, setSearchText] = useState('')
  const state = useSelector((state) => state)

  return (
    <>
      <Map state={state.allLines} />
      <div className="rounded-div my-4">
        <div className="flex flex-col md:flex-row justify-start pt-4 pb-6 text-center md:text-right ml-[45px] mt-[45px]">
          <h1 className="text-2xl font-bold">Search Line</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-end mb-4 mr-[45px]">
          <form className="mr-4">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full bg-primary border border-input px-4 py-2 rounded-[150px] shadow-xl focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1"
              type="text"
              placeholder="Search a line"
            />
          </form>

          <DropdownFilter />
        </div>

        <table className="w-full border-collapse text-center">
          <thead>
            <tr>
              <th className="px-4">#</th>
              <th>Line</th>
              <th>Type</th>
              <th>Routes</th>
              <th>Chart</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {state.allLines
              // eslint-disable-next-line array-callback-return
              .filter((value) => {
                if (searchText === '') {
                  return value
                } else if (
                  value.line.toLowerCase().includes(searchText.toLowerCase())
                ) {
                  return value
                }
              }) // eslint-disable-next-line array-callback-return
              .filter((filter) => {
                if (state.filter === 'all') {
                  return filter
                } else if (state.filter === 'bus') {
                  return filter.routes[0].transportType.toLowerCase() === 'a'
                } else if (state.filter === 'tram') {
                  return filter.routes[0].transportType.toLowerCase() === 'tm'
                } else if (state.filter === 'trolley') {
                  return filter.routes[0].transportType.toLowerCase() === 'tb'
                }
              })
              .map((line, i) => (
                <LineItem key={i} idx={i} line={line} />
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default LineSearch
