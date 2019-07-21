import React, {Component} from "react"
import Background from "../backgroundComponent/Background";
import Menu from "../menuComponent/Menu";
import ProjectContainer from "../projectsComponent/ProjectContainer";
import "../../assets/css/projectPage.css";

var start = "0,0 70,0 60,40 50,60 40,100 0,100",
    end   = "0,0 25,0 20,20 20,80 15,100 0,100";

class ProjectPage extends Component{
    constructor(props) {
        super(props);
        this.props.history.push('/');
        this.props.history.push(this.props.match.url);
    }

    render() {
        return (
            <div className={"projectPage"}>
                <Background start={start} end={end} delay={0}/>
                <Menu header={"Projects"} thisSite={"/projects"}/>
                <ProjectContainer/>

            </div>
        );
    }
}

export default ProjectPage;
