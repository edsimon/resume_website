import React, {Component} from "react";
import Background from "../backgroundComponent/Background";
import "../../assets/css/aboutPage.css";
import AboutInfo from "../aboutPageComponent/AboutInfo";
import Menu from "../menuComponent/Menu";

var start = "0,0 70,0 60,40 50,60 40,100 0,100",
    end   = "0,0 25,0 20,20 20,80 15,100 0,100";

class AboutPage extends Component{
    constructor(props) {
        super(props);
        this.props.history.push('/');
        this.props.history.push(this.props.match.url);
    }

    render() {
        return(
            <div className={"aboutPage"}>
                <Background start={start} end={end} delay={0}/>
                <Menu header={"About me"} thisSite={"/about"}/>
                <AboutInfo/>
            </div>
        );
    }
}

export default AboutPage;

/*
end   = "0,0 100,0 100,20 50,15 0,20 0,0";

 */