import reviewData from "../../../data/reviews"
import Review from "../../Boxes/Review"

function Reviews() {

    const reviewComponents = reviewData.map((data, index) =>{
        return(
            <Review key={index} img={data.img} name={data.name} text={data.text}/>
        )
    })

    return (
        <div className="xl:w-1/2 w-3/4 mt-12">
            <h2 className="mb-10 font-serif text-3xl text-zinc-100">What people say about us</h2>
            <div className="gap-5 mb-16  flex flex-col justify-center sm:grid sm:grid-cols-2 xl:flex xl:flex-row xl:justify-center">
                {reviewComponents}
            </div>
        </div>
    )
}

export default Reviews