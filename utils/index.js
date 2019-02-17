import bcrypt from 'bcryptjs'

export function encrypt(val) {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(val, salt)
    return hash
}

export function enbcrypt(val) {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(val, salt)
    return hash
}
