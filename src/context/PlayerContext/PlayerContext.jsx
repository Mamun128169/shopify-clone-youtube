import { createContext, useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import { songsData } from "../../assets/assets";

export const PlayerContext = createContext();


const PlayerContextProvider = ({children}) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    // for horizontal scrollBar
    const albumsContainerRef = useRef(null);
    const songsContainerRef = useRef(null);

    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayerStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0,
        }, 
        totalTime: {
            second: 0,
            minute: 0,
        }
    })

    const play = () => {
        audioRef.current.play();
        setPlayerStatus(true);
    }
    
    const pause = () => {
        audioRef.current.pause();
        setPlayerStatus(false);
    }
    
    const playWithId = async (id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayerStatus(true);
    }
    
    const previous = async () => {
        if (track.id > 0) {
            await setTrack(songsData[track.id - 1]);
            await audioRef.current.play();
            setPlayerStatus(true);
        }
    }

    const next = async () => {
        if (track.id < songsData.length - 1) {
            await setTrack(songsData[track.id + 1]);
            await audioRef.current.play();
            setPlayerStatus(true);
        }
    }


    const seekSong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration);
        audioRef.current.play();
        setPlayerStatus(true);
    }


    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor((audioRef.current.currentTime / audioRef.current.duration)* 100))+"%";

                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    }, 
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                })
            }
        }, 1000);
    }, [audioRef]); 


    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track, setTrack,
        playStatus, setPlayerStatus,
        time, setTime,
        play, pause,
        playWithId,
        next,
        previous,
        seekSong,
        albumsContainerRef,
        songsContainerRef,
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {children}
        </PlayerContext.Provider>

    )
}

PlayerContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PlayerContextProvider