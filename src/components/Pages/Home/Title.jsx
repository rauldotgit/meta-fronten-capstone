import TitleImage from "/icons_assets/restauranfood.jpg"

export default function Title(){
    return(
        <div className="xl:w-1/2 relative grid grid-cols-2 w-3/4 gap-5 py-8">
            <div className="flex flex-col items-start col-start-1 col-end-2">
                <h1 className="text-yellow-400 text-4xl md:text-5xl font-serif">Little Lemon</h1>
                <h2 className="text-zinc-100 text-2xl md:text-3xl font-serif">Chicago</h2>
                <p className="mt-4 text-zinc-100 text-sm md:text-md xl:text-lg xl:font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae unde laudantium vel, accusantium laboriosam quia illo.</p>
                <button role="button" className="active:translate-y-0.5 hover:bg-yellow-300 mt-6 text-sm py-2 px-4 rounded-full font-semibold text-zinc-900 bg-yellow-400">Reserve a table</button>
            </div>

            <div className="flex flex-col justify-center absolute top-8 h-72 col-start-2 col-end-3 rounded-lg overflow-hidden">
                <img role="image" className="rounded-lg" src={TitleImage} alt="" />
            </div>
        </div>
    )
}