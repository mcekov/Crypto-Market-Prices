import React from 'react'
import { AiFillLock, AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function SingIn() {
  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-2xl font-bold">Sign In</h1>

        <form>
          <div className="my-4">
            <label htmlFor="email">Email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                id="email"
                className="w-full p-2 bg-primary border border-input rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1"
                type="email"
                placeholder="Your email"
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>

          <div className="my-4">
            <label htmlFor="password">Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                id="password"
                className="w-full p-2 bg-primary border border-input rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1"
                type="password"
                placeholder="Your password"
              />
              <AiFillLock className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>

          <button className="w-full bg-button my-2 p-3 text-btnText rounded-2xl shadow-xl">
            Sign In
          </button>
        </form>
        <p className="my-4 text-center">
          Dont have an account?{' '}
          <Link className="text-accent" to="/signUp">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SingIn
