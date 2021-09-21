import { ReactElement } from 'react';

import DatePicker from './../DatePicker';

import './styles.scss';

type Props = {
	startDate: string;
	clicker: number;
	setStartDate: (startDate: string) => void;
	setClicker: (clicker: number) => void;
	buttonDisabled: boolean;
};

/**
 * @description The SelectionBar is a component that allows the user to select their input for the API as well as allows them to fetch the images
 */
const SelectionBar = ({
	startDate,
	clicker,
	setStartDate,
	setClicker,
	buttonDisabled,
}: Props): ReactElement => {
	const handlePullImagesButtonClick = (): void => {
		setClicker(clicker + 1);
	};

	return (
		<div id="selection-bar" className="selection-bar">
			{/* The date input component to select the starting date for the API  */}
			<DatePicker
				id="start-date"
				label="Select Start Date"
				date={startDate}
				onChange={setStartDate}
				aria-label="Select Start Date"
			/>

			{/* Easter Egg Indicator */}
			<div className="easter-egg-text">
				<p>There might be an easter egg in the headings</p>
			</div>

			{/* The button that is clicked to pull the data from the API  */}
			<button
				data-testid="pull-images-button"
				type="button"
				className="btn ripple"
				onClick={handlePullImagesButtonClick}
				aria-label="Click Here To Pull Images"
				disabled={buttonDisabled}
			>
				Click Here To Pull Images
			</button>
		</div>
	);
};

export default SelectionBar;
