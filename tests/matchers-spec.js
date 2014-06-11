/**
 * @fileOverview
 *
 * This file contains all helper jasmine matchers needed for generic unit testing of structures. This file should
 * ideally not contain any non-matcher helper functions that may be needed in spec files.
 */
beforeEach(function() {
    this.addMatchers({
        toBeOfType: function (type) {
            return (typeof this.actual === type);
        }
    });
});
