"use client"
import AOS from 'aos';
import { useEffect } from "react";
import Container from "../../Container";
import LogoHeading from '../../LogoHeading';
import Image from 'next/image';
import { IconVerticalLine } from '@/app/shared/staticImportsSrc';

const GMAPS_DIRECTIONS_URL = "https://maps.app.goo.gl/TBb8t85ufL3WP6Et7";

const Location = () => {
    
    useEffect(() => {
        AOS.init();
    }, []);

    return (    
        <Container isFullWidth={false}>
            <div id="matrimony" className="py-5 md:py-10">
                <div className="flex flex-col mx-auto w-10/12 items-center">
                    <LogoHeading heading="Venue"/>
                    <span className="text-xl lg:text-3xl font-bold pb-8 lg:pb-12 mx-auto">Saturday, June 29th 2024</span>
                    <div className="flex flex-row flex-wrap justify-evenly md:justify-center space-y-6 md:space-y-0 md:space-x-12 py-8 lg:py-12" data-aos="zoom-out">
                        <div className="flex flex-col space-y-2 items-center md:items-end">
                            <span className="text-4xl lg:text-5xl italic font-italianno">Holy Matrimony</span>
                            <span className="text-xl lg:text-2xl font-light">10:00 WIB</span>
                        </div>
                        <Image className="hidden md:block" src={IconVerticalLine} alt="Vertical Line" width={1} height={100}/>
                        <hr className="md:hidden w-8/12 mx-auto border-1/2 border-primary"/>
                        <div className="flex flex-col space-y-2 items-center md:items-start">
                            <span className="text-4xl lg:text-5xl italic font-italianno">Wedding Reception</span>
                            <span className="text-xl lg:text-2xl font-light">18:00 WIB</span>
                        </div>
                    </div>
                    <div className="flex flex-col py-8 lg:py-12 items-center">
                        <span className="text-lg lg:text-3xl font-bold text-center">DoubleTree by Hilton Jakarta Kemayoran</span>
                        <span className="text-md lg:text-xl">Jl. Griya Utama Blok B no. 1, Jakarta Utara</span>
                    </div>
                    <a className="mx-auto w-1/2 md:w-1/4" href={GMAPS_DIRECTIONS_URL} target="_blank" rel="noopener">
                        <button className="rounded-3xl w-full mx-auto p-2 md:p-3 text-primary border border-primary bg-white font-bold">
                            Get Directions
                        </button>
                    </a>
                </div>
            </div>
        </Container>
    );
};

export default Location;