import ImgKitchen from "/icons_assets/Mario and Adrian A.jpg"
import ImgKitchen2 from "/icons_assets/Mario and Adrian b.jpg"

function About(){
    return (
        <div className="xl:w-1/2 w-3/4 mt-12 grid grid-cols-2 gap-5 mb-16">
            <div className="flex flex-col items-start col-start-1 col-end-2">
                    <h1 className="text-zinc-900 text-4xl font-serif">Little Lemon</h1>
                    <h2 className="text-yellow-400 text-2xl font-serif">Chicago</h2>
                    <p className="text-zinc-600 mt-5 md:font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto perspiciatis, tempora commodi possimus cupiditate dolores recusandae placeat facere reprehenderit, vero, neque quisquam cumque delectus temporibus nostrum facilis ipsa! Accusantium, rem.</p>
            </div>
            <div className="sm:place-self-end place-self-start">
                <img role="image" className="rounded-xl w-64 mb-2" src={ImgKitchen} alt="" />
                <img role="image" className="rounded-xl w-64" src={ImgKitchen2} alt="" />                    
            </div>
        </div>
    )
}

export default About