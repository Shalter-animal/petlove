interface Props {
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function Button(props: Props) {
  const { children, variant = "primary", className = "" } = props;

  const variants = {
    primary: "bg-primary text-white hover:bg-[#FFF4DF] hover:text-primary",
    secondary: "bg-secondary text-primary hover:bg-[#FBE7C1]",
  };
  return (
    <div
      className={`${variants[variant]} ${className} "h-[42px] w-[150px] rounded-4xl flex items-center justify-center cursor-progres transition duration-300"`}
    >
      {children}
    </div>
  );
}
