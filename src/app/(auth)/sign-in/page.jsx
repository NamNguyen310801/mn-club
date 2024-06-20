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
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LoaderIcon } from "lucide-react";
import { signInAPI } from "@/app/_utils/services/auth.api";
import { validateEmail } from "@/app/_utils/functions/functions";
import { jwtDecode } from "jwt-decode";
import { getDetailUserAPI } from "@/app/_utils/services/user.api";
import { useDispatch } from "react-redux";
import { setJwtAuth, setUserAuth } from "@/app/_utils/store/auth.slice";
import { VerifyAccountAlert } from "@/components/_personal";
export default function SignIn() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isPassword, setIsPassword] = useState(true);
  const checkEmail = validateEmail(data.email);
  const form = useForm({
    defaultValues: data,
  });

  const router = useRouter();
  const onLoginAccount = async (dt) => {
    setLoader(true);
    const res = await signInAPI(dt);
    if (res?.status == 200) {
      if (res?.access_token && res?.refresh_token) {
        const decoded = jwtDecode(res.access_token);
        if (decoded?.id) {
          handleGetDetailsUser(
            decoded?.id,
            res?.access_token,
            res?.refresh_token
          );
        }
        sessionStorage.setItem(
          "access_token",
          JSON.stringify(res?.access_token)
        );
        sessionStorage.setItem(
          "refresh_token",
          JSON.stringify(res?.refresh_token)
        );
        toast("Đăng nhập thành công");
        setLoader(false);
        setTimeout(() => {
          router.push("/");
        }, 300);
      } else {
        toast("Lỗi khi đăng nhập");
        setLoader(false);
      }
    } else {
      toast("Lỗi khi đăng nhập");
      setLoader(false);
    }
  };
  const handleGetDetailsUser = async (id, accessToken, refreshToken) => {
    const res = await getDetailUserAPI(id, accessToken);
    dispatch(setUserAuth(res?.data));
    dispatch(
      setJwtAuth({
        access_token: accessToken,
        refresh_token: refreshToken,
      })
    );
  };
  // Login gg
  const onLoginWithGoogle = () => {};
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
        <Button
          onClick={onLoginWithGoogle}
          className="bg-white border text-black border-primary w-full hover:bg-[#4d4c4c] hover:opacity-50 hover:text-white mt-4 text-base rounded-full flex items-center justify-center gap-x-2 md:py-6">
          <FcGoogle className="text-2xl" />
          <span>Tiếp tục với Google</span>
        </Button>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onLoginAccount)}
            className="flex flex-col gap-y-4 w-full mt-2 md:mt-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Email</FormLabel>
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
              disabled={loader}
              className="bg-blue-500 hover:bg-blue-600 w-full mt-4 text-base rounded-full md:py-6">
              {loader ? <LoaderIcon className="animate-spin" /> : "Đăng nhập"}
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
      {/* <VerifyAccountAlert
        open={open}
        onOpenChange={setOpen}
        onContinue={() => router.push("/verify-account")}
      /> */}
    </div>
  );
}
