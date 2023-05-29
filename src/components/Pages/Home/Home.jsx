import Title from "./Title"
import Specials from "./Specials"
import Reviews from "./Reviews"
import About from "./About"

const sContainer = `
    w-full
    flex flex-row justify-center
`

function Home(){

    return(
        <div >
            <div className={sContainer + "bg-little-green"}>
                <Title/>
            </div>

            <div className={sContainer + "bg-white"}>
                <Specials/>
            </div>

            <div className={sContainer + "bg-little-green"}>
                <Reviews/>
            </div>
            
            <div className={sContainer + "bg-white"}>
                <About/>
            </div>
        </div>
    )
}

export default Home

