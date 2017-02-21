var mongoose = require("mongoose");

// create a schema class
var Schema = mongoose.Schema;

// create a new schema
var ArticleSchema = new Schema({
    title: {
        type: string,
        required: true
    },
    body: {
        type: string,
        required: true
    },
    link: {
        type: string,
        required: true
    },
    comments: [{ // will contain an array of comments 
        type: Schema.Types.ObjectId, // will save the object Id of a comment 
        ref: "Comment" // directs that the object Ids stored here are related to the Comment model
    }]
});

// create the mondel with the schema
var Article = mongoose.model("Article", ArticleSchema);

// export the model
module.exports = Article;