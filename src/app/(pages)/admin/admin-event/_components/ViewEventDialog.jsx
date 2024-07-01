import { ButtonView, EventDetailItem } from "@/components/_personal";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
export default function ViewEventDialog({ dataRow }) {
  return (
    <Dialog className="bg-black/20">
      <div className="w-full flex p-4 items-center justify-between">
        <DialogTrigger asChild>
          <ButtonView />
        </DialogTrigger>
      </div>
      <DialogContent className="flex flex-col gap-y-2 lg:container min-h-[550px] max-h-[800px] bg-blue-100 ">
        <div className="w-full h-full overflow-y-auto custom-scrollbar">
          <EventDetailItem dataRow={dataRow} />
          <EventDetailItem dataRow={dataRow} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
