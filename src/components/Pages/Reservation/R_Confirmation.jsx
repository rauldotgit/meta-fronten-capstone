import { Link } from 'react-router-dom'

const sContainer = `
    flex flex-col items-start
    my-5
    gap-5  
    text-zinc-950
`

const sDetailHeader = `
    font-semibold
    text-lg
    mb-2
`

const sDetailItem = `
    font-semibold text-zinc-700
`

const sButtonContainer = `
    flex
    justify-end
    mt-2   
`

const sButton = `
    self-end 
    px-6 py-2
    text-zinc-900
    font-semibold
    rounded-md
    bg-little-yellow
    active:translate-y-0.5
    hover:opacity-90
`

export default function Confirmation(props) {
    return (
        <div className={sContainer}>
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

            <div className={sButtonContainer}>
                <Link to="/">
                    <button type='button' role='button' className={sButton} >Back to home</button>
                </Link>
            </div>
        </div>
    )
}