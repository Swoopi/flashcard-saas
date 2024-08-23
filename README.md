
# Flashcard SaaS Application

This project is a Flashcard SaaS (Software as a Service) application built using modern web technologies. Users can create flashcards, save them, and interact with them through a visually appealing interface. The application integrates with Firebase for data storage and Clerk for user authentication. Stripe is used for handling subscription payments.

## Features

- User Authentication: Secure user authentication and management using Clerk.
- Flashcard Creation: Users can create, view, and manage their flashcards.
- Subscription Management: Integrated with Stripe to handle subscription payments.
- Firebase Integration: Stores flashcard data securely using Firestore.
- Responsive Design: Built with Material-UI to ensure a responsive and accessible user interface.
- Next.js: Server-side rendering and optimized performance using Next.js.

## Technologies Used

- Next.js: React framework for building server-side rendered applications.
- Firebase: Firestore for storing flashcards and Firebase Auth (optional) for authentication.
- Clerk: Authentication service for managing users.
- Stripe: Payment gateway for handling subscriptions.
- Material-UI: UI framework for building a responsive and accessible user interface.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 16 or higher)
- npm or yarn
- Firebase Project (with Firestore enabled)
- Clerk Account (for authentication)
- Stripe Account (for payment processing)

### Installation

1. Clone the Repository:
   ```bash
   git clone https://github.com/your-username/flashcard-saas.git
   cd flashcard-saas
Install Dependencies:

bash
Copy code
npm install
# or
yarn install
Set Up Environment Variables:

# Create a .env.local file in the root of the project and add the following environment variables:

env
Copy code
NEXT_PUBLIC_CLERK_FRONTEND_API=<Your Clerk Frontend API>
CLERK_API_KEY=<Your Clerk API Key>
STRIPE_SECRET_KEY=<Your Stripe Secret Key>
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<Your Stripe Publishable Key>
NEXT_PUBLIC_FIREBASE_API_KEY=<Your Firebase API Key>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<Your Firebase Auth Domain>
NEXT_PUBLIC_FIREBASE_PROJECT_ID=<Your Firebase Project ID>
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<Your Firebase Storage Bucket>
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<Your Firebase Messaging Sender ID>
NEXT_PUBLIC_FIREBASE_APP_ID=<Your Firebase App ID>
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=<Your Firebase Measurement ID>
BASE_URL=http://localhost:3000
# Firebase Setup:

Create a new Firebase project and enable Firestore.
Copy the Firebase configuration into the .env.local file as shown above.
# Stripe Setup:

Create a product and pricing plan in your Stripe dashboard.
Ensure the Stripe API keys are correctly set in the .env.local file.
# Clerk Setup:

Create a Clerk application and retrieve the Frontend API and API key.
Add these values to the .env.local file.
Running the Application
To start the development server:

bash
Copy code
npm run dev
# or
yarn dev
Open http://localhost:3000 to view the application in your browser.

# Building for Production
To create a production build:

bash
Copy code
npm run build
# or
yarn build
Then, run the production server:

bash
Copy code
npm start
# or
yarn start