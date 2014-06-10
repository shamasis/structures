describe ('stack', function () {
    var Stack;

    it ('module must exist', function () {
        expect(Stack = require('../src/stack.js')).toBeOfType('function');
    });

    it ('can be instantiated with zero size', function () {
        expect((new Stack()).size()).toBe(0);
    });

    it ('can have data pushed', function () {
        var stack = new Stack();
        expect(stack.push).toBeOfType('function');

        expect(stack.push('value 1')).toBe('value 1');
        expect(stack.size()).toBe(1);

        expect(stack.push('value 2')).toBe('value 2');
        expect(stack.size()).toBe(2);
    });

    it ('can have its top data peeked', function () {
        var stack = new Stack();

        expect(stack.peek).toBeOfType('function');
        expect(stack.peek()).not.toBeDefined();

        stack.push('value 1');
        expect(stack.peek()).toBe('value 1');

        stack.push('value 2');
        expect(stack.peek()).toBe('value 2');
    });

    it ('can have its top data popped', function () {
        var stack = new Stack();

        expect(stack.pop).toBeOfType('function');
        expect(stack.pop()).not.toBeDefined(); // empty pop ok

        stack.push('value 1');
        stack.push('value 2');
        expect(stack.size()).toBe(2);

        expect(stack.pop()).toBe('value 2');
        expect(stack.size()).toBe(1);

        expect(stack.pop()).toBe('value 1');
        expect(stack.size()).toBe(0);

        expect(stack.pop()).not.toBeDefined();
    });

    it ('can be cleared', function () {
        var stack = new Stack();

        expect(stack.clear).toBeOfType('function');

        stack.push('value 1');
        stack.push('value 2');
        expect(stack.peek()).toBe('value 2');
        expect(stack.size()).toBe(2);

        stack.clear();
        expect(stack.size()).toBe(0);
    });
});
