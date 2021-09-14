import React, { ReactElement } from 'react';

import DatePicker from "./../DatePicker"

import "./styles.scss";

interface Props {
    startDate: string;
    clicker: number
    setStartDate: (startDate: string) => void;
    setClicker: (clicker: number) => void;
}

const SelectionBar = ({ startDate, clicker, setStartDate, setClicker }: Props): ReactElement => {
    const handlePullImagesButtonClick = (): void => {
        setClicker(clicker + 1);
    }

    return (
        <div className="selection-bar">
            <DatePicker
                id="start-date"
                label="Start Date"
                date={startDate}
                onChange={setStartDate}
            />
            <button
                className="btn"
                onClick={handlePullImagesButtonClick}
            >
                Pull Images
            </button>
        </div >
    )
}

export default SelectionBar;
