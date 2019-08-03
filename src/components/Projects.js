import React, {Component} from "react"
import StackGrid from "react-stack-grid";
import Project from "./Project";
import twitter from "../assets/img/twitter.jpg";
import fingertime from "../assets/img/fingerTime.jpg";

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
            button: "See all",
            filterSet : new Set(["Java","Python","Machine learning","Application","Swift"]),
            haveFilter : false,
            allItems : ["Java","Python","Machine learning","Application","Swift"]
        }
    }

    render() {
        return (
            <div className="projectHeaderStart">
                <h1 className="projectHeaderStart"> My recent projects</h1>
                <p className={"projectparagraf"}>
                    Things i'm proud of, use filter to choose language or field
                </p>
                <div className="filterProjects">
                    <button onClick={ () => this.manageFilter("Java")} className="filterButton">Java</button>
                    <button className="filterButton">Python</button>
                    <button className="filterButton">IOS</button>
                    <button className="filterButton">Machine Learning</button>
                    <button className="filterButton">Kaggle</button>
                    <button className="seeAll filterButton" onClick={ this.showProjects }>{this.state.button}</button>
                </div>
                {this.getComponents(this.state.filterSet)}
            </div>
        );
    }



    showProjects = () => {
        if (!this.state.show) {
            this.setState({
                show: true,
                button: "Hide all"
            })
        }
        else{
            this.setState({
                show: false,
                button: "See all"
            })
        }
    }

    manageFilter = item => {
        if(!this.state.haveFilter){
            this.setState({
                filterSet: new Set(),
                haveFilter: true
            })
            this.addItem(item)
        }
        else {
            if (this.state.filterSet.has(item)) {
                this.removeItem(item)
            } else {
                this.addItem(item)
            }
        }
    };

    addItem(item) {
        this.setState(({ filterSet }) => ({
            filterSet: new Set(filterSet).add(item)
        }));
    }

    removeItem(item) {
        this.setState(({ filterSet }) => {
            const newChecked = new Set(filterSet);
            newChecked.delete(item);

            return {
                filterSet: newChecked
            };
        });
        if (this.state.filterSet.size === 1){
            this.setState({
                filterSet: new Set(this.state.allItems),
                haveFilter: false
            })
        }
    }

    getComponents = set => {
        if (this.state.show){
            return(
                <div className="pinCont">
                    <StackGrid
                        className={"pintrestView"}
                        columnWidth={300}
                        duration={500}
                        gutterWidth={20}
                        appearDelay={200}
                        gridRef={grid => this.grid = grid}
                    >

                        { set.has("Java") ? <Project
                            height={"300px"}
                            link={"https://github.com/edsimon/TwitterStreams-sentimental-value-live-plotted-on-map"}
                            header={"Twitter streams"}
                            modalInfo={"So in this project I have been doing som explorations in the tweepy library. I have been trying to map the twitter feeds på location and got some pretty good results in my opinion."}
                            image={twitter}/> : null}

                        { set.has("Application") || set.has("Swift") ? <Project
                            height={"200px"}
                            link={"https://github.com/edsimon/HangTime"}
                            header={"Training app"}
                            modalInfo={"Made a app to simplify my training in the climbing gym. Makes it possible to create sessions and look back at some statistics."}
                            image={fingertime}/> : null}

                        { set.has("Python") ? <Project
                            height={"300px"}
                            link={"https://github.com/edsimon/TwitterStreams-sentimental-value-live-plotted-on-map"}
                            header={"Twitter streams"}
                            modalInfo={"So in this project I have been doing som explorations in the tweepy library. I have been trying to map the twitter feeds på location and got some pretty good results in my opinion."}
                            image={twitter}/> : null}

                        { set.has("Machine learning") || set.has("Swift") ? <Project
                            height={"200px"}
                            link={"https://github.com/edsimon/HangTime"}
                            header={"Training app"}
                            modalInfo={"Made a app to simplify my training in the climbing gym. Makes it possible to create sessions and look back at some statistics."}
                            image={fingertime}/> : null}

                        { set.has("Python") ? <Project
                            height={"300px"}
                            link={"https://github.com/edsimon/TwitterStreams-sentimental-value-live-plotted-on-map"}
                            header={"Twitter streams"}
                            modalInfo={"So in this project I have been doing som explorations in the tweepy library. I have been trying to map the twitter feeds på location and got some pretty good results in my opinion."}
                            image={twitter}/> : null}

                        { set.has("Application") || set.has("Swift") ? <Project
                            height={"200px"}
                            link={"https://github.com/edsimon/HangTime"}
                            header={"Training app"}
                            modalInfo={"Made a app to simplify my training in the climbing gym. Makes it possible to create sessions and look back at some statistics."}
                            image={fingertime}/> : null}
                        { set.has("Java") ? <Project
                            height={"300px"}
                            link={"https://github.com/edsimon/TwitterStreams-sentimental-value-live-plotted-on-map"}
                            header={"Twitter streams"}
                            modalInfo={"So in this project I have been doing som explorations in the tweepy library. I have been trying to map the twitter feeds på location and got some pretty good results in my opinion."}
                            image={twitter}/> : null}

                        { set.has("Application") || set.has("Swift") ? <Project
                            height={"200px"}
                            link={"https://github.com/edsimon/HangTime"}
                            header={"Training app"}
                            modalInfo={"Made a app to simplify my training in the climbing gym. Makes it possible to create sessions and look back at some statistics."}
                            image={fingertime}/> : null}

                        { set.has("Python") ? <Project
                            height={"300px"}
                            link={"https://github.com/edsimon/TwitterStreams-sentimental-value-live-plotted-on-map"}
                            header={"Twitter streams"}
                            modalInfo={"So in this project I have been doing som explorations in the tweepy library. I have been trying to map the twitter feeds på location and got some pretty good results in my opinion."}
                            image={twitter}/> : null}

                        { set.has("Machine learning") || set.has("Swift") ? <Project
                            height={"200px"}
                            link={"https://github.com/edsimon/HangTime"}
                            header={"Training app"}
                            modalInfo={"Made a app to simplify my training in the climbing gym. Makes it possible to create sessions and look back at some statistics."}
                            image={fingertime}/> : null}

                        { set.has("Python") ? <Project
                            height={"300px"}
                            link={"https://github.com/edsimon/TwitterStreams-sentimental-value-live-plotted-on-map"}
                            header={"Twitter streams"}
                            modalInfo={"So in this project I have been doing som explorations in the tweepy library. I have been trying to map the twitter feeds på location and got some pretty good results in my opinion."}
                            image={twitter}/> : null}

                        { set.has("Application") || set.has("Swift") ? <Project
                            height={"200px"}
                            link={"https://github.com/edsimon/HangTime"}
                            header={"Training app"}
                            modalInfo={"Made a app to simplify my training in the climbing gym. Makes it possible to create sessions and look back at some statistics."}
                            image={fingertime}/> : null}
                    </StackGrid>
                </div>
            )
        }
        else{
            return (
                <div className="pinCont">
                    <StackGrid
                        className={"pintrestView"}
                        columnWidth={300}
                        duration={500}
                        gutterWidth={20}
                        appearDelay={200}
                        gridRef={grid => this.grid = grid}
                    >
                        <Project
                            height={"300px"}
                            totHeight={"350px"}
                            link={"https://github.com/edsimon/TwitterStreams-sentimental-value-live-plotted-on-map"}
                            header={"Twitter streams"}
                            modalInfo={"So in this project I have been doing som explorations in the tweepy library. I have been trying to map the twitter feeds på location and got some pretty good results in my opinion."}
                            image={twitter}/>
                        <Project
                            height={"200px"}
                            totHeight={"250px"}
                            link={"https://github.com/edsimon/HangTime"}
                            header={"Training app"}
                            modalInfo={"Made a app to simplify my training in the climbing gym. Makes it possible to create sessions and look back at some statistics."}
                            image={fingertime}/>
                        <Project
                            height={"300px"}
                            totHeight={"350px"}
                            link={"https://github.com/edsimon/TwitterStreams-sentimental-value-live-plotted-on-map"}
                            header={"Twitter streams"}
                            modalInfo={"So in this project I have been doing som explorations in the tweepy library. I have been trying to map the twitter feeds på location and got some pretty good results in my opinion."}
                            image={twitter}/>
                    </StackGrid>
                </div>
            );
        }
    }
}



export default Projects;