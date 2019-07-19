import React, {Component} from "react";
import "../../assets/css/aboutPage.css";
import {Spring} from "react-spring/renderprops-universal";


class aboutInfo extends Component{
    render() {
        return(
            <Spring
                from={{marginTop: "100%"}}
                to={{marginTop: "3%"}}
                delay={500}>
                {props => (
                    <div style={props} className={"content"}>
                        Hello
                    </div>
                )}
            </Spring>
        );
    }
}

export default aboutInfo;
