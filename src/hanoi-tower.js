module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let obj = {};
    obj['turns'] = Math.pow(2, disksNumber) - 1;
    let a = obj['turns'];
    obj['seconds'] = a / (turnsSpeed / 3600);
    return obj;
}