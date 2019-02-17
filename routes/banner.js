import Router from 'koa-router'
import Banner from '../controller/banner/banner'

const router = new Router()

router.get('/', Banner.getAll)
router.get('/:id', Banner.getDetail)

export default router.routes()
