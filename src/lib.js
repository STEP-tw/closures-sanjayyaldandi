const makeConstant = function(argument){
  return function(){
    return argument;
  }
}

const makeCounterFromN = function(number){
  return function(){
    return number++;
  }
}

const makeCounterFromZero = function(){
  return makeCounterFromN(0);
}

const makeDeltaTracker = function(number){
    return function(deltaNum = 0){
    number = number + deltaNum;
    return {old:number-deltaNum,delta:deltaNum,new:number};
  }
}

const makeFiboGenerator = function(num2,num1){
  let firstNum = num1;
  let secondNum = num2;
  if(secondNum < firstNum){
    firstNum = num2;
    secondNum = num1;
  }
  if(!num1){
    firstNum = 0;
  }
  if(!num2){
    secondNum = 1;
  }
  let sum = 0;
  return function(){
    result = firstNum;
    sum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = sum;
    return result;
  }
}

const copyArray = function(value){
  return value;
}

const makeCycler = function(array){
  let copiedArray = array.map(copyArray);
  let lengthOfArray = copiedArray.length;
  let index = 0;
  return function(){
    index = index%copiedArray.length;
    return copiedArray[index++];
  }
}

const curry = function(funcName,argument){
  return function(argument1,argument2){
    return funcName(argument,argument1,argument2);
  }
}

const compose = function(funcName1,funcName2){
  return function(array1,array2){
    return funcName1(funcName2(array1,array2));
  }
}

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
