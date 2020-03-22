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
      this.position = position;
      this.chain.splice(this.position - 1, 1);
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
