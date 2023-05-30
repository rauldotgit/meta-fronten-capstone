const sLabel = `
    mb-1 mt-3
    text-zinc-900 text-sm
    font-semibold   
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
        <div className="flex flex-col items-center my-5">
            <form role="form" onSubmit={handleSubmit} className="flex flex-col w-full h-full">
                <label className={sLabel} htmlFor="res-date">Choose date</label>
                <input onChange={props.handleChange} name="date" value={props.formData.date} className="invalid:border-red-500 focus:border-yellow-400 focus:duration-300 px-2 py-1 rounded-md h-1/4 bg-zinc-50 outline-none text-zinc-900 border-2 border-little-green" type="date" id="res-date" required />
                <label className={sLabel} htmlFor="res-time">Choose time</label>
                <select placeholder="select" onChange={props.handleChange} name="time" value={props.formData.time} className="focus:border-yellow-400 focus:duration-300 px-2 py-1 rounded-md h-1/4 bg-zinc-50 outline-none text-zinc-900 border-2 border-little-green" id="res-time " required>
                    {timeOptions}
                </select>
                <label className={sLabel} htmlFor="guests">Number of guests</label>
                <input onChange={props.handleChange} name="guests" value={props.formData.guests} className="focus:border-little-yellow focus:duration-300 px-2 py-1 rounded-md h-1/4 bg-zinc-50 outline-none text-zinc-900 border-2 border-little-green" type="number" placeholder="1" min="1" max="10" id="guests" required />
                <label className={sLabel} htmlFor="occasion">Occasion</label>
                <select onChange={props.handleChange} name="occasion" value={props.formData.occasion} className="focus:border-little-yellow focus:duration-300 px-2 py-1 rounded-md h-1/4 bg-zinc-50 outline-none text-zinc-900 border-2 border-little-green" id="occasion" required>
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Wedding</option>
                    <option>Other</option>
                </select>
                <div className="flex justify-between mt-5">
                    <button role="button" className="invisible font-semibold rounded-md px-6 py-2 bg-little-green self-end" >Next</button>
                    <button role="button" type='submit' className="text-zinc-950 font-semibold rounded-md px-6 py-2 bg-little-yellow self-end" >Next</button>
                </div>
            </form>
        </div>
    )
}