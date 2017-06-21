// Require React
var React = require("react");

// Create the Main component
class Results extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      date: "",
      url: "",
      results: []
    };
  }


  render() {
    return(

      // Render the page
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1">
            <div className="panel panel-default">
              <div className="panel-heading text-center"><h3>Results</h3></div>
              <div className="panel-body text-center" id="results-well">



                <div className="well" >
                  <p>{this.props.nytResults}</p>
                </div>

                  {/* NYT Articles / Results Here */}
                  {/* Article Title: .headline.main */}
                  {/* Article URL: .web_url */}
                  {/* Article Date: .date */}

              </div>
            </div>
          </div>
        </div>
    );
  }

}

// Export the Main component
module.exports = Results;