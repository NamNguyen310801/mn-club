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
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
export default function CreateAccount() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isPassword, setIsPassword] = useState(true);
  const [isCFPassword, setIsCFPassword] = useState(true);
  const errName = data?.name && data?.name?.length < 6;
  const errPassword = data?.password === data?.confirmPassword;
  const form = useForm({
    defaultValues: data,
  });

  function onSubmit(data) {
    console.log(data);
    if (data?.password !== data?.confirmPassword) {
      toast("err");
    } else {
      toast("submit");
    }
  }

  return (
    <div className="w-full h-auto flex flex-col px-2 md:px-0 mx-auto justify-center items-center">
      <div className="w-full text-center">Logo</div>
      <div className="w-full max-w-[460px] flex flex-col mx-auto items-center">
        <h2 className="text-2xl md:text-3xl font-bold">Create an account</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-4 w-full md:mt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={data?.name}
                      onChange={(e) =>
                        setData((pre) => ({ ...pre, name: e.target.value }))
                      }
                      placeholder="What should we call you?"
                      className="border-b-2 border-black/20 outline-none"
                    />
                  </FormControl>
                  {errName && (
                    <FormDescription className="text-red-500">
                      Name must be at least 6 characters.
                    </FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-2 ">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="you@domain.com"
                      type="email"
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="space-y-2 relative">
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="border-b-2 border-black/20 outline-none"
                      placeholder=""
                      type={isCFPassword ? "password" : "text"}
                    />
                  </FormControl>
                  {isCFPassword ? (
                    <AiOutlineEyeInvisible
                      onClick={() => setIsCFPassword(false)}
                      className="absolute bottom-2 right-4 cursor-pointer text-2xl text-primary"
                    />
                  ) : (
                    <AiOutlineEye
                      onClick={() => setIsCFPassword(true)}
                      className="absolute bottom-2 right-4 cursor-pointer text-2xl text-primary"
                    />
                  )}

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-orange-600 w-full hover:bg-orange-700 mt-4 text-base md:py-6">
              Create account
            </Button>
          </form>
        </Form>
        <span className="w-full mt-6 md:text-center">
          Already a member?
          <Link href={"/sign-in"} className="text-orange-700">
            {" "}
            Log in
          </Link>
        </span>
      </div>
    </div>
  );
}
