# Setup Instructions

These instructions walk you through configuring both the **frontend** and **backend** for the Manny Project Management application. Complete each section in order and make sure to keep your `.env` files up to date with the values you collect.

---

## 📌 Prerequisites
- Node.js and npm/yarn installed
- A terminal open at the project root
- Accounts created for [Clerk](https://clerk.com), [Neon](https://neon.com), and [Inngest](https://inngest.com)
- Basic familiarity with environment variables

---

## ⚛️ Frontend Configuration
1. Sign in to [Clerk](https://clerk.com) (or sign up if you don’t have an account). 
2. From the dashboard, go to **Overview → Get Started** and choose **React (Vite)**. 
3. Copy the value of `vite_clerk_publishable_key`. 
4. In the **client** folder, create or edit a `.env` file and add:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=<your key>
   ```
5. Save the file and restart your development server if it’s running.

---

## 🔧 Backend Configuration
### 1. Clerk Keys
1. Open [Clerk Developer Docs](https://clerk.com/docs) in a new tab (you should still be logged in). 
2. Scroll to the **Backend** section and select **Express**. 
3. Copy the **CLERK_PUBLISHABLE_KEY** and **CLERK_SECRET_KEY**. 
4. In the **server** folder, create or update `.env` with:
   ```env
   CLERK_PUBLISHABLE_KEY=<publishable>
   CLERK_SECRET_KEY=<secret>
   ```

### 2. Database (Neon)
1. Log in or sign up at [Neon](https://neon.com).
2. Create a new project and click the **Connect** icon. 
3. Copy the connection string and add it to your backend `.env` as:
   ```env
   DATABASE_URL=<neon connection string>
   ```
4. Disable connection pooling in the Neon dashboard and copy the resulting string into `DIRECT_URL`:
   ```env
   DIRECT_URL=<direct neon connection string>
   ```
5. Back in your terminal, navigate to the **server** directory and run:
   ```bash
   npx prisma db push
   ```
   This command will create the database tables defined in `prisma/schema.prisma`.

### 3. Webhooks & Inngest
1. In Clerk, go to **Settings → Webhooks**. 
2. Under **Endpoints**, choose **Inngest** from the dropdown and grant access. 
3. Click **Create** to add a new webhook; copy the **Signing Secret**.
4. Add it to your backend `.env`:
   ```env
   CLERK_WEBHOOK_SECRET=<signing secret>
   ```
5. Log in or register with [Inngest](https://inngest.com).
6. Navigate to the **Keys** section:
   - Copy the **Event key** to your `.env` as `INNGEST_EVENT_KEY`.
   - Copy the **Signing key** to `INNGEST_SIGNING_KEY`.

### 4. Final Steps
1. Verify your `.env` file contains all required values: Clerk keys, database URLs, and Inngest keys.
2. Deploy the backend (e.g. to Vercel, Heroku, etc.). 
3. After deployment, take the backend URL and add it to Inngest so it can listen for events from Clerk.

---

## ✅ You're Done!
With both frontend and backend configured, you should be able to run the app locally or interact with your deployed backend. Refer back to this guide any time you need to update keys or reconfigure services.

For development tips or troubleshooting, check the project README or reach out to the team.
