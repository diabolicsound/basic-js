const chainMaker = {
  chain : [],
  getLength() {
    this.chain.length = chain.length;
    return this;
  },
  addLink(value) {
    this.value = String(value);
    this.chain.push(`( ` +this.value + ` )`);
    return this;
  },
  removeLink(position) {
      if (isNaN(position) == true || Number.isInteger(position) !== true || this.chain[position] == undefined || position < 0 || typeof(position) !== 'number') {
        this.chain = [];
        throw Error;
      }
      this.chain.splice(position - 1, 1);
      return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() { 
    return this.chain.join('~~');
    
  }
};


module.exports = chainMaker;
