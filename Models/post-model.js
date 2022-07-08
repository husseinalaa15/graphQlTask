const { Schema , model, models} = require("mongoose")

const postSchema = new Schema({ 

    id:{type: String,required:true},
    title:{type: String,required:true},
    content:{type: String,required:true},
    author:{type: String,required:true},
    comments:[
        {
            id: {type: String,required:true},
            user: {type: String,required:true},
            comment:{type: String,required:true},
            postId: {type: String,required:true},
        }
    ],
})


const Post = model("Posts",postSchema)
module.exports = {Post}