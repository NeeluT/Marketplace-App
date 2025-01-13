const autoBind = require("auto-bind")
const PostMessage = require("./post.message")
const HttpCodes = require("http-codes")
const postService = require("./post.service")
const CategoryModel = require("../category/category.model")
const createHttpError = require("http-errors")
const { Types } = require("mongoose")
const {removePropertyInObject} = require("../../common/utils/functions")

class PostController {
    #service
    success_message
    constructor() {
        autoBind(this)
        this.#service = postService
    }
    async createPostPage(req, res, next) {
        try {
            let {slug} = req.query
            let showBack = false
            let options, category
            let match = {parent: null}
            if(slug) {
                slug = slug.trim()
                category = await CategoryModel.findOne({slug})
                if(!category) throw new createHttpError.NotFound(PostMessage.NotFound)
                options = await this.#service.getCategoryOptions(category._id)
            if(options.length === 0) options = null
                showBack = true
                match = {
                    parent: category._id
                }
            } 
            const categories = await CategoryModel.aggregate([
                {
                    $match: match
                }
            ])
            res.render("./pages/panel/create-post.ejs", {
                categories,
                showBack,
                category: category?._id.toString(),
                options
            })
        } catch(error) {
            next(error)
        }
    }
    async create(req, res, next) {
    try {
        const userId = req.user._id
        const images = req?.files?.map(image => image?.path?.slice(7))
        const {title, description: content, category} = req.body
        const options = removePropertyInObject(req.body, ["title", "description", "category", "images"])
        await this.#service.create({
            userId,
            title,
            content,
            category: new Types.ObjectId(),
            images,
            options,
        })
        this.success_message = PostMessage.Created
        return res.redirect('/post/my')
        } catch(error) {
            next(error)    
        }
    }

    async findMyPosts(req, res, next) {
    try {
        const userId = req.user._id
        const posts = await this.#service.find(userId)
        res.render("./pages/panel/posts.ejs", {
            posts, 
            count: posts.length,
            success_message: null,
            error_message: null
        })
        this.success_message = null
        } catch(error) {
            next(error)    
        }
    }
    async remove(req, res, next) {
    try {
        const {id} = req.params
        await this.#service.remove(id)
        this.success_message = PostMessage.Deleted;
        return res.redirect('/post/my');
        } catch(error) {
            next(error)    
        }
    }
}

module.exports = new PostController