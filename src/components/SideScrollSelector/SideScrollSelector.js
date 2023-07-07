import React from 'react';

const SideSCrollSelector = ({ currentOption, list, onClick }) => (
	<div className="side-scroll-selector">
		<ul>
			{list.map((option) => (
				<li key={option}>
					<button
						className={option === currentOption ? 'active' : ''}
						onClick={() => onClick(option)}
					>
						{option}
					</button>
				</li>
			))}
		</ul>
	</div>
);

export default SideSCrollSelector;
