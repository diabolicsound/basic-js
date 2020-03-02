const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let updatedSA = parseFloat(sampleActivity)
  let log = Math.log(MODERN_ACTIVITY / updatedSA);
  if (typeof(sampleActivity) !== 'string' || +sampleActivity == '') {
    return false;
  } 
  let age = (log * HALF_LIFE_PERIOD) / 0.693;
  
  
 if (age < 0 || age == Infinity) {
   return false;
 }
 else if (isNaN(age) == true) {
   return false;
 }

 return Math.ceil(parseFloat(age));
}