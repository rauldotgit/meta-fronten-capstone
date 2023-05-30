import ImgKitchen from "/webp_files/mario_and_adrian.webp"
import ImgKitchen2 from "/webp_files/mario_and_adrian_2.webp"

const sContainer = `
    xl:w-1/2 w-3/4
    grid grid-cols-2
    gap-5 
    mb-16 mt-12
`

const sAboutTextBox = `
    flex flex-col items-start
`

const sAboutImgBox = `
    sm:place-self-end place-self-start
`

const sImage = `
    rounded-xl
    w-64
`
const sAboutHeader = `
    text-zinc-900 text-4xl
    font-serif
`

const sAboutSubHeader = `
    text-yellow-400 text-2xl
    font-serif
`

const sAboutParagraph = `
    text-zinc-600
    mt-5
    md:font-semibold
`

function About(){
    return (
        <div className={sContainer}>
            <div className={sAboutTextBox}>
                    <h1 role="heading" className={sAboutHeader}>Little Lemon</h1>
                    <h2 role="heading" className={sAboutSubHeader}>Chicago</h2>
                    <p role="complementary" className={sAboutParagraph}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto perspiciatis, tempora commodi possimus cupiditate dolores recusandae placeat facere reprehenderit, vero, neque quisquam cumque delectus temporibus nostrum facilis ipsa! Accusantium, rem.</p>
            </div>
            <div className={sAboutImgBox}>
                <img loading="lazy" role="img" className={sImage + " mb-2 "} src={ImgKitchen} alt="" />
                <img loading="lazy" role="img" className={sImage} src={ImgKitchen2} alt="" />                    
            </div>
        </div>
    )
}

export default About