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
    <div className={`flex w-full items-center gap-x-1 ${className}`}>
      {type !== "file" ? (
        <>
          <Label htmlFor={id} className="text-right min-w-20">
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
        <>
          <Label className="text-right min-w-20">{name}</Label>
          <Input
            id={id}
            type="file"
            className="border-b cursor-pointer hidden"
            onChange={(e) => onChange(e)}
          />
          <div className="flex items-center">
            {value && (
              <img
                src={value}
                alt={name}
                className="w-10 h-10 rounded-full object-center object-cover"
              />
            )}
            <Label htmlFor={id} className="ml-4 min-w-20 cursor-pointer">
              Chọn
            </Label>
          </div>
        </>
      )}
    </div>
  );
}
