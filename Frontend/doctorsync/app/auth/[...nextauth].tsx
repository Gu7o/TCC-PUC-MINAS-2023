import NextAuth from "next-auth"
import EmailProvider from 'next-auth/providers/email'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // Passwordless / email sign in
    EmailProvider({
      server: process.env.MAIL_SERVER,
      from: 'NextAuth.js <no-reply@example.com>'
    }),
  ],
}

export default NextAuth(authOptions)