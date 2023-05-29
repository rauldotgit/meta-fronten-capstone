import { useState } from "react"
import { Navigate } from "react-router-dom"

export default function Selection(props){

    const [redirect, setRedirect] = useState(false)

    function handleSubmit(e){
        e.preventDefault()
        setRedirect( prevState => !prevState)
    }

    return(
        <div className="h-screen w-full bg-zinc-200 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-between bg-white w-2/3 lg:w-1/2 xl:w-2/5 rounded-lg p-16">
                <h1 className="text-zinc-800 text-2xl">Reserve a Table</h1>
                <div className="mt-2 grid grid-cols-3 gap-2">
                    <div className="rounded-sm h-2 border border-zinc-400 bg-little-green"></div>
                    <div className="rounded-sm h-2 border border-zinc-400"></div>
                    <div className="rounded-sm h-2 border border-zinc-400"></div>
                </div>
                <div className="flex flex-col items-center my-5">
                    <form onSubmit={handleSubmit} className="flex flex-col w-full h-full">
                        <label className="mb-1 text-zinc-900 mt-3 text-sm font-semibold" htmlFor="res-date">Choose date</label>
                        <input  onChange={props.handleChange} name="date" value={props.formData.date} className="invalid:border-red-500 focus:border-yellow-400 focus:duration-300 px-2 py-1 rounded-md h-1/4 bg-zinc-50 outline-none text-zinc-900 border-2 border-little-green" type="date" id="res-date" required/>
                        <label className="mb-1 text-zinc-900 mt-3 text-sm font-semibold" htmlFor="res-time">Choose time</label>
                        <select placeholder="select" onChange={props.handleChange} name="time" value={props.formData.time} className="focus:border-yellow-400 focus:duration-300 px-2 py-1 rounded-md h-1/4 bg-zinc-50 outline-none text-zinc-900 border-2 border-little-green" id="res-time " required>
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                            <option>22:00</option>
                        </select>
                        <label className="mb-1 text-zinc-900 mt-3 text-sm font-semibold" htmlFor="guests">Number of guests</label>
                        <input  onChange={props.handleChange} name="guests" value={props.formData.guests} className="focus:border-little-yellow focus:duration-300 px-2 py-1 rounded-md h-1/4 bg-zinc-50 outline-none text-zinc-900 border-2 border-little-green" type="number" placeholder="1" min="1" max="10" id="guests" required />
                        <label className="mb-1 text-zinc-900 mt-3 text-sm font-semibold" htmlFor="occasion">Occasion</label>
                        <select  onChange={props.handleChange} name="occasion" value={props.formData.occasion} className="focus:border-little-yellow focus:duration-300 px-2 py-1 rounded-md h-1/4 bg-zinc-50 outline-none text-zinc-900 border-2 border-little-green" id="occasion" required>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Wedding</option>
                            <option>Other</option>
                        </select>
                        {/* <input type="submit" value="Make Your reservation"/> */}
                        <div className="flex justify-between mt-5">
                            <button className="invisible font-semibold rounded-md px-6 py-2 bg-little-green self-end" >Next</button>
                            <button type='submit' className="text-zinc-950 font-semibold rounded-md px-6 py-2 bg-little-yellow self-end" >Next</button>
                        </div>
                        { redirect && <Navigate to="/reserve/form"/>}
                    </form>
                </div>
            </div>
        </div>
    )
}