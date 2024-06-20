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
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LoaderIcon } from "lucide-react";
import { registerUserAPI } from "@/app/_utils/services/auth.api";
import { VerifyAccountAlert } from "@/components/_personal";

export default function CreateAccount() {
  const [loader, setLoader] = useState(false);
  const [open, setOpen] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    student_code: "",
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

  const router = useRouter();
  const onCreateAccount = async (dt) => {
    console.log(dt);
    if (dt?.password !== dt?.confirmPassword) {
      toast("Mật khẩu không khớp!");
    } else {
      setLoader(true);
      const res = await registerUserAPI(dt);
      if (res?.status == 200) {
        sessionStorage.setItem("user", JSON.stringify(res.data.user));
        sessionStorage.setItem(
          "access_token",
          JSON.stringify(res?.access_token)
        );
        sessionStorage.setItem(
          "refresh_token",
          JSON.stringify(res?.refresh_token)
        );
        toast("Đăng ký tài khoản thành công!");
        setLoader(false);
        // setTimeout(() => {
        //   setOpen(true);
        // }, 300);
      } else {
        toast("Lỗi khi đăng ký!");
        setLoader(false);
      }
    }
  };

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
      <div className="w-full max-w-[460px] flex flex-col mx-auto items-center px-2">
        <h2 className="text-2xl md:text-3xl font-bold">
          Đăng ký tài khoản mới
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onCreateAccount)}
            className="flex flex-col gap-y-4 w-full md:mt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Họ và Tên</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Chúng tôi nên gọi bạn là gì?"
                      className="border-b-2 border-black/20 outline-none"
                    />
                  </FormControl>
                  {errName && (
                    <FormDescription className="text-red-500">
                      Học và tên cần ít nhất 6 ký tự!
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
                      placeholder="you@gmail.com"
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
              name="student_code"
              render={({ field }) => (
                <FormItem className="space-y-2 ">
                  <FormLabel>Mã sinh viên</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Mã sinh viên của bạn!"
                      type="text"
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
                      placeholder=""
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="space-y-2 relative">
                  <FormLabel>Xác nhận mật khẩu</FormLabel>
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
              {loader ? <LoaderIcon className="animate-spin" /> : "Đăng ký"}
            </Button>
          </form>
        </Form>
        <span className="w-full mt-6 md:text-center">
          Bạn đã có tải khoản?
          <Link href={"/sign-in"} className="text-orange-700">
            {" "}
            Đăng nhập
          </Link>
        </span>
      </div>
      {/* <VerifyAccountAlert
        open={open}
        onOpenChange={setOpen}
        onContinue={() => router.push("/verify-account")}
      /> */}
    </div>
  );
}
