//src/types/environment.d.ts

export {}

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            GOOGLE_ID: string
            GOOGLE_SECRET: string
            NEXTAUTH_SECRET: string
            DATABASE_URL: string
            DATABASE_SECRET: string
        }
    }
}
