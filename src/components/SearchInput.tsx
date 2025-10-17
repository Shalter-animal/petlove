"use client";

import { Search, X } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./ui/input-group";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SearchInputProps {
  className?: string;
  onSearchChange?: (value: string) => void;
}

export function SearchInput(props: SearchInputProps) {
  const { className, onSearchChange } = props;

  const [value, setValue] = useState("");

  const handleClear = () => {
    setValue("");
    onSearchChange?.("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
    onSearchChange?.(value);
  };

  return (
    <InputGroup className={cn("rounded-4xl h-10", className)}>
      <InputGroupInput
        placeholder="Search"
        className="text-sm font-medium"
        value={value}
        onChange={handleChange}
      />
      <InputGroupAddon align="inline-end" className="gap-1">
        {value && (
          <InputGroupButton
            variant="default"
            size="icon-sm"
            className="bg-transparent hover:bg-transparent cursor-pointer"
            onClick={handleClear}
          >
            <X size={16} color="black" />
          </InputGroupButton>
        )}
        <InputGroupButton
          variant={"default"}
          size={"icon-sm"}
          className="bg-transparent hover:bg-transparent cursor-pointer"
        >
          <Search size={60} color="black" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
