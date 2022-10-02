import React, { Component } from 'react';
import styled from "styled-components";
import Carousel from '../Carasouel/Carousel';
import YtCarosuel from "../Yt/YtCarosuel"
const Home = () => {
    return (
        <>
       
        <Carousel></Carousel>
       <Card>
           
           <Image>
               <img src = "/images/img_1.jpeg" alt = "Dr. Manoj Tiwari"></img>
           </Image>
            <Description>
                <h1>डॉ मनोज तिवारी</h1>
                <p>
                                    लेखक परिचय –
                    नाम :      डा. मनोज तिवारी ( कवि  व  समीक्षक )

                    जन्म तिथि  : 13 अप्रैल 
                    शिक्षा : एम् . ए.(हिंदी ) जामिया मिल्लिया इस्लामिया , नई दिल्ली
                        पी. एच. डी. विश्व भारती ,शांतिनिकेतन, पश्चिम बंगाल
                    प्रकाशन : 
                    •	मुश्किल है मुट्ठीभर सुख पाना; बतियाती औरतें और अन्य कविताएँ  (काव्य संग्रह ), ‘सौ कदम’  और ‘पंचपल्लव’, कारवां  (साझा काव्य संग्रह), ‘यथार्थ सृजन’(साझा लघुकथा संग्रह ), 
                    •	संपादन : ‘कहानी की मौत’- सुरेन्द्रनाथ मल्होत्रा कहानी संग्रह ,सुरेन्द्रनाथ मल्होत्रा की प्रतिनिधि कहानियाँ, सर्वभाषा (त्रैमासिक पत्रिका ) सह संपादक  
                    •	शमशेर की कविता (आलोचनात्मक पुस्तक )
                    •	   ‘हिन्दी साहित्य में बिहार का योगदान’ में सह लेखक  ,संपादक – प्रोफ़ेसर लक्ष्मण प्रसाद सिन्हा 
                    •	संप्रति :  अध्यापन  
                    <br></br>
                    ई- मेल: hindi.manoj13@gmail.com
                </p>
            </Description>
            
       </Card>
       <YtCarosuel></YtCarosuel>
       </>
    );
}

const Card = styled.div`
    box-shadow: 0px 4px 8px 0 rgb(0 0 0 / 20%);
    -webkit-transition: 0.3s;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    position: absolute;
    margin-top: 30px;
    padding: 18px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 87vw;
    margin-left: 6vw;
    margin-top: 113px;

   
`

const Image = styled.div`

`

const Description = styled.div`
    margin-left: 30px;
    h1{
        font-weight: bolder;
        font-size: 1.5 rem;
        margin-bottom: 30px;
        font-family: 'Ephesis', cursive;

    }
     p {
        font-size: 16px;
        color: #000;
        line-height: 32px;
        font-family: latoxregular,NotoNastaliqUrdu,NotoDevanagari!important;
        margin-bottom: 24px;
        font-weight: 900;
        text-align: left!important;
        font-family: 'Teko', sans-serif;
    }
`

export default Home;