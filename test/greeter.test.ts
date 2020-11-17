import { Greeter } from '../har2/greeter';

test('test', () => {
    expect(new Greeter('Taro').getMessage()).toBe('Hello Taro');
});
