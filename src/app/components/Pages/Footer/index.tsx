"use client"
// import { useMediaQuery } from "react-responsive";
import AOS from 'aos';
import Container from "../../Container";
import styles from './styles.module.css';
import { useEffect } from "react";

export const FooterContent = () => (
    <div className="flex flex-col w-full md:w-2/3 mx-auto text-center text-primary py-20 px-5" data-aos="zoom-in-up">
        <span className="text-lg md:text-2xl p-2">See you on our big day</span>
        <span className="text-5xl md:text-8xl p-2 font-italianno">Sebastian & Widyana</span>
        <span className="text-lg md:text-2xl p-2 font-bold">#insTIANtlyWIred</span>
    </div>
);

const Footer = () => {
    // const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
    
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