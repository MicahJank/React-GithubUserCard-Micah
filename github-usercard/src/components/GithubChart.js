import React from 'react';

import GitChart from 'github-calendar';

const GithubChart = ( { user } ) => {

    GitChart('.calendar', user.login, {responsive: true});

    return (
        <div className='calendar'>
        </div>
    );
};

export default GithubChart;