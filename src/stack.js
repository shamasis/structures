var lib = require('../src/lib.js'),
    Stack;

/**
 * @constructor
 */
Stack = function () {
    this.clear();
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
        var top = this.top;
        return top && ((this.top = top.prev), --this.length, top.value);
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
        this.top = undefined;
        this.length = 0;
    }
});

module.exports = Stack;
