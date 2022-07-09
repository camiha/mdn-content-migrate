import {
  convertCodeExample,
  convertH2Element,
  convertLinkElement,
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

  test('convert Link element', () => {
    const input =
      '<a href="/ja/docs/Security/CSP/CSP_policy_directives">Content Security Policy</a>';
    const expectResult =
      '[Content Security Policy](/ja/docs/Security/CSP/CSP_policy_directives)';

    const result = convertLinkElement(input);
    expect(result).toBe(expectResult);
  });

  test('convert h2 element', () => {
    const input = '<h2 id="Syntax" name="Syntax">Syntax</h2>';
    const expectResult = '## Syntax';

    const result = convertH2Element(input);
    expect(result).toBe(expectResult);
  });

  // TODO: indent and line break format
  test('convert code example', () => {
    const input = `
    <pre class="brush: js notranslate">
      console.log('hello world!');</pre>`;

    const expectResult = `
    \`\`\`js
            console.log('hello world!');
    \`\`\``;

    const result = convertCodeExample(input);
    console.log(result);
    console.log(expectResult);

    expect(result).toBe(expectResult);
  });
});
