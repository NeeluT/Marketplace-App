const express = require("express")
const dotenv = require("dotenv")
const swaggerConfig = require("./src/config/swagger.config")
const mainRouter = require("./src/app.routes")
const NotFoundHandler = require("./src/common/exception/not-found-habdler")
const AllExceptionHandler = require("./src/common/exception/all-exception.handler")
const cookieParser = require("cookie-parser")
const expressEjsLayouts = require("express-ejs-layouts")
dotenv.config()
async function main() {
    const app = express()
    const port = process.env.PORT
    require("./src/config/mongoose.config")
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(cookieParser(process.env.COOKIE_SECRET_KEY))
    app.use(express.static("public"))
    app.use(expressEjsLayouts)
    app.set("view engine", "ejs")
    app.set("layout", "./layouts/panel/main.ejs")
    app.use(mainRouter)
    swaggerConfig(app)
    NotFoundHandler(app)
    AllExceptionHandler(app)
    app.listen(port, () => {
        console.log(`server: http://localhost:${port}`);
    })
}

main();
