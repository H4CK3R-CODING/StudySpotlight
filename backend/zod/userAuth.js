import zod from "zod"

const userAuth = zod.object({
    name: zod.string(),
    semester: zod.number(),
    branch: zod.string(),
    gmail: zod.string().email(),
}).required()

export default userAuth;