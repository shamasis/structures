var lib = require('../src/lib.js'),
    Stack;

/**
 * Stack is a particular kind of abstract data type or collection in which the principal (or only) operations on the
 * collection are the addition of an entity to the collection, known as push and removal of an entity, known as pop.
 * The relation between the push and pop operations is such that the stack is a Last-In-First-Out (LIFO) data structure.
 * In a LIFO data structure, the last element added to the structure must be the first one to be removed. This is
 * equivalent to the requirement that, considered as a linear data structure, or more abstractly a sequential
 * collection, the push and pop operations occur only at one end of the structure, referred to as the top of the stack.
 *
 * _Citing: http://en.wikipedia.org/wiki/Stack_(abstract_data_type)_
 *
 * @constructor
 */
Stack = function () {
    this.length = 0;
    this.limit = Infinity;
};

Stack.StackItem = function (value, prev) {
    this.value = value;
    this.prev = prev;
};

lib.copy(Stack.prototype, /** @lends Stack.prototype */ {

    /**
     * The `push` function is used to push a variable to the top of the stack. The variable pushed can be later
     * retrieved by popping items from the stack using {@link Stack#pop}.
     *
     * @param {*} value The value that needs to be added to the top of the stack is passed as this parameter.
     *
     * @returns {*} The `push` function returns the same value that has been passed to the `value` parameter. This
     * allows easy chaining and other coding styles to work seamlessly. In case stack limit has been set and stack is
     * overflowing, the function returns `undefined`.
     *
     * @see Stack#pop
     */
    push: function (value) {
        return (this.length < this.limit) ? (this.length++, (this.top = new Stack.StackItem(value, this.top)), value) :
            undefined;
    },

    /**
     * The `peek` function allows you to "peek" the top-most item in stack. In other words, it allows you to retrieve
     * the item last pushed to the stack without actually popping (removing) it.
     * @returns {*}
     */
    peek: function () {
        return this.top && this.top.value;
    },

    /**
     * The `pop` function removes returns the topmost item in the stack (the item that was last "pushed").
     * @returns {*}
     */
    pop: function () {
        return (this.popped = this.top) && ((this.top = this.popped.prev), --this.length, (delete this.popped.prev),
            this.popped.value);
    },

    /**
     * Using the `size` function one can check the number of items that are present in the stack. `0` would indicate
     * that the stack is empty.
     *
     * @returns {number}
     */
    size: function () {
        return this.length;
    },

    /**
     * One can set a limit to the number of items that can be pushed to the stack by setting a value for the capacity.
     * To revert to unlimited capacity, simply pass `Infinity` as the parameter. To retrieve the current capacity of the
     * stack, call this function without any parameter.
     *
     * @param {number=} [value] This parameter accepts a positive number to set as the capacity of the stack. If the
     * number passed is less than the size of the stack, the overflowing items are popped.
     * @returns {number}
     */
    capacity: function (value) {
        // If parameter is a number and is greater than zero, we set it as new limit.
        if (!isNaN(value) && value >= 0) {
            this.limit = +value;
            // In case current size is greater than the limit, we pop the items till size is met.
            while (this.length > this.limit) {
                this.pop();
            }
        }

        return this.limit;
    },

    /**
     * The entire stack can be cleared using this function without popping it one at a time.
     */
    clear: function () {
        this.length = 0;
        delete this.top;
        delete this.popped;
    }
});

module.exports = Stack;
