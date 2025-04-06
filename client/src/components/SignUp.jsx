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
import { useForm } from "react-hook-form";

function SignUp() {
  const [loading, setLoading] = useState(false);
  const [usernameLoading, setUsernameLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });


  const handleSignup = async (userInput) => {};

  return (
    <TabsContent value="signup">
      <form onSubmit={handleSubmit(handleSignup)}>
        <Card>
          <CardHeader>
            <CardTitle>Signup</CardTitle>
            <CardDescription>
              Fill out the form below to create your account. Ensure all fields
              are completed accurately.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-1 ">
              <Label htmlFor="username">Username</Label>
              <div className="relative">
                <Input
                  id="username"
                  type={"text"}
                  placeholder="dhiraj"
                  {...register("username", {
                    required: true,
                    maxLength: 50,
                    pattern: {
                      value: /^[a-zA-Z0-9_]+$/,
                      message: "Invalid username",
                    },
                  })}
                  aria-invalid={errors.username ? "true" : "false"}
                />
                <span
                  className={`absolute top-1/2 right-2 -translate-y-1/2 ${
                    usernameLoading ? "" : "hidden"
                  }`}
                >
                  <Loader2 className="animate-spin size-5" />
                </span>
              </div>
              {errors.username && (
                <p className="text-destructive">{errors.username.message}</p>
              )}
            </div>
            {/* email  */}
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type={"email"}
                placeholder="dhiraj@gmail.com"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p className="text-destructive">Invalid Email</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type={"password"}
                {...register("password", {
                  required: true,
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
                    message:
                      "Password must be 6+ chars, include upper, lower, number, and special character",
                  },
                })}
                placeholder="abc@123"
                aria-invalid={errors.password ? "true" : "false"}
              />
              {errors.password && (
                <p className="text-destructive">{errors.password.message}</p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button className={"w-full"} disabled={loading} type="submit">
              {loading ? <Loader2 className="size-6 animate-spin" /> : "SignUp"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </TabsContent>
  );
}

export default SignUp;
