// Require React
var React = require("react");

// Require child components
var Search = require("./children/Search");
var Saved = require("./children/Saved");

// Create the Main component
var Main = React.createClass({

  render: function() {
    return(
      // Render the page

      <div className="container">

        <div className="jumbotron">
          <h1 className="text-center">New York Times Article Scrubber</h1>
          <p className="text-center">Search for and annotate articles of interest!</p>
        </div>

        <div className="row">
          <div className="col-lg-10 col-lg-offset-1">
            <div className="panel panel-default">
              <div className="panel-heading text-center"><h3>Search</h3></div>
              <div className="panel-body text-center">

                <form>

                  <div className="form-group">
                    <label for="inputTopic">Topic</label>
                    <input type="text" className="form-control" id="inputTopic" placeholder="Topic"/>
                  </div>
                  <div className="form-group">
                    <label for="inputStartYear">Start Year</label>
                    <input type="text" className="form-control" id="inputStartYear" placeholder="Start Year"/>
                  </div>
                  <div className="form-group">
                    <label for="inputEndYear">End Year</label>
                    <input type="text" className="form-control" id="inputEndYear" placeholder="End Year"/>
                  </div>
                  <button type="submit" className="btn btn-default">Search</button>

                </form>

              </div>
            </div>

          </div>
        </div>


      </div>
    );
  }

});

// Export the Main component
module.exports = Main;