//clock angles!!!!

//given a number of minutes past midnight, determine
//the angle between the hour and minute hands at that point in time
//keep in mind that on an analog clock, the hour hand is
//not perfectly aligned with the number hour
//e.g. at 4:45, the hour hand is 3/4 the way between 4 and 5
// 720 min in a clock
// min hand resets every hour 
const clockAngles = (minutes) => {
    var output = 0;
    var minHand = ((minutes % 60) / 60) *360; 
    var hourHand = ((minutes % 720) * 0.5);
    if (minHand - hourHand > 0){
        output = minHand - hourHand;
    }
    else {
        output = hourHand - minHand;
    }
    return output;
}

console.log(clockAngles(360));
console.log(clockAngles(180));
console.log(clockAngles(210));
console.log(clockAngles(588));
console.log(clockAngles(980)); 
console.log(clockAngles(361));