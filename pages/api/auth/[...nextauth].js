import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    DiscordProvider({
      clientId: "938953227410481252",
      clientSecret: "3TMK3xJ14kS08Fw3KpQ3Yz-5lsLlrI8f",
      authorization: { params: { scope: 'identify guilds' }}, 
    }),
    // ...add more providers here
  ],

  callbacks: {
    jwt: async ({ token, user }) => {
        user && (token.user = user)
        return token
    },
    session: async ({ session, token }) => {
        session.user = token.user
        return session
    }
}

})
