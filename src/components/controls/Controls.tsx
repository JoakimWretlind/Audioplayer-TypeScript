import { useState, RefObject } from 'react'
import { ControlsSection, TitleSection, ControlContainer, IconHolder } from './control.style';
import {
    IoPlaySkipBackSharp,
    IoPlayBackSharp,
    IoPlaySharp,
    IoPause,
    IoPlayForwardSharp,
    IoPlaySkipForwardSharp,
    IoVolumeMediumSharp
} from "react-icons/io5";
import { FaRandom } from "react-icons/fa";
import { musicData } from '../musicData';
import Player from '../player/Player'

type ControlProps = {
    audioPlayer: RefObject<HTMLAudioElement | null>
}


const Controls = ({ audioPlayer }: ControlProps) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [index, setIndex] = useState(0);
    const { id, song, artist, title, cover } = musicData[index];

    const playMedia = () => {
        if (audioPlayer != null && audioPlayer.current) {
            audioPlayer.current.play()
        }
    }

    const stopMedia = () => {
        if (audioPlayer != null && audioPlayer.current) {
            audioPlayer.current.pause()
        }
    }

    return (
        <>
            <Player src='/audio/Homage-Sirens.mp3' />
            <ControlsSection>
                <TitleSection>
                    <h4>{title}</h4>
                    <p>{artist}</p>
                </TitleSection>
                <ControlContainer>
                    <IconHolder><FaRandom /></IconHolder>
                    <IconHolder><IoPlaySkipBackSharp /></IconHolder>
                    <IconHolder><IoPlayBackSharp style={{ paddingRight: ".1rem" }} /></IconHolder>
                    <IconHolder id="play" onClick={() => setIsPlaying(!isPlaying)} >
                        {isPlaying ? <IoPause onClick={() => { stopMedia() }} /> : <IoPlaySharp style={{ paddingLeft: ".7rem" }} onClick={() => { playMedia() }} />}
                    </IconHolder>
                    <IconHolder><IoPlayForwardSharp style={{ paddingLeft: ".1rem" }} /></IconHolder>
                    <IconHolder><IoPlaySkipForwardSharp /></IconHolder>
                    <IconHolder><IoVolumeMediumSharp /></IconHolder>
                </ControlContainer>
            </ControlsSection>

        </>
    )
}

export default Controls
