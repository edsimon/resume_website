import React, {Component} from "react";
import Simon from "../assets/img/Simon_Edvardsson.jpg"

class AboutMe extends Component {
    render() {
        return (
            <div className="aboutMe">
                <div className="imageOfMe">
                    <img src={Simon} alt="Simon Edvardsson" className="image"/>
                </div>
                <div className="aboutBackground">
                    <div className="aboutContainer">
                        <h1 className="aboutHeader">
                            Hello!
                        </h1>
                        <p className="aboutInfo">
                            Hej! Jag heter Simon och är nu 28 år och studerande på akademisk nivå. <br/>
                            Hackathon är en nyvunnen stor passion jag funnit och deltagit på en del stora så som DevX-Spotify.<br/>
                            Dock även på mindre företag som Capgemini.<br/>
                            Förutom resor och vänner så tränar jag mycket och har utfört några större motionslopp såsom Vasaloppet och Göteborgsvarvet. <br/>
                            Dom gånger jag får ledig spenderar jag tiden på klättring.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default AboutMe;