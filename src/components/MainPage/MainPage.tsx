import { useState, useRef } from "react";
import Controls from '../controls/Controls'
import Player from '../player/Player'
import { musicData } from "../musicData";
import { Section } from "./mainPage.style";

const TRACK_URL = '/audio/Homage-Sirens.mp3'

export const MainPage = () => {
    const audioPlayer = useRef<HTMLAudioElement | null>(null);
    const [index, setIndex] = useState(0);
    const { id, song, artist, title, cover } = musicData[index];


    return (
        <>
            <Section>
                <Player src={TRACK_URL} ref={audioPlayer}></Player>
                <Controls audioPlayer={audioPlayer}></Controls>
            </Section>
        </>
    );
}
