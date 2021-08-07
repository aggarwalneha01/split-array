
function groupArrayElements(origArray, numOfArrays){
  const result = [];
  const newArraySize = -Math.round(-(origArray.length / numOfArrays))
  if(newArraySize===0){
    return Error("Could not divide an empty array");
  }
  else if(numOfArrays>origArray.length){ 
    console.log("Can not divide array of length" , origArray.length, "in to", numOfArrays, "parts");
    console.log(origArray);
    return origArray;
  }
  else {   
  let startIndex = 0;
  let endIndex = newArraySize;
  for (let i =0; i < numOfArrays; i ++){
    if (i===numOfArrays-1){
      result.push(origArray.slice(startIndex,origArray.length));
    }
    else{
    result.push(origArray.slice(startIndex, endIndex));
    }
    startIndex=endIndex;
    endIndex = startIndex+newArraySize;
  }
  console.log(result);
  return result;
}
}

export default groupArrayElements;
