import React, {Component} from "react"
import Background from "../backgroundComponent/Background";
import Menu from "../menuComponent/Menu";
import "../../assets/css/projectPage.css";
import Project from "../projectsComponent/Project";
import twitter from "../../assets/img/twitter.png";
import fingertime from "../../assets/img/fingerTime.png";
import StackGrid, { transitions } from "react-stack-grid";

const { scaleDown } = transitions;

var start = "0,0 70,0 60,40 50,60 40,100 0,100",
    end   = "0,0 25,0 20,20 20,80 15,100 0,100";

class ProjectPage extends Component{
    constructor(props) {
        super(props);
        this.props.history.push('/');
        this.props.history.push(this.props.match.url);
        this.state = {
            filterSet : new Set(["Java","Python","Machine learning","Application","Swift"]),
            haveFilter : false,
            allItems : ["Java","Python","Machine learning","Application","Swift"]
        }
    }

    something = () => {
        this.grid.updateLayout();
    };

    render() {
        return (
            <div className={"projectPage"}>
                <Background start={start} end={end} delay={0}/>
                <Menu manageFilter={this.manageFilter} header={"Projects"} thisSite={"/projects"}/>
                <div className="pinCont">
                    {this.getComponents(this.state.filterSet)}
                </div>
            </div>
        );
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
        return(
            <StackGrid
                className={"pintrestView"}
                columnWidth={300}
                duration={500}
                gutterWidth={20}
                appearDelay={200}
                appear={scaleDown.appear}
                appeared={scaleDown.appeared}
                enter={scaleDown.enter}
                entered={scaleDown.entered}
                leaved={scaleDown.leaved}
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

        )
    }
}

export default ProjectPage;