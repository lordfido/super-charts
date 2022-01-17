import React from 'react';
import ReactSelect, { ActionMeta as AM, MultiValue as MV, SingleValue as SV, } from 'react-select';
import {
  DROPDOWN_BG,
  DROPDOWN_COLOR,
  DROPDOWN_ITEM_BG,
  DROPDOWN_ITEM_BG_HOVER,
  DROPDOWN_ITEM_COLOR,
  INPUT_BG,
  INPUT_BORDER,
  INPUT_BORDER_HOVER
} from '../../../styles';

export interface DropdownItem {
  label: string;
  value: string;
}

export type ActionMeta = AM<DropdownItem>;
export type MultipleValue = readonly DropdownItem[];
export type SingleValue = DropdownItem;

interface Props {
  isMultiple?: boolean;
  onChange: (newValue: SingleValue | MultipleValue, actionMeta: ActionMeta) => void;
  options: DropdownItem[];
  placeholder?: string;
}

const Dropdown: React.FC<Props> = ({ isMultiple = false, onChange, options, placeholder }) => {
  const handleChange = (newValue: SV<DropdownItem> | MV<DropdownItem>, actionMeta: AM<DropdownItem>) => {
    if (!isMultiple && !(newValue instanceof Array) && newValue) {
      onChange(newValue, actionMeta);
    }

    if (isMultiple && (newValue instanceof Array)) {
      onChange(newValue, actionMeta);
    }
  }

  return (
    <ReactSelect
      className="Dropdown"
      isMulti={ isMultiple }
      onChange={ handleChange }
      options={ options }
      placeholder={ placeholder }
      styles={{
        control: (base, props) => ({
          ...base,
          backgroundColor: INPUT_BG,
          border: `1px solid ${( props.isFocused || props.menuIsOpen) ? INPUT_BORDER_HOVER : INPUT_BORDER }`,
          borderRadius: '0.4rem',
          boxShadow: 'none',
          height: 40,
          fontSize: '1.2rem',
          maxWidth: 190,

          ':hover': {
            borderColor: INPUT_BORDER_HOVER,
          }
        }),
        valueContainer: (base) => ({
          ...base,
          color: DROPDOWN_ITEM_COLOR,
        }),
        placeholder: (base) => ({
          ...base,
          color: 'inherit',
        }),
        indicatorsContainer: (base) => ({
          ...base,
          color: DROPDOWN_COLOR,
        }),
        indicatorSeparator: () => ({
          display: 'none',
        }),
        dropdownIndicator: (base) => ({
          ...base,
          color: 'inherit'
        }),
        menu: (base) => ({
          ...base,
          border: 'none',
          boxShadow: 'none',
          borderRadius: 0,
          backgroundColor: DROPDOWN_BG,
          minWidth: 240,
          width: 240,
        }),
        menuList: (base, props) => ({
          ...base,
          border: `1px solid ${INPUT_BORDER }`,
          borderRadius: '0.4rem',
          paddingBottom: 0,
          paddingTop: props.isMulti ? undefined : 0,
        }),
        option: (base, props) => ({
          ...base,
          alignItems: 'center',
          backgroundColor: DROPDOWN_ITEM_BG,
          borderBottom: `1px solid ${ INPUT_BORDER }`,
          color: DROPDOWN_ITEM_COLOR,
          cursor: 'pointer',
          display: 'flex',
          fontSize: '1.2rem',
          lineHeight: 1.4,
          minHeight: 36,
          padding: '0 1.2rem',
          wordBreak: 'break-word',
          overflow: 'hidden',

          ':hover': {
            backgroundColor: DROPDOWN_ITEM_BG_HOVER,
          },

          ':first-child': {
            borderTop: props.isMulti ? `1px solid ${ INPUT_BORDER }` : undefined,
          },
          ':last-child': {
            borderBottom: props.isMulti ? undefined : 'none',
          }
        })
      }}
    />
  );
};

export default Dropdown;
