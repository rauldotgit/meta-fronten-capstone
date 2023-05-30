import specialsData from "../../../data/specials"
import Special from "../../Boxes/Special"

const sButton = `
    text-xs
    px-2 py-1 sm:px-3 sm:py-2
    rounded-full
    font-semibold
    text-zinc-900
    bg-yellow-400 
    hover:bg-yellow-300
    active:translate-y-0.5
`

const sSpecialsContainer = `
    flex flex-col justify-center
    sm:grid sm:grid-cols-2
    md:grid md:grid-cols-3
    gap-5
    mb-16    
`

export default function Specials(){

    const specialComponents = specialsData.map((data, index) =>{
        return (
            <Special 
                key={index}
                img={data.img}
                name={data.name}
                price={data.price}
                text={data.text}
            />
        )
    })

    return(
        <div className="xl:w-1/2 w-3/4 mt-12">
            <div className="flex flex-row justify-between my-10">
                <h2 role="heading" className="font-serif text-3xl text-zinc-900">This Weeks Specials</h2>
                <button role="button" className={sButton}>Our Menu</button>
            </div>
            <div className={sSpecialsContainer}>
                {specialComponents}
            </div>
        </div>
    )
}