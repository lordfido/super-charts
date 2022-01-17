/**
 * Compares two different dates and check if there is
 * more than a specified amount of time between them.
 * If so, this function will return false.
 * 
 * @param startDate First Range's element
 * @param endDate Second Range's element
 * @param diff Time difference in MS
 * @returns boolean
 */
export const isValidRange = (startDate: Date, endDate: Date, diff: number) => {
  const difference = startDate.getTime() - endDate.getTime();

  return (
    (difference >= 0 && difference <= diff) ||
    (difference < 0 && -difference <= diff)
  );
};
