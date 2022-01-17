import { toDecimals } from "../formatters";

export const getDefaultDateRange = () => {
  const today = new Date(Date.now());
  const daysAgo = new Date(today.getTime() - (13 * 24 * 60 * 60 * 1000));

  return {
    startDate: daysAgo,
    endDate: today,
  }
}

export const getLargestAvailableTimeUnit = (seconds: number) => {
  const maxSeconds = 60;
  const maxMinutes = maxSeconds * 60;
  const maxHours = maxMinutes * 24;
  const maxDays = maxHours * 30;

  if (seconds <= maxSeconds) {
    return `${toDecimals(seconds, 1, 0)}s`;
  }

  if (seconds <= maxMinutes) {
    return `${toDecimals(seconds / 60, 1, 0)} min`;
  }

  if (seconds <= maxHours) {
    return `${toDecimals(seconds / 60 / 60, 1, 0)} h`;
  }

  if (seconds <= maxDays) {
    const days = toDecimals(seconds / 60 / 60 / 24, 0);
    const daysInMs = Number(days) * maxHours;
    const hoursInMs = seconds - daysInMs;
    const hours = toDecimals(hoursInMs / 60 / 60, 1, 0);

    return `${days} days${ Number(hours) > 0 ? `, ${hours} h` : ''}`;
  }

  return `${toDecimals(seconds / 60 / 60 / 24 / 30, 1, 0)} months`;
};
