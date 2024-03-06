"use client"
import Image from 'next/image';
import { Link } from 'react-scroll';
import { IconLogoSW } from '@/app/shared/imgSrc';
import styles from './styles.module.css';

const CoverPage = () => (
    <div className={styles.background}>
        <div className="flex flex-col w-full h-full md:h-3/4 md:w-3/4 md:pt-10 m-auto text-center justify-around md:justify-evenly space-y-52 md:space-y-5">
            <div className="md:space-y-4">
                <div className="flex flex-col justify-evenly">
                    <Image src={IconLogoSW}  alt="Logo of SW Wedding" width={100} height={100} className="md:hidden w-1/4 md:w-1/12 mx-auto pb-6 md:pb-10"/>    
                    <h1 className="text-xl md:text-2xl uppercase py-1 font-philosopher">The wedding Of</h1>
                    <h1 className="text-6xl md:text-8xl py-1 relative z-10 font-italianno">Sebastian & Widyana</h1>
                    <h1 className="text-xl md:text-2xl py-1 font-philosopher">Saturday, June 29th 2024</h1>
                </div>
            </div>
            <button className="rounded-3xl w-1/2 md:w-1/4 mx-auto p-2 md:p-3 text-primary bg-white font-bold text-lg md:text-xl">
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