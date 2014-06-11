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

        expect(stack.push('item 1')).toBe('item 1');
        expect(stack.size()).toBe(1);

        expect(stack.push('item 2')).toBe('item 2');
        expect(stack.size()).toBe(2);
    });

    it ('can have its top data peeked', function () {
        var stack = new Stack();

        expect(stack.peek).toBeOfType('function');
        expect(stack.peek()).not.toBeDefined();

        stack.push('item 1');
        expect(stack.peek()).toBe('item 1');

        stack.push('item 2');
        expect(stack.peek()).toBe('item 2');
    });

    it ('can have its top data popped', function () {
        var stack = new Stack();

        expect(stack.pop).toBeOfType('function');
        expect(stack.pop()).not.toBeDefined(); // empty pop ok

        stack.push('item 1');
        stack.push('item 2');
        expect(stack.size()).toBe(2);

        expect(stack.pop()).toBe('item 2');
        expect(stack.size()).toBe(1);

        expect(stack.pop()).toBe('item 1');
        expect(stack.size()).toBe(0);

        expect(stack.pop()).not.toBeDefined();
    });

    it ('can be cleared', function () {
        var stack = new Stack();

        expect(stack.clear).toBeOfType('function');

        stack.push('item 1');
        stack.push('item 2');
        expect(stack.peek()).toBe('item 2');
        expect(stack.size()).toBe(2);

        stack.clear();
        expect(stack.size()).toBe(0);
    });

    it ('can have a capacity set', function () {
        var stack = new Stack();

        expect(stack.capacity).toBeOfType('function');
        expect(stack.capacity()).toBe(Infinity);
        expect(stack.capacity(4)).toBe(4);

        expect(stack.push('item 1')).toBe('item 1');
        expect(stack.push('item 2')).toBe('item 2');
        expect(stack.push('item 3')).toBe('item 3');
        expect(stack.push('item 4')).toBe('item 4');
        expect(stack.push('item 5')).not.toBeDefined();

        expect(stack.peek()).toBe('item 4');
        expect(stack.size()).toBe(4);

        expect(stack.capacity(2)).toBe(2);
        expect(stack.size()).toBe(2);
        expect(stack.peek()).toBe('item 2');

        expect(stack.capacity(Infinity)).toBe(Infinity);
        expect(stack.push('item 3')).toBe('item 3');
        expect(stack.push('item 4')).toBe('item 4');
        expect(stack.push('item 5')).toBe('item 5');
        expect(stack.push('item 6')).toBe('item 6');
    });
});
