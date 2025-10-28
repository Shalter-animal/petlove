import { getPaginationPages } from "@/utils/getPaginationPages";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationNextEnd,
  PaginationPrevious,
  PaginationPreviousEnd,
} from "./ui/pagination";
import { cn } from "@/lib/utils";
import { PaginationButton } from "./PaginationButton";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export function MainPagination(props: PaginationProps) {
  const { currentPage, totalPages, onChange } = props;

  const pages = getPaginationPages(currentPage, totalPages);

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPreviousEnd
            href="#"
            onClick={() => onChange(Math.max(currentPage - 1, 1))}
            className={cn(
              currentPage === 1 && "opacity-50 pointer-events-none"
            )}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => onChange(Math.max(currentPage - 1, 1))}
            className={cn(
              currentPage === 1 && "opacity-50 pointer-events-none"
            )}
          />
        </PaginationItem>

        {pages.map((p, i) => (
          <PaginationButton
            key={typeof p === "number" ? p : `dots-${i}`}
            page={p}
            currentPage={currentPage}
            totalPages={totalPages}
            onChange={onChange}
          />
        ))}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => onChange(Math.min(currentPage + 1, totalPages))}
            className={cn(
              currentPage === totalPages && "opacity-50 pointer-events-none"
            )}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationNextEnd
            href="#"
            onClick={() => onChange(Math.min(currentPage + 1, totalPages))}
            className={cn(
              currentPage === totalPages && "opacity-50 pointer-events-none"
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
