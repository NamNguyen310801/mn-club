"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import ChangePassword from "./_components/ChangePassword";
import { Step, StepLabel, Stepper } from "@mui/material";
import { InputOTPConfirm } from "@/components/_personal";
import { validateEmail } from "@/app/_utils/functions/funtions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function ForgetPassword() {
  const steps = ["Nhập Email của bạn", "Nhập mã OTP", "Thay đổi mật khẩu"];
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [data, setData] = useState({
    newPassword: "",
    cfNewPassword: "",
  });
  const handleNext = () => {
    if (activeStep === 0) {
      if (validateEmail(email)) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        toast("Email hợp lệ");
      } else {
        toast("Email không hợp lệ");
      }
    }
    if (activeStep === 1) {
      if (otp) {
        toast("OTP hợp lệ");
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } else {
        toast("OTP không hợp lệ");
      }
    }
    if (activeStep === 2) {
      if (validateEmail(email)) {
        toast("Thay đổi mật khẩu thành công!");
        setTimeout(() => {
          router.push("/sign-in");
        }, 500);
      } else {
        toast("Thay đổi mật khẩu không thành công!");
      }
    }
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
      <h2 className="text-2xl md:text-3xl font-bold my-4">Quên mật khẩu</h2>
      <Stepper
        activeStep={activeStep}
        className="w-full lg:max-w-[1100px] md:px-6 lg:px-10 mt-4">
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={index} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div className="w-full max-w-[460px] flex flex-col mx-auto items-center justify-center px-2 min-h-[450px] gap-y-3">
        {activeStep === 0 && (
          <div className="w-full flex gap-x-3 items-center">
            <Label htmlFor="forget_email" className="font-semibold">
              Email
            </Label>
            <Input
              id="forget_email"
              value={email || ""}
              placeholder="Nhập Email của bạn!"
              className="border"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        )}
        {activeStep === 1 && <InputOTPConfirm value={otp} setValue={setOTP} />}
        {activeStep === 2 && <ChangePassword data={data} setData={setData} />}

        <div
          className={`${
            activeStep > 0 ? "justify-between" : "justify-center"
          } mt-3 flex items-center w-full`}>
          {activeStep > 0 && <Button onClick={handleBack}>Quay lại</Button>}
          <Button
            disabled={
              (activeStep === 0 && !Boolean(email)) ||
              (activeStep === 1 && !Boolean(otp))
            }
            onClick={handleNext}>
            Tiếp tục
          </Button>
        </div>
        <Link href={"/sign-in"} className="text-blue-600 text-center">
          Quay lại đăng nhập
        </Link>
      </div>
    </div>
  );
}
