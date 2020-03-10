

let a = 0;
class DepthCalculator {

    constructor() {}
    
    calculateDepth(arr) {
        let newarr = [];
        let a = 1;
        let depth = 1;
        let value = 1;
       arr.forEach(element => {
           value = depth;
           depth = 1;
        if (typeof(element) == 'object') {
            depth += this.calculateDepth(element);  
       }
       if (depth < value) {
       depth = value;
       }
    });
       return depth;
    }
    
}
module.exports = DepthCalculator;

