import React, {Component} from "react";
import {Spring} from "react-spring/renderprops-universal";
import * as easings from 'd3-ease'
import Project from "./Project";
import twitter from "../../assets/img/twitter.png"
import fingertime from "../../assets/img/fingerTime.png"

class ProjectContainer extends Component{
    render() {
        return(
            <Spring
                from={{marginTop: "100vh"}}
                to={{marginTop: "5vh"}}
                delay={3000}
                config={{duration: 2000, easing: easings.easeExp}}>
                {props => (
                    <div style={props} className={"content"}>
                        <Project
                            link={"https://github.com/edsimon/TwitterStreams-sentimental-value-live-plotted-on-map"}
                            header={"Twitter streams"}
                            modalInfo={"So in this project I have been doing som explorations in the tweepy library. I have been trying to map the twitter feeds på location and got some pretty good results in my opinion."}
                            image={twitter}/>
                        <Project
                            link={"https://github.com/edsimon/HangTime"}
                            header={"Training app"}
                            modalInfo={"Made a app to simplify my training in the climbing gym. Makes it possible to create sessions and look back at some statistics."}
                            image={fingertime}/>
                    </div>
                )}
            </Spring>
        );
    }
}

export default ProjectContainer;