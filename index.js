const { ApolloServer, gql } = require('apollo-server');
const { default: mongoose } = require('mongoose');
const PostsApi = require('./Data/dataSource');
const CommentsApi = require('./Data/dataSourceComments');
const {Query} =require("./Resolvers/queryResolver")
const {Post} =require("./Resolvers/postResolver")
const {Mutation} = require("./Resolvers/mutation")
// const { Post } = require('./Models/post-model');

const posts = [
  {
    id:"1",
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    id:"2",
    title: 'City of Glass',
    content: 'City of Glass Content  City of Glass Content  City of Glass Content ',
    author: 'Paul Auster',
  },
];

const comments = [
  {
    id:"1",
    comment:"my comment on post 1",
    author: "john",
    postId :"1"
  },
  {
    id:"2",
    comment:"my comment on post 2",
    author: "joe",
    postId :"2"
  }
]
const typeDefs = gql`

  type Query {
    posts : [Post!]!
    post(id:String!):Post!
    comments :[comment!]!
  }

  type Post {
    id: String!
    title: String!
    content: String!
    author: String!
    comments:[comment!]!
  }

  type comment {
    id: String!
    user: String!
    comment:String!
    postId: String!
  }

  type Mutation {
    addPost(input :addPost) : Post!
    deletePost(id:String!) : Boolean!
    updatePost(id:String!,input :updatePost) :Post!
    addComment(input:addComment) :comment!
    deleteComment(id:String!) : Boolean!
    updateComment(id:String!,input :updateComment) :comment!
  }

  input addPost {
    title: String!
    content: String!
    author: String!
    comment: String!
  }

  input updatePost {
    title: String!
    # content: String!
    # author: String!
    # comment: String!
  }
  input addComment{
    user: String!
    comment:String!
    postId:String!
  }
  input updateComment{
    comment:String!
  }




`;




  const resolvers = {


    Query,

    Post,

    Mutation


   
    
  };
  


  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context : {
      posts,
      comments
    }
    ,
    dataSources:()=>{
      return {
        postsAPI : new PostsApi(),
        commentsAPI: new CommentsApi()
      }
    }
  });


  server.listen().then(({ url }) => {
    mongoose.connect("mongodb://localhost:27017/graphQldb").then(()=>{
      console.log("db connected")
    }).catch((error) => { console.log(error)} )


    console.log(`🚀  Server ready at ${url}`);
  });
