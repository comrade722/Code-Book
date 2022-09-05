const mongoose=require('mongoose');


const postSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    //arrray of comments
    comment: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Comment", // refer to comment schema
        },
    ],
    likes: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Like", // refer to like sechema
        },
    ],
},{
    timestamps:true
})

const Post=mongoose.model('Post',postSchema);
module.exports=Post;