"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { InputOTPConfirm, Success } from "@/components/_personal";
import { Button } from "@/components/ui/button";
import { verifyAccountAPI } from "@/app/_utils/services/auth.api";
import { toast } from "sonner";
export default function VerifyAccount() {
  const router = useRouter();
  const [otp, setOTP] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const handleSubmit = async () => {
    if (otp?.length === 6) {
      const res = await verifyAccountAPI(otp);
      if (res) {
        setActiveStep(1);
        setTimeout(() => {
          router.push("/sign-in");
        }, 500);
      } else {
        toast("Xác minh không thành công");
      }
    } else {
      toast("Mã OTP không hợp lệ");
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
      <h2 className="text-2xl md:text-3xl font-bold my-4">
        Xác minh tài khoản
      </h2>

      <div className="w-full max-w-[460px] flex flex-col mx-auto items-center justify-center px-2 min-h-[350px] gap-y-3">
        {activeStep === 0 && <InputOTPConfirm value={otp} setValue={setOTP} />}
        {activeStep === 1 && <Success />}
        {activeStep === 0 && (
          <div className="justify-center mt-3 flex items-center w-full">
            <Button onClick={handleSubmit}>Xác nhận</Button>
          </div>
        )}
        <Link href={"/sign-in"} className="text-blue-600 text-center">
          Quay lại đăng nhập
        </Link>
      </div>
    </div>
  );
}
