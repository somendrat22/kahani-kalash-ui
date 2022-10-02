import {Carousel} from "react-carousel-minimal";

function CarouselApp(){
    const data = [
        {
            image : "/images/kv1.jpeg",
            caption : "पिघलती बर्फ़ पुस्तक के अवसर पर"
        },
        {
            image : "/images/kv3.jpeg",
            caption : "कवि सम्मेलन"
        },
        {
            image : "/images/kv4.jpeg",
            caption : "आनंद शेष के लोकार्पण पर"
        },
        {
            image : "/images/kv5.jpeg",
            caption : "वरिष्ठ साथी लेखकों के साथ"
        },
        {
            image : "/images/kv6.jpeg",
            caption : "कार्यशाला में"
        },
        {
            image : "/images/kv7.jpeg",
            caption : "पुस्तक समीक्षा"
        },
        {
            image : "/images/kv8.jpeg",
            caption : "वरिष्ठ लेखक अशोक लव जी को सम्मानित करते हुए"
        },
        {
            image : "/images/kv9.jpeg",
            caption : "वरिष्ठ लेखिकाद्वै चंद्रकांता जी एवं मृदुला गर्ग जी के साथ"
        },
        {
            image : "/images/kv10.jpeg",
            caption : "कार्यशाला में"
        },
        {
            image : "/images/kv11.jpeg",
            caption : "प्रिय और आदरणीय भाई श्री राजकुमार तिवारी जी साथ"
        },
        
    ]

    const captionStyle = {
        fontWeight : "bold",
        fontSize : "2em",
    }

    const slideNumberStyle = {
        fontSize : "20px",
        fontWeight : "bold",
    }

    return (
        <div className = "carousel-container">
            <div style = {{textAlign : "center"}}>
                
                <div style = {{padding : "0 20px"}}>
                    <Carousel 
                        data = {data}
                        time = {4000}
                        width = "850px"
                        height = "500px"
                        captionStyle = {captionStyle}
                        radius = "10px"
                        slideNumber = {true}
                        slideNumberStyle = {slideNumberStyle}
                        captionPosition = "bottom"
                        automatic = {true}
                        dots = {true}
                        pauseIconColor  = "white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        style={{
                        textAlign: "center",
                        maxWidth: "850px",
                        maxHeight: "700px",
                        margin: "40px auto",
                        }}
                    >
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default CarouselApp;