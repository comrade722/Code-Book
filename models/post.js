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
    comments: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Comment", // refer to comment sechema
        },
    ]
},{
    timestamps:true
})

const Post=mongoose.model('Post',postSchema);
module.exports=Post;