export const getLanguageCode = (lang) => {
  switch (lang.toLowerCase()) {
    case "dutch":
      return "nl";
    case "arabic":
      return "ar";
    case "french":
      return "fr";
    case "german":
      return "de";
    case "gujarati":
      return "gu";
    case "hindi":
      return "hi";
    case "urdu":
      return "ur";
    case "japanese":
      return "ja";
    default:
      //english
      return "en";
  }
};
