# ignews

ignews is a blog built using the Prismic content management system (CMS), Stripe for payments, Sass for styling, FaunaDB for database management and next-auth for authentication with Github. The project was created as part of the Rocketseat Ignite bootcamp.

The project utilizes the Prismic API to fetch and display blog post data on the frontend. It also allows users to purchase premium content using Stripe. The styling of the project is done using Sass, and the database management is handled by FaunaDB. Users can also authenticate with their Github account.

## Getting Started

To run the project locally, you'll need to have Node.js and npm (or yarn) installed on your machine, the project counts with nvm to run Node version 16.15.0. You will also need to have an account with Stripe, Prismic, FaunaDB and Github. Once you have those, you can clone the repository and run the following commands from the project's root directory:

1. ```nvm use``` to use the specified version of node (opcional)
2. ```bash npm run dev``` or ```bash yarn dev```

3. Create a .env file in the root directory and add the following environment variables:

- NEXT_PUBLIC_STRIPE_PUBLIC_KEY: public key for your stripe account
- STRIPE_SUBSCRIPTION_PRICE_ID: id of the subscription price
- NEXTAUTH_URL: url of application
- STRIPE_WEBHOOK_SECRET: secret for stripe webhook
- GITHUB_CLIENT_ID: client id for Github
- GITHUB_CLIENT_SECRET: client secret for Github
- FAUNA_DB_KEY: key for FaunaDB
- PRISMIC_ENDPOINT: endpoint for Prismic API
- PRISMIC_ACCESS_TOKEN: access token for Prismic API
- STRIPE_API_KEY: secret key for Stripe API
- JWT_SECRET: secret key for JWT

3. ```bash npm run dev``` or ```bash yarn dev``` to start the development server

The project will be running at [http://localhost:3000](http://localhost:3000) and you can view the blog in the browser.

In order to use the auth functionality, you'll need to set up a Github App and use the appropriate keys in the .env file.

The project is built with React and also uses the Next.js framework for server-side rendering and Next-Auth for authentication. The project also uses SaSS for styling.

If you have any questions or issues with the project, please feel free to open an issue on the GitHub repository.