// Require axios for HTTP requests
var axios = require('axios');

var helpers = {

  getNytData: function(topic, startYear, endYear) {

    // Set API URL
    var nytApiKey = '545df803a6ba4b6ba6e6a8e321b8cba9';
    var nytUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';

    // API call
    axios.get(nytUrl, {
      params: {
        'api-key': nytApiKey,
        'q': topic,
        'begin_date': startYear + '0101',
        'end_date': endYear + '0101'
      }
    }).then(function (response) {
      console.log('Response', response.data.response.docs);
      return response.data.response.docs;

    }).catch(function (error) {
      console.log(error);
    });

  }

};

// Export the API helper
module.exports = helpers;