"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Google, Login } from "iconsax-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});
export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <main>
      <div className="container flex flex-col p-8 md:pt-12 items-center gap-4">
        <Card className="max-w-lg w-full">
          <CardHeader>
            <CardTitle className="text-2xl">Log in to your account</CardTitle>
            <CardDescription>Fill all fields</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your E-mail</FormLabel>
                      <FormControl>
                        <Input placeholder="user@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Type your password"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="space-x-2 w-full bs">
                  <Login variant="Linear" size={20} />
                  <span>Sing In</span>
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        <div className="flex justify-around gap-4">
          <Button
            className="w-16 p-0 h-16 flex items-center justify-center"
            variant={"ghost"}
          >
            <GitHubLogoIcon />
          </Button>
          <Button
            className="w-16 p-0 h-16 flex items-center justify-center"
            variant={"ghost"}
          >
            <Google variant="Bold" size={16} />
          </Button>
        </div>
      </div>
    </main>
  );
}
