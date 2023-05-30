import Title from "./H_Title"
import Specials from "./H_Specials"
import Reviews from "./H_Reviews"
import About from "./H_About"

const sContainer = `
    w-full
    flex flex-row justify-center
`

function Home(){

    return(
        <main>
            <section className={sContainer + "bg-little-green"}>
                <Title/>
            </section>

            <section className={sContainer + "bg-white"}>
                <Specials/>
            </section>

            <section className={sContainer + "bg-little-green"}>
                <Reviews/>
            </section>
            
            <section className={sContainer + "bg-white"}>
                <About/>
            </section>
        </main>
    )
}

export default Home

