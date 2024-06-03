"use client";
import { useForm } from "react-hook-form";
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
import { toast } from "sonner";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
export default function SignIn() {
  const [data, setData] = useState({
    email_name: "",
    password: "",
  });
  const [isPassword, setIsPassword] = useState(true);

  const form = useForm({
    defaultValues: data,
  });

  function onSubmit(data) {
    console.log(data);
    toast("submit");
  }

  return (
    <div className="w-full h-auto flex flex-col px-2 md:px-0 mx-auto justify-center items-center">
      <div className="w-full text-center">Logo</div>
      <div className="w-full max-w-[460px] flex flex-col mx-auto items-center">
        <h2 className="text-2xl md:text-3xl font-bold">Login</h2>
        <Button className="bg-white border text-black border-primary w-full hover:bg-[#4d4c4c] hover:opacity-50 hover:text-white mt-4 text-base rounded-full flex items-center justify-center gap-x-2 md:py-6">
          <FcGoogle className="text-2xl" />
          <span>Continue with Google</span>
        </Button>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-4 w-full md:mt-4">
            <FormField
              control={form.control}
              name="email_name"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Your email or userName!"
                      className="border-b-2 border-black/20 outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-2 relative">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="border-b-2 border-black/20 outline-none"
                      placeholder=""
                      type={isPassword ? "password" : "text"}
                    />
                  </FormControl>
                  <FormDescription className="text-primary">
                    Must be at least 8 characters.
                  </FormDescription>
                  {isPassword ? (
                    <AiOutlineEyeInvisible
                      onClick={() => setIsPassword(false)}
                      className="absolute bottom-10 right-4 cursor-pointer text-2xl text-primary"
                    />
                  ) : (
                    <AiOutlineEye
                      onClick={() => setIsPassword(true)}
                      className="absolute bottom-10 right-4 cursor-pointer text-2xl text-primary"
                    />
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-[#666] opacity-50 w-full hover:bg-[#4d4c4c] mt-4 text-base rounded-full md:py-6">
              Login
            </Button>
          </form>
        </Form>
        <span className="w-full mt-6 md:text-center">
          Don’t have an account?
          <Link href={"/create-account"} className="text-orange-600">
            {" "}
            Create account
          </Link>
        </span>
      </div>
    </div>
  );
}
