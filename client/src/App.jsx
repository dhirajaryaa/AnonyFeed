import React from "react";
import { Button } from "@/components/ui/button";
import { BrowserRouter, Routes, Route } from "react-router";
import UserPage from "./pages/UserPage";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* protected routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<UserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
