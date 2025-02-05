

import Link from "next/link";
import { getCurrentUser } from 'aws-amplify/auth';


export default async function LandingPage() {
  const { username, userId, signInDetails } = await getCurrentUser();


  console.log("username", username);
  console.log("user id", userId);
  console.log("sign-in details", signInDetails);

  return (
    <main>
      <h1>Welcome to Todo App</h1>
      <p>Please sign in to manage your todos</p>
      <div>
        <Link href="/auth">Sign In / Sign Up</Link>
      </div>
    </main>
  );
}
