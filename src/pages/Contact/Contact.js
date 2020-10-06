import React from 'react';
import { Navbar} from "../../components";
import Video from '../../videos/video.mp4';
import {HeroContent, VideoBg, HeroBg, HeroContainer, HeroH1, HeroP  } from './Contact.elements';



function Contact() {
    return (
      <div>
        <Navbar />
        <HeroContainer>
          <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
          </HeroBg>
          <HeroContent>
            <HeroH1>Mohamed Aymen TLILI</HeroH1>
            <br />
            <HeroP>email : aymentli@gmail.com </HeroP>
            <br /> <HeroP> telephone: +33782323281</HeroP>
          </HeroContent>
        </HeroContainer>
      </div>
    );
}

export default Contact
