const initialState = {
  query: "",
  reply: "",
  defaultBotMsg: {
    id: 1,
    message: "Welcome to CampK12.",
    type: "bot", // "user"
  },
};

const chatBot = (state = initialState, action) => {
  switch (action.type) {
    case "QUERY_ADDED":
    case "REPLY_ADDED":
      return { ...action.payload };
    default:
      return state;
  }
};

export default chatBot;
