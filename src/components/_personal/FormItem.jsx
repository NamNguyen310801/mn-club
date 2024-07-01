import { Label } from "../ui/label";
import { Input } from "../ui/input";

export default function FormItem({
  name,
  id,
  value,
  placeHolder = "",
  onChange,
  type = "text",
  className = "",
}) {
  return (
    <div className={`flex flex-col w-full items-start gap-y-3 ${className}`}>
      {type !== "file" ? (
        <>
          <Label htmlFor={id} className="text-right">
            {name}
          </Label>
          <Input
            id={id}
            type={type}
            placeholder={placeHolder}
            className="border-b"
            value={value}
            onChange={(e) => onChange(e)}
          />
        </>
      ) : (
        <div className="flex items-start gap-x-3 w-full">
          <Label className="text-right">{name}</Label>
          <Input
            id={id}
            type="file"
            className="border-b cursor-pointer hidden"
            onChange={(e) => onChange(e)}
          />
          <div className={`flex ${value ? "items-center" : "items-start"}`}>
            {value &&
              (id === "banner" ? (
                <img
                  src={value}
                  alt={name}
                  className="h-[90px] w-[160px] rounded-md object-cover"
                />
              ) : (
                <img
                  src={value}
                  alt={name}
                  className="w-10 h-10 rounded-full object-center object-cover"
                />
              ))}
            <Label htmlFor={id} className="ml-3 min-w-20 cursor-pointer">
              Chọn
            </Label>
          </div>
        </div>
      )}
    </div>
  );
}
