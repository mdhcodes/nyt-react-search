// Require React
var React = require("react");

// Include child components
var Form = require("./children/Form");
var Results = require('./children/Results');

// Helper for making AJAX requests to our API
 var helpers = require("./utils/helpers");

// Create the Main component
class Main extends React.Component {

  constructor(props) {
    super(props); // super() sets the context for the keyword 'this'
    this.state = {
      topic: "",
      startYear: "",
      endYear: "",
      results: []
    };
  }

  setTopic(topic) {
    this.setState({ topic: topic });
  }

  setStart(startYear) {
    this.setState({ startYear: startYear });
  }

  setEnd(endYear) {
    this.setState({ endYear: endYear });
  }

  componentDidUpdate(prevProps, prevState) {
    // If a new search topic is found, run a new search
    if (prevState.topic !== this.state.topic || prevState.startYear !== this.state.startYear || prevState.endYear !== this.state.endYear) {

      console.log("UPDATED");

      helpers.getNytData(this.state.topic, this.state.startYear, this.state.endYear).then(function(data) {
        if (data !== this.state.results) {
          console.log(data);
          this.setState({ results: data });
        }
      });
    }
  }


  render() {
    return(

      // Render the page
      <div className="container">

        <div className="jumbotron">
          <h1 className="text-center">New York Times Article Scrubber</h1>
          <p className="text-center">Search for and annotate articles of interest!</p>
        </div>

        <div className="col-lg-10 col-lg-offset-1">
            <Form setTopic={this.setTopic} setStart={this.setStart} setEnd={this.setEnd}/>
        </div>

        <div className="col-lg-10 col-lg-offset-1">
            <Results nytResults={this.state.results} />

        </div>

      </div>
    );
  }
}

// Export the Main component
module.exports = Main;