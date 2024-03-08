import { PersonProfileType } from "@/app/shared/types/profile";
import Image from "next/image";

interface BrideGroomCardProps {
    userProfile: PersonProfileType;
}

const BrideGroomCard = ({ userProfile }: BrideGroomCardProps) => (
    <div className="flex flex-col w-full md:w-1/3 place-content-center items-center">
        <div className="w-10/12 md:w-7/12 mb-4 md:mb-6">
            <Image src={userProfile.image.src}  alt={userProfile.image.alt} className="w-full" width={1500} height={1500} quality={100}/>
        </div>
        <div className="flex flex-col text-center w-full md:w-auto max-w-md place-content-center">
            <span className="text-5xl md:text-7xl font-italianno py-2 md:py-4">{userProfile.name}</span>
            <span className="text-md md:text-xl">{userProfile.status}</span>
            <span className="text-md md:text-xl">{userProfile.parents}</span>
        </div>
    </div>
);

export default BrideGroomCard;