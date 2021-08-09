
const  groupArrayElements = (origArray, numOfArrays) => {

  if(origArray.length === 0){
    return "Could not divide an empty array";
  }
  if(numOfArrays > origArray.length){ 
    return origArray;
  }
  const result = [];
  const newArraySize = - Math.round(-(origArray.length / numOfArrays)) // This is done so that .5 is rounded to the lower number ex (1.5 -> 1)
  
    let startIndex = 0;
    let endIndex = newArraySize;
    for (let i = 0; i < numOfArrays; i ++){
      if (i === numOfArrays - 1){
        result.push(origArray.slice(startIndex, origArray.length));
      }
      else{
      result.push(origArray.slice(startIndex, endIndex));
      }
      startIndex = endIndex;
      endIndex = startIndex+newArraySize;
    }
    return result;
}

export default groupArrayElements;
