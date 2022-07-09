import { text } from 'stream/consumers';
import { resourceLimits } from 'worker_threads';
import {
  convertCodeExample,
  convertDDElement,
  convertDLElement,
  convertDTElement,
  convertEmElement,
  convertH2Element,
  convertH3Element,
  convertLinkElement,
  convertListElement,
  convertNoteClass,
  convertVarElement,
  removePElement,
  replaceCodeElement,
  replaceStrongElement,
} from './convert';

const log = console.log.bind(console);

describe('sample test describe', () => {
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

  test('convert h2 element, fix line break', () => {
    const input = `
    <h2 id="Syntax" name="Syntax">
      Syntax
    </h2>`;
    const expectResult = '## Syntax';

    const result = convertH2Element(input);
    expect(result).toBe(expectResult);
  });

  test('convert h2 element', () => {
    const input = '<h3 id="Syntax" name="Syntax">Syntax</h3>';
    const expectResult = '### Syntax';

    const result = convertH3Element(input);
    expect(result).toBe(expectResult);
  });

  // TODO: format indent and line break
  test('convert code example', () => {
    const input = `
    <pre class="brush: js notranslate">
      console.log('hello world!');</pre>`;

    const expectResult = `\`\`\`js
            console.log('hello world!');
    \`\`\``;

    const result = convertCodeExample(input);

    expect(result).toBe(expectResult);
  });

  test('convert link element', () => {
    const input = `
    <ul>
      <li><a href="/ja/docs/Web/API/test1">test1</a></li>
      <li><a href="/ja/docs/Web/API/test2">test2</a></li>
    </ul>`;

    const expectResult = `
      - <a href="/ja/docs/Web/API/test1">test1</a>
      - <a href="/ja/docs/Web/API/test2">test2</a>
    `;

    const result = convertListElement(input);
    expect(result).toBe(expectResult);
  });

  test('convert var element', () => {
    const input = '<var>fetch()</var>';
    const expectResult = '_fetch()_';

    const result = convertVarElement(input);

    expect(result).toBe(expectResult);
  });

  test('convert em element', () => {
    const input = '<em>fetch()</em>';
    const expectResult = '*fetch()*';

    const result = convertEmElement(input);

    expect(result).toBe(expectResult);
  });

  test('covert note class', () => {
    const input = '<div class="note">string here</div>';
    const expectResult = '**Note:** string here';

    const result = convertNoteClass(input);

    expect(result).toBe(expectResult);
  });

  test('remove dl element', () => {
    const input = `
    <dl>
      <dt>term1</dt>
      <dd>term1 description</dd>
      <dt>term2</dt>
      <dd>term2 description</dd></dl>`;

    const expectResult = `<dt>term1</dt>
      <dd>term1 description</dd>
      <dt>term2</dt>
      <dd>term2 description</dd>`;

    const result = convertDLElement(input);

    expect(result).toBe(expectResult);
  });

  test('convert dt element', () => {
    const input = `
    <dl>
      <dt>term1</dt>
      <dd>term1 description</dd>
      <dt>term2</dt>
      <dd>term2 description</dd>
    </dl>`;

    const expectResult = `<dl>
      * term1
      <dd>term1 description</dd>
      * term2
      <dd>term2 description</dd>
    </dl>`;

    const result = convertDTElement(input);

    expect(result).toBe(expectResult);
  });

  test('covert dd element', () => {
    const input = `
    <dl>
      <dt>term1</dt>
      <dd>term1 description</dd>
      <dt>term2</dt>
      <dd>term2 description</dd>
    </dl>`;

    const expectResult = `<dl>
      <dt>term1</dt>
        * : term1 description
      <dt>term2</dt>
        * : term2 description
    </dl>`;

    const result = convertDDElement(input);

    log(result);
    log(expectResult);

    expect(result).toBe(expectResult);
  });
});
