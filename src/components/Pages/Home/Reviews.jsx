import reviewData from "../../../data/reviews"
import Review from "../../Boxes/Review"

const sContainer = `
    xl:w-1/2 w-3/4
    mt-12
`

const sHeader = `
    mb-10
    text-3xl text-zinc-100 
    font-serif
`

const sCardContainer = `
    flex flex-col justify-center
    xl:flex xl:flex-row xl:justify-center
    sm:grid sm:grid-cols-2
    mb-16
    gap-5
`

function Reviews() {

    const reviewComponents = reviewData.map((data, index) =>{
        return(
            <Review key={index} img={data.img} name={data.name} text={data.text}/>
        )
    })

    return (
        <div className={sContainer}>
            <h2 role="heading" className={sHeader}>What people say about us</h2>
            <div className={sCardContainer}>
                {reviewComponents}
            </div>
        </div>
    )
}

export default Reviews