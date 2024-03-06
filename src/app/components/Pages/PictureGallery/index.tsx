"use client";
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-18-image-lightbox";
import { useMediaQuery } from "react-responsive";
import "react-18-image-lightbox/style.css";
import { images, CustomImage } from "./photos";
import Container from "../../Container";
import LogoHeading from "../../LogoHeading";

export default function PictureGallery() {
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
    const [index, setIndex] = useState(-1);

    const currentImage = images[index];
    const nextIndex = (index + 1) % images.length;
    const nextImage = images[nextIndex] || currentImage;
    const prevIndex = (index + images.length - 1) % images.length;
    const prevImage = images[prevIndex] || currentImage;

    const handleClick = (index: number, item: CustomImage) => setIndex(index);
    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(prevIndex);
    const handleMoveNext = () => setIndex(nextIndex);

    return (
        <Container>
            <div id="gallery" className="flex flex-col pt-8 md:pt-20">
                <LogoHeading heading="Gallery" />
                <Gallery
                    images={images}
                    onClick={handleClick}
                    enableImageSelection={false}
                    rowHeight={isTabletOrMobile ? 180 : 350}
                />
                {!!currentImage && (
                    /* @ts-ignore */
                    <Lightbox
                        mainSrc={currentImage.original}
                        imageTitle={currentImage.caption}
                        mainSrcThumbnail={currentImage.src}
                        nextSrc={nextImage.original}
                        nextSrcThumbnail={nextImage.src}
                        prevSrc={prevImage.original}
                        prevSrcThumbnail={prevImage.src}
                        onCloseRequest={handleClose}
                        onMovePrevRequest={handleMovePrev}
                        onMoveNextRequest={handleMoveNext}
                    />
                )}
            </div>
        </Container>
    );
}
