import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
export default function InputOTPConfirm({ value, setValue }) {
  return (
    <div className="space-y-2 flex flex-col items-center justify-center">
      <InputOTP
        className=""
        maxLength={6}
        value={value}
        onChange={(value) => setValue(value)}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <div className="text-center text-sm">
        {value === "" ? (
          <>Nhập mã OTP đã được gửi về email của bạn!.</>
        ) : (
          <>OTP: {value}</>
        )}
      </div>
    </div>
  );
}
