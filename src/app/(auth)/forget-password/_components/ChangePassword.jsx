import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ChangePassword({ data, setData }) {
  return (
    <>
      <div className="w-full grid grid-cols-3 items-center gap-x-2">
        <Label htmlFor="forget_new_password" className="font-semibold">
          Mật khẩu mới:
        </Label>
        <Input
          id="forget_new_password"
          value={data?.newPassword || ""}
          placeholder="Nhập mật khẩu mới!"
          className="border col-span-2"
          onChange={(e) =>
            setData((pre) => ({ ...pre, newPassword: e.target.value }))
          }
        />
      </div>
      <div className="w-full grid grid-cols-3 items-center gap-x-2">
        <Label htmlFor="forget_cf_new_password" className="font-semibold">
          Xác nhận:
        </Label>
        <Input
          id="forget_cf_new_password"
          value={data?.cfNewPassword || ""}
          placeholder="Xác nhận mật khẩu mới!"
          className="border col-span-2"
          onChange={(e) =>
            setData((pre) => ({ ...pre, cfNewPassword: e.target.value }))
          }
        />
      </div>
    </>
  );
}
