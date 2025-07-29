import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import bcrypt from "bcryptjs";
import { connectionToDB } from "./connectionToDB";
import { User } from "./models";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
const login = async (credential) => {
  try {
    await connectionToDB();
    const user = await User.findOne({ userName: credential.username });
    if (!user) {
      throw new Error("Wrong credentials");
    }
    const isCorrect = await bcrypt.compare(credential.password, user.password);
    if (!isCorrect) {
      throw new Error("Wrong Credentials");
    }
    return user;
  } catch (error) {
    throw new Error("Error while sign in!");
  }
};
export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_KEY,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          console.log("Authorize error:", error);
          return null;
        }
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "github") {
        await connectionToDB();
        try {
          const user = await User.findOne({ email: profile.email });

          if (!user) {
            const newUser = new User({
              userName: profile.login,
              email: profile.email,
              img: profile.avatar_url,
              id: profile.id,
            });
            await newUser.save();
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      }
      return true;
    },
    ...authConfig?.callbacks,
  },
});
