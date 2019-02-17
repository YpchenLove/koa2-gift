import BannerModel from '../../models/banner'

class Banner {
    constructor() {}

    /**
     * @route   GET api/banners
     * @desc    获取所有轮播图
     * @access  public
     */
    async getAll(ctx) {
        const findResult = await BannerModel.find({})
        if (findResult.length) {
            ctx.status = 200
            ctx.body = {
                code: 10000,
                data: findResult,
                status: 'success'
            }
        } else {
            ctx.status = 404
            ctx.body = {
                error_code: 40010,
                msg: '查询结果为空！',
                status: 'error'
            }
        }
    }

    /**
     * @route   GET api/banners/:id
     * @desc    获取某个轮播图详情
     * @access  public
     */
    async getDetail(ctx) {
        const params = ctx.params
        const findResult = await BannerModel.find({ id: params.id })
        if (findResult.length > 0) {
            ctx.status = 200
            ctx.body = {
                code: 10000,
                data: findResult,
                status: 'success'
            }
        } else {
            ctx.status = 404
            ctx.body = {
                error_code: 40010,
                msg: '查询结果为空！',
                status: 'error'
            }
        }
    }
}

export default new Banner()
