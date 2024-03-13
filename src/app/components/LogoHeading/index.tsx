import Image from 'next/image';
import { IconLogoHeading } from "@/app/shared/staticImportsSrc";

interface LogoHeadingProps {
    heading?: string;
    minPadding?: boolean;
    dataAos?: string;
}

const LOGO_HEADING_INITIAL_CLASSNAME = "flex flex-col items-center font-italianno"

const HEADING_CLASSNAME = LOGO_HEADING_INITIAL_CLASSNAME + " py-6 lg:py-10";
const NONHEADING_CLASSNAME = LOGO_HEADING_INITIAL_CLASSNAME + " py-10 lg:py-16";

const LogoHeading = ({ heading, minPadding, dataAos }: LogoHeadingProps) => (
    <div className={ minPadding ? LOGO_HEADING_INITIAL_CLASSNAME : heading ? HEADING_CLASSNAME : NONHEADING_CLASSNAME} data-aos={dataAos}>
        <Image src={IconLogoHeading} alt="Ribon Logo" width={400} height={100} />
        { heading && <span className="text-5xl md:text-6xl text-center py-4 md:py-6">{heading}</span> }
    </div>

);

export default LogoHeading;