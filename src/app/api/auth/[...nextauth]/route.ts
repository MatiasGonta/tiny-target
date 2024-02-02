import { UserModel } from "@/models";
import { connectDB } from "@/utils";
import { compare } from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            id: "credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                await connectDB();

                const userFound = await UserModel.findOne({ email: credentials?.email }).select("+password"); // Need select password prop why in model it select value is false
                if (!userFound) throw new Error("Credenciales inválidas");

                const passwordMatch = await compare(credentials!.password, userFound.password);
                if (!passwordMatch) throw new Error("Credenciales inválidas");

                return userFound;
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.user = user;
            return token;
        },
        async session({ session, token }) {
            session.user = token.user as any;
            return session;
        },
    },
})

export { handler as GET, handler as POST };