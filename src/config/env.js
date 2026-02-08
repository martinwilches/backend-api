import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

export const { JWT_KEY } = process.env
