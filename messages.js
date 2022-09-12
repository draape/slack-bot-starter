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
  }
};
