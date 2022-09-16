import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state'

const LinesList = () => {
  const [isLoading, setIsLoading] = useState(false)

  const state = useSelector((state) => state)

  const dispatch = useDispatch()
  const { retrieveAllLines } = bindActionCreators(actionCreators, dispatch)

  useEffect(() => {
    setIsLoading(true)

    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => {
        retrieveAllLines(data)
        setIsLoading(false)
      })
      .catch((err) => {
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      <div className="xl:w-3/4 2xl:w-4/5 w-full">
        {/* <div className="px-4 md:px-10 py-4 md:py-7">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              List Of All Lines
            </p>
            <div className="mt-4 sm:mt-0">
              <button className="inline-flex sm:ml-3 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                <p className="text-sm font-medium leading-none text-white">
                  Filter
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white px-4 md:px-10 pb-5">
          <div className="overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <tbody>
                {!isLoading &&
                  state.allLines.map((line, index) => (
                    <tr
                      key={index}
                      className="text-sm leading-none text-gray-600 h-16"
                    >
                      <td className="w-full">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gray-700 rounded-sm flex items-center justify-center">
                            <p className="text-xs font-bold leading-3 text-white">
                              {line.line}
                            </p>
                          </div>
                          <div className="pl-2">
                            {line.routes.map((r, i) => (
                              <p key={i}>
                                <Link
                                  to=""
                                  className="text-xs leading-3 text-gray-600 mt-2"
                                >
                                  Маршрут {i + 1} - {r.name}
                                </Link>
                              </p>
                            ))}

                            <p className="text-xs leading-3 text-gray-600 mt-2"></p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div> */}

        <h1>Lines</h1>
      </div>
    </>
  )
}

export default LinesList
