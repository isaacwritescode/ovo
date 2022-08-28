export const camelCaseToSentance = (str) =>
  str.replace(/[A-Z]/g, (letter) => ` ${letter.toLowerCase()}`);
