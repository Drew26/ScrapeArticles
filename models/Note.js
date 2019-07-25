//require mongoose and create schema class
var mongoose = require("mongoose");

var Schema = mongoose.Schema;
//create the note schema using schema object

var noteSchema = new Schema({

    //headline (article that we associate with the note : ref===headline)
    _headlineId:{
        type: Schema.Types.ObjectId,
        ref: 'Headline'
    },
    //date type:date(date.now)
    date: {
        type: Date,
        default: Date.now
    },
    //note text (type:string)
    noteText: {
        type: String
    },
});

//create note model using note schema
var Note = mongoose.model("Note", noteSchema);
//export note model
module.exports = Note;