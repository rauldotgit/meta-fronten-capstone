import { useEffect, useState } from 'react'
import { fetchAPI } from '/src/utils/fetchApi.js'

import Selection from "./R_Selection"
import Form from './R_Form'
import Confirmation from './R_Confirmation'

const sContainer = `
    h-screen w-full
    flex flex-col justify-center items-center   
    bg-zinc-200
`

const sContent = `
    flex flex-col justify-between
    w-2/3 lg:w-1/2 xl:w-2/5
    sm:p-16 p-10
    bg-white
    rounded-lg
`

const sHeader = `
    text-zinc-800 text-2xl  
`

const sProgressContainer = `
    grid grid-cols-3 gap-2
    mt-2
`

const sProgress = `
    rounded-sm
    h-2
    border border-zinc-400
`

export default function Reservation() {

    const formObject = {
        date: '',
        time: '17:00',
        guests: 1,
        occasion: 'None',
        first: '',
        last: '',
        email: '',
        phone: ''
    }

    const [formData, setFormData] = useState(formObject)
    const [times, setTimes] = useState([])
    const [formPage, setFormPage] = useState(0)

    function forwardForm() {
        setFormPage(prevPage => {
            return (prevPage + 1) % 3
        })
    }

    function backwardForm() {
        setFormPage(prevPage => {
            return prevPage >= 0 ? prevPage - 1 : 0
        })
    }

    function handleChange(e) {
        setFormData(prevData => {
            return { ...prevData, [e.target.name]: e.target.value }
        })
    }

    useEffect(() => {
        let times = fetchAPI(formData.date)
        console.log(times);
        setTimes(times)
    }, [formData.date])

    function headerSwitch(){
        switch (formPage) {
            case 0: return "Reserve a Table"
            case 1: return "Reserve a Table"
            case 2: return "Reservation successful!"
        }
    }

    function renderSwitch() {
        switch (formPage) {
            case 0:
                return (
                    <Selection
                        formData={formData}
                        handleChange={handleChange}
                        forwardForm={forwardForm}
                        times={times}
                    />
                )
            case 1:
                return (
                    <Form
                        formData={formData}
                        handleChange={handleChange}
                        forwardForm={forwardForm}
                        backwardForm={backwardForm}
                    />
                )
            case 2:
                return (
                    <Confirmation
                        formData={formData}
                    />
                )
        }
    }

    return (
        <main role="main" className={sContainer}>
            <div className={sContent}>
                <h1 role="heading" className={sHeader}>{headerSwitch()}</h1>
                <div className={sProgressContainer}>
                    <div className={formPage >= 0 ? sProgress + " bg-little-green " : sProgress}></div>
                    <div className={formPage >= 1 ? sProgress + " bg-little-green " : sProgress}></div>
                    <div className={formPage >= 2 ? sProgress + " bg-little-green " : sProgress}></div>
                </div>
                {renderSwitch()}
            </div>
        </main>
    )
}