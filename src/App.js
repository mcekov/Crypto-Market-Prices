import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThemeProvider } from './context/ThemeContext'

import { actionCreators } from './state'

import ErrorPage from './Pages/ErrorPage'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Line from './Pages/Line'

function App() {
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
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home lines={state.allLines} />} />
          <Route path="/line/:lineId" element={<Line />}>
            <Route path=":lineId" />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
