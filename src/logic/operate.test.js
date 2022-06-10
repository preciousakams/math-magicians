import operate from './operate';

describe('operate tests', () => {
  test('expect add 1 + 19', () => {
    const output = operate(1, 19, '+');
    expect(output).toBe('20');
  });
  test('expect multiply 2 x 5', () => {
    const output = operate(2, 5, 'x');
    expect(output).toBe('10');
  });
  test('expect divide 80 / 10', () => {
    const output = operate(80, 10, '/');
    expect(output).toBe('8');
  });
  test('expect modulo 8 % 2 return 0', () => {
    const output = operate(8, 2, '%');
    expect(output).toBe('0');
  });

  test('expect substract 7 - 2 to be 5', () => {
    const output = operate(7, 2, '-');
    expect(output).toBe('5');
  });
});
