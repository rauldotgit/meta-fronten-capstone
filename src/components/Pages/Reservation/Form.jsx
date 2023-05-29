import { Navigate, Link } from "react-router-dom"
import { useState } from "react"

export default function Form(props) {

    const [redirect, setRedirect] = useState(false)

    function handleSubmit(e){
        e.preventDefault()
        setRedirect( prevState => !prevState)
    }

    return (
        <main  role="main" className="py-16 h-screen w-full bg-zinc-200 flex flex-col justify-center items-center">
            <div className="h-3/5 flex flex-col justify-between bg-white w-2/3 lg:w-1/2 xl:w-2/5 rounded-lg p-10 sm:p-16">
                <h1 role="heading" className="text-zinc-800 text-2xl">Reserve a Table</h1>
                <div className="mt-2 grid grid-cols-3 gap-2">
                    <div className="rounded-sm h-2 border border-zinc-400 bg-little-green"></div>
                    <div className="rounded-sm h-2 border border-zinc-400 bg-little-green"></div>
                    <div className="rounded-sm h-2 border border-zinc-400"></div>
                </div>
                <div className="flex flex-col items-center my-5">
                    <form role="form" onSubmit={handleSubmit} className="flex flex-col w-full">
                        <label className="mb-1 text-zinc-900 mt-3 text-sm font-semibold" htmlFor="name">First Name</label>
                        <input autoComplete="off" onChange={props.handleChange} pattern="^[a-zA-Z]+$" placeholder="John" className=" focus:invalid:border-red-500 focus:border-little-yellow focus:duration-300 px-2 py-1 rounded-md h-1/4 bg-zinc-50 outline-none text-zinc-900 border-2 border-little-green" value={props.formData.first} type="text" name="first" id="" required/>

                        <label className="mb-1 text-zinc-900 mt-3 text-sm font-semibold" htmlFor="name">Last Name</label>
                        <input autoComplete="off" onChange={props.handleChange} pattern="^[a-zA-Z]+$" placeholder="Doe" className="focus:invalid:border-red-500 focus:border-little-yellow focus:duration-300 px-2 py-1 rounded-md h-1/4 bg-zinc-50 outline-none text-zinc-900 border-2 border-little-green" value={props.formData.last} type="text" name="last" id="" required/>

                        <label className="mb-1 text-zinc-900 mt-3 text-sm font-semibold" htmlFor="mail">Email Address</label>
                        <input autoComplete="off" onChange={props.handleChange} pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$" placeholder="delicious@food.com" className="focus:invalid:border-red-500 focus:border-little-yellow focus:duration-300 px-2 py-1 rounded-md h-1/4 bg-zinc-50 outline-none text-zinc-900 border-2 border-little-green" value={props.formData.mail} type="mail" name="mail" id="" required/>

                        <label className="mb-1 text-zinc-900 mt-3 text-sm font-semibold" htmlFor="guests">Phone number (optional)</label>
                        <input autoComplete="off" onChange={props.handleChange} pattern="^\+?[0-9]\d{1,20}$" placeholder="+1-555-555-5555" className="focus:invalid:border-red-500 focus:border-little-yellow focus:duration-300 px-2 py-1 rounded-md h-1/4 bg-zinc-50 outline-none text-zinc-900 border-2 border-little-green" value={props.formData.phone} type="text" name="phone" id="" />
                        <div className="flex justify-between gap-5 mt-5">
                            <Link to="/reserve/date">
                                <button role="button" className="hover:opacity-90 active:translate-y-0.5 font-semibold rounded-md px-6 py-2 bg-little-green self-end" >Back</button>
                            </Link>
                            <button role="button" type='submit' className="w-full hover:opacity-90 active:translate-y-0.5  text-zinc-900 font-semibold rounded-md px-6 py-2 bg-little-yellow self-end" >Book Table</button>
                        </div>
                    </form>
                    { redirect && <Navigate to="/reserve/confirm"/>}
                </div>
            </div>
        </main>
    )
}