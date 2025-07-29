export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      const AdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      const blogPanel = request.nextUrl?.pathname.startsWith("/blog");
      const loginPanel = request.nextUrl?.pathname.startsWith("/login");
      if (AdminPanel && !user?.isAdmin) {
        return false;
      }
      if (blogPanel && !user) {
        return false;
      }
      if (loginPanel && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
