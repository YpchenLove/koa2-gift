// 为了账号安全，smtp下的password不能直接写出来，放在了smtpPwd.js里。
// 上传git的生活自动忽略了这个文件，请根据个人情况去添加。
import { smtpPwd } from './smtpPwd'

const config = {
    port: process.env.PORT || 5003, // 端口号
    dbUrl: 'mongodb://localhost:27017/gift', // MongoDB地址
    smtp: {
        get host() {
            return 'smtp.qq.com'
        },
        get user() {
            return 'ypchng@qq.com'
        },
        get pass() {
            return smtpPwd
        }
    },
    get code() {
        return Math.random().toString(16).slice(2, 6).toUpperCase() // 验证码
    },
    get expira() {
        return new Date().getTime() + 60 * 60 * 1000 // 过期时间 1分钟
    }
}

export default config
