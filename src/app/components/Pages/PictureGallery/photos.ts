import { GalleryPic10Src, GalleryPic11Src, GalleryPic12Src, GalleryPic1Src, GalleryPic2Src, GalleryPic3Src, GalleryPic4Src, GalleryPic5Src, GalleryPic6Src, GalleryPic7Src, GalleryPic8Src, GalleryPic9Src } from "@/app/shared/imgSrc";
import { Image } from "react-grid-gallery";

export interface CustomImage extends Image {
  original: string;
}

export const images: CustomImage[] = [
  {
    src: GalleryPic1Src,
    original: GalleryPic1Src,
    width: 350,
    height: 525,
    caption: "Sebastian & Widyana - Pre Wedding Picture 1",
  },
  {
    src: GalleryPic2Src,
    original: GalleryPic2Src,
    width: 350,
    height: 525,
    caption: "Sebastian & Widyana - Pre Wedding Picture 2",
  },
  {
    src: GalleryPic3Src,
    original: GalleryPic3Src,
    width: 350,
    height: 233,
    caption: "Sebastian & Widyana - Pre Wedding Picture 3",
  },
  {
    src: GalleryPic4Src,
    original: GalleryPic4Src,
    width: 350,
    height: 233,
    caption: "Sebastian & Widyana - Pre Wedding Picture 4",
  },
  {
    src: GalleryPic5Src,
    original: GalleryPic5Src,
    width: 350,
    height: 233,
    caption: "Sebastian & Widyana - Pre Wedding Picture 5",
  },
  {
    src: GalleryPic6Src,
    original: GalleryPic6Src,
    width: 350,
    height: 233,
    caption: "Sebastian & Widyana - Pre Wedding Picture 6",
  },
  {
    src: GalleryPic7Src,
    original: GalleryPic7Src,
    width: 350,
    height: 233,
    caption: "Sebastian & Widyana - Pre Wedding Picture 7",
  },
  {
    src: GalleryPic8Src,
    original: GalleryPic8Src,
    width: 350,
    height: 233,
    caption: "Sebastian & Widyana - Pre Wedding Picture 8",
  },
  {
    src: GalleryPic9Src,
    original: GalleryPic9Src,
    width: 350,
    height: 233,
    caption: "Sebastian & Widyana - Pre Wedding Picture 9",
  },
  {
    src: GalleryPic10Src,
    original: GalleryPic10Src,
    width: 350,
    height: 525,
    caption: "Sebastian & Widyana - Pre Wedding Picture 10",
  },
  {
    src: GalleryPic11Src,
    original: GalleryPic11Src,
    width: 350,
    height: 525,
    caption: "Sebastian & Widyana - Pre Wedding Picture 11",
  },
  {
    src: GalleryPic12Src,
    original: GalleryPic12Src,
    width: 350,
    height: 525,
    caption: "Sebastian & Widyana - Pre Wedding Picture 12",
  },
];
