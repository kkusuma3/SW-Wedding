"use client";
import { MusicSrc } from '@/app/shared/staticImportsSrc';
import { MdOutlinePlayCircleFilled, MdOutlinePauseCircleFilled } from "react-icons/md";
import { useState, useRef } from 'react';

const iconClassName = ""

const MusicPlayer = () => {
    const [isMusicPlaying, setIsMusicPlaying] = useState(true);
    const audioRef = useRef<HTMLAudioElement>(null);

    const startAudio = () => {
        audioRef.current?.play();
        setIsMusicPlaying(true);
    };
    
    const pauseAudio = () => {
        audioRef.current?.pause();
        setIsMusicPlaying(false);
    };
    

    return (        
        <figure className="fixed bottom-5 md:bottom-10 right-5 md:right-10 text-4xl text-secondary">
            { isMusicPlaying ? <MdOutlinePauseCircleFilled className={iconClassName} onClick={pauseAudio} /> : <MdOutlinePlayCircleFilled className={iconClassName} onClick={startAudio} /> }
            <audio ref={audioRef} autoPlay src={MusicSrc}></audio>
        </figure>
    )
};

export default MusicPlayer;