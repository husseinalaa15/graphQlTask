const { DataSource } = require("apollo-datasource");
const { Comment } = require("../Models/comment-model");

class CommentsApi extends DataSource{
    initialize(config){
        this.context = config.context
    }
    async getComments(){
        return Comment.find()
    }


    async addComment(comment){
        // console.log(post)
        const newcomment = new Comment(comment)
        return await newcomment.save()
         
    }

    async deleteComment(id){
        let deleteComment = await Comment.findByIdAndRemove(id)
        if(!deleteComment){
            return false;
        }
        return true
    }

    async updateComment(id,comment){
        let updatedComment = await Comment.findByIdAndUpdate(id,comment)
        if(!updatedComment){
            return "error"
        }else{
            return updatedComment
        }
    }





}

module.exports = CommentsApi;