"use client";

import { Authenticator } from '@aws-amplify/ui-react'
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();

  return (
    <Authenticator>
      {({ user }) => {
        if (user) {
          router.push("/todos");
          return <div></div>;
        }
        return <div></div>;
      }}
    </Authenticator>
  );
}
