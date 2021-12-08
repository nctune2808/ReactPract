import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthGate } from "./AuthGate";
import { Dashboard } from "./Dashboard";
import { Login } from "./Login";


function RouterApp() {
  return (
    <AuthGate>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </AuthGate>
  );
}

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<RouterApp />} />
      </Routes>
    </BrowserRouter>
  );
}