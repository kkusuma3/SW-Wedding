"use client"
import Image from 'next/image';
import { Link } from 'react-scroll';
import { IconLogoSW } from '@/app/shared/staticImportsSrc';
import styles from './styles.module.css';

const CoverPage = () => (
    <div className={styles.background}>
        <div data-aos="fade-up" className="flex flex-col w-full h-full md:w-3/4 m-auto text-center justify-between md:justify-between">
            <div className="md:space-y-4">
                <div className="flex flex-col justify-evenly w-11/12 md:w-full mx-auto pt-10 md:pt-26">
                    <Image src={IconLogoSW}  alt="Logo of SW Wedding" width={100} height={100} className="md:hidden w-1/4 md:w-1/12 mx-auto pb-6 md:pb-10"/>    
                    <h1 className="text-lg md:text-2xl uppercase py-1 font-philosopher">The wedding Of</h1>
                    <h1 className="text-5xl md:text-8xl py-1 relative z-10 font-italianno">Sebastian & Widyana</h1>
                    <h1 className="text-lg md:text-2xl py-1 font-philosopher">Saturday, June 29th 2024</h1>
                </div>
            </div>
            <button className="rounded-3xl w-1/2 md:w-1/4 mx-auto p-2 md:p-3 mb-16 md:mb-36 text-secondary bg-white hover:text-white hover:bg-secondary font-bold text-lg md:text-xl">
                <Link
                    activeClass="active"
                    to="bride-groom"
                    spy={true}
                    smooth={true}
                >
                    Open Invitation    
                </Link>
            </button>
        </div>
    </div>
);

export default CoverPage;