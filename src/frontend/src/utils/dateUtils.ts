/**
 * Formats a nanosecond timestamp (bigint from IC) to a human-readable date string
 */
export function formatTimestamp(nanoseconds: bigint | number): string {
  const ms =
    typeof nanoseconds === "bigint"
      ? Number(nanoseconds / 1_000_000n)
      : Math.floor(nanoseconds / 1_000_000);
  const date = new Date(ms);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Formats a nanosecond timestamp to a short date+time string
 */
export function formatTimestampShort(nanoseconds: bigint | number): string {
  const ms =
    typeof nanoseconds === "bigint"
      ? Number(nanoseconds / 1_000_000n)
      : Math.floor(nanoseconds / 1_000_000);
  const date = new Date(ms);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
