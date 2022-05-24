import React from 'react';
import './portfolio.styles.scss';

import { portfolioList } from '../../portfolio.data';

import PortfolioList from '../../components/portfolio-list/portfolio-list.component';

const Portfolio = () => {
    return (
        <div className='portfolio-page'>
            <h1>Здесь представлено мое небольшое портфолио</h1>
            <PortfolioList data={portfolioList} />
        </div> 
    )
}

export default Portfolio;