module.exports.Mutation = {
    addPost : (parent,{input},{ posts,dataSources })=>{
        const newPost = {
          id:Math.random(),
          title:input.title,
          author:input.author,
          comment:input.comment,
          content:input.content
        } 

        // posts.push(newPost)
        // console.log(posts)
        // Post.
        // return newPost
        // console.log(input)
        return dataSources.postsAPI.addnewPost(newPost)
      },

      deletePost :(parent,args,{posts,comments,dataSources})=>{
          // let DeletedPost = posts.filter(post => post.id !== args.id)
          // // console.log(DeletedPost)
          // let deleteComment = comments.map((comment)=>{
          //   if(comment.postId == args.id){
          //     return {
          //       ...comment,
          //       postId :null
          //     }
              
          //   }else comment
          //   // console.log(comment)
          // })
          // return true
          return dataSources.postsAPI.deletePost(args.id)
          // console.log(posts)
      },

      updatePost :(parent,args,{posts,comments,dataSources})=>{
        let updatePost = posts.findIndex(post => post.id === args.id)
        // console.log(posts[updatePost])
        // posts[updatePost] = {
        //   ...posts[updatePost],
        //   ...args.input
        // }
        // return posts[updatePost]
        return dataSources.postsAPI.updatePost(args.id,args.input)
      },

      addComment : (parent,{input},{comments,dataSources})=>{
        const newComment = {
          id:Math.random(),
          user: input.user,
          comment: input.comment,
          postId:input.postId
        }
        // comments.push(newComment)
        // console.log(comments)
        return dataSources.commentsAPI.addComment(newComment)
      },

      deleteComment :(parent,args,{posts,comments,dataSources})=>{
        // let deletedComment = comments.filter(comment => comment.id !== args.id)
        
        // console.log(deletedComment)
        return dataSources.commentsAPI.deleteComment(args.id)
      },

      updateComment: (parent,args,{comments,dataSources})=>{
        let updatedComment = comments.findIndex(comment => comment.id === args.id)
        // comments[updatedComment] = {
        //   ...comments[updatedComment],
        //   ...args.input
        // }
        return dataSources.commentsAPI.updateComment(args.id,updatedComment)
      }

}