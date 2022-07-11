import {
  removePElement,
  replaceStrongElement,
  replaceCodeElement,
  convertLinkElement,
  convertH2Element,
  convertH3Element,
  convertCodeExample,
  convertCodeExample2,
  convertListElement,
  convertVarElement,
  convertEmElement,
  convertNoteClass,
  convertDLElement,
  convertDTElement,
  convertDDElement,
} from './convert';

const createPipeline =
  (...fns: Array<(n: string) => string>) =>
  (n: string) =>
    fns.reduce((v, f) => f(v), n);

export const migrate = (target: string): string => {
  const task = createPipeline(
    convertDTElement,
    convertDDElement,
    convertDLElement,
    convertNoteClass,
    convertEmElement,
    convertVarElement,
    convertListElement,
    convertCodeExample,
    convertCodeExample2,
    convertH2Element,
    convertH3Element,
    convertLinkElement,
    replaceCodeElement,
    replaceStrongElement,
    removePElement,
  );

  const result = task(target);
  return result;
};
