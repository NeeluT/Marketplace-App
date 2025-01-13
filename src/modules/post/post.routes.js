const {Router}  = require("express")
const PostController = require("./post.controller")
const { upload } = require("../../common/utils/multer")
const Authrization = require("../../common/guard/authorization.guard")
const router = Router()

router.get("/create", Authrization, PostController.createPostPage)
router.post("/create", Authrization, upload.array("images", 10) ,PostController.create)
router.get("/my", Authrization,PostController.findMyPosts)
router.get("/delete/:id", Authrization,PostController.remove)


module.exports = {
    PostRouter: router
}