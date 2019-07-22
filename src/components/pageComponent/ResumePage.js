import React, {Component} from "react"
import cv from "../../assets/cv.jpg"
import {Spring} from "react-spring/renderprops-universal";
import * as easings from "d3-ease";
import Background from "../backgroundComponent/Background";

var start = "0,0 70,0 60,40 50,60 40,100 0,100",
    end   = "0,0 25,0 20,20 20,80 15,100 0,100";


class ResumePage extends Component{
    constructor(props) {
        super(props);
        this.props.history.push('/');
        this.props.history.push(this.props.match.url);
    }

    render() {
        return (
            <div>
                <Background start={start} end={end} delay={0}/>
                <Spring
                    from={{opacity: 0}}
                    to={{opacity: 1}}
                    delay={1500}>
                    {props => (
                        <h1 style={props} className="menuHeader">
                            {"Resume"}
                        </h1>
                    )}
                </Spring>
                <Spring
                    from={{marginTop: "100vh"}}
                    to={{marginTop: "2vh"}}
                    delay={1500}
                    config={{duration: 2000, easing: easings.easeExp}}>
                    {props => (
                        <img className={"resume"}
                             style={props}
                             src={cv}
                             alt={"resume"}/>
                    )}
                </Spring>
            </div>
        );
    }
}

export default ResumePage;

