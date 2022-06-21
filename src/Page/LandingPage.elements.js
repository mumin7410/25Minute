import styled from 'styled-components'
import Forest from '../../src/forest.jpg'


export const Main = styled.div`
display:flex ;
max-width:100vw ;
max-height:100vh ;
`


export const Background = styled.video`
    width:100vw ;
    height:100vh ;
    background-repeat:no-repeat ;
    background-position: center;
    object-fit: cover;
    position:fixed ;
    z-index:-100 ;
    opacity: 0.9;
    transition:0.2 ;
`

export const TimerMain = styled.div`
    width:24vw ;
    height:16vw ;
    display:flex ;
    /* background-color:white ; */
    text-align:center ;
    align-items:center ;
    justify-content:center ;
    position:absolute ;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display:flex ;
    flex-direction:column ;
    padding:50px ;
    color:#ECECEC ;
`
export const Weather = styled.div`
    display:flex ;
`

export const Time = styled.div`
    font-size:10em ;
    color:#ECECEC ;
    
    @media (max-width:960px){
        font-size: 9em;
    }
`
export const Button = styled.button`
    padding:13px 14px ;
    font-size:1em;
    border-radius:25px ;
    margin:0 5px ;
    background-color: #DD8B79 ;
    border:0px solid ;
    color:#ECECEC ;
    font-family: 'Roboto Condensed', sans-serif;
    cursor: pointer;
    transition: 0.2s;
    &:hover{
        font-size:1.1em ;
    }
    @media (max-width:960px){
        padding:10px 16px ;
        font-size:1.1em;
        margin:0 8px;
        &:hover{
        font-size:1.4em ;
    }

    }
`

export const ButtonMain = styled.div`
    display:flex ;
    width:100% ;
    justify-content:center ;
    color:#ECECEC ;
    
`

export const Nav = styled.div`
    display:flex ;
    width:100% ;
    justify-content:right ;
`

export const VolumeMain = styled.div`
    display:flex ;
    margin-top:30px ;
`

export const Icon = styled.a`
    margin:0 13px ;
    /* background-color:#ECECEC ; */
    cursor: pointer;

    @media(max-width:960px){
        margin:0 20px ;
    }
`
export const IconMain = styled.div`
    display:flex ;
    position:absolute ;
    right:20% ;
    top:5%;
`

export const ButtonSet = styled.div`
    display:flex ;
`