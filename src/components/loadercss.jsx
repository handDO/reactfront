import React from 'react';

const LoaderCSS = (props) => {
  let divs = fillArray(props.quantity).map((val, i) => <div key={ i }></div>);
  for (let i = 0; i < props.quantity; i++)
    return (
      <div className={ `loader-inner ${props.type}${props.active ? ' loader-inner_visible' : ''}` }>
          { divs }
      </div>
      );
}

const fillArray = quantity => {
  let arr = [];
  for (let i = 0; i < quantity; i++)
    arr.push(i);
  return arr;
}

export default LoaderCSS;