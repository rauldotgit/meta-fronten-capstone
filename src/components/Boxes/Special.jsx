const sCard = `
    h-full flex flex-col
    bg-zinc-100
    rounded-lg
    overflow-hidden
    border border-slate-200
`

const sImage = `
    object-cover
    h-40   
`

const sTextContainer = `
    p-5 h-full flex flex-col    
`

const sNamePriceContainer = `
    flex flex-row justify-between
    mb-2  
`

const sName = `
    font-semibold
    text-zinc-900 
`

const sPrice = `
    font-md
    text-orange-400
`

const sInfo = `
    text-sm text-zinc-500  
    mb-2
`

const sOrderCTO = `
    mt-auto
    text-sm text-zinc-900
    font-semibold tracking-wide
    hover:text-yellow-400
    cursor-pointer
`

function Special(props) {
    return (
        <div className={sCard}>
            <img role="img" className={sImage + props.class} src={props.img} alt="Specials image" />
            <div className={sTextContainer}>
                <div className={sNamePriceContainer}>
                    <h3 role="heading" className={sName} >{props.name}</h3>
                    <p role="complementary" className={sPrice}>${props.price}</p>
                </div>
                <p role="complementary" className={sInfo}>{props.text}</p>
                <a role="link" className={sOrderCTO}>Order a delivery</a>
            </div>
        </div>
    )
}

Special.defaultProps = {
    img: '/icons_assets/lemon_desert.jpg',
    name: 'Greek Salad',
    price: 12.99,
    text: 'The famous greek salad of crispy lettuve, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
}

export default Special
