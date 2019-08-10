import React, {Component} from "react";
import github from "../assets/icons/github.svg"
import facebook from "../assets/icons/facebook.svg"
import linkedin from "../assets/icons/linkedin.svg"

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="intro">
                    <h1 className="introduction introHeader">

                    </h1>
                    <div className="iconButtons">
                        <img className={"iconButton"} src={github} alt="github"/>
                        <img className={"iconButton"} src={linkedin} alt="linkedIn"/>
                        <img className={"iconButton"} src={facebook} alt="facebook"/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;
