class VigenereCipheringMachine {
    encrypt(message, key) {
    let newarr = [];
    let mesarr = message.toLowerCase().split('');
    let keyarr  = key.toLowerCase().split('');
    let newkeyarr = keyarr.slice();
    for (let i = 0; i < (mesarr.length - newkeyarr.length); i++) {
        keyarr.push(keyarr[i])
    }
    
    for (let j = 0; j < mesarr.length; j++) {
        if ((mesarr[j].charCodeAt() < 97 ) && (mesarr[j].charCodeAt() !== 32 ) || (mesarr[j].charCodeAt() > 122 ) ) {
            newarr.push(mesarr[j]);
        }
        else if (((mesarr[j].charCodeAt() + keyarr[j].charCodeAt()) >= 220) && (mesarr[j].charCodeAt() !== 32 )){
            newarr.push(String.fromCharCode(mesarr[j].charCodeAt() + keyarr[j].charCodeAt() - 123))
        }
        else if ((mesarr[j].charCodeAt() == 32 )) {
            keyarr.splice(j - 1, 0, ' ')
            newarr.push(String.fromCharCode(mesarr[j].charCodeAt()))
        }

        else {
            newarr.push(String.fromCharCode(mesarr[j].charCodeAt() + keyarr[j].charCodeAt() - 97))
        }
    }
        return newarr.join('').toUpperCase(); 
    }
    decrypt(message, key) {
        let newarr = [];
        let mesarr = message.toLowerCase().split('');
        let keyarr  = key.toLowerCase().split('');
        let newkeyarr = keyarr.slice();
        for (let i = 0; i < (mesarr.length - newkeyarr.length); i++) {
            keyarr.push(keyarr[i])
        }
        
        for (let j = 0; j < mesarr.length; j++) {
            if ((mesarr[j].charCodeAt() < 97 ) && (mesarr[j].charCodeAt() !== 32 ) || (mesarr[j].charCodeAt() > 122 ) ) {
                newarr.push(mesarr[j]);
            }
            else if (((mesarr[j].charCodeAt() - keyarr[j].charCodeAt()) < 0) && (mesarr[j].charCodeAt() !== 32 )){
                newarr.push(String.fromCharCode(mesarr[j].charCodeAt() - keyarr[j].charCodeAt() + 123))
            } 
            else if ((mesarr[j].charCodeAt() == 32 )) {
                keyarr.splice(j - 1, 0, ' ')
                newarr.push(String.fromCharCode(mesarr[j].charCodeAt()))
            }
    
            else {
                newarr.push(String.fromCharCode(mesarr[j].charCodeAt() - keyarr[j].charCodeAt() + 97))
            }
        }
        console.log(newarr)
        console.log(mesarr)
        console.log(keyarr)
        return newarr.join('').toUpperCase();
    }

}
module.exports = VigenereCipheringMachine;
