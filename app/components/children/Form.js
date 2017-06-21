// Require React
var React = require("react");

// Create the Main component
class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      topic: "",
      startYear: "",
      endYear: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e) {
    // Handle any change in text within the input fields before form submission
    let newState = {};
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  }

  // Values for the search (axios http request)
  handleSubmit(e) {
    e.preventDefault();
    this.props.setTopic(this.state.topic);
    this.props.setStart(this.state.startYear);
    this.props.setEnd(this.state.endYear);

    // Clear the input fields after submitting the form
    this.setState({ topic: "" });
    this.setState({ startYear: "" });
    this.setState({ endYear: "" });
  }


  render() {
    return(

      <div className="row">
        <div className="col-lg-10 col-lg-offset-1">
          <div className="panel panel-default">
            <div className="panel-heading text-center"><h3>Search</h3></div>
            <div className="panel-body text-center">
              <form>
                <div className="form-group">
                  <label htmlFor="topic">Topic</label>
                  <input type="text" className="form-control" id="topic" placeholder="Topic" onChange={this.handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="startYear">Start Year</label>
                  <input type="text" className="form-control" id="startYear" placeholder="Start Year" onChange={this.handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="endYear">End Year</label>
                  <input type="text" className="form-control" id="endYear" placeholder="End Year" onChange={this.handleChange} required />
                </div>
                <button type="submit" className="btn btn-default" id="submitBtn" onClick={this.handleSubmit}>Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// Export the Main component
module.exports = Form;
