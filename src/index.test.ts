import {
  add,
  mul,
  removePElement,
  replaceCodeElement,
  replaceStrongElement,
} from './index';

const log = console.log.bind(console);

describe('sample test describe', () => {
  test('sample test - add', () => {
    expect(add(1)(2)).toBe(3);
  });

  test('sample test - mul', () => {
    expect(mul(1)(2)).toBe(2);
  });

  test('remove p element', () => {
    const input = '<p>{{APIRef("Fetch API")}}</p>';
    const expectResult = '{{APIRef("Fetch API")}}';

    const result = removePElement(input);

    expect(result).toBe(expectResult);
  });

  test('replace strong element', () => {
    const input = '<strong>fetch()</strong>';
    const expectResult = '**fetch()**';

    const result = replaceStrongElement(input);

    expect(result).toBe(expectResult);
  });

  test('replace strong element', () => {
    const input = '<code>fetch()</code>';
    const expectResult = '`fetch()`';

    const result = replaceCodeElement(input);

    expect(result).toBe(expectResult);
  });
});
