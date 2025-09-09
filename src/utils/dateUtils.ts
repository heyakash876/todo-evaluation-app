export const startOfDay = (d: Date): Date => {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
};

export const endOfDay = (d: Date): Date => {
  const x = new Date(d);
  x.setHours(23, 59, 59, 999);
  return x;
};

export const isToday = (d: Date): boolean => {
  const now = new Date();
  return startOfDay(d).getTime() === startOfDay(now).getTime();
};

export const isInThisWeek = (d: Date): boolean => {
  const now = new Date();
  const day = now.getDay();
  const diffToMonday = (day + 6) % 7; // Monday=0
  const monday = startOfDay(new Date(now));
  monday.setDate(now.getDate() - diffToMonday);
  const sunday = endOfDay(new Date(monday));
  sunday.setDate(monday.getDate() + 6);
  const t = d.getTime();
  return t >= monday.getTime() && t <= sunday.getTime();
};

export const isInRange = (d: Date, start?: Date | null, end?: Date | null): boolean => {
  const t = d.getTime();
  const s = start ? startOfDay(start).getTime() : -Infinity;
  const e = end ? endOfDay(end).getTime() : Infinity;
  return t >= s && t <= e;
};