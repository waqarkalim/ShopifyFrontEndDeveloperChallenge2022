import React, { ReactElement } from 'react'

import DatePicker from './../DatePicker'

import './styles.scss'

type Props = {
	startDate: string
	clicker: number
	setStartDate: (startDate: string) => void
	setClicker: (clicker: number) => void
}

const SelectionBar = ({
	startDate,
	clicker,
	setStartDate,
	setClicker,
}: Props): ReactElement => {
	const handlePullImagesButtonClick = (): void => {
		setClicker(clicker + 1)
	}

	return (
		<div id="selection-bar" className="selection-bar">
			<DatePicker
				id="start-date"
				label="Select Start Date"
				date={startDate}
				onChange={setStartDate}
				aria-label="Select Start Date"
				aria-labelledby="selection-bar"
			/>
			<button
				type="button"
				className="btn ripple"
				onClick={handlePullImagesButtonClick}
				aria-label="Click Here To Pull Images"
				aria-labelledby="selection-bar"
			>
				Click Here To Pull Images
			</button>
		</div>
	)
}

export default SelectionBar
