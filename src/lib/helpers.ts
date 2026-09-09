const MADRID_TZ = "Europe/Madrid";

export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}

/** "8:46:19 AM" in Madrid local time. Intl handles the UTC offset and DST. */
export function formatTimeForMadrid(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: MADRID_TZ,
  }).format(date);
}

/** "CET" in winter, "CEST" in summer. */
export function getMadridTimeZoneName(date: Date): string {
  const part = new Intl.DateTimeFormat("en-GB", {
    timeZone: MADRID_TZ,
    timeZoneName: "short",
  })
    .formatToParts(date)
    .find((p) => p.type === "timeZoneName");
  return part?.value ?? "CET";
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
