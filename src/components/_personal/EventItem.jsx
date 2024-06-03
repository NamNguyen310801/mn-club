export default function EventItem() {
  return (
    <div className="relative flex-shrink-0 flex flex-col gap-y-3">
      <div className="pt-[56.25%] block object-cover rounded-[16px] relative w-full group overflow-hidden">
        <img
          src={
            "https://images.unsplash.com/photo-1716980197262-ce400709bf0d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          className="h-full rounded-[16px] w-full absolute object-cover top-0 left-0 "
        />
      </div>
    </div>
  );
}
