import React, {Component} from "react";
import {Spring} from "react-spring/renderprops-universal";
import * as easings from 'd3-ease'

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
                        Hello
                    </div>
                )}
            </Spring>
        );
    }
}

export default ProjectContainer;