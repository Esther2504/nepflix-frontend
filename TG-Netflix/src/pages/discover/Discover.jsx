import React, { useEffect, useState, useRef } from 'react';
import YouTube from 'react-youtube';
// import { connect } from 'react-redux';

// CSS & BUTTONS
import { DiscoverStyles } from './DiscoverStyles';
import play from '../assets/play-button.svg';
import info from '../assets/info.svg';
import replay from '../assets/replay.svg';
import volume from '../assets/volume.svg';
import muted from '../assets/muted.svg';

function Discover() {
    const [muteIsVisible, setMuteIsVisible] = useState(false);
    const [unMuteIsVisible, setUnMuteIsVisible] = useState(true);

    // LOADS RANDOM TOP20 
    // useEffect(() => {
    //     async function fetchData() {
    //         const request = await instance.get(requests.fetchNetflixOriginals);

    //         setShow(
    //             request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
    //         );
    //     }

    //     fetchData();
    // }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }

    // CONTROLS YOUTUBE & VISIBILITY
    const playerRef = useRef(null);
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
    const rePlayVideo = () => {
        playerRef.current.internalPlayer.playVideo();
        document.querySelector('.banner').style.animation = 'none';
        document.querySelector('.banner').offsetWidth;
        document.querySelector('.banner').style.animation = '';
    }
    const opts = {
        playerVars: {
            width: '560',
            height: '315',
            autoplay: 1,
            mute: 1,
            controls: 0,
            disablekb: 1,
            end: 16,
            rel: 0,
            frameborder: '0',
            allowfullscreen: '',
        }
    }

    // BUTTONS STATE
    const removeVolume = () => {
        document.getElementById('rePlay').style.visibility = 'visible';
        document.getElementById('volume-mute').style.visibility = 'hidden';
        document.getElementById('volume-unmute').style.visibility = 'hidden';
    }
    const addVolume = () => {
        document.getElementById('rePlay').style.visibility = 'hidden';
        document.getElementById('volume-unmute').style.visibility = 'visible';
    }



    // FAKE INFO
    const title = 'Bullet Train';
    const logo = 'https://images.fanart.tv/fanart/bullet-train-622f4573a070d.png';
    const trailer = '0IOsk2Vlc4o';
    const backdrop_path = 'y2Ca1neKke2mGPMaHzlCNDVZqsK.jpg'
    const background_img = `url('https://image.tmdb.org/t/p/original/${backdrop_path}')`;
    const description = "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.";


    return (
        <>
            <DiscoverStyles>
                <div className='banner-container'>
                    <div className='banner'
                        style={{
                            backgroundImage: background_img
                        }}
                    >
                    </div>
                    <div className='overlay'>
                        <div className='banner-contents'>
                            <h1 className='banner-title'>
                                <img src={logo} />
                            </h1>
                            <div className='banner-description'>
                                <p>{truncate(description, 150)}</p>
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
                            <div>
                                <button
                                    id='rePlay'
                                    className="side-button"
                                    onClick={rePlayVideo}
                                >
                                    <img src={replay} alt="replay" className="Hawkins-icon" />
                                </button>
                                <button
                                    id='volume-mute'
                                    className="side-button"
                                    onClick={muteVideo}
                                    style={{ visibility: muteIsVisible ? 'visible' : 'hidden' }}
                                >
                                    <img src={muted} alt="muted" className="Hawkins-icon" />
                                </button>
                                <button
                                    id='volume-unmute'
                                    className="side-button"
                                    onClick={unMuteVideo}
                                    style={{ visibility: unMuteIsVisible ? 'visible' : 'hidden' }}
                                >
                                    <img src={volume} alt="un-muted" className="Hawkins-icon" />
                                </button>
                            </div>
                            <span className="maturity-rating">
                                <span className="maturity-graphic">
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="banner-fadeBottom"></div>
                    <YouTube id='youtube' title={title} videoId={trailer} ref={playerRef} opts={opts} onEnd={removeVolume} onPlay={addVolume} />

                </div>
            </DiscoverStyles>
        </>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         show: state.show,
//         trailer: state.trailer,
//         playTime: state.playTime
//     }
// }

// export default connect(mapStateToProps, {})(Banner);
export default Discover;