import React, { useEffect, useState, useRef } from 'react';
import YouTube from 'react-youtube';
import instance from '../apis/tmdb';
import requests from '../apis/requests';
import { connect } from 'react-redux';

// CSS & BUTTONS
import { BannerStyles } from './styles/BannerStyles'
import play from '../assets/play-button.svg';
import info from '../assets/info.svg';
import replay from '../assets/replay.svg';
import volume from '../assets/volume.svg';
import muted from '../assets/muted.svg';

function Banner() {
    const [show, setShow] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(requests.fetchNetflixOriginals);

            setShow(
                request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
            );
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }

    // CONTROLS YOUTUBE 
    const playerRef = useRef(null);
    const muteVideo = () => {
        playerRef.current.internalPlayer.mute();
    }
    const unMuteVideo = () => {
        playerRef.current.internalPlayer.unMute();
    }
    const rePlayVideo = () => {
        playerRef.current.internalPlayer.playVideo();

    }
    const opts = {
        playerVars: {
            width: '150%',
            height: '150%',
            autoplay: 1,
            mute: 1,
            controls: 0,
            disablekb: 1,
            end: 9,
            rel: 0,
        }
    }

    return (
        <>
            <BannerStyles>
                <div className='banner-container'>
                    <div className='banner'
                        style={{
                            backgroundImage: `url('https://image.tmdb.org/t/p/original/${show?.backdrop_path}')`
                        }}
                    >
                    </div>
                    <div className='overlay'>
                        <div className='banner-contents'>
                            <h1 className='banner-title'>
                                {show?.title || show?.name || show?.original_name}
                                {/* {logo} replace show?.title || show?.name || show?.original_name*/}
                            </h1>
                            <div className='banner-description'>
                                <p>{truncate(show?.overview, 150)}</p>
                                {/* {description} replace show?.overview*/}
                            </div>
                            <div className='button-container'>
                                <div className='play-button-container'>
                                    <button className='play-button'>
                                        <img alt='play' src={play} className='Hawkins-icon' />
                                        <span className='text-play-button'>Play</span>
                                    </button>
                                </div>
                                <button className='meer-info-button'>
                                    <img alt='info' src={info} className='Hawkins-icon' />
                                    <span className='text-info-button'>More Info</span>
                                </button>
                            </div>
                        </div>
                        <div className='side-button-container'>
                            <button className="side-button" onClick={rePlayVideo}>
                                <img src={replay} alt="replay" className="Hawkins-icon" />
                            </button>
                            <button className="side-button" onClick={muteVideo}>
                                <img src={muted} alt="muted" className="Hawkins-icon" />
                            </button>
                            <button className="side-button" onClick={unMuteVideo}>
                                <img src={volume} alt="un-muted" className="Hawkins-icon" />
                            </button>
                            <div></div>
                            <span className="maturity-rating">
                                <span className="maturity-graphic">
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="banner-fadeBottom"></div>
                    <YouTube title='test vid' videoId='4-YNrsiWikM' ref={playerRef} opts={opts} />
                    {/* <YouTube title={title} videoId={trailer} ref={playerRef} opts={opts} /> */}

                </div>
            </BannerStyles>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        show: state.show,
        trailer: state.trailer,
        playTime: state.playTime
    }
}
export default connect(mapStateToProps, {})(Banner);