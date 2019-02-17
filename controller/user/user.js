import UserModel from '../../models/user'
import { encrypt } from '../../utils'
// import gravatar from 'gravatar'

class User {
    constructor() {}
    /**
     * @route   GET api/users/register
     * @desc    注册
     * @access  public
     */
    async register(ctx) {
        const params = ctx.request.body
        const findResult = await UserModel.find({ email: params.email })
        if (findResult.length > 0) {
            ctx.status = 500
            ctx.body = {
                'email': '邮箱被占用！'
            }
        } else {
            // const avatar = gravatar.url(params.email, { s: '200', r: 'pg', d: 'mm' })
            const newUser = new UserModel({
                nickName: params.nickName,
                password: params.password,
                email: params.email,
                avatarUrl: params.avatarUrl,
                country: params.country,
                province: params.province,
                city: params.city,
                gender: params.gender
            })
            await newUser.save().then(user => {
                ctx.body = {
                    code: 10000,
                    msg: '添加成功！',
                    status: 'success'
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }

    /**
     * @route   POST api/users/login
     * @desc    登录
     * @access  public
     */
    async login(ctx) {
        const params = ctx.request.body
        const findResult = UserModel.findOne({ email: params.email })
        console.log(findResult)
    }

    async getUser(ctx) {
        const params = ctx.params
        const findResult = await UserModel.find({ nickName: params.name })
        if (findResult.length > 0) {
            ctx.body = findResult[0]
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

export default new User()
