import Header from "./components/Header"
import Home from "./components/Pages/Home/Home"
import Footer from "./components/Footer.jsx"

import Selection from "./components/Pages/Reservation/Selection"
import Form from "./components/Pages/Reservation/Form"
import Confirmation from "./components/Pages/Reservation/Confirmation"

import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchAPI } from "./utils/fetchApi.js"

function App() {

  const formObject = {
    date: '',
    time: '',
    guests: 1,
    occasion: '',
    first: '',
    last: '',
    email: '',
    phone: ''
  }

  const [formData, setFormData] = useState(formObject)
  const [times, setTimes] = useState([])

  function handleChange(e) {
    console.log(formData)
    setFormData(prevData => {
      return { ...prevData, [e.target.name]: e.target.value }
    })
  }

  // function fetchTimes(){
  //   const times = fetchAPI(formData.date)
  //   setTimes(times)
  // }

  useEffect(() => {
    let times = fetchAPI(formData.date)
    console.log(times);
    setTimes(times)
  }, formData.date)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserve/date" element={
          <Selection handleChange={handleChange} formData={formData} times={times} />
        } />

        <Route path="/reserve/form" element={
          <Form handleChange={handleChange} formData={formData} />
        } />

        <Route path="/reserve/confirm" element={
          <Confirmation handleChange={handleChange} formData={formData} />
        } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
