import { Calculation } from './calculation.class';

describe('Calculation', () => {
  const calculation = new Calculation();

  it('should instantiate class correctly', () => {
    expect(calculation).toBeTruthy();
  });

  it('should return a value of 0 when the number provided is 1', () => {
    expect(calculation.series(1)).toBe(0);
  });

  it('should return a value of 0 when the number provided is 2', () => {
    expect(calculation.series(2)).toBe(0);
  });

  it('should return a value of 0 when the number provided is 3', () => {
    expect(calculation.series(3)).toBe(0);
  });

  it('should not return a value of 0 when the number provided is 4, and should return a value of 252', () => {
    expect(calculation.series(4)).not.toBe(0);
    expect(calculation.series(4)).toBe(252);
  });

  it('should not return a value of 0 when the number provided is 5, and should return a value of 756', () => {
    expect(calculation.series(5)).not.toBe(0);
    expect(calculation.series(5)).toBe(756);
  });

  it('should return a value of 0 when the number provided is 6', () => {
    expect(calculation.series(6)).toBe(0);
  });

  it('should not return a value of 0 when the number provided is 7, and should return a value of 5040', () => {
    expect(calculation.series(7)).not.toBe(0);
    expect(calculation.series(7)).toBe(5040);
  });

  it('should return a value of 0 when the number provided is 8', () => {
    expect(calculation.series(8)).toBe(0);
  });

  it('should not return a value of 0 when the number provided is 9, and should return a value of 24696', () => {
    expect(calculation.series(9)).not.toBe(0);
    expect(calculation.series(9)).toBe(24696);
  });

  it('should return a value of 0 when the number provided is 10', () => {
    expect(calculation.series(10)).toBe(0);
  });
});
