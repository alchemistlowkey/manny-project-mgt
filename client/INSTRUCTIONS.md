# FRONTEND

1. goto clerk.com and login/signup
2. navigate to overview and select react
3. copy the vite_clerk_publishable_key into .env file

# BACKEND
1. goto clerk.com/docs in a new tab with the existing login session
2. scroll to backend and click on express
3. copy the clerk_publishable_key and clerk_secret_key into your backend .env file
4. goto neon.com and login/signup
5. create your project
6. click the connect icon
7. on your .env create a DATABASE_URL and copy the connection string from neon into it
8. go back to neon and toggle off the connection pooling and copy the connection string into DIRECT_URL in your .env file
9. go to the backend terminal and run

```
npx prisma db push
```

this will create the tables on the neon database from the schema file
10. goto the clerk page, navigate to configure then webhooks
11. click on endpoints the from the webhook dropdown, select inngest, then grant approval for inngest
12. after the inngest approval, scroll down to the page and click the create button
13. then you will see the signing secret key by the right side of the page
14. copy the signing secret to your .env into your CLERK_WEBHOOK_SECRET
15. goto inngest.com and login/register
16. goto the key and select the Event key then copy to your .env INNGEST_EVENT_KEY
17. do same and select the singing keys and copy to your .env INNGEST_SIGNING_KEY
