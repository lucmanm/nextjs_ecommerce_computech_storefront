import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 rounded-lg bg-white p-2"
        >
          <Skeleton className="h-[300px] w-[200] rounded bg-blue-950" />
          <Skeleton className="h-5 w-1/4 bg-blue-950" />
          <Skeleton className="h-5 w-full  bg-blue-950" />
          <Skeleton className="h-5 w-full  bg-blue-950" />
          <Skeleton className="h-5 w-1/5  bg-blue-950" />
          <div className="flex justify-center gap-x-4">
            <Skeleton className="h-8 w-8 rounded-full  bg-blue-950" />
            <Skeleton className="h-8 w-8 rounded-full  bg-blue-950" />
            <Skeleton className="h-8 w-8 rounded-full  bg-blue-950" />
          </div>
        </div>
      ))}
    </section>
  );
}
