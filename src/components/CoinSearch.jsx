import React from 'react'
import { useState } from 'react'
import CoinItem from './CoinItem'

export const CoinSearch = ({ coins }) => {
  const [searchText, setSearchText] = useState('')

  return (
    <div className="rounded-div my-4">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h1 className="text-2xl font-bold my-2">Search Crypto</h1>
        <form action="">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1"
            type="text"
            placeholder="Search for coins"
          />
        </form>
      </div>
      <table className="w-full border-colapse text-center">
        <thead>
          <tr className="border-b">
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className="hidden md:table-cell">24h Volume</th>
            <th className="hidden sm:table-cell">Mkt</th>
            <th>Last 7 days</th>
          </tr>
        </thead>
        <tbody>
          {coins
            .filter((val) => {
              if (searchText === '') {
                return val
              } else if (
                val.name.toLowerCase().includes(searchText.toLocaleLowerCase())
              ) {
                return val
              }

              return val
            })
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>
    </div>
  )
}
