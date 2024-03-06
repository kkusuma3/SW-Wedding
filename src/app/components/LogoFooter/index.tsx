import { MadeByLogoSrc } from "@/app/shared/imgSrc";
import Container from "../Container";
import Image from "next/image";

const LogoFooter = () => (
    <Container>
        <div className="flex flex-row justify-center space-x-10 md:space-x-20">
            {/* <Image src={MadeByLogoSrc} alt="Made with love by Kevin & Stefamikha" className="w-1/3 md:w-auto"/> */}
        </div>
    </Container>
);

export default LogoFooter;