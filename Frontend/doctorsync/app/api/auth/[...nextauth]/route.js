import NextAuth from "next-auth";
import  CredentialsProvider  from 'next-auth/providers/credentials';
// import  connectMongoDB  from '@/lib/mongodb';
import User  from "../../../../models/user";
import bcrypt from 'bcryptjs'

const authOptions = {

  providers: [
    CredentialsProvider ({
      name: "credentials",
      credentials: {},

      async authorize (credentials) {
        const { email, password} = credentials;
        return true;
        // try {
        //   await connectMongoDB();
        //   const usuario = await User.findOne ({ email });
        //   console.log("Usuário apos requisição ", usuario)

        //   if(!usuario){
        //     return null;
        //   }

        //   passwordsMatch = await bcrypt.compare(password, usuario.password);
        //   console.log("passwordsMatch", passwordsMatch);
        //   if(!passwordsMatch) {
        //     console.log("passwords nao batem")
        //     return null;
        //   }
        //   return usuario;


        // } catch (error) {
        //   console.log("Erro:", error);
        // }
      },

    }),
  ],
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin"
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };