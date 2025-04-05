import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Outlet } from "react-router";

function AuthPage() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        {/* tab content  */}
        <Outlet />
      </Tabs>
    </main>
  );
}

export default AuthPage;
