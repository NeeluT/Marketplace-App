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
        const {title, description: content, category, amount} = req.body
        const options = removePropertyInObject(req.body, ["title", "description", "category", "images", "amount"])
        await this.#service.create({
            userId,
            title,
            amount,
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
            success_message: this.success_message,
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
    async showPost(req, res, next) {
    try {
        const {id} = req.params
        const post = await this.#service.checkExist(id)
        res.locals.layout = "./layouts/website/main.ejs"
        res.render('./pages/home/post.ejs', {
            post
        });
        } catch(error) {
            next(error)    
        }
    }
    async postList(req, res, next) {
    try {
        const query = req.query
        const posts = await this.#service.findAll(query)
        res.locals.layout = "./layouts/website/main.ejs"
        res.render('./pages/home/index.ejs', {
            posts
        });
        } catch(error) {
            next(error)    
        }
    }
}

module.exports = new PostController