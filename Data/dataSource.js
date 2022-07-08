const { DataSource } = require("apollo-datasource");
const { Post } = require("../Models/post-model");
const { Comment } = require("../Models/comment-model");

class PostsApi extends DataSource{
    initialize(config){
        this.context = config.context
    }
    async getAllPosts(){
        return Post.find()
    }

    async getPostById(id){
        return Post.findById(id)
    }

    async addnewPost(post){
        // console.log(post)
        const newpost = new Post(post)
        return await newpost.save()
         
    }

    async deletePost(id){
        let deletedPost = await Post.findByIdAndRemove(id)
        if(!deletedPost){
            return false;
        }
        return true
    }

    async updatePost(id,post){
        let updatedPost = await Post.findByIdAndUpdate(id,post)
        if(!updatedPost){
            return "error"
        }else{
            return updatedPost
        }
    }





}

module.exports = PostsApi;