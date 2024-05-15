import zod from "zod"

const contactAuth = zod.object({
    name: zod.string(),
    semester: zod.number(),
    branch: zod.string(),
    gmail: zod.string().email(),
    query: zod.string()
}).required()

export default contactAuth;