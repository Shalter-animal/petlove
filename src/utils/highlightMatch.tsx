export const highlightMatch = (text: string, query: string) => {
  if (!query.trim()) return text;

  const regex = new RegExp(`(${query})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark
        key={index}
        className="bg-yellow-200 text-black font-semibold rounded-sm"
      >
        {part}
      </mark>
    ) : (
      part
    )
  );
};
