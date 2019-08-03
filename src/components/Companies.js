import React, {Component} from "react"
import zocom from "../assets/img/ZoCom.png"
import university from "../assets/img/university.jpg"
import lexicon from "../assets/img/Lexicon.gif"
import aw from "../assets/img/aw.svg"

class Companies extends Component {
    render() {
        return (
            <div className="companies">
                <h1>
                    Companies i worked with
                </h1>
                <div className="companyIcons">
                    <a className={"companyIcon"} href={"https://www.gu.se/"}><img src={university} alt="Gothenburg University" className="companyImage gu" /></a>
                    <a className={"companyIcon"} href=""><img src={lexicon} alt="Lexicon" className="companyImage"/></a>
                    <a className={"companyIcon"} href=""><img src={zocom} alt="ZoCom" className={"companyImage zocom"}/></a>
                    <a className={"companyIcon"} href=""><img src={aw} alt="Academic Work" className="companyImage"/></a>
                </div>

            </div>
        );
    }
}
export default Companies