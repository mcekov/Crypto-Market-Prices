import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import ErrorPage from './Pages/ErrorPage'
import Navbar from './components/Navbar'
import HomePage from './Pages/HomePage'
import SingInPage from './Pages/SingInPage'
import SingUpPage from './Pages/SingUpPage'
import axios from 'axios'
import AccountPage from './Pages/AccountPage'
import CoinPage from './Pages/CoinPage'
import Footer from './components/Footer'
import { AuthContextProvider } from './context/AuthContext'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [coins, setCoins] = useState([])

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=true'

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoins(res.data)
      console.log(res.data)
    })
  }, [url])

  return (
    <ThemeProvider>
      <AuthContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage coins={coins} />} />
            <Route path="/signIn" element={<SingInPage />} />
            <Route path="/signUp" element={<SingUpPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/coin/:coinId" element={<CoinPage />}>
              <Route path=":coinId" />
            </Route>
          </Routes>
        </Router>
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App
