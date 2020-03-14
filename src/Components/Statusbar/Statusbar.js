import React from 'react';

const Statusbar = (props) => {
    const status = props.status;
    let income = 0;
    for (let i = 0; i < status.length; i++){
        const friends = status[i];
        const salary = parseFloat(friends.salary);
        income = salary + income;

    }
    return (
        <div>
            <h4>Friends: {status.length}</h4>
                <h6>Income: ${income}</h6>
        </div>
    );
};

export default Statusbar;