import './App.css';
import React from 'react';
  
export  const Square  = ({val,chooseSquare}) => {
        return <div className="square" onClick={chooseSquare}>  
        {val}

        </div>
}
