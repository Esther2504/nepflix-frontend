import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import YouTube from 'react-youtube';

// CSS & BUTTONS
import { PlayerStyles } from './BigModalPlayer.style';

import play from '../../assets/play-button.svg';
import volume from '../../assets/volume.svg';
import muted from '../../assets/muted.svg';
// import { setTrailerTime } from '../../reducers/trailerReducer';
import { useSearchParams } from 'react-router-dom';

function BigModalPlayer(props) {
    const { overview, backdrop_path, trailer, title, id } = useSelector(state => state.netflix.browse[1])
    console.log(id)

    // const seconds = useSelector((state) => state.trailer.seconds)

    const dispatch = useDispatch();
    // REF
    const modalPlayerRef = useRef(null);
    const bannerRef = useRef(null);
    const bannerTitleRef = useRef(null);
    const bannerDescRef = useRef(null);
    const playButtonRef = useRef(null);

    // VOLUME STATE
    const [muteIsVisible, setMuteIsVisible] = useState(true);
    const [unMuteIsVisible, setUnMuteIsVisible] = useState(false);

    // ANIMATION
    const [isPlaying, setIsplaying] = useState(false)

    // MODAL STATE
    const [movieID, setMovieID] = useSearchParams();
    const globalModalState = useSelector((state) => state.modal.modalState)

    const muteVideo = () => {
        modalPlayerRef.current.internalPlayer.mute();
        setUnMuteIsVisible(current => !current);
        setMuteIsVisible(current => !current);
    }
    const unMuteVideo = () => {
        modalPlayerRef.current.internalPlayer.unMute();
        setMuteIsVisible(current => !current);
        setUnMuteIsVisible(current => !current);
    }



    // ON TRAILER PLAY/END
    const playingVideo = () => {
        document.querySelector('.bigmodalbanner').style.animation = 'fadeOut .25s ease-out 0.5s forwards';
        document.querySelector('.bigmodalbanner-title').style.animation = 'shrink .5s ease-in-out 5s forwards';
        document.querySelector('.bigmodalbanner-description').style.animation = 'fadeOut .25s ease-out 5s forwards';

        document.getElementById('rePlay').style.visibility = 'hidden';
        if (muteIsVisible) {
            document.getElementById('volume-unmute').style.visibility = 'visible';
        } else {
            document.getElementById('volume-mute').style.visibility = 'visible';
        }
    }
    const endVideo = () => {
        document.querySelector('.bigmodalbanner').style.animation = 'fadeIn ease-out 0.1s forwards';
        document.querySelector('.bigmodalbanner-title').style.animation = 'grow ease-in-out 1.5s forwards';
        document.querySelector('.bigmodalbanner-description').style.animation = 'fadeIn ease-in 1.5s';

        document.getElementById('rePlay').style.visibility = 'visible';
        document.getElementById('volume-mute').style.visibility = 'hidden';
        document.getElementById('volume-unmute').style.visibility = 'hidden';
    }

    const rePlayVideo = () => {
        modalPlayerRef.current.internalPlayer.playVideo();
    }

    // CONTROLS YOUTUBE & VISIBILITY
    const opts = {
        playerVars: {
            start: 10,
            autoplay: 1,
            mute: 1,
            controls: 0,
            disablekb: 1,
            end: 60,
            rel: 0,
            frameborder: '0',
            allowfullscreen: '',
        }
    }
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }

    const modalTrailer = props ? props.data.trailer : trailer;



    return (
        <>
            <PlayerStyles modal={globalModalState}>
                <div className='banner-container'>
                    <div
                        className='bigmodalbanner'
                        ref={bannerRef}
                        style={{
                            backgroundImage: `url("${backdrop_path}")`
                        }}
                    >
                    </div>
                    <div className='overlay'>
                        <div className='banner-contents'>
                            <h1
                                className='bigmodalbanner-title'
                                ref={bannerTitleRef}
                            >
                                {title}
                            </h1>
                            <div
                                className='bigmodalbanner-description'
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
                            </div>
                        </div>
                        <div className='side-button-container'>
                            <div>
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
                        </div>
                    </div>
                    <div className="banner-fadeBottom"></div>
                    <YouTube id='youtube' title={title} videoId={modalTrailer} ref={modalPlayerRef} opts={opts} onEnd={endVideo} onPlay={playingVideo} onReady={playingVideo} />
                </div>
            </PlayerStyles>
        </>
    )
}
export default BigModalPlayer;

