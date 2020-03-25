export const capitalize = (input: string): string => {
  const words: string[] = input.split(' ');
  const capitalizedWords = words.map(word => {
    return word.replace(/^[A-Za-z]{1}/g, w => {
      let char = w.charCodeAt(0);
      if (char < 90) {
        char += 32;
      } else {
        char -= 32;
      }
      return String.fromCharCode(char);
    });
  });

  return capitalizedWords.join(' ');
};
