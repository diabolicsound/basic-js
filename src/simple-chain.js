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
      if (isNaN(position) == true || Number.isInteger(position) !== true || this.chain[position] == undefined || position <= 0 || typeof(position) !== 'number') {
        let del = this.chain;
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
    let finish = this.chain;
    this.chain = [];
    return finish.join('~~');
  }
};


module.exports = chainMaker;
