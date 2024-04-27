import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="my-4 flex flex-col gap-y-4  space-y-3 p-2 lg:container">
      <Skeleton className="h-52 w-full rounded bg-slate-300 lg:h-[530px]" />
      <div className="hidden gap-x-4 lg:flex">
        <Skeleton className="h-20 flex-1 bg-slate-300" />
        <Skeleton className="h-20 flex-1 bg-slate-300" />
        <Skeleton className="h-20 flex-1 bg-slate-300" />
        <Skeleton className="h-20 flex-1 bg-slate-300" />
        <Skeleton className="h-20 flex-1 bg-slate-300" />
        <Skeleton className="h-20 flex-1 bg-slate-300" />
        <Skeleton className="h-20 flex-1 bg-slate-300" />
        <Skeleton className="h-20 flex-1 bg-slate-300" />
        <Skeleton className="h-20 flex-1 bg-slate-300" />
        <Skeleton className="h-20 flex-1 bg-slate-300" />
        <Skeleton className="h-20 flex-1 bg-slate-300" />
        <Skeleton className="h-20 flex-1 bg-slate-300" />
      </div>
      <div className="flex gap-x-4 lg:hidden">
        <Skeleton className="h-20 flex-1 bg-blue-400" />
        <Skeleton className="h-20 flex-1 bg-blue-400" />
        <Skeleton className="h-20 flex-1 bg-blue-400" />
        <Skeleton className="h-20 flex-1 bg-blue-400" />
      </div>
    </div>
  );
}
