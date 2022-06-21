import React, { Component, useState,useEffect } from 'react';
import { Background, Button, Main, Time, TimerMain ,ButtonMain,Icon,Nav,IconMain,Weather, VolumeMain} from './LandingPage.elements';
import ForestVideo2 from '../../src/Forest2.mp4'
import Sea1 from '../../src/sea1.mp4'
import Rain from '../../src/Rain.mp4'
import Night from '../../src/night1.mp4'
import {BsGithub,BsYoutube,BsLinkedin,BsFillCloudRainFill,BsFillVolumeUpFill,BsFillVolumeDownFill,BsPlay} from 'react-icons/bs'
import { BiWater } from 'react-icons/bi'
import {GiForestCamp,GiWindmill,GiNightSky} from 'react-icons/gi'
import { IconContext } from 'react-icons'
import './style.css'
import NatureSound from '../../src/NatureSound.mp3'
import RainSound from '../../src/rain.mp3'
import NightSound from '../../src/night.mp3'
import SeaSound from '../../src/sea.mp3'
import ReactPlayer from 'react-player'


const LandingPage = () => {
    const [second, setSecond] = useState(0)
    const [minute, setminute] = useState(25)
    const [start, setStart] = useState(false)
    const [autoplay, setAutoplay] = useState(false)
    const [volume, setvolume] = useState(0.75)
    const [BackgroundVid, setBackgroundVid] = useState(ForestVideo2)
    const [SoundVid, setSoundVid] = useState(NatureSound)
    

    //volume controls 
    const IncreaseVolume = () => {
        setvolume(volume + 0.1)
        if(volume >  0.9 ){
            setvolume(0.9)
        }
    }
    
    console.log(volume)
    const DecreaseVolume = () => {
        setvolume(volume - 0.1)
        if(volume < 0.1 ){
            setvolume(0.1)
        }
    }

   
    // timer 
    useEffect(() => {
        let Timer
        if(start){
        Timer = setInterval(() => {
        setSecond(prevsecond => prevsecond - 1 )
      },1000);
    }

    else{
        clearInterval(Timer)
    }

      return () => clearInterval(Timer);
    }, [start]);

    if(second === 0){
        setminute(minute - 1)
        setSecond(59)
    }
    if(minute === 0){
        setStart(false)
    }
    
    const Restart = () => {
        setminute(25)
        setSecond(0)
        setStart(false)
    }

    //Background Video
    const SetToSea = () => {
        setBackgroundVid(Sea1)
        setSoundVid(SeaSound)
        {console.log(BackgroundVid)}
    }
    const SetToForest = () => {
        setBackgroundVid(ForestVideo2)
        setSoundVid(NatureSound)
        {console.log(BackgroundVid)}
    }
    const SetToNight = () => {
        setBackgroundVid(Night)
        setSoundVid(NightSound)
        {console.log(BackgroundVid)}
    }
    const SetToRain = () => {
        setBackgroundVid(Rain)
        setSoundVid(RainSound)
        {console.log(BackgroundVid)}
    }
  
    return(
        <>
        <IconContext.Provider value={{ className: 'IconContext' }}>
        <Main className='Main'>
            <Background  autoPlay loop playsInline muted key={BackgroundVid}>
                <source src={BackgroundVid} type="video/mp4"></source>
            </Background>
            <Nav>
                <IconMain>
                    <Icon href='https://www.youtube.com/channel/UC_5TOI4WIBEpmAMVCeNqqxw' target='_blank'><BsYoutube/></Icon>
                    <Icon href='https://github.com/mumin7410' target='_blank'><BsGithub/></Icon>
                    <Icon  href='https://www.linkedin.com/in/sittisak-rodpraya-4899481a0/' aria-label='Linkedin' target='_blank' ><BsLinkedin/></Icon>
                </IconMain>
            </Nav>
            
            <ReactPlayer url={SoundVid}  playing = {autoplay} volume = {volume}/>

            <TimerMain className='TimerMain'>
                <Weather>
                    
                    <Icon><GiForestCamp onClick={SetToForest} /></Icon>
                    <Icon><BiWater onClick={SetToSea}/></Icon>
                    <Icon><BsFillCloudRainFill onClick={SetToRain} /></Icon>
                    <Icon><GiNightSky onClick={SetToNight} /></Icon>
                </Weather>
                <Time className='Time'>{minute < 10 ? '0' : ''}{minute}:{second < 10 ? '0' : ''}{second}</Time>
                <ButtonMain>
                    <Button onClick={() => setStart(!start)}>start/pause</Button>
                    <Button style={{backgroundColor:'#D23636'}} onClick={Restart} >reset</Button>
                </ButtonMain>
                <VolumeMain>
                <Icon><BsFillVolumeDownFill onClick = {() =>  setvolume(DecreaseVolume)}/></Icon>
                <Icon><BsPlay onClick = {() =>  setAutoplay(!autoplay)}/></Icon>
                <Icon><BsFillVolumeUpFill onClick = {() =>  setvolume(IncreaseVolume)}/></Icon>
                </VolumeMain>
            </TimerMain>
        </Main>
        </IconContext.Provider>
        </>
    )
}

export default LandingPage;