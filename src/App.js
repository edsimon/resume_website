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
            <Router>
                <Route exact path="/home" component={FrontPage}/>
                <Route path="/home/about" component={AboutPage}/>
                <Route path="/home/resume" component={ResumePage}/>
                <Route path="/home/projects" component={ProjectPage}/>
            </Router>
        );
    }
}

export default App;

/*
<Background ref={instance => { this.Background = instance}}/>
<button onClick={() => { this.Background.update()}}>START</button>

*/