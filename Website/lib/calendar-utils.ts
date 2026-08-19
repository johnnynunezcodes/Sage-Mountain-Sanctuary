// Small, dependency-free date-math helpers shared by any calendar UI on the
// site (tour booking, events calendar, etc). Deliberately hand-rolled instead
// of pulling in a date library.

export function startOfDay(date: Date) {
  const d = new Date(date)
  d.setHours(0, 0, 0, 0)
  return d
}

export function addDays(date: Date, days: number) {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d
}

export function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

// Cells for a month view: an array of Dates (or null for the leading/trailing
// padding needed to fill out full weeks), Sunday-first.
export function monthGrid(year: number, month: number) {
  const firstOfMonth = new Date(year, month, 1)
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells: (Date | null)[] = new Array(firstOfMonth.getDay()).fill(null)
  for (let day = 1; day <= daysInMonth; day++) cells.push(new Date(year, month, day))
  while (cells.length % 7 !== 0) cells.push(null)
  return cells
}

// Parses a "YYYY-MM-DD" string as a local date (avoids the UTC-midnight
// shift you get from `new Date("2026-09-12")` in negative-UTC timezones).
export function parseIsoDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number)
  return new Date(year, month - 1, day)
}
