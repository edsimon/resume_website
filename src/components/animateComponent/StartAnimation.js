import React, {Component} from "react";
import Background from "../backgroundComponent/Background";
import Header from "../headerComponent/Header";
import {Spring, config} from "react-spring/renderprops"
import MediaCard from "../areaComponent/MediaCard";
import about_me from "../../assets/img/about_me.jpg"
import projects from "../../assets/img/projects.jpg"
import resume from "../../assets/img/resume.jpg"

var start = "0,0 100,0 100,30 100,70 100,100, 0,100",
    end   = "0,0 70,0 60,40 50,60 40,100 0,100";

class StartAnimation extends Component{
    constructor(props){
        super(props);
        this.state =({
            s: start,
            e: end
        });
    }

    buttonClicked = () => {
        this.setState({
            s: end,
            e: start
        })
        console.log("button pressed")
    };

    render(){
        console.log("Another render called");
        return(
            <div className="backgroundContainer">
                <button onClick={this.buttonClicked}>
                    Hello
                </button>

                <Background start={this.state.s} end={this.state.e}/>

                <Spring
                    from={{ opacity: 0 }}
                    to={{opacity: 1}}
                    delay={1000}>
                    {props => (
                        <div className="aniHeader" style={props}>
                            <Header/>
                        </div>
                    )}
                </Spring>

                <Spring
                    from={{ opacity: 0,
                            marginRight: -500}}
                    to={{opacity: 1,
                        marginRight: 0}}
                    delay={2000}
                    config={config.gentle}>
                    {props => (
                        <div className="cardsContainer" style={props}>
                            <MediaCard header={"about me"} image={about_me}/>
                            <MediaCard header={"projects"} image={projects}/>
                            <MediaCard header={"resume"} image={resume}/>
                        </div>
                    )}
                </Spring>




            </div>
        );
    }
}

export default StartAnimation;