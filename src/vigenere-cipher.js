class VigenereCipheringMachine {
    encrypt(message, key) {
    let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']   
    newarr = [];
    for (let i = 0; i < arr.length; i++) {
    newarr.push(arr[i].charCodeAt - 96);
    }
    
    }
    decrypt() {
        
    }
}

module.exports = VigenereCipheringMachine;
