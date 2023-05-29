import { useState } from "react"
import { Navigate } from "react-router-dom"


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

const sProgress = `
    rounded-sm
    h-2
    border border-zinc-400
`

const sLabel = `
    mb-1 mt-3
    text-zinc-900 text-sm
    font-semibold   
`

export default function Selection(props){

    const [redirect, setRedirect] = useState(false)

    function handleSubmit(e){
        e.preventDefault()
        setRedirect( prevState => !prevState)
    }
    
    const timeOptions = props.times.map((time, index) =>{
        return (
            <option key={index}>{time}</option>
        )
    })

    return(
        <main role="main" className={sContainer}>
            <div className={sContent}>
                <h1 role="heading" className="text-zinc-800 text-2xl">Reserve a Table</h1>
                <div className="mt-2 grid grid-cols-3 gap-2">
                    <div className={sProgress + " bg-little-green "}></div>
                    <div className={sProgress}></div>
                    <div className={sProgress}></div>
                </div>
                <div className="flex flex-col items-center my-5">
                    <form role="form" onSubmit={handleSubmit} className="flex flex-col w-full h-full">
                        <label className={sLabel} htmlFor="res-date">Choose date</label>
                        <input  onChange={props.handleChange} name="date" value={props.formData.date} className="invalid:border-red-500 focus:border-yellow-400 focus:duration-300 px-2 py-1 rounded-md h-1/4 bg-zinc-50 outline-none text-zinc-900 border-2 border-little-green" type="date" id="res-date" required/>
                        <label className={sLabel} htmlFor="res-time">Choose time</label>
                        <select placeholder="select" onChange={props.handleChange} name="time" value={props.formData.time} className="focus:border-yellow-400 focus:duration-300 px-2 py-1 rounded-md h-1/4 bg-zinc-50 outline-none text-zinc-900 border-2 border-little-green" id="res-time " required>
                            {timeOptions}
                        </select>
                        <label className={sLabel} htmlFor="guests">Number of guests</label>
                        <input  onChange={props.handleChange} name="guests" value={props.formData.guests} className="focus:border-little-yellow focus:duration-300 px-2 py-1 rounded-md h-1/4 bg-zinc-50 outline-none text-zinc-900 border-2 border-little-green" type="number" placeholder="1" min="1" max="10" id="guests" required />
                        <label className={sLabel} htmlFor="occasion">Occasion</label>
                        <select  onChange={props.handleChange} name="occasion" value={props.formData.occasion} className="focus:border-little-yellow focus:duration-300 px-2 py-1 rounded-md h-1/4 bg-zinc-50 outline-none text-zinc-900 border-2 border-little-green" id="occasion" required>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Wedding</option>
                            <option>Other</option>
                        </select>
                        {/* <input type="submit" value="Make Your reservation"/> */}
                        <div className="flex justify-between mt-5">
                            <button role="button" className="invisible font-semibold rounded-md px-6 py-2 bg-little-green self-end" >Next</button>
                            <button role="button" type='submit' className="text-zinc-950 font-semibold rounded-md px-6 py-2 bg-little-yellow self-end" >Next</button>
                        </div>
                        { redirect && <Navigate to="/reserve/form"/>}
                    </form>
                </div>
            </div>
        </main>
    )
}