import React, {Component} from "react";
import school from "../assets/icons/studies.svg"
import work from "../assets/icons/work.svg"

class Resume extends Component{
    render() {
        return(
            <div className="infoContainer">
                <div className="info infoL">
                    <img className={"infoIcon"} src={school} alt="School"/>
                    <h1> School </h1>
                    <ul className="infoList">
                        <li className="infoListItems">Gothenburg University</li>
                        <li className="infoListItems">Chalmers Technical University</li>
                    </ul>
                    <p className={"infoSecond"} style={{marginTop: "10%"}}>Courses:</p>
                    <table className={"infoTable"}>
                        <tr>
                            <th>Field</th>
                            <th>Points</th>
                        </tr>
                        <tr>
                            <td>Mathematics</td>
                            <td>45</td>
                        </tr>
                        <tr>
                            <td>Programming</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Machine Learning</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Bachelor Project</td>
                            <td>15</td>
                        </tr>
                    <div className="infoExtender"> </div>
                    </table>
                </div>
                <div className="info infoR">
                    <img className={"infoIcon"} src={work} alt="Work"/>
                    <h1> Work </h1>
                    <p>Worked within several fields, <br/>mostly in teching.</p>
                    <p className={"infoSecond"} style={{marginTop: "10%"}}>Places i worked:</p>
                    <ul className="infoList">
                        <li className="infoListItems">Gothenburg University</li>
                        <li className="infoListItems">ZoCom</li>
                        <li className="infoListItems">Lexicon</li>
                        <li className="infoListItems">Iss Västtrafik</li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Resume;
