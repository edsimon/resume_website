import React, {Component} from "react";
import {Spring} from "react-spring/renderprops-universal";


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
                         style={{height: this.props.totHeight}}
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
                            {springProps => (
                                <div width="100%" height="100%">
                                    <p style={{opacity: springProps.pOp}} className={"projectInformation"}>{this.props.modalInfo}</p>
                                    <a style={{opacity: springProps.pOp}}
                                       className="projectButtons"
                                       href={this.props.link}>
                                        <svg className={"githubButton"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                        <button className="projectButton github">Check it out!</button>
                                    </a>
                                </div>
                            )}
                        </Spring>
                        <Spring
                            to={{x: this.state.stroke}}
                            delay={this.state.delay}
                            config={{duration: this.state.delay}}>
                            {props => (
                                <svg className="projectLine" viewBox="0 0 100 1">
                                    <line x1="0" y1="0" x2="100" y2="00" stroke="#af651b" strokeWidth="2px" strokeDasharray={100} strokeDashoffset={props.x}/>
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

 */