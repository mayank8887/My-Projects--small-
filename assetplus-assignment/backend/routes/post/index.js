const Post = require("../../models/Post");

const upload= require("../../middleware/upload")

var router = require("express").Router();

// @AssetPlus: This is a sample get request
router.get("/", async (req, res) => {
    try{
    var posts = await Post.find();
    return res.status(200).send(posts);
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
});

// @AssetPlus: Add other routes here
// router.post("/add")

router.post("/add", upload.single("poster"),async(req,res)=>{
    try{
      const post = await Post.create({
        title: req.body.title,
        description:req.body.description,
        poster:req.file.path,
      })
      return res.status(200).send(post);
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
});

router.post("/del",async(req,res)=>{

    try{
        const _id= req.body._id;
        const post= await Post.findByIdAndDelete(_id);

        return res.status(200).send(post);

    }
    catch(err){
        res.status(500).send({message:err.message});
    }
})

module.exports = router;