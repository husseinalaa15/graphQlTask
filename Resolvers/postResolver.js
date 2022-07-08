module.exports.Post = {
    comments: (parent,args,context)=>{
        // console.log(parent.id)
        const comment = comments.filter(comment => comment.postId === parent.id) 
        return comment
      }
}