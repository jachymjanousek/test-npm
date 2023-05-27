import SunCalc from "suncalc3";

let times = SunCalc.getSunTimes(new Date(), 51.5, -0.1);

console.log(times.sunrise);