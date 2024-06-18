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
import { validateEmail } from "@/app/_utils/functions/funtions";
import Image from "next/image";
export default function SignIn() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isPassword, setIsPassword] = useState(true);
  const checkEmail = validateEmail(data.email);
  const form = useForm({
    defaultValues: data,
  });

  function onSubmit(data) {
    console.log(checkEmail);
    toast("submit");
  }

  return (
    <div className="w-full h-auto flex flex-col px-2 md:px-0 mx-auto justify-center items-center min-h-screen">
      <Link href={"/"} className="w-full flex justify-center items-center">
        <Image
          src={"/next.svg"}
          width={150}
          height={96}
          unoptimized
          alt="logo"
          className="h-12 md:h-20 "
        />
      </Link>
      <div className="w-full max-w-[460px] flex flex-col mx-auto items-center px-2 gap-y-1">
        <h2 className="text-2xl md:text-3xl font-bold">
          Đăng nhập với chúng tôi
        </h2>
        <Button className="bg-white border text-black border-primary w-full hover:bg-[#4d4c4c] hover:opacity-50 hover:text-white mt-4 text-base rounded-full flex items-center justify-center gap-x-2 md:py-6">
          <FcGoogle className="text-2xl" />
          <span>Tiếp tục với Google</span>
        </Button>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-4 w-full mt-2 md:mt-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Tên đăng nhập</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Email của bạn!"
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
                  <FormLabel>Mật khẩu</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="border-b-2 border-black/20 outline-none"
                      placeholder="Mật khẩu của bạn!"
                      type={isPassword ? "password" : "text"}
                    />
                  </FormControl>
                  <FormDescription className="text-primary">
                    Mật khẩu phải có ít nhất 8 ký tự.
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
              className="bg-blue-500 hover:bg-blue-600 w-full mt-4 text-base rounded-full md:py-6">
              Đăng nhập
            </Button>
          </form>
        </Form>
        <Link
          href={"/forget-password"}
          className="text-gray-600 w-full md:text-center">
          Quên mật khẩu!
        </Link>
        <span className="w-full mt-2 md:text-center">
          Bạn chưa có tài khoản?
          <Link href={"/create-account"} className="text-orange-600">
            {" "}
            Đăng ký
          </Link>
        </span>
      </div>
    </div>
  );
}
