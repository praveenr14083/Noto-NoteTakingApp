import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center py-10 text-muted-foreground">
      <Loader2 className="animate-spin w-6 h-6 mr-2" />
      <span>Loading...</span>
    </div>
  );
}
