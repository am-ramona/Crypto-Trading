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