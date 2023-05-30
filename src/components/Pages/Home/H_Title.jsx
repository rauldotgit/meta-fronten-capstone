import TitleImage from "/webp_files/entrees.webp"
import { Link } from "react-router-dom"

const sContainer = `
    xl:w-1/2 w-3/4
    relative
    grid grid-cols-2
    gap-5
    py-8
`

const sTextBox = `
    flex flex-col items-start
    col-start-1 col-end-2
`

const sMainHeading = `
    text-yellow-400 text-4xl md:text-5xl
    font-serif 
`

const sSubHeading = `
    text-zinc-100 text-2xl md:text-3xl
    font-serif
`

const sPara = `
    mt-4
    text-zinc-100 text-sm
    md:text-md
    xl:text-lg xl:font-thin   
`

const sButton = `
    mt-6
    py-2 px-4
    text-sm text-zinc-900
    font-semibold
    rounded-full
    bg-yellow-400
    hover:bg-yellow-300
    active:translate-y-0.5
`

const sImgContainer = `
    flex flex-col justify-center
    col-start-2 col-end-3
    absolute top-8
    h-72
    rounded-lg
    overflow-hidden   
`

const sImg = `
    rounded-lg
`

export default function Title(){
    return(
        <div className={sContainer}>
            <div className={sTextBox}>
                <h1 role="heading" className={sMainHeading}>Little Lemon</h1>
                <h2 role="heading" className={sSubHeading}>Chicago</h2>
                <p role="complementary" className={sPara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae unde laudantium vel, accusantium laboriosam quia illo.</p>
                <Link to="/reserve/date">
                    <button role="button" className={sButton}>Reserve a table</button>
                </Link>
            </div>

            <div className={sImgContainer}>
                <img loading="lazy" role="img" className={sImg} src={TitleImage} alt="" />
            </div>
        </div>
    )
}