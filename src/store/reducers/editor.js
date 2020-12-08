const mainTabDefaultCode =
  "//This is main tab.\n//Only code in this tab gets evaluated.\n\nasync function respond(inputText) {\n\tconst OutputLanguage = 'German';\n\tconst translatedOutput = await CampK12.translate(inputText, 'English', OutputLanguage);\n\n\treturn `Oh in ${OutputLanguage} that is: ${translatedOutput}`;\n}";

const initialState = {
  tabs: {
    1: { id: 1, tabLabel: 0, isRemovable: false, srcCode: mainTabDefaultCode },
    2: {
      id: 2,
      tabLabel: 1,
      isRemovable: true,
      srcCode: "//This is tab-1.\n//Write your code here...",
    },
  },
  activeTabId: 1,
  defaultCode: mainTabDefaultCode,
  getNewTabSampleCode: (label) =>
    `//This is tab-${label + 1}.\n//Write your code here...`,
};

const editor = (state = initialState, action) => {
  switch (action.type) {
    case "TABS_ADDED":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default editor;
