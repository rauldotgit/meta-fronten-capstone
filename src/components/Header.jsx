import { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '/icons_assets/Logo.svg'
import Hamburger1 from '/icons_assets/hamburger_1.svg'
// import Hamburger2 from '/icons_assets/Hamburger_2.svg'

const sHeader = `
    bg-white
    flex flex-row justify-center items-center
    w-full
    select-none
`

const sPhone = `
    lg:hidden
    h-full xl:w-1/2 w-3/4
    flex flex-col
    py-2
`

const sPhoneTop = `
    flex flex-row justify-between items-center
    py-2
`

const sPhoneBottom = `
    flex flex-row flex-wrap justify-center
    mt-5
    p-2
    border-t 
`

const sContentDesktop = `
    hidden
    h-full xl:w-1/2 w-3/4
    lg:flex justify-between items-center
    py-2
`

const sLogo = `
    text-zinc-950
`
const sDesktopNav = `
    lg:flex hidden
`
const sLink = `
    p-3
    text-sm text-zinc-950
    font-semibold
    tracking-wide
    hover:bg-yellow-400
    hover:duration-300
    rounded-lg
    cursor-pointer
`

const sHamburger = `
    cursor-pointer
    hover:opacity-50
`

function Header() {

    const [dropDown, setDropDown] = useState(false)

    function showDropDown() {
        setDropDown(!dropDown)
    }

    return (
        <header className={sHeader}>
            <div className={sPhone}>
                <div className={sPhoneTop}>
                    <Link to="/" className={sLogo}>
                        <img role='banner' src={Logo} alt="Little Logo" />
                    </Link>
                    <img onClick={showDropDown} className={sHamburger} src={Hamburger1} alt="Hamburger" />
                </div>
                {dropDown &&
                    <nav role='nav' className={sPhoneBottom}>
                        <Link to="/" className={sLink}>Home</Link>
                        <Link className={sLink}>About</Link>
                        <Link className={sLink}>Menu</Link>
                        <Link className={sLink} to="/reserve">Reservations</Link>
                        <Link className={sLink}>Order Online</Link>
                        <Link className={sLink}>Login</Link>
                    </nav>
                }
            </div>
            <div className={sContentDesktop}>
                <Link to="/" className={sLogo}>
                    <img role='banner' src={Logo} alt="Little Logo" />
                </Link>

                <nav role='nav' className={sDesktopNav}>
                    <Link to="/" className={sLink}>Home</Link>
                    <Link className={sLink}>About</Link>
                    <Link className={sLink}>Menu</Link>
                    <Link className={sLink} to="/reserve">Reservations</Link>
                    <Link className={sLink}>Order Online</Link>
                    <Link className={sLink}>Login</Link>
                </nav>

                {/* <img className={sHamburger} src={Hamburger1} alt="Hamburger" /> */}
            </div>
        </header>
    )
}

export default Header