const { Schema , model} = require("mongoose")

const commentSchema = new Schema({ 
    id: {type: String,required:true},
    user: {type: String,required:true},
    comment:{type: String,required:true},
    postId: {type: String,required:true},
})


const Comment = model("Comments",commentSchema)
module.exports = {Comment}