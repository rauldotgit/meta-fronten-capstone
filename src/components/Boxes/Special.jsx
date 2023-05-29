

function Special(props){
    return (
        <div className="h-full flex flex-col bg-zinc-100 rounded-lg overflow-hidden border border-slate-200">
            <img className="object-cover h-40" src={props.img} alt="Specials image" />
            <div className="p-5 h-full flex flex-col">
                <div className="flex flex-row justify-between mb-2">
                    <h4 className="font-semibold text-zinc-900" >{props.name}</h4>
                    <p className="font-md text-orange-400">${props.price}</p>
                </div>
                <p className="text-sm mb-2 text-zinc-500">{props.text}</p>
                <a href="" className="mt-auto text-sm text-zinc-900 font-semibold tracking-wide hover:text-yellow-400">Order a delivery</a>
            </div>
        </div>
    )
}

Special.defaultProps = {
    img: '/icons_assets/lemon_desert.jpg',
    name: 'Greek Salad',
    price: 12.99,
    text: 'The famous greek salad of crispy lettuve, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
}

export default Special
