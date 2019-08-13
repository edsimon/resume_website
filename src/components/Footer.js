import React, {Component} from "react";
import github from "../assets/icons/github.svg"
import facebook from "../assets/icons/facebook.svg"
import linkedin from "../assets/icons/linkedin.svg"

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="introFooter">
                    <h1 className="introduction introHeader">
                        Bye!
                    </h1>
                    <div className="iconButtons">
                        <a href="https://github.com/edsimon" className="iconButton">
                            <img style={{width: "100%", height: "100%"}} src={github} alt="github"/>
                        </a>
                        <a href="https://www.linkedin.com/in/simon-edvardsson-857536153/" className="iconButton">
                            <img style={{width: "100%", height: "100%"}} src={linkedin} alt="linkedIn"/>
                        </a>
                        <a href="https://www.facebook.com/sursimon" className="iconButton">
                            <img style={{width: "100%", height: "100%"}} src={facebook} alt="facebook"/>
                        </a>

                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;
