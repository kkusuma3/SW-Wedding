"use client"
import { useEffect, useState } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-scroll';
import { NavigationLinks } from './data';

const hamburgerButtonClassName = "p-2 rounded-md text-primary hover:text-white focus:outline-none w-full";

const Header = () => {
    const NavLinks = NavigationLinks();
    const [ isScrolled, setIsScrolled ] = useState(false);
    const [ isMobileMenuClicked, setIsMobileMenuClicked ] = useState(false);

    // Handles removing navbar if on cover page
    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 0 ? setIsMobileMenuClicked(false) : null;
            window.scrollY > window.innerHeight ? setIsScrolled(true) : setIsScrolled(false);
        }
        window.addEventListener('scroll', handleScroll);
        return() => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <>
            { (isScrolled || isMobileMenuClicked) && 
                <Headroom>
                    <header>
                        <nav className="p-0 md:p-5 w-full uppercase font-philosopher bg-background">
                            <div className="hidden md:flex md:justify-evenly md:content-center md:w-3/4 mx-auto">
                                {
                                    NavLinks.map((link) => (
                                    <span key={link.id} className="cursor-pointer">
                                        <Link activeClass="active" to={link.href} spy={true} smooth={true}>{link.name}</Link>
                                    </span>))
                                }
                            </div>
                            <div className="flex md:hidden">
                                <button
                                    className={ isMobileMenuClicked ?
                                        "bg-white " + hamburgerButtonClassName :
                                        "bg-transparent " + hamburgerButtonClassName
                                    }
                                    onClick={() => setIsMobileMenuClicked(!isMobileMenuClicked)}
                                >
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="float-right h-6 w-6 mr-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#45486A" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                            <div className={isMobileMenuClicked ? "w-full absolute md:hidden" : "w-full hidden"}>
                                <div className={isMobileMenuClicked ? "bg-white flex flex-col px-4 py-2 space-y-1 sm:px-3 transition duration-500" : "flex flex-col px-4 py-2 space-y-1 sm:px-3"}>
                                    {
                                        NavLinks.map((link) => (
                                        <span key={link.id} className="cursor-pointer mx-auto">
                                            <Link
                                                activeClass="active"
                                                to={link.href}
                                                spy={true}
                                                smooth={true}
                                                onClick={() => setIsMobileMenuClicked(!isMobileMenuClicked)}>
                                                {link.name}
                                            </Link>
                                        </span>))
                                    }
                                </div>
                            </div>
                        </nav>
                    </header>
                </Headroom>
            }
        </>
    )
};

export default Header;

