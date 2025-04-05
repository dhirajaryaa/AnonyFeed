import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Outlet } from "react-router";

function AuthPage() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <Tabs defaultValue="signup" className="w-sm">
        <TabsList className={"grid grid-cols-2 w-full h-14 p-2"}>
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="signin">Signin</TabsTrigger>
        </TabsList>
        {/* tab content  */}
        <Outlet />
      </Tabs>
    </main>
  );
}

export default AuthPage;
