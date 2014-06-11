var lib = require('../src/lib.js'),
    Stack;

/**
 * @constructor
 */
Stack = function () {
    this.length = 0;
};

Stack.Item = function (value, prev) {
    this.value = value;
    this.prev = prev;
};

lib.copy(Stack.prototype, /** @lends Stack.prototype */ {

    /**
     * @param {*} value
     * @returns {*}
     */
    push: function (value) {
        return (this.length++, (this.top = new Stack.Item(value, this.top)), value);
    },

    /**
     * @returns {*}
     */
    peek: function () {
        return this.top && this.top.value;
    },

    /**
     * @returns {*}
     */
    pop: function () {
        return (this.popped = this.top) && ((this.top = this.popped.prev), --this.length, (delete this.popped.prev),
            this.popped.value);
    },

    /**
     * @returns {number}
     */
    size: function () {
        return this.length;
    },

    /**
     *
     */
    clear: function () {
        this.length = 0;
        delete this.top;
        delete this.popped;
    }
});

module.exports = Stack;
