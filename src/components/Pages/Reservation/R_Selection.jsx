const sContainer = `
    flex flex-col items-center
    my-5 
`

const sForm = `
    flex flex-col
    w-full h-full 
`

const sLabel = `
    mb-1 mt-3
    text-zinc-900 text-sm
    font-semibold   
`

const sInput = `
    px-2 py-1
    h-1/4
    rounded-md
    bg-zinc-50
    border-2 border-little-green focus:border-yellow-400
    outline-none
    text-zinc-900
    focus:duration-300
`

const s_Button = `
    font-semibold
    rounded-md
    px-6 py-2
`

const sBackButton = s_Button + `
    invisible
    bg-little-green 
`

const sNextButton = s_Button + `
    text-zinc-950
    bg-little-yellow
    self-end  
`

export default function Selection(props) {

    function handleSubmit(e) {
        e.preventDefault()
        props.forwardForm()
    }

    const timeOptions = props.times.map((time, index) => {
        return (
            <option key={index}>{time}</option>
        )
    })

    return (
        <div className={sContainer}>
            <form role="form" onSubmit={handleSubmit} className={sForm}>
                <label className={sLabel} htmlFor="res-date">Choose date</label>
                <input onChange={props.handleChange} name="date" value={props.formData.date} className={sInput + "invalid:border-red-500"} type="date" id="res-date" required />
                <label className={sLabel} htmlFor="res-time">Choose time</label>
                <select placeholder="select" onChange={props.handleChange} name="time" value={props.formData.time} className={sInput} id="res-time " required>
                    {timeOptions}
                </select>
                <label className={sLabel} htmlFor="guests">Number of guests</label>
                <input onChange={props.handleChange} name="guests" value={props.formData.guests} className={sInput} type="number" placeholder="1" min="1" max="10" id="guests" required />
                <label className={sLabel} htmlFor="occasion">Occasion</label>
                <select onChange={props.handleChange} name="occasion" value={props.formData.occasion} className={sInput} id="occasion" required>
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Wedding</option>
                    <option>Other</option>
                </select>
                <div className="flex justify-between mt-5">
                    <button role="button" className={sBackButton} >Next</button>
                    <button role="button" type='submit' className={sNextButton} >Next</button>
                </div>
            </form>
        </div>
    )
}