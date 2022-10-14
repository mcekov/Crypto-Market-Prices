import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SavedCoin from '../components/SavedCoin'
import { Navigate } from 'react-router'

import { User, UserAuth } from '../context/AuthContext'

function Account() {
  const [error, setError] = useState('')
  const { user, logout } = UserAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    try {
      await logout()
      navigate('/')
    } catch (error) {
      setError(error.message)
    }
  }

  if (user) {
    return (
      <div className="max-w-[1140px] mx-auto">
        <div className="flex justify-between items-center my-12 py-8 rounded-div">
          <div>
            <h1 className="text-2xl font-bold">Account</h1>
            <div>
              <p>Welcome, {user?.email}</p>
            </div>
          </div>
          <div>
            <button
              onClick={handleSignOut}
              className="border px-6 rounded-2xl shadow-lg hover:shadow-2xl"
            >
              Sign Out
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center my-12 py-8 rounded-div">
          <div className="w-full min-h-[300px]">
            <h1 className="text-2xl font-bold py-4">Watch List</h1>
            <SavedCoin />
          </div>
        </div>
      </div>
    )
  } else {
    return <Navigate to="/signin" />
  }
}

export default Account
