import React from 'react';
import './portfolio-unit.styles.scss';

const PortfolioUnit = ({ unit }) => {
    const { header, url, description } = unit;
    return (
        <li><h3><a href={url} target="_blank" rel="noreferrer">{header}</a></h3>{description}</li>
    )
}

export default PortfolioUnit;