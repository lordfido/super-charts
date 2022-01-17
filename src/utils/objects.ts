import { DropdownItem } from "../components/Forms/Dropdown";

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const getEnumLabelFromValue = <E>(str: E): string =>
  (str as unknown as string).split('-')
    .map((word: string) => word.toUpperCase())
    .join(' ')

export const getEnumValueFromLabel = <E>(str?: string): E =>
  str?.toLowerCase().replace(/ /g, '-') as unknown as E;

export const getDropdownItemsFromEnum = <E>(object: E): DropdownItem[] =>
  Object.values(object).map(val => ({
    label: getEnumLabelFromValue(val),
    value: val
  }))
