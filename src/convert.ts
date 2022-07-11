import { JSDOM } from 'jsdom';

const log = console.log.bind(console);

export const removePElement = (input: string): string => {
  const dom = new JSDOM(input);
  const targets = Array.from(dom.window.document.getElementsByTagName('p'));

  targets.forEach((current) => {
    current.outerHTML = current.innerHTML.trim();
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
    const innerHTML = current.innerHTML;
    current.outerHTML = `\*\*${innerHTML}\*\*`.trim();
  });

  const result = dom.window.document.body.innerHTML;
  return result;
};

export const replaceCodeElement = (input: string): string => {
  const dom = new JSDOM(input);
  const targets = Array.from(dom.window.document.getElementsByTagName('code'));

  targets.forEach((current) => {
    const innerHTML = current.innerHTML;
    current.outerHTML = `\`${innerHTML}\``.trim();
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
    current.outerHTML = `[${innerHTML}](${href})`.trim();
  });

  const result = dom.window.document.body.innerHTML;
  return result;
};

export const convertH2Element = (input: string): string => {
  const dom = new JSDOM(input);
  const targets = Array.from(dom.window.document.getElementsByTagName('h2'));

  targets.forEach((current) => {
    const headingText = current.innerHTML.replace(/\r?\n/g, '').trim();
    current.outerHTML = `\#\# ${headingText}`.trim();
  });

  const result = dom.window.document.body.innerHTML;
  return result;
};

export const convertH3Element = (input: string): string => {
  const dom = new JSDOM(input);
  const targets = Array.from(dom.window.document.getElementsByTagName('h3'));

  targets.forEach((current) => {
    const headingText = current.innerHTML.replace(/\r?\n/g, '').trim();
    current.outerHTML = `\#\#\# ${headingText}`.trim();
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
    \`\`\``.trim();
  });

  const result = dom.window.document.body.innerHTML;
  return result;
};

export const convertCodeExample2 = (input: string): string => {
  const dom = new JSDOM(input);
  const targets = Array.from(
    dom.window.document.getElementsByClassName('syntaxbox notranslate'),
  );

  targets.forEach((current) => {
    const code = current.innerHTML;

    current.outerHTML = `
    \`\`\`js
      ${code}
    \`\`\``.trim();
  });

  const result = dom.window.document.body.innerHTML;
  return result;
};

export const convertListElement = (input: string): string => {
  const dom = new JSDOM(input);
  const targets = Array.from(dom.window.document.getElementsByTagName('ul'));

  targets.forEach((currentList) => {
    const currentItems = Array.from(currentList.getElementsByTagName('li'));

    currentItems.forEach((current) => {
      const innerHTML = current.innerHTML.trim();
      current.outerHTML = `- ${innerHTML}`;
    });

    currentList.outerHTML = currentList.innerHTML;
  });

  const result = dom.window.document.body.innerHTML;
  return result;
};

export const convertVarElement = (input: string): string => {
  const dom = new JSDOM(input);
  const targets = Array.from(dom.window.document.getElementsByTagName('var'));

  targets.forEach((current) => {
    const innerHTML = current.innerHTML.trim();
    current.outerHTML = `_${innerHTML}_`;
  });

  const result = dom.window.document.body.innerHTML;
  return result;
};

export const convertEmElement = (input: string): string => {
  const dom = new JSDOM(input);
  const targets = Array.from(dom.window.document.getElementsByTagName('em'));

  targets.forEach((current) => {
    const innerHTML = current.innerHTML.trim();
    current.outerHTML = `*${innerHTML}*`;
  });

  const result = dom.window.document.body.innerHTML;
  return result;
};

export const convertNoteClass = (input: string): string => {
  const dom = new JSDOM(input);
  const targets = Array.from(
    dom.window.document.getElementsByClassName('note'),
  );

  targets.forEach((current) => {
    const innerHTML = current.innerHTML;
    current.outerHTML = `**Note:** ${innerHTML}`.trim();
  });

  const result = dom.window.document.body.innerHTML;
  return result;
};

export const convertDLElement = (input: string): string => {
  const dom = new JSDOM(input);
  const targets = Array.from(dom.window.document.getElementsByTagName('dl'));

  targets.forEach((current) => {
    const innerHTML = current.innerHTML.trim();
    current.outerHTML = innerHTML;
  });

  const result = dom.window.document.body.innerHTML;
  return result;
};

export const convertDTElement = (input: string): string => {
  const dom = new JSDOM(input);
  const targets = Array.from(dom.window.document.getElementsByTagName('dt'));

  targets.forEach((current) => {
    const innerHTML = current.innerHTML.trim();
    current.outerHTML = `* ${innerHTML}`;
  });

  const result = dom.window.document.body.innerHTML;
  return result;
};

export const convertDDElement = (input: string): string => {
  const dom = new JSDOM(input);
  const targets = Array.from(dom.window.document.getElementsByTagName('dd'));

  targets.forEach((current) => {
    const innerHTML = current.innerHTML.trim();
    current.outerHTML = `  * : ${innerHTML}`;
  });

  const result = dom.window.document.body.innerHTML;
  return result;
};
