import React from 'react';
import styles from './section.module.css';

const Section = ({ component = 'div', ...props }) =>
	React.createElement(
		component,
		{ className: styles.section, ...props },
		props.children
	);

export default Section;
