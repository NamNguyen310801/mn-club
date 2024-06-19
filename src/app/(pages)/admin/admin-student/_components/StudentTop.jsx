"use client";
import { ButtonImportData } from "@/components/_personal";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
export default function StudentTop() {
  const [progress, setProgress] = useState(0);
  const onImport = () => {
    console.log(data);
    toast("submit");
  };
  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Dialog className="bg-black/20">
      <div className="w-full flex p-4 items-center justify-between">
        <DialogTrigger asChild>
          <ButtonImportData />
        </DialogTrigger>
      </div>
      <DialogContent className="flex flex-col gap-y-2 lg:min-w-[620px] min-h-[550px] bg-yellow-50/90">
        <h2 className="text-center font-bold text-xl">Import Sinh viên</h2>
        <div className="flex flex-col w-full items-start gap-y-3 mt-8">
          <Label htmlFor="import_student_data" className="text-right">
            File Data Student
          </Label>
          <Input
            id="import_student_data"
            type="file"
            placeholder={"File UpLoad"}
            className="border-b"
            // value={value}
            // onChange={(e) => onChange(e)}
          />
        </div>
        <Progress value={progress} className="w-full mt-4" />
        <div
          className="w-full flex items-center justify-center mt-auto"
          onClick={onImport}>
          <Button className="bg-blue-600 hover:bg-blue-500 w-1/2">
            Import
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
