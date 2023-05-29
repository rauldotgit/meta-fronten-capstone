
function Review(props) {
    return (
        <div className="p-5 overflow-hidden bg-zinc-100 rounded-lg flex flex-col gap-2">
            <img className="w-28 h-28 object-top object-cover rounded-full self-center" src={props.img} alt="Review Headshot" role="image" />
            <p role="complementary" className="font-semibold self-center text-zinc-800">{props.name}</p>
            <p role="complementary" className="self-start text-zinc-600">&quot;{props.text}&quot;</p>
        </div>
    )
}

export default Review
