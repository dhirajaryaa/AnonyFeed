import React from "react";
import { Button } from "@/components/ui/button";
import { BrowserRouter, Routes, Route } from "react-router";
import UserPage from "./pages/UserPage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import AuthPage from "./pages/AuthPage";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthPage />}>
        <Route path="/signup" element={<SignUp />} />
        </Route>

        {/* protected routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<UserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
