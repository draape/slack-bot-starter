const { App } = require("@slack/bolt");
const store = require("./store");
const messages = require("./messages");
const helpers = require("./helpers");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
});

/**

`reaction_added` event is triggered when a user adds a reaction to a message in a channel where the Bot User is part of

https://api.slack.com/events/reaction_added

We use this event to check if the added emoji is a ⚡ (:zap:) emoji. If that's the case,
we'll play a game with WOPR

**/
app.event("reaction_added", async ({ event, client, respond }) => {
  console.log("asdf");
  // only react to ⚡ (:zap:) emoji
  if (event.reaction === "zap") {
    console.log("deg");
    let channel = store.getChannel();
    

    // post this message to the configured channel
    await respond({
      channel: channel && channel.id,
      text: messages.wopr,
    });
  }
});

// get user info of user who reacted to this message
/*const user = await client.users.info({
      user: event.user,
    });*/

// formatting the user's name to mention that user in the message (see: https://api.slack.com/messaging/composing/formatting)
//let name = "<@" + user.user.id + ">";

app.error(async (error) => {
  // Check the details of the error to handle cases where you should retry sending a message or stop the app
  console.error(error);
});

// Start your app
(async () => {
  await app.start(process.env.PORT || 3000);
  console.log("⚡️ Bolt app is running!");

  // after the app is started we are going to retrieve our Bot's user id through
  // the `auth.test` endpoint (https://api.slack.com/methods/auth.test)
  // and store it for future reference
  let id = await app.client.auth
    .test({ token: process.env.SLACK_BOT_TOKEN })
    .then((result) => result.user_id);
  store.setMe(id);
})();
