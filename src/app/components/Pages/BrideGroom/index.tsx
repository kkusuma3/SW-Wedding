import AOS from 'aos';
import { useEffect } from "react";
import Container from '../../Container';
import LogoHeading from '../../LogoHeading';
import Image from 'next/image';
import BrideGroomCard from '../../BrideGroomCard';
import { PersonProfileType } from '@/app/shared/types/profile';
import { IconLogoSW, ImgBrideSrc, ImgGroomSrc } from '@/app/shared/staticImportsSrc';

const GROOM_PROFILE: PersonProfileType = {
    name: "Sebastian Suwisar",
    status: "First son of:",
    parents: "Mr. Leonardi Suwisar & Mrs. Felia Srinaga",
    image: {
        src: ImgGroomSrc,
        alt: "Picture of Groom: Sebastian Suwisar"
    }
}

const BRIDE_PROFILE: PersonProfileType = {
    name: "Widyana",
    status: "Youngest daughter of:",
    parents: "Mr. Atmaja Gusti & Mrs. Ratna Suhanna",
    image: {
        src: ImgBrideSrc,
        alt: "Picture of Bride: Widyana"
    }
}

const BrideGroom = () => {

    return (
        <Container>
            <section id="bride-groom">
                <div data-aos="zoom-in-up" className="flex flex-col w-full py-2 md:py-5">
                    <Image src={IconLogoSW}  alt="Logo of SW Wedding" width={100} height={100} className="w-1/4 md:w-1/12 mx-auto pb-6 md:pb-10"/>
                    <span className="text-lg md:text-3xl mx-auto py-4">{`"We love because God first loved us."`}</span>
                    <hr className="w-1/6 md:w-1/12 lg:w-20 mx-auto border-1/2 border-primary"/>
                    <span className="text-lg md:text-3xl mx-auto py-4">1 John 4:19</span>
                </div>
                <div data-aos="zoom-out">
                    <LogoHeading heading="Bride & Groom" />
                    <div className="flex flex-row flex-wrap justify-evenly space-y-10 md:space-y-0 my-6 md:my-12">
                        <BrideGroomCard userProfile={GROOM_PROFILE} />
                        <BrideGroomCard userProfile={BRIDE_PROFILE} />
                    </div>
                </div>
            </section>
        </Container>
    )
};

export default BrideGroom;