import React from 'react';

import GitChart from 'github-calendar';

const GithubChart = () => {

    GitChart('.calendar', 'MicahJank', {responsive: true});

    return (
        <div className='calendar'>
        </div>
    );
};

export default GithubChart;