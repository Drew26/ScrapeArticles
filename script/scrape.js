// scrape script
// =============

// Require axios and cheerio, making our scrapes possible
var axios = require('axios');
var cheerio = require('cheerio')

// This function will scrape the website

  // Scrape the NYTimes website
  axios.get("https://www.nytimes.com").then(function(response) {
    var $ = cheerio.load(response.data);
    // Make an empty array to save our article info
    var results = [];
    // Now, find and loop through each element that has the ".assetWrapper" class
    // (i.e, the section holding the articles)
      // In each article section, we grab the headline, URL, and summary
      $("article").each(function(i, element) {
      // Grab the headline of the article
      var title = $(element).children().text();
      

      // Grab the URL of the article
      var link = $(element).find("a").attr("href");
      // Grab the summary of the article
      

      // So long as our headline and sum and url aren't empty or undefined, do the following
      
        // This section uses regular expressions and the trim function to tidy our headlines and summaries
        // We're removing extra lines, extra spacing, extra tabs, etc.. to increase to typographical cleanliness.
        
        // Initialize an object we will push to the articles array
        results.push({
          title: title,
          link: link
        });
      });
    
        // Push new article into articles array
        console.log(results);
        //return results to controllers fetch.js
      });
       

// Export the function, so other files in our backend can use it