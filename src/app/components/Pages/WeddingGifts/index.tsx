"use client"
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa";
import Container from "../../Container";
import LogoHeading from "../../LogoHeading";
import { IconLogoBCA } from "@/app/shared/imgSrc";

const copyToClipboard = () => (
    navigator.clipboard.writeText("6450248752")
);

const WeddingGifts = () => (
    <Container>
        <div id="gifts" className="flex flex-col text-center space-y-5 md:space-y-10 text-primary">
            <LogoHeading heading="Wedding Gift" minPadding/>
            <span className="text-md md:text-lg w-full md:w-2/3 mx-auto">To friends and family who would like to send us a gift, we would be glad to receive it. Please send it through the following way:</span>
            <div className="flex flex-row flex-wrap p-8 w-10/12 md:w-1/2 mx-auto justify-around place-items-center bg-white rounded-xl">
                <div className="flex flex-col space-y-2 text-center">
                    <Image src={IconLogoBCA} alt="Logo for Bank BCA" className="w-40 mx-auto my-4" width={100} height={50}/>
                    <span className="text-lg md:text-xl font-bold">a/n Sebastian Suwisar</span>
                    <div className="flex flex-row place-content-center items-center space-x-2">
                        <span className="text-xl md:text-2xl font-bold">6450248752</span>
                        <button title="copy-clipboard-button" type="button" onClick={copyToClipboard}>
                            <FaRegCopy className="text-xl h-full cursor-pointer"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Container>
);

export default WeddingGifts;