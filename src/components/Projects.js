import React, {Component} from "react"
import StackGrid from "react-stack-grid";
import Project from "./Project";
import twitter from "../assets/img/twitter.jpg";
import fingertime from "../assets/img/fingerTime.jpg";
import FilterButton from "./FilterButton";
import resume from "../assets/img/Simon-Edvardsson-resume-website.jpg"
import screenTester from "../assets/img/Simon-Edvardsson-website-tester.jpg"

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
            button: "Show all",
            filterSet : new Set(["Java","Python","Machine learning","Application","Swift","Website", "React"]),
            haveFilter : false,
            allItems : ["Java","Python","Machine learning","Application","Swift", "Website", "React"]
        }
        this.manageFilter = this.manageFilter.bind(this)
    }

    render() {
        return (
            <div className="projectHeaderStart">
                <h1 className="projectHeaderStart"> My recent projects</h1>
                <p className={"projectparagraf"}>
                    Things i'm proud of, use filter to choose language or field
                </p>
                <div className="filterProjects">
                    {this.state.show ? <FilterButton text={"Java"} filter={this.manageFilter}/> : null}
                    {this.state.show ? <FilterButton text={"Python"} filter={this.manageFilter}/> : null}
                    {this.state.show ? <FilterButton text={"Application"} filter={this.manageFilter}/> : null}
                    {this.state.show ? <FilterButton text={"Machine learning"} filter={this.manageFilter}/> : null}
                    {this.state.show ? <FilterButton text={"Swift"} filter={this.manageFilter}/> : null}
                    {this.state.show ? <FilterButton text={"Website"} filter={this.manageFilter}/> : null}
                    {this.state.show ? <FilterButton text={"React"} filter={this.manageFilter}/> : null}
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
                button: "Show all"
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

                        { set.has("Website") || set.has("React") ? <Project
                            height={"300px"}
                            totHeight={"350px"}
                            link={"https://github.com/edsimon/resume_website"}
                            header={"Personal Website"}
                            modalInfo={"Created my own website from scratch using React and "}
                            image={resume}/> : null}

                        { set.has("Website") || set.has("React") ? <Project
                            height={"200px"}
                            totHeight={"250px"}
                            link={"https://github.com/edsimon/website_multiscreen_view"}
                            header={"Resolution Tester"}
                            modalInfo={"Created a resolution tester for simplifying my work on my main website"}
                            image={screenTester}/> : null}
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
                            link={"https://github.com/edsimon/resume_website"}
                            header={"Personal Website"}
                            modalInfo={"Created my own website from scratch using React and "}
                            image={resume}/>
                    </StackGrid>
                </div>
            );
        }
    }
}



export default Projects;