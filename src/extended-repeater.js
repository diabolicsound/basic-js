module.exports = function repeater(str, options) {
    if (options.hasOwnProperty('separator') == false &&  options.hasOwnProperty('additionSeparator') == false) {
 let rep = (str + "+").repeat(options.repeatTimes - 1);
  return rep + str;
    }
    else if (options.hasOwnProperty('additionSeparator') == false && options.hasOwnProperty('separator') == true && options.hasOwnProperty('addition') == false) {
    let rep2 = (str + options.separator).repeat(options.repeatTimes - 1);
    return rep2 + str;
    }
    else if (options.hasOwnProperty('separator') == true && options.hasOwnProperty('addition') == true && options.hasOwnProperty('additionSeparator') == false) {
        if (options.additionRepeatTimes == 1) {
            let part3 = options.addition + options.separator;
            return (str + part3).repeat(options.repeatTimes - 1) + str + options.addition;
        }
        else {
        let part3 = (options.addition + options.separator).repeat(options.additionRepeatTimes - 1);
        return (str + part3 + options.separator).repeat(options.repeatTimes - 1) + str + options.addition;
    }
}
else if (options.hasOwnProperty('separator') == true && options.hasOwnProperty('addition') == true && options.hasOwnProperty('additionSeparator') == true) {
   let part4 = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition;
   let full = (str + part4 + options.separator).repeat(options.repeatTimes - 1) + str + part4;
   return full;
}
}
  