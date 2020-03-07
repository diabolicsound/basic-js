

let a = 0;
class DepthCalculator {

    constructor() {}
    
    calculateDepth(arr) {
        let newarr = [];
        let a = 1;
        let depth = 1
       arr.forEach(element => {
        if (typeof(element) == 'object') {
            depth += this.calculateDepth(element);
            ;    
       }});
       return depth;
    }
    
}
module.exports = DepthCalculator;

