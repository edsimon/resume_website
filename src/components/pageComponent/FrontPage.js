import React, {Component} from "react"
import Header from "../headerComponent/Header";
import LinkCard from "../areaComponent/LinkCard";
import "../../assets/css/frontPage.css";
import about from "../../assets/img/about_me.jpg"
import projects from "../../assets/img/projects.jpg"
import resume from "../../assets/img/resume.jpg"
import Background from "../backgroundComponent/Background";

let instance = null;

class FrontPage extends Component{
    constructor(props){
        super(props);
        if (!instance){
            this.state = {
                start: "0,0 100,0 100,30 100,70 100,100, 0,100",
                end:   "0,0 70,0 60,40 50,60 40,100 0,100",
                delay: 2000,
                firstTime: true
            };
            instance = true;
            console.log("first time")
        }

        else{
            this.state = {
                start: "0,0 25,0 20,20 20,80 15,100 0,100",
                end:   "0,0 70,0 60,40 50,60 40,100 0,100",
                delay: 0,
            }
        }
    }

    render(){
        return(
            <div className={"frontPage"} style={style.body}>
                <Background start={this.state.start} end={this.state.end} delay={this.state.delay}/>
                <Header delay={this.state.delay + 1000}/>
                <div className="linkCardContainer" style={style.linkCardContainer}>
                    <LinkCard delay={this.state.delay + 1400} image={about} title={"about"} to={'/home/about'}/>
                    <LinkCard delay={this.state.delay + 1600} image={projects} title={"projects"} to={'/home/projects'}/>
                    <LinkCard delay={this.state.delay + 1800} image={resume} title={"resume"} to={'/home/resume'}/>
                </div>
            </div>
        );
    }
}

const style = {
    body: {
        width:  "100vw",
        height: "100vh"
    },
    linkCardContainer: {
        width:  "26%",
        height: "90%",
        marginTop: "5%",
        float:  "right"
    }
};
export default FrontPage;

/*
<LinkCard image={about} title={"about"}/>
<LinkCard image={projects} title={"projects"}/>
<LinkCard image={resume} title={"resume"}/>
 */
