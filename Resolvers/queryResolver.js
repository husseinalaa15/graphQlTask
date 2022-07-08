module.exports.Query = {
    posts: (_,__,{dataSources}) => {
      return dataSources.postsAPI.getAllPosts()
    },
    post : (parent,args,{dataSources})=>{
      // console.log(args.id)
      return dataSources.postsAPI.getPostById(args.id)

    },
    comments: (__,___,{dataSources}) => {
      // console.log("coment"+comment)
      // const comment = comments.filter(comment => comment.id === id) 

      return dataSources.commentsAPI.getComments()
    }
    ,
   

  }