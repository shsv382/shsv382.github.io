import React from 'react';
import './portfolio-list.styles.scss';

import PortfolioUnit from '../portfolio-unit/portfolio-unit.component';

const PortfolioList = ({ data }) => {
    return (
        <ul className='links-list'>
            {
                data.map(unit => (<PortfolioUnit unit={unit} />))
            }
        </ul>
    )
}

export default PortfolioList;