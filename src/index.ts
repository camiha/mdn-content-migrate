export const add =
  (x: number) =>
  (y: number): number =>
    x + y;

export const mul =
  (x: number) =>
  (y: number): number =>
    x * y;

export const removePElement = (input: string): string => {
  const startElement = '<p>';
  const endElement = '</p>';

  const result = input.replaceAll(startElement, '').replaceAll(endElement, '');

  return result;
};

export const replaceStrongElement = (input: string): string => {
  const startElement = '<strong>';
  const endElement = '</strong>';
  const newStr = '**';

  const result = input
    .replaceAll(startElement, newStr)
    .replaceAll(endElement, newStr);

  return result;
};

export const replaceCodeElement = (input: string): string => {
  const startElement = '<code>';
  const endElement = '</code>';
  const newStr = '`';

  const result = input
    .replaceAll(startElement, newStr)
    .replaceAll(endElement, newStr);

  return result;
};
