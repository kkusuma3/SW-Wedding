"use client"
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa";
import Container from "../../Container";
import LogoHeading from "../../LogoHeading";
import { IconLogoBCA } from "@/app/shared/staticImportsSrc";
import styles from './styles.module.css';
import { toast } from "react-toastify";

const copyToClipboard = () => {
    navigator.clipboard.writeText("6450248752")
    toast.info("Copied to clipboard!", {
        position: "bottom-center"
    })
};

const WeddingGifts = () => (
    <Container isFullWidth additionalClasses={styles.background}>
        <section id="gifts" className="flex flex-col text-center text-primary py-5 md:py-10 w-10/12 mx-auto" data-aos="fade-down">
            <LogoHeading heading="Wedding Gift" minPadding/>
            <span className="text-md md:text-lg w-full md:w-2/3 mx-auto mt-2 mb-10">We are incredibly grateful for your love and support as we celebrate our special day. If you wish to share in our joy with a gift, we would be honored. Please find the details below:</span>
            <div className="flex flex-row p-4 md:p-8 w-full md:w-1/3 mx-auto justify-around place-items-center bg-white rounded-xl">
                <div className="flex flex-col space-y-2 text-center">
                    <Image src={IconLogoBCA} alt="Logo for Bank BCA" className="w-20 mx-auto my-4" width={100} height={50}/>
                    <span className="text-xl md:text-2xl font-bold">a/n Sebastian Suwisar</span>
                    <div className="flex flex-row place-content-center items-center space-x-2">
                        <span className="text-2xl md:text-3xl font-bold">6450248752</span>
                        <button className="hover:bg-background rounded-full p-2" title="copy-clipboard-button" type="button" onClick={copyToClipboard}>
                            <FaRegCopy className="text-xl h-full cursor-pointer"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </Container>
);

export default WeddingGifts;