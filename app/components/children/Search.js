// Require React
var React = require("react");

// Create the Main component
var Search = React.createClass({

  render: function() {
    return(
      // Render the page

      <div className="container">

        <div className="row">
          <div className="col-lg-10 col-lg-offset-1">
            <div className="panel panel-default">
              <div className="panel-heading text-center"><h3>Results</h3></div>
              <div className="panel-body text-center">



              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }

});

// Export the Main component
module.exports = Search;