import { css } from "@emotion/react";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from "../../../assets/icons/Calendar";
import {
  DATEPICKER_ACTIONS_BG,
  DATEPICKER_DAY_BG,
  DATEPICKER_DAY_BG_ACTIVE,
  DATEPICKER_DAY_BG_SELECTED,
  DATEPICKER_DAY_COLOR,
  DATEPICKER_DAY_COLOR_ACTIVE,
  DATEPICKER_DAY_COLOR_DISABLED,
  DATEPICKER_DAY_COLOR_SELECTED,
  DATEPICKER_PANEL_BG,
  DATEPICKER_PANEL_COLOR,
  DATEPICKER_WEEKDAY_COLOR,
  ERROR_COLOR,
  INPUT_BORDER,
  INPUT_COLOR
} from "../../../styles";
import { getDefaultDateRange } from "../../../utils/dates";
import { isValidRange } from "../../../utils/validations";
import Button, { buttonStyles } from "../../Button";
import { formField } from "../styles";

const threeMonths = 1000 * 60 * 60 * 24 * 30 * 3;

const datePickerField = () => css`
  ${formField()}

  &.Datepicker {
    min-width: 278px;

    .react-datepicker-wrapper {
      .react-datepicker__input-container {
        align-items: center;
        display: flex;
        flex: 1;

        input {
          background: transparent;
          border: none;
          color: ${ INPUT_COLOR };
          flex: 1;
          padding: 10px;
          text-align: center;
        }
      }
      
      button.react-datepicker__close-icon {
        background: transparent;
        border-radius: 50%;
        color: inherit;
        color: rgb(133, 135, 150);
        height: 28px;
        font-size: 11px;
        margin: 4px;
        padding: 6px;
        position: initial;
        text-align: center;
        width: 28px;

        &:hover {
          background-color: ${ INPUT_BORDER };
        }

        ::after {
          background-color: transparent;
          border-radius: 0;
          color: inherit;
          display: inline-block;
          font-size: 24px;
          height: 14px;
          line-height: 8px;
          margin: 0 auto;
          margin-left: -1px;
          margin-top: 4px;
          padding: 0;
          vertical-align: top;
          width: 14px;
        }
      }
    }

    .react-datepicker {
      background-color: ${ DATEPICKER_PANEL_BG };
      border-color: ${ INPUT_BORDER };

      .react-datepicker__triangle {
        &::before {
          border-bottom-color: ${ INPUT_BORDER };
        }
        &::after {
          border-bottom-color: ${ DATEPICKER_PANEL_BG };
        }
      }

      .react-datepicker__header {
        background-color: transparent;
        border-bottom: none;
        padding: 0;
      }

      .react-datepicker__navigation {
        ${ buttonStyles() }
        top: 18px;
        width: 40px;

        > .react-datepicker__navigation-icon {
          height: 19px;
          width: 19px;

          &::before {
            border-color: currentColor;
            border-width: 1px 1px 0 0;
            left: 4px;
          }
        }
      }

      .react-datepicker__navigation--previous {
        left: 22px;
      }

      .react-datepicker__navigation--next {
        right: 22px;
      }

      .react-datepicker__current-month {
        color: ${ DATEPICKER_PANEL_COLOR };
        font-size: 1.2rem;
        font-weight: bolder;
        padding-top: 22px;
        padding-bottom: 37px;
      }

      .react-datepicker__day-names {
        margin-bottom: -2px;
        padding: 0 13px;
      }

      .react-datepicker__week,
      .react-datepicker__day {
        height: 29px;
      }
      
      .react-datepicker__week {
        align-items: center;
        display: flex;
        justify-content: center;
      }

      .react-datepicker__day-name,
      .react-datepicker__day {
        border-top: 1px solid ${ DATEPICKER_PANEL_BG };
        border-right: 1px solid ${ DATEPICKER_PANEL_BG };
        font-size: 1rem;
        font-weight: 300;
        margin: 0;
        width: 30px;
      }

      .react-datepicker__day-name {
        color: ${ DATEPICKER_WEEKDAY_COLOR };
      }

      .react-datepicker__day {
        align-items: center;
        background-color: ${ DATEPICKER_DAY_BG };
        border-radius: 0;
        color: ${ DATEPICKER_DAY_COLOR };
        display: inline-flex;
        justify-content: center;

        &:hover {
          opacity: 0.7;
        }

        &--disabled {
          color: ${ DATEPICKER_DAY_COLOR_DISABLED };
        }

        &--in-selecting-range,
        &--in-range {
          background-color: ${ DATEPICKER_DAY_BG_SELECTED };
          color: ${ DATEPICKER_DAY_COLOR_SELECTED };
        }

        &--selecting-range-start,
        &--selecting-range-end,
        &--range-start,
        &--range-end {
          background-color: ${ DATEPICKER_DAY_BG_ACTIVE };
          color: ${ DATEPICKER_DAY_COLOR_ACTIVE };
        }

        &--outside-month {
          visibility: hidden;
        }
      }

      .react-datepicker__footer {
        align-items: center;
        background-color: ${ DATEPICKER_ACTIONS_BG };
        border-top: 1px solid ${ INPUT_BORDER };
        clear: left;
        display: flex;
        flex-direction: 'row';
        float: left;
        justify-content: flex-end;
        margin-top: 16px;
        padding: 1.2rem 2rem;
        width: 100%;
      }

      .react-datepicker__error-msg {
        color: ${ ERROR_COLOR };
        font-size: 1.2rem;
        font-weight: 700;
        flex: 1;
      }

      .react-datepicker__action-buttons {
        display: flex;
      }
    }
  }
`;

