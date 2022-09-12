module.exports = {
  welcome_channel: {
    text: "Hi there! Bolt is a simple App that forwards messages to another channel by reacting to a message with the :zap: emoji.",
    blocks: [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "Hi there! \n\n Bolt is a simple App that forwards messages from this channel to <#{{channelId}}|{{channelName}}> by reacting to a message with the :zap: emoji."
        }
      }
    ]
  },
  wopr: {
    text: "Would you like to play a game?",
    attachments: [
      {
        text: "Choose a game to play",
        fallback: "You are unable to choose a game",
        callback_id: "wopr_game",
        color: "#3AA3E3",
        attachment_type: "default",
        actions: [
          {
            name: "game",
            text: "Chess",
            type: "button",
            value: "chess",
          },
          {
            name: "game",
            text: "Falken's Maze",
            type: "button",
            value: "maze",
          },
          {
            name: "game",
            text: "Thermonuclear War",
            style: "danger",
            type: "button",
            value: "war",
            confirm: {
              title: "Are you sure?",
              text: "Wouldn't you prefer a good game of chess?",
              ok_text: "Yes",
              dismiss_text: "No",
            },
          },
        ],
      },
    ],
  },
};
