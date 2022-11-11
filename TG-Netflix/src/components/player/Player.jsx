import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import YouTube from 'react-youtube';

// OPEN MODAL FROM THE MORE INFO BUTTON
import { closeModal, openModal } from '../../reducers/modalReducer';

// CSS & BUTTONS
import { PlayerStyles } from './PlayerStyles';

import play from '../../assets/play-button.svg';
import info from '../../assets/info.svg';
import replay from '../../assets/replay.svg';
import volume from '../../assets/volume.svg';
import muted from '../../assets/muted.svg';
import { setTrailerTime } from '../../reducers/trailerReducer';
import { useSearchParams } from 'react-router-dom';


function Player() {
    const { overview, age_certificate, backdrop_path, trailer, title, id } = useSelector(state => state.netflix.browse[1])
    console.log(id)

    const seconds = useSelector((state) => state.trailer.seconds)
    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount)



    const dispatch = useDispatch();
    // REF
    const playerRef = useRef(null);
    const bannerRef = useRef(null);
    const bannerTitleRef = useRef(null);
    const bannerDescRef = useRef(null);
    const playButtonRef = useRef(null);
    const moreInfoButtonRef = useRef(null);


    // VOLUME STATE
    const [muteIsVisible, setMuteIsVisible] = useState(true);
    const [unMuteIsVisible, setUnMuteIsVisible] = useState(false);

    // ANIMATION
    const [isPlaying, setIsplaying] = useState(false)

    // MODAL STATE
    const [coords, setCoords] = useState(false);
    const [movieID, setMovieId] = useSearchParams();
    let globalModalState = useSelector((state) => state.modal.modalState)

    const muteVideo = () => {
        playerRef.current.internalPlayer.mute();
        setUnMuteIsVisible(current => !current);
        setMuteIsVisible(current => !current);
    }
    const unMuteVideo = () => {
        playerRef.current.internalPlayer.unMute();
        setMuteIsVisible(current => !current);
        setUnMuteIsVisible(current => !current);
    }



    // ON TRAILER PLAY/END
    const playingVideo = () => {
        document.querySelector('.banner').style.animation = 'fadeOut .25s ease-out 0.5s forwards';
        document.querySelector('.banner-title').style.animation = 'shrink .5s ease-in-out 5s forwards';
        document.querySelector('.banner-description').style.animation = 'fadeOut .25s ease-out 5s forwards';

        // bannerRef.classlist.add('banner-fade-out-start');
        // bannerTitleRef.classlist.add('title-shrink-start');
        // bannerDescRef.classlist.add('desc-fade-out-start');

        // .banner-fade-out-start
        // .title-shrink-start
        // .desc-fade-out-start
        // .banner-fade-in-end 
        // .title-grow-end
        // .desc-fade-in-end

        document.getElementById('rePlay').style.visibility = 'hidden';
        if (muteIsVisible) {
            document.getElementById('volume-unmute').style.visibility = 'visible';
        } else {
            document.getElementById('volume-mute').style.visibility = 'visible';
        }
    }
    const endVideo = () => {
        document.querySelector('.banner').style.animation = 'fadeIn ease-out 0.1s forwards';
        document.querySelector('.banner-title').style.animation = 'grow ease-in-out 1.5s forwards';
        document.querySelector('.banner-description').style.animation = 'fadeIn ease-in 1.5s';

        document.getElementById('rePlay').style.visibility = 'visible';
        document.getElementById('volume-mute').style.visibility = 'hidden';
        document.getElementById('volume-unmute').style.visibility = 'hidden';
    }
    const rePlayVideo = () => {
        playerRef.current.internalPlayer.playVideo();
    }

    //  MORE INFO BUTTON: OPENS MODAL, PAUSES VID & OPENS BACKDROP
    const moreInfoButton = () => {
        setMovieId({ movieID: id })
        dispatch(openModal({ modalState: true, coords: coords }))

        const playtime = Number(playerRef.current.internalPlayer.getCurrentTime());
        setIncrementAmount(playtime)
        dispatch(setTrailerTime({ seconds: addValue }))

        playerRef.current.internalPlayer.pauseVideo();
        document.querySelector('.banner').style.animation = 'fadeIn 0.25s ease-out 0.5s forwards';
        // console.log(playtime);
    }
    // console.log(globalModalState.modalState);

    // if (globalModalState = false) {
    //     playerRef.current.internalPlayer.playVideo();
    //     document.querySelector('.banner').style.animation = 'fadeOut 0.25s ease-out 0.5s';
    // }

    // useEffect(() => {
    //     document.querySelector('.banner').addEventListener('click', unPauseVideo);
    //     // return () => {
    //     //     document.querySelector('banner').removeEventListener('click', unPauseVideo)
    //     // }
    // }, [])

    // CONTROLS YOUTUBE & VISIBILITY
    const opts = {
        playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            disablekb: 1,
            end: 30,
            rel: 0,
            frameborder: '0',
            allowfullscreen: '',
        }
    }
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }

    return (
        <>
            <PlayerStyles modal={globalModalState}>
                <div className='banner-container'>
                    <div
                        className='banner'
                        ref={bannerRef}
                        style={{
                            backgroundImage: `url("${backdrop_path}")`
                        }}
                    >
                    </div>
                    <div className='overlay'>
                        <div className='banner-contents'>
                            <h1
                                className='banner-title'
                                ref={bannerTitleRef}
                            >
                                {title}
                            </h1>
                            <div
                                className='banner-description'
                                ref={bannerDescRef}
                            >
                                <p>{truncate(overview, 150)}</p>
                            </div>
                            <div className='button-container'>
                                <div className='play-button-container'>
                                    <button
                                        className='play-button'
                                        ref={playButtonRef}
                                        onClick={rePlayVideo}
                                    >
                                        <img alt='play' src={play} className='Hawkins-icon' />
                                        <span className='text-play-button'>Play</span>
                                    </button>
                                </div>
                                <button
                                    className='meer-info-button'
                                    ref={moreInfoButtonRef}
                                    onClick={moreInfoButton}
                                >
                                    <img alt='info' src={info} className='Hawkins-icon' />
                                    <span className='text-info-button'>More Info</span>
                                </button>
                            </div>
                        </div>
                        <div className='side-button-container'>
                            <div>
                                <button
                                    id='rePlay'
                                    className="side-button"
                                    onClick={rePlayVideo}
                                >
                                    <img src={replay} alt="replay" className="Hawkins-icon" />
                                </button>
                                <button
                                    id='volume-unmute'
                                    className="side-button"
                                    onClick={unMuteVideo}
                                    style={{ visibility: muteIsVisible ? 'visible' : 'hidden' }}
                                >
                                    <img src={muted} alt="un-muted" className="Hawkins-icon" />
                                </button>
                                <button
                                    id='volume-mute'
                                    className="side-button"
                                    onClick={muteVideo}
                                    style={{ visibility: unMuteIsVisible ? 'visible' : 'hidden' }}
                                >
                                    <img src={volume} alt="muted" className="Hawkins-icon" />
                                </button>
                            </div>
                            <span className="maturity-rating">
                                <span className="maturity-graphic">
                                    {age_certificate}
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="banner-fadeBottom"></div>
                    <YouTube id='youtube' title={title} videoId={trailer} ref={playerRef} opts={opts} onEnd={endVideo} onPlay={playingVideo} onReady={playingVideo} />

                </div>
            </PlayerStyles>
        </>
    )
}
export default Player;

