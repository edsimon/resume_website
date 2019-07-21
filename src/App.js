import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./assets/css/style.css"
import FrontPage from "./components/pageComponent/FrontPage";
import AboutPage from "./components/pageComponent/AboutPage";
import ResumePage from "./components/pageComponent/ResumePage";
import ProjectPage from "./components/pageComponent/ProjectsPage";



class App extends Component {
    render() {
        return(
            <Router basename={"/resume_website"}>
                <Route exact path="/" component={FrontPage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/resume" component={ResumePage}/>
                <Route path="/projects" component={ProjectPage}/>
            </Router>
        );
    }
}

export default App;

/*
<Background ref={instance => { this.Background = instance}}/>
<button onClick={() => { this.Background.update()}}>START</button>

*/