import { successIMG } from "@/assets";
import Image from "next/image";
export default function Success() {
  return (
    <div className="w-full h-full">
      <Image
        src={successIMG}
        alt="success"
        unoptimized
        width={300}
        height={300}
        className="w-full h-full bg-center bg-cover"
      />
    </div>
  );
}
