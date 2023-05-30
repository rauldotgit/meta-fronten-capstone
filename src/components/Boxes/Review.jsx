const sCard = `
    flex flex-col gap-2
    p-5
    bg-zinc-100
    rounded-lg
    overflow-hidden
    `

const sImage = `
    w-28 h-28
    self-center  
    object-top object-cover
    rounded-full
`

const sName = `
    font-semibold
    self-center
    text-zinc-800
`

const sReview = `
    self-start
    text-zinc-600
`

export default function Review(props) {
    return (
        <div className={sCard}>
            <img className={sImage} src={props.img} alt="Review Headshot" role="img" />
            <p role="complementary" className={sName}>{props.name}</p>
            <p role="complementary" className={sReview}>&quot;{props.text}&quot;</p>
        </div>
    )
}


Review.defaultProps = {
    img: '/profile1.jpg',
    name: 'John Doe',
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam similique molestias earum pariatur dolorem ex quaerat modi esse voluptatem quibusdam, doloribus atque, alias eligendi accusamus, et deleniti minus optio inventore!"
}
