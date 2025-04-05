import { TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useState } from "react";

function SignUp() {
  const [loading, setLoading] = useState(false);
  return (
    <TabsContent value="signup">
      <form>
        <Card>
          <CardHeader>
            <CardTitle>Signup</CardTitle>
            <CardDescription>
              Fill out the form below to create your account. Ensure all fields
              are completed accurately.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" type={"text"} placeholder="dhiraj" />
              <div className="text-destructive">this username not ablible</div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type={"email"} placeholder="dhiraj@gmail.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type={"password"} placeholder="abc@123" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className={"w-full"}>
              {loading ? <Loader2 className="size-6 animate-spin" /> : "SignUp"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </TabsContent>
  );
}

export default SignUp;
