import React, { useState } from 'react';

import { DIFFICULTY, DIFFICULTY_COLORS } from '../../../const/difficulty';
import DifficultyLegendModal from '../DifficultyLegendModal/DifficultyLegendModal';

// A small colour-coded circle standing in for the difficulty label (see
// DIFFICULTY_COLORS - cool to hot). Clicking it opens the colour legend; the
// name also rides along as a hover tooltip / a11y label.
const DifficultyDot = ({ difficulty }: DifficultyDotTypes) => {
	const [isLegendOpen, setIsLegendOpen] = useState(false);

	return (
		<>
			<button
				aria-label={difficulty}
				onClick={() => setIsLegendOpen(true)}
				style={buttonStyle}
				title={difficulty}
				type="button"
			>
				<span
					style={{
						...dotStyle,
						backgroundColor: DIFFICULTY_COLORS[difficulty],
					}}
				/>
			</button>
			{isLegendOpen && (
				<DifficultyLegendModal onClose={() => setIsLegendOpen(false)} />
			)}
		</>
	);
};

const buttonStyle: React.CSSProperties = {
	background: 'transparent',
	border: 'none',
	cursor: 'pointer',
	display: 'inline-flex',
	padding: 0,
};

const dotStyle: React.CSSProperties = {
	borderRadius: '50%',
	display: 'inline-block',
	height: 12,
	width: 12,
};

type DifficultyDotTypes = {
	difficulty: DIFFICULTY;
};

export default DifficultyDot;
