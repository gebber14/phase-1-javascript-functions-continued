// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun();

function mondayWork(activity = 'go to the office') {
    return (`This Monday, I will ${activity}.`)
}
mondayWork();


function wrapAdjective(flair = "*") {
    const innerFunction = function(param1 = "special") {
      return `You are ${flair}${param1}${flair}!`;
    };
    return innerFunction;
}
wrapAdjective("%")("a dedicated programmer");

