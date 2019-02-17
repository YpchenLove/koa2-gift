import Koa from 'koa'
import Router from 'koa-router'
import BodyParser from 'koa-bodyparser'

import config from './config'
import chalk from 'chalk'

// routes
import user from './routes/user'
import banner from './routes/banner'

// MongoDB
import db from './mongodb'

const app = new Koa()
const router = new Router()
const port = config.port

// get request
app.use(BodyParser())

// 配置路由
app.use(router.routes()).use(router.allowedMethods())

router.use('/api/users', user)
router.use('/api/banners', banner)

// 启动服务
app.listen(port, () =>
    console.log(
        chalk.blue(`Server Started on ${port}...`)
    )
)
