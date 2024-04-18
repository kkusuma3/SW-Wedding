"use client"
import Image from 'next/image';
import AOS from 'aos';
import Container from "../../Container";
import styles from './styles.module.css';
import { useEffect } from "react";
import { ImgFooterSrc } from '@/app/shared/staticImportsSrc';

export const FooterContent = () => (
    <div className="flex flex-col w-full h-full md:w-2/3 mx-auto text-center text-primary pt-20 pb-10 px-5 justify-between" data-aos="zoom-in-up">
        <div className="flex flex-col">
            <span className="text-lg md:text-2xl p-2">See you on our big day</span>
            <span className="text-5xl md:text-8xl p-2 font-italianno">Sebastian & Widyana</span>
            <span className="text-lg md:text-2xl p-2 font-bold">#insTIANtlyWIred</span>
        </div>
        <div className="flex flex-col w-full">
            <a className="w-1/4 md:w-1/6 mx-auto" href="https://www.instagram.com/milovinid" target="_blank" rel="noopener">
                <Image src={ImgFooterSrc} alt="Made by Kevin & Stefamikha Logo" width={400} height={100} />
            </a>
            <span className="text-xs md:text-sm text-white font-light p-1">Photos by @byantonius - kairosworks</span>
        </div>
    </div>
);

const Footer = () => {    
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <Container isFullWidth>
            <div className={styles.background}>
                <FooterContent />
                
            </div>
        </Container>
    )
};

export default Footer;