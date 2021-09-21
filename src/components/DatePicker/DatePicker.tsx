import { ReactElement } from 'react';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';

import { DATE_FORMAT } from './../../constants';

import './styles.scss';

type Props = {
	id: string;
	label: string;
	date: string;
	onChange: (date: string) => void;
};

/**
 * @description The DataPicker component is a component for selecting dates using the Material UI Pickers
 *
 * @param {string} id
 * @param {string} label
 * @param {string} date
 * @param {function} onChange
 * @returns ReactElement
 */
const DatePicker = ({ id, label, date, onChange }: Props): ReactElement => {
	const handleDateChange = (value: string) => {
		onChange(value);
	};

	return (
		<MuiPickersUtilsProvider
			date-testid={'date-picker'}
			libInstance={moment}
			utils={MomentUtils}
		>
			<KeyboardDatePicker
				id={id}
				label={label}
				disableToolbar // Disable toolbar on date picker
				variant="inline"
				format={DATE_FORMAT}
				margin="normal"
				autoOk={true}
				inputValue={date}
				value={date}
				onChange={(date, value) => handleDateChange(value as string)}
				maxDate={new Date()} // Set today's date as the max start date
				KeyboardButtonProps={{
					'aria-label': 'change date',
				}}
			/>
		</MuiPickersUtilsProvider>
	);
};

export default DatePicker;
