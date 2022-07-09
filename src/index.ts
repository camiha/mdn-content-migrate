import { JSDOM } from 'jsdom';

const log = console.log.bind(console);

export const removePElement = (input: string): string => {
  const dom = new JSDOM(input);
  const targets = Array.from(dom.window.document.getElementsByTagName('p'));

  targets.forEach((current) => {
    current.outerHTML = current.innerHTML;
  });

  const result = dom.window.document.body.innerHTML;
  return result;
};

export const replaceStrongElement = (input: string): string => {
  const dom = new JSDOM(input);
  const targets = Array.from(
    dom.window.document.getElementsByTagName('strong'),
  );

  targets.forEach((current) => {
    const text = current.innerHTML;
    current.outerHTML = `\*\*${text}\*\*`;
  });

  const result = dom.window.document.body.innerHTML;
  return result;
};

export const replaceCodeElement = (input: string): string => {
  const dom = new JSDOM(input);
  const targets = Array.from(dom.window.document.getElementsByTagName('code'));

  targets.forEach((current) => {
    const text = current.innerHTML;
    current.outerHTML = `\`${text}\``;
  });

  const result = dom.window.document.body.innerHTML;
  return result;
};

export const convertLinkElement = (input: string): string => {
  const dom = new JSDOM(input);
  const targets = Array.from(dom.window.document.getElementsByTagName('a'));

  targets.forEach((current) => {
    const href = current.getAttribute('href');
    const innerHTML = current.innerHTML;
    current.outerHTML = `[${innerHTML}](${href})`;
  });

  const result = dom.window.document.body.innerHTML;
  return result;
};

export const convertH2Element = (input: string): string => {
  const dom = new JSDOM(input);
  const targets = Array.from(dom.window.document.getElementsByTagName('h2'));

  targets.forEach((current) => {
    const headingText = current.innerHTML;
    current.outerHTML = `\#\# ${headingText}`;
  });

  const result = dom.window.document.body.innerHTML;
  return result;
};

export const convertCodeExample = (input: string): string => {
  const dom = new JSDOM(input);
  const targets = Array.from(
    dom.window.document.getElementsByClassName('brush: js notranslate'),
  );

  targets.forEach((current) => {
    const code = current.innerHTML;

    current.outerHTML = `
    \`\`\`js
      ${code}
    \`\`\``;
  });

  const result = dom.window.document.body.innerHTML;
  return result;
};
