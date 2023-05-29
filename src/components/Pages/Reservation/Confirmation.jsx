import {Link} from 'react-router-dom'

const sDetailHeader = `
    font-semibold
    text-lg
    mb-2
`

const sDetailItem = `
    font-semibold text-zinc-700
`

export default function Confirmation(props){
    return (
        <main role='main' className="py-16 h-screen w-full bg-zinc-200 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-between bg-white w-2/3 lg:w-1/2 xl:w-2/5 rounded-lg p-10 sm:p-16">
                <h1 role='heading' className="text-zinc-800 text-2xl">Reservation successful!</h1>
                <div className="mt-2 grid grid-cols-3 gap-2">
                    <div className="rounded-sm h-2 border border-zinc-400 bg-little-green"></div>
                    <div className="rounded-sm h-2 border border-zinc-400 bg-little-green"></div>
                    <div className="rounded-sm h-2 border border-zinc-400 bg-little-green"></div>
                </div>
                <div className="text-zinc-950 flex flex-col items-start my-5 gap-5">
                    
                    <div className=''> 
                        <h3 className={sDetailHeader}>Contact Details</h3>
                        <ul>
                            <li><span className={sDetailItem}>Name:</span> {props.formData.first} {props.formData.last}</li>
                            <li><span className={sDetailItem}>Email:</span> {props.formData.mail}</li>
                            <li><span className={sDetailItem}>Phone:</span> {props.formData.phone}</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={sDetailHeader}>Reservation Details</h3>
                        <ul>
                            <li><span className={sDetailItem}>Date:</span> {props.formData.date}</li>
                            <li><span className={sDetailItem}>Time:</span> {props.formData.time}</li>
                            <li><span className={sDetailItem}>Number of guests:</span> {props.formData.guests}</li>
                            <li><span className={sDetailItem}>Occasion:</span> {props.formData.occasion}</li>
                        </ul>
                    </div>
                    
                </div>
                <div className="flex justify-end mt-2">
                    <Link to="/">
                        <button type='button' role='button' className="hover:opacity-90 active:translate-y-0.5  text-zinc-900 font-semibold rounded-md px-6 py-2 bg-little-yellow self-end" >Back to home</button>
                    </Link>
                </div>
            </div>
        </main>
    )
}