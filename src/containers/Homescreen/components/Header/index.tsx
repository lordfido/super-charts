import React from 'react';
import DatePicker from '../../../../components/Forms/Datepicker';
import Toolbar from '../../../../components/Toolbar';

interface Props {
  onDateRangeChange: (startDate: Date, endDate?: Date) => void;
}

const Header: React.FC<Props> = ({ onDateRangeChange }) => (
  <Toolbar right={
    <DatePicker
      isClearable
      onChange={onDateRangeChange}
      range
    />
  } />
);

export default Header;
