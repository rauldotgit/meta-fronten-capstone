import Header from "./components/Header"
import Home from "./components/Pages/Home/Home"
import Footer from "./components/Footer.jsx"

import { Route, Routes } from 'react-router-dom'
import Reservation from "./components/Pages/Reservation/Reservation"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserve" element={ <Reservation /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
