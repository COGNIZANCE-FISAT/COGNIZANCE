import "./Home.css";
import React from "react";
import VideoPlayer from 'react-video-js-player';
import fisat from './fisat.png';
import COG from "./Cog.mp4";

const Home =() =>{
    const videoSrc = COG;
    const poster = fisat;
    return (
        <>
        <div className="homepage-image">
        <br/>
    </div>
    <center>
    <VideoPlayer src={videoSrc} poster ={poster} width="980" height="600" autoplay/>
    </center>
    </>
    )
}
export default Home;