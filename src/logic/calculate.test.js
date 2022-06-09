const calculate = require('./calculate');

describe('Calculate', () => {
  test('math calculation', () => {
    let buttonName;
    let obj;
    let next;
    if (buttonName === '0' && obj.next === '0') {
      expect(calculate(obj, buttonName)).toBe(next);
    }
    if (buttonName === '.') {
      if (obj.next) {
        if (obj.next.includes('.')) {
          expect(calculate(...obj, next)).toBe(`${obj.next}`);
        }
      }
    }
    if (buttonName === '+/-') {
      if (obj.next) {
        expect(calculate()).toBe({ ...obj, next: (-1 * parseFloat(obj.next)).toString() });
      }
      if (obj.total) {
        expect(calculate()).toBe({ ...obj, total: (-1 * parseFloat(obj.total)).toString() });
      }
    }
  });
});
