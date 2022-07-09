const Comment = require("../models/comment");
const Post = require("../models/post");


module.exports.create = async function (req, res) {
  //check if post is present or not
  Post.findById(req.body.post, function (err, post) {
    if (post) {
      Comment.create(
        {
          content: req.body.content,
          post: req.body.post, //in form we are taking post_id as post
          user: req.user.id,
        },
        function (err, comment) {
          if (err) {
            console.log("Error in creating comment");
            return;
          }
          //push comments into post
          //console.log(post);
          post.comments.push(comment);
          post.save();
          return res.redirect('/');
        }
      );
    }
  });

};

module.exports.destroy=(req,res)=>{
  Comment.findById(req.params.id,(err,comment)=>{
    if(comment.user==req.user.id){
      let postId=comment.post;
      comment.remove();
      Post.findByIdAndUpdate(postId,{$pull:{comments:req.params.id}},(err,post)=>{
        return res.redirect('back');
      });
    }else{
      return res.redirect('back');
    }
  });
}