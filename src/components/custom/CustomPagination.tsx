import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  totalPages: number;
  limit?: number;
}

export default function CustomPagination({ totalPages }: Props) {
  const page = 1;

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button variant="outline" size="sm" disabled={page === 1}>
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>
      {Array.from({ length: totalPages }).map((_, idx) => (
        <Button
          variant={page === idx + 1 ? "default" : "outline"}
          key={`pabuton-${idx}`}
          size="sm"
        >
          {idx + 1}
        </Button>
      ))}

      <Button variant="outline" size="sm" disabled={page === totalPages}>
        Next
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
