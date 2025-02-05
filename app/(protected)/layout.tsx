import { AuthenticatorWrapper } from "@/components/AuthenticatorWrapper";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthenticatorWrapper>{children}</AuthenticatorWrapper>;
}
