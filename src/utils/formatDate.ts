export function formatDate(date: Date | string, type: "full" | "short" = "full") {
  const d = typeof date === "string" ? new Date(date) : date;

  if (type === "short") {
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  }

  return d.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
