import { getLargestAvailableTimeUnit } from "../../utils/dates";

export const formatTick = (value: number, units: string): string => {
  if (units === 's') {
    return getLargestAvailableTimeUnit(value);
  }

  return `${ value }${ units }`;
}


interface TooltipProps {
  color: string;
  dataKey: string;
  fill: string;
  name: string;
  unit: string;
  value: number;
}

export const formatTooltip = (value: number, name: string, { unit }: TooltipProps) => {
  if (unit === 's') {
    return getLargestAvailableTimeUnit(value);
  }

  return value
};
