import { useSearchParams } from "react-router";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  totalPages: number;
  limit?: number;
}

export default function CustomPagination({ totalPages }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryPage = searchParams.get("page") || "1";
  const page = isNaN(Number(queryPage)) ? 1 : Number(queryPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button
        variant="outline"
        size="sm"
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>
      {Array.from({ length: totalPages }).map((_, idx) => (
        <Button
          variant={page === idx + 1 ? "default" : "outline"}
          key={`pabuton-${idx}`}
          size="sm"
          onClick={() => handlePageChange(idx + 1)}
        >
          {idx + 1}
        </Button>
      ))}

      <Button
        variant="outline"
        size="sm"
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
