import CoverPage from "./components/Pages/Cover";
import BrideGroom from "./components/Pages/BrideGroom";
import Location from "./components/Pages/Location";
import RSVPForm from "./components/Pages/RSVPForm";
import Wishes from "./components/Pages/Wishes";
import WeddingGifts from "./components/Pages/WeddingGifts";
import Footer from "./components/Pages/Footer";
import PictureGallery from "./components/Pages/PictureGallery";

export default function Home() {
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
    </main>
  );
}
