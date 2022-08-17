// code your solution here
function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
};
 function mondayWork(stuff = "go to the office") {
    return (`This Monday, I will ${stuff}.`);
 };
 function wrapAdjective(word = "*") {
    return function(say = "special") {
        return  (`You are ${word}${say}${word}!`);
    };
 };