import * as React from 'react'

const flattenData = (data: any, value = "value") => {
    return data.map((elem: any) => elem[value]);
}

// Inherit Styles
// const Parent = ({ children }) => {
//     const style = { color: "blue" };

//     const clones = React.Children.map(children, (child) =>
//         <div style={style}>{child}</div>
//     );

//     return <div>{clones}</div>;
// };

/**
 * Flatten an array (to enable deep level flatten use recursion with reduce and concat)
 * @type {(arr : Array<any>, d : number) => number}
 * @param {Array<any>} arr - the array to flatten
 * @param {number} d - The depth level specifying how deep a nested array structure should be flattened. Defaults to 1
 * @return {Array<any>} A new array with the sub-array elements concatenated into it.   
 */

 export default function flatDeep(arr : Array<any>, d = 1): Array<any> {
    if (!Array.isArray(arr)) {
      return arr;
    }
    return d > 0
      ? arr.reduce((acc, val) => acc.concat(flatDeep(val, d - 1)), [])
      : arr.slice();
  }
  
  // example
  // const arr = [1, 2, [3, 4, [5, 6]]];
  // flatDeep(arr, Infinity);
  // [1, 2, 3, 4, 5, 6]

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export {
    flattenData
};