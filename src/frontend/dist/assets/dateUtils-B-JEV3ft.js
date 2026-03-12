function formatTimestamp(nanoseconds) {
  const ms = typeof nanoseconds === "bigint" ? Number(nanoseconds / 1000000n) : Math.floor(nanoseconds / 1e6);
  const date = new Date(ms);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
function formatTimestampShort(nanoseconds) {
  const ms = typeof nanoseconds === "bigint" ? Number(nanoseconds / 1000000n) : Math.floor(nanoseconds / 1e6);
  const date = new Date(ms);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}
export {
  formatTimestampShort as a,
  formatTimestamp as f
};
