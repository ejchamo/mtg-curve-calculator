const windowsTranslate = (input) => {
  input = input.replaceAll("\r\n", "\n");
  return input;
};
export default windowsTranslate;
