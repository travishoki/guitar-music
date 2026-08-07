import React, { useEffect } from 'react';

import SvgClose from '~svg/SvgClose';

import { DIFFICULTY_COLORS, DIFFICULTY_ORDER } from '../../../const/difficulty';

// The difficulty colour legend, shown when a difficulty dot is clicked. Closes
// on backdrop click or Escape.
const DifficultyLegendModal = ({ onClose }: DifficultyLegendModalTypes) => {
	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') onClose();
		};

		window.addEventListener('keydown', onKeyDown);

		return () => window.removeEventListener('keydown', onKeyDown);
	}, [onClose]);

	return (
		<div className="difficulty-legend-overlay" onClick={onClose}>
			<div
				className="difficulty-legend-panel"
				onClick={(event) => event.stopPropagation()}
			>
				<button
					aria-label="Close"
					onClick={onClose}
					style={closeButtonStyle}
					type="button"
				>
					<SvgClose style={closeIconStyle} />
				</button>
				<p className="difficulty-legend-title">Difficulty</p>
				{DIFFICULTY_ORDER.map((difficulty) => (
					<div className="difficulty-legend-row" key={difficulty}>
						<span
							className="difficulty-legend-dot"
							style={{ backgroundColor: DIFFICULTY_COLORS[difficulty] }}
						/>
						<span>{difficulty}</span>
					</div>
				))}
			</div>
		</div>
	);
};

const closeButtonStyle: React.CSSProperties = {
	background: 'transparent',
	border: 'none',
	cursor: 'pointer',
	padding: 0,
	position: 'absolute',
	right: 12,
	top: 12,
};

const closeIconStyle: React.CSSProperties = {
	fill: '#888888',
	height: 16,
	width: 16,
};

type DifficultyLegendModalTypes = {
	onClose: () => void;
};

export default DifficultyLegendModal;
