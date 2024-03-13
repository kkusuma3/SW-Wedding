"use client"
import CoverPage from "./components/Pages/Cover";
import BrideGroom from "./components/Pages/BrideGroom";
import Location from "./components/Pages/Location";
import RSVPForm from "./components/Pages/RSVPForm";
import Wishes from "./components/Pages/Wishes";
import WeddingGifts from "./components/Pages/WeddingGifts";
import Footer from "./components/Pages/Footer";
import PictureGallery from "./components/Pages/PictureGallery";
import MusicPlayer from "./components/MusicPlayer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "aos/dist/aos.css";
import AOS from 'aos';
import { useEffect } from "react";

export default function Home() {

    useEffect(() => {
        AOS.init()
    }, []);

    return (
        <main className="font-philosopher">
            <CoverPage />
            <BrideGroom />
            <PictureGallery />
            <Location />
            <RSVPForm />
            <Wishes />
            <WeddingGifts />
            <Footer />
            <MusicPlayer />
            <ToastContainer autoClose={5000} />
        </main>
    );
}
