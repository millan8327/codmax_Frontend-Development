const server=require("express");
const router=server.Router();
const modelnewblog=require("../models/blog.js");
//test route
router.get("/demo",(req,res)=>{
    res.send("i am a new blog");
})

// create route
router.post("/create",async(req,res)=>{
    const{title,category,content}=req.body;
     const blog = new modelnewblog({
            title: title,
            category: category,
            content: content
        });

        await blog.save();

        res.status(201).json({
            mesage:"blog create successfully",
            blog:blog
        })
});


router.get("/", async (req, res) => {
    const blogs = await modelnewblog.find();

    res.json(blogs);
});
module.exports=router;