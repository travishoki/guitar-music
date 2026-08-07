import React, { useState } from 'react';

import { DIFFICULTY, DIFFICULTY_COLORS } from '../../../const/difficulty';
import DifficultyLegendModal from '../DifficultyLegendModal/DifficultyLegendModal';

// A colour-coded bar down the left edge of a song row standing in for the
// difficulty label (see DIFFICULTY_COLORS - cool to hot). It's absolutely
// positioned, so the row it sits in must be position: relative. Clicking it
// opens the colour legend; the name rides along as a hover tooltip / a11y label.
const DifficultyBar = ({ difficulty }: DifficultyBarTypes) => {
	const [isLegendOpen, setIsLegendOpen] = useState(false);

	return (
		<>
			<button
				aria-label={difficulty}
				onClick={() => setIsLegendOpen(true)}
				style={{
					...barStyle,
					backgroundColor: DIFFICULTY_COLORS[difficulty],
				}}
				title={difficulty}
				type="button"
			/>
			{isLegendOpen && (
				<DifficultyLegendModal onClose={() => setIsLegendOpen(false)} />
			)}
		</>
	);
};

const barStyle: React.CSSProperties = {
	border: 'none',
	borderRadius: 0,
	bottom: 0,
	cursor: 'pointer',
	left: 0,
	padding: 0,
	position: 'absolute',
	top: 0,
	width: 15,
};

type DifficultyBarTypes = {
	difficulty: DIFFICULTY;
};

export default DifficultyBar;
