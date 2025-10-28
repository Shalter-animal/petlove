import { cn } from "@/lib/utils";
import { PaginationItem, PaginationLink } from "./ui/pagination";

interface PaginationButtonProps {
  page: number | "...";
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export function PaginationButton(props: PaginationButtonProps) {
  const { page, currentPage, totalPages, onChange } = props;

  if (page === "...") {
    const isRightDots = currentPage < totalPages - 2;
    const targetPage = isRightDots
      ? Math.min(currentPage + 2, totalPages)
      : Math.max(currentPage - 2, 1);
    return (
      <PaginationItem>
        <PaginationLink href="#" onClick={() => onChange(targetPage)}>
          ...
        </PaginationLink>
      </PaginationItem>
    );
  }

  return (
    <PaginationItem key={page}>
      <PaginationLink
        href="#"
        isActive={currentPage === page}
        className={cn(currentPage === page ? "bg-primary text-white" : "")}
        onClick={() => onChange(page)}
      >
        {page}
      </PaginationLink>
    </PaginationItem>
  );
}
