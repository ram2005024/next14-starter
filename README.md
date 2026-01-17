# Next.js Blog Application

A modern, full-stack blog platform built with Next.js 14, featuring authentication, protected routes, and a clean, responsive design. This project demonstrates core Next.js concepts including App Router, server components, and session management.

## 🚀 Features

- **User Authentication** - Secure GitHub OAuth integration for seamless login
- **Role-Based Access Control** - Protected routes with admin and user roles
- **Blog Management** - Full CRUD operations for blog posts (admin only)
- **Responsive Design** - Mobile-first approach with modern UI/UX
- **Session Management** - Persistent user sessions with secure token handling
- **Server & Client Components** - Optimized rendering strategy
- **Modern Stack** - Built with Next.js 14 App Router and latest best practices

## 📸 Screenshots

> Add your application screenshots here

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Authentication:** NextAuth.js with GitHub Provider
- **Database:** MongoDB with Mongoose ODM
- **Styling:** CSS Modules
- **Deployment:** Vercel (recommended)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18.x or higher
- npm or yarn package manager
- MongoDB database (local or cloud)
- GitHub OAuth App credentials

## ⚙️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/nextjs-blog.git
cd nextjs-blog
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# MongoDB Connection
MONGODB_URI=your_mongodb_connection_string

# NextAuth Configuration
NEXTAUTH_SECRET=your_nextauth_secret_key
NEXTAUTH_URL=http://localhost:3000

# GitHub OAuth
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔑 Getting GitHub OAuth Credentials

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in the application details:
   - **Application name:** Your Blog Name
   - **Homepage URL:** `http://localhost:3000`
   - **Authorization callback URL:** `http://localhost:3000/api/auth/callback/github`
4. Copy the Client ID and generate a Client Secret
5. Add them to your `.env.local` file

## 📁 Project Structure

```
next14-starter/
├── src/
│   ├── app/
│   │   ├── components/       # Reusable components
│   │   │   ├── BlogCard/
│   │   │   ├── DeleteForm/
│   │   │   ├── Footer/
│   │   │   ├── Nav/
│   │   │   ├── Post/
│   │   │   ├── RegisterForm/
│   │   │   ├── SigninForm/
│   │   │   └── User/
│   │   ├── loading.jsx       # Loading states
│   │   ├── not-found.jsx     # 404 page
│   │   ├── page.jsx          # Home page
│   │   └── page.module.css   # Global styles
│   └── lib/
│       ├── action.js         # Server actions
│       ├── auth.config.js    # Auth configuration
│       ├── auth.js           # Auth setup
│       ├── connectionToDB.js # Database connection
│       ├── data.js           # Data fetching functions
│       ├── middleware.js     # Route middleware
│       └── models.js         # Mongoose models
├── .env.local                # Environment variables
├── .eslintrc.json           # ESLint configuration
├── .gitignore               # Git ignore rules
├── jsconfig.json            # JavaScript configuration
└── next.config.js           # Next.js configuration
```

## 🔐 Authentication Flow

1. User clicks "Sign in with GitHub"
2. GitHub OAuth redirects to authorization page
3. User authorizes the application
4. Callback creates/updates user in database
5. Session token is generated and stored
6. User is redirected to the application

## 🛡️ Protected Routes

Admin-only routes are protected using middleware and session validation:

- `/admin/create-post` - Create new blog posts
- `/admin/manage-posts` - Edit/delete existing posts

Regular users can:
- View all blog posts
- Read individual blog posts
- Access their profile

## 🎨 Customization

### Styling

The application uses CSS Modules for component-scoped styling. Global styles are in `page.module.css`.

### Adding New Features

1. Create new components in `src/app/components/`
2. Add server actions in `src/lib/action.js`
3. Update data fetching in `src/lib/data.js`
4. Define new models in `src/lib/models.js`

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Update `NEXTAUTH_URL` to your production URL
5. Update GitHub OAuth callback URL
6. Deploy!

### Build for Production

```bash
npm run build
npm start
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Special thanks to [Lama Dev](https://www.youtube.com/@LamaDev) for the excellent tutorial that inspired this project
- Next.js team for the amazing framework
- Vercel for seamless deployment platform

## 📧 Contact

Your Name - Ram(Shekhar) Sharma -https://www.facebook.com/shekhar.sharma.390674/

Project Link: https://next14-starter-31as.vercel.app/

---

⭐ If you found this project helpful, please give it a star!
