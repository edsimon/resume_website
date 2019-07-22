import React, {Component} from "react";
import {Spring} from "react-spring/renderprops-universal";
import { AwesomeButtonSocial } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";


class Project extends Component{
    constructor(props){
        super(props);
        this.state = {
            opacity: 1,
            marginTop: "0px",
            pOp: 0,
            delay: 0,
            stroke: 100,
        }
    }

    setHover = () => {
        this.setState({
            opacity: .1,
            marginTop: "-" + this.props.height,
            pOp: 1,
            delay: 500,
            stroke: 0
        });
    }
    cancelHover = () => {
        this.setState({
            opacity: 1,
            marginTop: "0px",
            pOp: 0,
            delay: 0,
            stroke: 100
        });
    }

    render() {

        return(
            <Spring
                to={{opacity: this.state.opacity,
                     marginTop: this.state.marginTop}}
            >
                {props => (
                    <div className={"projectContainer"}
                         onMouseOver={this.setHover}
                         onMouseLeave={this.cancelHover}>
                        <div className="imageContainer"
                             style={{height: this.props.height}}>
                            <img className={"projectImage"}
                                 alt={"random"}
                                 src={this.props.image}
                                 style={{ opacity: props.opacity}}
                            />
                        </div>
                        <div className="projectHeaderContainer">
                            <h2 style={{marginTop: props.marginTop}}
                                className={"projectHeader"}>
                                {this.props.header}
                            </h2>
                        </div>
                        <Spring
                            to={{pOp: this.state.pOp}}
                            delay={this.state.delay}>
                            {props => (
                                <div width="100%" height="100%">
                                    <p style={{opacity: props.pOp}} className={"projectInformation"}>{this.props.modalInfo}</p>
                                    <div style={{opacity: props.pOp}} className="projectButtons">
                                        <AwesomeButtonSocial
                                                             type="github"
                                                             href={this.props.link}>
                                            Check it out
                                        </AwesomeButtonSocial>
                                    </div>
                                </div>
                            )}
                        </Spring>
                        <Spring
                            to={{x: this.state.stroke}}
                            delay={this.state.delay}
                            config={{duration: this.state.delay}}>
                            {props => (
                                <svg className="projectLine" viewBox="0 0 100 1">
                                    <line x1="0" y1="0" x2="100" y2="00" stroke="#9a0200" strokeWidth="2px" strokeDasharray={100} strokeDashoffset={props.x}/>
                                </svg>
                            )}
                        </Spring>

                    </div>
                    )}
            </Spring>
        );
    }
}

export default Project;

/*
<button className="projectButton github">Github</button>
 */