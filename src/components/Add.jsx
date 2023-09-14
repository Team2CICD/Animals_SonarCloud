import React from 'react';

const Add = (props) => {
    return (
        <div>
            <input type="text" placeholder='add item' />
           <input type="submit" value = "Add" onClick={props.addHandler} />
        </div>
    );
};

export default Add;