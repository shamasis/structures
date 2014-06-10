beforeEach(function() {
    this.addMatchers({
        toBeOfType: function(type) {
            return (typeof this.actual === type);
        }
    });
});
