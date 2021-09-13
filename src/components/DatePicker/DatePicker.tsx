import React, { ReactElement } from 'react';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";

import "./styles.scss";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

interface Props {
    id: string;
    label: string;
    date: string;
    onChange: (date: string) => void;
}

/**
 * @description The DataPicker component is a component for selecting dates using the Material UI Pickers
 *
 * @param {string} id
 * @param {string} label
 * @param {moment} date
 * @param {function} handleDateChange
 * @returns JSX.Element
 */
const DatePicker = ({ id, label, date, onChange }: Props): ReactElement => {
    const handleFormattedDateChange = (date: MaterialUiPickersDate): void => {
        if (date) onChange(date.format("YYYY-MM-DD"));
    }

    const dateFormatter = (str: string): string => {
        return str
    }

    return (
        <React.Fragment>
            <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
                <KeyboardDatePicker
                    id={id}
                    label={label}
                    disableToolbar
                    variant="inline"
                    format="YYYY-MM-DD"
                    margin="normal"
                    autoOk={true}
                    showTodayButton={true}
                    inputValue={date}
                    value={date}
                    onChange={handleFormattedDateChange}
                    rifmFormatter={dateFormatter}
                    maxDate={new Date()}
                />
            </MuiPickersUtilsProvider>
        </React.Fragment>
    );
};

export default DatePicker;
