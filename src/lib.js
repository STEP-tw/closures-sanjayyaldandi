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
  let count = 0;
  return function(){
    return count++;
  }
}

const makeDeltaTracker = function(number){
  let tracker = {};
  tracker.old = number;
  tracker.delta = 0;
  tracker.new = number;
  return function(deltaNum){
    if(deltaNum == undefined){
      deltaNum = 0;
    }
    tracker.delta = deltaNum;
    tracker.old = tracker.new;
    tracker.new = tracker.old + deltaNum;
    return tracker;
  }
}

const makeFiboGenerator = function(num2,num1){
  let firstNum = num1;
  let secondNum = num2;

  if(secondNum < firstNum){
    firstNum = num2;
    secondNum = num1;
  }

  if(num1 == undefined){
    firstNum = 0;
  }

  if(num2 == undefined){
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

const makeCycler = function(array){
  let copiedArray = array.slice()
  let lengthOfArray = copiedArray.length;
  let index = 0;
  return function(){
    if(index == copiedArray.length){
      index = 0;
    }
    index++;
    return copiedArray[index-1];
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
