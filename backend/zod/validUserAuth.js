import zod from 'zod'

const validUserAuth = zod.object({
    username: zod.string().email(),
    password: zod.string().min(8),
}).required()

export default validUserAuth;