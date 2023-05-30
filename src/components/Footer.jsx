import { Link } from 'react-router-dom'
import Logo from '/icons_assets/Logo.svg'

const sFooter = `
    w-full h-full
    flex flex-row justify-center
    bg-little-green
`
const sContent = `
    f-full w-3/4 xl:w-1/2
    grid grid-cols-2 grid-rows-2 place-items-start gap-12 
    sm:flex sm:justify-between sm:items-start
    my-10
    sm:gap-5
`
const sLogo = `
    bg-white
    px-3 py-2
    rounded-md
`

const sHeader = `
    text-xl
    tracking-wider
    mb-2
`
const sLinks = `
    flex flex-col
`

const sLink = `
    hover:text-yellow-400   
`

const sInfo = `
    flex gap-2  
`
const sSocials = `
    flex flex-row flex-wrap gap-2 invert
    active:translate-y-0.5
`

const sSocialIcon = `
    h-8 w-8
`

function Footer() {
    return (
        <footer className={sFooter}>
            <div className={sContent}>
                <Link role='link' to="" className="">
                    <img loading='lazy' role='banner' className={sLogo} src={Logo} alt="Little Lemon Footer Logo" />
                </Link>
                <div role='nav'>
                    <h2 role='heading' className={sHeader}>Pages</h2>
                    <div className={sLinks}>
                        <Link role='link' className={sLink} to="/">Home</Link>
                        <Link role='link' className={sLink} to="">About</Link>
                        <Link role='link' className={sLink} to="">Menu</Link>
                        <Link role='link' className={sLink} to="">Reservations</Link>
                        <Link role='link' className={sLink} to="">Order Online</Link>
                        <Link role='link' className={sLink} to="">Login</Link>
                    </div>
                </div>

                <div>
                    <h2 role='heading' className={sHeader}>Info</h2>
                    <div>
                        <div role='complementary' className={sInfo}>
                            <svg role='image' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>

                            17 Mauna Lani Terrace, Kamuela
                        </div>
                        <div role='complementary' className={sInfo}>
                            <svg role='image' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>

                            +1-202-555-0198</div>
                        <div role='complementary' className={sInfo}>
                            <svg role='image' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>

                            Little@Lemon.com
                        </div>
                    </div>
                </div>

                <div>
                    <h2 role='heading' className={sHeader}>Socials</h2>
                    <div className={sSocials}>
                        <a role='link' href="">
                            <img role='image' className={sSocialIcon} src="/icons_assets/instagram.svg" alt="Instagram Icon" />
                        </a>
                        <a role='link' href="">
                            <img role='image' className={sSocialIcon} src="/icons_assets/facebook.svg" alt="Facebook Icon" />
                        </a>
                        <a role='link' href="">
                            <img role='image' className={sSocialIcon} src="/icons_assets/twitter.svg" alt="Twitter Icon" />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer