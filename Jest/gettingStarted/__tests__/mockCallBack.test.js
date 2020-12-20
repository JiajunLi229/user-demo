const forEach = require('../forEach');

const mockCallBackTest = jest.fn(x => 42 + x);
forEach([0, 1], mockCallBackTest);

// The mock function is called twice
describe("example test", () => {
    it ("boring test", () => {
        expect(mockCallBackTest.mock.calls.length).toBe(2);

// The first argument of the first call to the function was 0
        expect(mockCallBackTest.mock.calls[0][0]).toBe(0);

// The first argument of the second call to the function was 1
        expect(mockCallBackTest.mock.calls[1][0]).toBe(1);

// The return value of the first call to the function was 42
        expect(mockCallBackTest.mock.results[0].value).toBe(42);

    })
});