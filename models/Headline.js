//require mongoose
var mongoose = require("mongoose");

//Hold our headline collection
var Schema = mongoose.Schema;

//create headline schema with schema class previously created
var headlineSchema = new Schema({
    //Documents

    //headline (type string) set to required (boolean:true)
    Headline: {
      type: String,
      required: true
    },
    //summary (type string) set to required (boolean:true)
    summary: {
      type: String,
      required: true
    },
    //url (type string) set to required (boolean:true)
    url: {
      type: String,
      required: true
    },
    //date (type : date) default value (date.now)
    date: {
        type: Date,
        default: Date.now
      },
    //saved (type : boolean:false)
    saved: {
        type: Boolean,
        default: false
      },
  });
  
  //var Headline (use mongoose model method, then export model)
  // This creates our model from the above schema, using mongoose's model method
  var Headline = mongoose.model("Headline", headlineSchema);
  
  // Export the Headline model
  module.exports = Headline;

      

    

        