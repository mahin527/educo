import { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import menuIcon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll'
import { Button, SwitchBtn } from '../Index'
import communicateIcon from '../../assets/communicate.png'

function Navbar() {
    const navClasses = 'py-3 md:py-4 w-full text-white fixed top-0 left-0 right-0 z-10'
    const navContetWrapperClasses = '@container mx-auto px-5 flex justify-between items-center'
    const menuLinkClasses = `flex flex-col lg:flex-row items-center fixed lg:static top-0 bottom-0 px-10 bg-neutral-500 dark:bg-neutral-700 dark:lg:bg-transparent lg:bg-transparent pt-24 lg:pt-0 transition-all duration-500 gap-8 text-sm lg:text-base xl:text-lg font-bold w-58 sm:w-78 md:w-88 lg:w-auto z-[-1] lg:z-auto`;
    const darkNav = 'bg-neutral-400 dark:bg-neutral-700 border-b-2 border-neutral-700 dark:border-neutral-200 transition-colors ease-in-out duration-300'
    const [sticky, setSticky] = useState(false)

    const [mobileMenu, setMobileMenu] = useState(false)
    const toggleMenu = () => {
        // setMobileMenu(!mobileMenu)
        setMobileMenu(prev => !prev)
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 100 ? setSticky(true) : setSticky(false)
        })
    }, [])

    return (
        <nav className={`${navClasses} ${sticky ? darkNav : ''}`}>
            <div className={`${navContetWrapperClasses}`}>
                <img src={logo} alt="Educo" className='w-30 sm:w-32 md:w-40 lg:w-45' />

                <ul className={`${menuLinkClasses} ${mobileMenu ? 'right-0' : '-right-full'}`}>
                    <li className='block'>
                        <Link to='hero' smooth={true} offset={0} duration={500} className='cursor-pointer'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='program' smooth={true} offset={-90} duration={500} className='cursor-pointer'>
                            Program
                        </Link>
                    </li>
                    <li className='block'>
                        <Link to='about' smooth={true} offset={-90} duration={500} className='cursor-pointer'>
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link to='campus' smooth={true} offset={-90} duration={500} className='cursor-pointer'>
                            Campus
                        </Link>
                    </li>
                    <li>
                        <Link to='testimonials' smooth={true} offset={-90} duration={500} className='cursor-pointer'>
                            Testimonials
                        </Link>
                    </li>
                    <li className='py-4 md-py-0'>
                        <Link to='contact' smooth={true} offset={-90} duration={500}>
                            <Button text='Contact us' classes='bg-white text-neutral-600 hover:bg-neutral-300' imgName={communicateIcon} />
                        </Link>

                    </li>
                    <li className='py-4 md-py-0'>
                        <SwitchBtn />
                    </li>
                </ul>
                <img
                    src={menuIcon}
                    alt="menu icon"
                    className='w-5 sm:w-6 md:w-8 lg:hidden cursor-pointer'
                    onClick={toggleMenu}
                />

            </div>
        </nav>
    )
}

export default Navbar