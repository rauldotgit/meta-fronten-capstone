import { fetchAPI } from "../../../utils/fetchApi"

const sContainer = `
    flex flex-col items-center
    my-5
`

const sForm = `
    w-full    
    flex flex-col
`

const sLabel = `
    mb-1 mt-3
    text-sm text-zinc-900
    font-semibold   
`

const sInput = `
    h-1/4
    px-2 py-1
    text-zinc-900
    border-2 border-little-green    
    rounded-md
    bg-zinc-50
    outline-none
    focus:invalid:border-red-500
    focus:border-little-yellow
    focus:duration-300
`

const sButtonContainer = `
    flex justify-between gap-5
    mt-5 
`
const s_Button = `
    px-6 py-2
    font-semibold
    rounded-md
    active:translate-y-0.5
    hover:opacity-90
`

const sBackButton = s_Button + `
    bg-little-green
`

const sNextButton = s_Button + `
    w-full
    self-end  
    text-zinc-900
    bg-little-yellow
`

export default function Form(props) {

    async function handleSubmit(e) {
        e.preventDefault()
        const reply = await fetchAPI(props.formData)

        if (reply) {
            props.forwardForm()
        } else {
            alert("Your submission was unsuccesful due to technical issues. Please try again later.")
        }
    }

    return (
        <div className={sContainer}>
            <form role="form" onSubmit={handleSubmit} className={sForm}>
                <label className={sLabel} htmlFor="name">First Name</label>
                <input autoComplete="off" onChange={props.handleChange} pattern="^[a-zA-Z]+$" placeholder="John" className={sInput} value={props.formData.first} type="text" name="first" id="" required />

                <label className={sLabel} htmlFor="name">Last Name</label>
                <input autoComplete="off" onChange={props.handleChange} pattern="^[a-zA-Z]+$" placeholder="Doe" className={sInput} value={props.formData.last} type="text" name="last" id="" required />

                <label className={sLabel} htmlFor="mail">Email Address</label>
                <input autoComplete="off" onChange={props.handleChange} pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$" placeholder="delicious@food.com" className={sInput} value={props.formData.mail} type="mail" name="mail" id="" required />

                <label className={sLabel} htmlFor="guests">Phone number (optional)</label>
                <input autoComplete="off" onChange={props.handleChange} pattern="^\+?[0-9]\d{1,20}$" placeholder="+1-555-555-5555" className={sInput} value={props.formData.phone} type="text" name="phone" id="" />
                <div className={sButtonContainer}>
                    <button onClick={props.backwardForm} role="button" className={sBackButton}>Back</button>
                    <button role="button" type='submit' className={sNextButton} >Book Table</button>
                </div>
            </form>
        </div>
    )
}