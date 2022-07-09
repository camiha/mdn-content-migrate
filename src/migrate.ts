import {
  removePElement,
  replaceStrongElement,
  replaceCodeElement,
  convertLinkElement,
  convertH2Element,
  convertH3Element,
  convertCodeExample,
  convertListElement,
  convertVarElement,
  convertEmElement,
  convertNoteClass,
  convertDLElement,
  convertDTElement,
  convertDDElement,
} from './convert';

export const migrate = (target: string): string => {
  // もっと良い書き方を見つけたいね
  const result = convertDTElement(
    convertDDElement(
      convertDLElement(
        convertNoteClass(
          convertEmElement(
            convertVarElement(
              convertListElement(
                convertCodeExample(
                  convertH2Element(
                    convertH3Element(
                      convertLinkElement(
                        replaceCodeElement(
                          replaceStrongElement(removePElement(target)),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  );

  return result;
};
