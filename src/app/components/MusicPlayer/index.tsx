"use client";
import { MusicSrc } from '@/app/shared/staticImportsSrc';
import { MdOutlinePlayCircleFilled, MdOutlinePauseCircleFilled } from "react-icons/md";
import { useState, useRef } from 'react';
import styles from './styles.module.css';

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
            { isMusicPlaying ? <MdOutlinePauseCircleFilled className={styles.btn__music_player} onClick={pauseAudio} /> : <MdOutlinePlayCircleFilled className={styles.btn__music_player} onClick={startAudio} /> }
            <audio ref={audioRef} autoPlay src={MusicSrc}></audio>
        </figure>
    )
};

export default MusicPlayer;