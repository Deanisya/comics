import React from 'react';
import styles from './SectionContainer.module.css';

function SectionContainer(props) {
	return <div className={styles.sectionContainer}>{props.children}</div>;
}

export default SectionContainer;
