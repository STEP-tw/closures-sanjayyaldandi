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
const makeCycler = undefined;
const curry = undefined;
const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
