module.exports = {
	copy: function (sink, source) {
		!sink && (sink = {});
		for (var prop in source) {
			sink[prop] = source[prop];
		}
		return sink;
	}
};
