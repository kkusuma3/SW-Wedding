import { PersonProfileType } from "@/app/shared/types/profile";
import Image from "next/image";

interface BrideGroomCardProps {
    userProfile: PersonProfileType;
}

const BrideGroomCard = ({ userProfile }: BrideGroomCardProps) => (
    <div className="flex flex-col w-full md:w-1/3 place-content-center items-center">
        <div className="w-full md:w-1/3 p-5">
            <Image src={userProfile.image.src}  alt={userProfile.image.alt} className="bg-white p-2 w-full" width={100} height={100}/>
        </div>
        <div className="flex flex-col text-center w-full md:w-auto max-w-md place-content-center">
            <span className="text-3xl md:text-5xl font-italianno py-2">{userProfile.name}</span>
            <span className="text-md md:text-lg">{userProfile.status}</span>
            <span className="text-md md:text-lg">{userProfile.parents}</span>
        </div>
    </div>
);

export default BrideGroomCard;