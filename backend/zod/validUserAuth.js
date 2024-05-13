import zod from 'zod'

const validUserAuth = zod.object({
    name: zod.string(),
    username: zod.string().email(),
    password: zod.string(),
}).required()

export default validUserAuth;