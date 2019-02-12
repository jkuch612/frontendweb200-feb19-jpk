import { compose } from './compose';
import { formatName } from './utils';
describe('functions', () => {

  it('arbitrary number of parameters', () => {
    // rest argument
    function add(a: number, b: number, ...rest: number[]) {
      const firstTwo = a + b;
      return rest.reduce((prev, next) => prev + next, firstTwo);
    }

    expect(add(2, 2)).toBe(4);
    expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);

  });
  describe('function literals', () => {
    it('has a few kinds', () => {

      // named  function
      function add(a: number, b: number): number {
        return a + b;
      }

      // anonymous function with a variable referring to it.
      const mulitply = (function(a: number, b: number) { return a * b; });

      expect(mulitply(3, 5)).toBe(15);

      // arrow function - also an anonymous function with a variable referring to it.
      const divide = (a: number, b: number) => a / b;

      expect(divide(10, 5)).toBe(2);

    });
  });
});

describe('Higher Order Functions', () => {
  it('an example', () => {

    expect(formatName('Han', 'Solo')).toBe('Solo, Han');

    const makeNameUpper = (s: string) => s.toUpperCase();

    expect(formatName('Han', 'Solo', makeNameUpper)).toBe('SOLO, HAN');

    // duck typed function!!!
    const makeFlashy = (s: string) => `***${s}***`;
    expect(formatName('Han', 'Solo', makeFlashy)).toBe('***Solo, Han***');

    const doBoth = compose(makeNameUpper, makeFlashy);

    expect(formatName('Han', 'Solo', doBoth)).toBe('***SOLO, HAN***');

  });
});
describe('practical', () => {
  interface Payments {
    date: string;
    amount: number;
    customer: string;
  }

  const payments: Payments[] = [
    { date: '1/1/2018', amount: 300, customer: 'Bob' },
    { date: '1/8/2018', amount: 615.23, customer: 'Bob' },
    { date: '1/19/2018', amount: 10082, customer: 'Sue' },
    { date: '2/2/2018', amount: 12, customer: 'Bob' },
  ];

  it('Your practice', () => {

    const answer: { total: number } = payments
      .filter(a => a.customer === 'Bob')
      .reduce((pay1, pay2) => ({ total: pay1.total + pay2.amount }),
        { total: 0 });

    expect(answer.total).toBe(927.23);
  });


});
