# Listaha Deployment Guide

This guide will help you deploy your Listaha todo app to Vercel with MongoDB Atlas.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **MongoDB Atlas Account**: Sign up at [mongodb.com/atlas](https://mongodb.com/atlas)
3. **GitHub Account**: For connecting your repository to Vercel

## Step 1: Set Up MongoDB Atlas Database

### 1.1 Create MongoDB Atlas Cluster
1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Sign up or log in to your account
3. Click "Create" to create a new project
4. Choose "Build a Database"
5. Select the **FREE** tier (M0 Sandbox)
6. Choose a cloud provider and region (closest to your users)
7. Click "Create Cluster"

### 1.2 Configure Database Access
1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Create a username and strong password
5. Set privileges to "Read and write to any database"
6. Click "Add User"

### 1.3 Configure Network Access
1. Go to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. For development: Click "Allow Access from Anywhere" (0.0.0.0/0)
4. For production: Add Vercel's IP ranges or use 0.0.0.0/0
5. Click "Confirm"

### 1.4 Get Connection String
1. Go to "Database" in the left sidebar
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Select "Node.js" and version "4.1 or later"
5. Copy the connection string
6. Replace `<password>` with your database user password
7. Replace `<dbname>` with `listhaha` (or your preferred database name)

Example connection string:
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/listhaha?retryWrites=true&w=majority
```

## Step 2: Prepare Your Code for Deployment

### 2.1 Update Prisma Schema (if needed)
Your current schema looks good, but ensure the output path is correct:

```prisma
generator client {
  provider = "prisma-client-js"
  output   = "../src/generated/prisma"
}
```

### 2.2 Create Environment Variables File
Create a `.env.local` file in your project root:

```env
DATABASE_URL="your-mongodb-connection-string-here"
```

**Important**: Never commit this file to Git!

## Step 3: Deploy to Vercel

### 3.1 Push to GitHub
1. Initialize Git repository (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Create a new repository on GitHub
3. Push your code:
   ```bash
   git remote add origin https://github.com/yourusername/listhaha.git
   git branch -M main
   git push -u origin main
   ```

### 3.2 Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect it's a Next.js project
5. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

### 3.3 Add Environment Variables
1. In your Vercel project dashboard, go to "Settings"
2. Click "Environment Variables"
3. Add the following variables:
   - **Name**: `DATABASE_URL`
   - **Value**: Your MongoDB Atlas connection string
   - **Environment**: Production, Preview, Development (check all)

### 3.4 Deploy
1. Click "Deploy" in Vercel
2. Wait for the build to complete
3. Your app will be available at `https://your-project-name.vercel.app`

## Step 4: Test Your Deployment

1. Visit your deployed URL
2. Try adding a new todo item
3. Test editing and deleting todos
4. Check if data persists (database connection working)

## Step 5: Custom Domain (Optional)

1. In Vercel dashboard, go to "Domains"
2. Add your custom domain
3. Follow the DNS configuration instructions
4. Wait for SSL certificate to be issued

## Troubleshooting

### Common Issues:

1. **Build Fails**: Check that all dependencies are in `package.json`
2. **Database Connection Error**: Verify your `DATABASE_URL` is correct
3. **Prisma Client Error**: Ensure `prisma generate` runs during build
4. **Environment Variables**: Make sure they're set in Vercel dashboard

### Useful Commands:

```bash
# Test build locally
npm run build

# Check Prisma connection
npx prisma db push

# View Prisma Studio (local development)
npx prisma studio
```

## Security Notes

1. **Never commit `.env` files** to version control
2. **Use strong passwords** for database users
3. **Restrict network access** in MongoDB Atlas for production
4. **Regularly update dependencies** for security patches

## Performance Optimization

1. **Enable Vercel Analytics** for performance monitoring
2. **Use Vercel Edge Functions** for better global performance
3. **Optimize images** if you add any in the future
4. **Enable caching** for better performance

Your Listaha app should now be successfully deployed and accessible worldwide! 🚀
