/**
 * Contains all basic library functions needed for the `structures` modules to work. The basic thumb-rule of these
 * library items is that they are very straightforward set of utility functions to perform regular and generic
 * algoorithmic operations. No function, specific to any particular data-structure is added here.
 *
 * @module lib
 */
module.exports = /** @lends module:lib */ {
    /**
     * Shallow copies all root properties from `source` to `sink` parameter. Useful in extending property-base and
     * prototypes in a cleaner code syle.
     *
     * @param {object} sink - The `object` to which all new items are to be copied is the `sink`.
     * @param {object} source - The `object` from which to copy properties from is the `source`.
     * @returns {object} The `sink` parameter is returned back for easy chaining.
     */
	copy: function (sink, source) {
        if (sink) { // proceed only when there is a sink object to copy to!
            for (var prop in source) {
                sink[prop] = source[prop];
            }
        }
		return sink;
	}
};
