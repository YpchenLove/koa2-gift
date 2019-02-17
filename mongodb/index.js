import mongoose from 'mongoose'
import config from '../config'
import chalk from 'chalk'

mongoose.connect(config.dbUrl, { useNewUrlParser: true })
mongoose.Promise = global.Promise

const db = mongoose.connection

db.once('open', () => {
    console.log(
        chalk.bgCyan('连接数据库成功!'),
        chalk.bgBlueBright('O(∩_∩)O~~')
    )
})

db.on('error', (error) => {
    console.error(
        chalk.bgRed(`Error in MongoDb connection:${error}`),
        chalk.bgMagentaBright('QAQ')
    )
    mongoose.disconnect()
})

db.on('close', () => {
    console.log(
        chalk.bgYellow('数据库断开，重新连接数据库'),
        chalk.bgMagentaBright('>.<')
    )
    mongoose.connect(config.dbUrl, { server: { auto_reconnect: true } })
})

export default db
