import { Navigate } from "react-router-dom";
import { useNhostAuth } from "@nhost/react-auth";

export function AuthGate({ children }: { children: JSX.Element }): JSX.Element {
  const { isAuthenticated, isLoading } = useNhostAuth();

  console.log({ isAuthenticated });
  console.log({ isLoading });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}