const { startDate: defaultStart, endDate: defaultEnd } = getDefaultDateRange();

interface Props {
  error?: string;
  isClearable?: boolean;
  onChange: (startDate: Date, endDate?: Date) => void;
  range?: boolean;
}

const DatePicker: React.FC<Props> = ({ error, isClearable, onChange, range = false }) => {
  const [startDate, setStartDate] = useState<Date>(defaultStart);
  const [endDate, setEndDate] = useState<Date>(defaultEnd);
  const [
    [newStartDate, newEndDate],
    setNewDates
  ] = useState<[Date | undefined, Date | undefined]>([defaultStart, range ? defaultEnd : undefined]);

  const [open, setOpen] = useState(false);
  const [err, setErr] = useState('');

  const handleChange = (newValue: Date | [Date, Date]) => {
    // Single date OR dateRange selecting start date
    if (newValue instanceof Date) {
      setNewDates([newValue, undefined]);

    // Other scenarios
    } else {
      const [start, finish] = newValue;

      // Clear button (x)
      if (!start && !finish) {
        setStartDate(defaultStart);
        setEndDate(defaultEnd);
        setNewDates([defaultStart, defaultEnd])

        onChange(defaultStart, defaultEnd);
        setOpen(false);

      // Select dateRange's end date
      } else {
        const isValid = (start && !finish) || (start && finish && isValidRange(start, finish, threeMonths))
        if (isValid) {
          setNewDates([start, finish]);
          setErr('');
        } else {
          setErr('Invalid dates')
        }
      }
    }
  }

  const handleOpen = () => {
    setOpen(true);
  }

  const handleCancel = () => {
    handleChange(range ? [startDate, endDate] : startDate);
    setOpen(false);
  }

  const handleSubmit = () => {
    if (newStartDate && newEndDate) {
      setStartDate(newStartDate);
      setEndDate(newEndDate);

      onChange(newStartDate, newEndDate);
      setOpen(false);
    }
  }

  const getMaxDate = () => {
    const maxDate = newStartDate
      ? new Date(newStartDate?.getTime() + 3 * 30 * 24 * 60 * 60 * 1000)
      : defaultEnd;

    return maxDate.getTime() >= Date.now()
      ? new Date(Date.now())
      : maxDate;
  }

  return (
    <>
      <div css={datePickerField} className="Datepicker">
        <CalendarIcon />

        <ReactDatePicker
          dateFormat={'MMM dd, yyyy'}
          endDate={ range ? newEndDate : undefined }
          isClearable={ isClearable }
          maxDate={ getMaxDate() }
          monthsShown={ 2 }
          onChange={ handleChange }
          onClickOutside={ handleCancel }
          onInputClick={ handleOpen }
          open={ open }
          showDisabledMonthNavigation={ true }
          selected={ startDate }
          selectsRange={ range }
          startDate={ range ? newStartDate : undefined }
        >
          <div className="react-datepicker__footer">
          { (error || err) && (
            <p className="react-datepicker__error-msg">
              { error || err }
            </p>
          )}

          <div className="react-datepicker__action-buttons">
            <Button onClick={ handleCancel } small>
              Cancel
            </Button>
            <Button onClick={ handleSubmit } primary small>
              Apply
            </Button>
          </div>
          </div>
        </ReactDatePicker>
      </div>
    </>
  );
};

export default DatePicker;
