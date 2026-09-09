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

router.get("/:id", async (req, res) => {
    try {
        const blog = await modelnewblog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({
                message: "Blog not found"
            });
        }

        res.status(200).json(blog);

    } catch (error) {
        res.status(500).json({
            message: "Failed to get blog",
            error: error.message
        });
    }
});

// UPDATE BLOG
router.put("/:id", async (req, res) => {
    try {
        const { title, category, content } = req.body;

        const blog = await modelnewblog.findByIdAndUpdate(
            req.params.id,
            {
                title: title,
                category: category,
                content: content
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!blog) {
            return res.status(404).json({
                message: "Blog not found"
            });
        }

        res.status(200).json({
            message: "Blog updated successfully",
            blog: blog
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to update blog",
            error: error.message
        });
    }
});


// DELETE BLOG
router.delete("/:id", async (req, res) => {
    try {
        const blog = await modelnewblog.findByIdAndDelete(req.params.id);

        if (!blog) {
            return res.status(404).json({
                message: "Blog not found"
            });
        }

        res.status(200).json({
            message: "Blog deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to delete blog",
            error: error.message
        });
    }
});


module.exports = router;
