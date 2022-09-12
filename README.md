# Slack Bolt App

This is an example App built with [Slack's Bolt Framework](https://slack.dev/bolt-js/tutorial/getting-started) in node.js.

Our App is a simple reactji channeler which reposts messages from any channel the Bot user is part of to a configured channel,
simply by reacting with the ⚡ emoji to any of these messages.

### Features

- Once our App is invited to a channel it will introduce itself with [`member_joined_channel`](https://api.slack.com/events/member_joined_channel) event
- When a user adds a reaction with the ⚡ emoji to a message in a channel where the Bot User is part of, it will post a link of this message to the configured channel.

### Step by step setup

1. [Create a Slack app](https://api.slack.com/apps?new_app=1&ref=bolt_start_hub)
1. Select "From scratch", give your app a name and select the Slackathon workspace to install it
1. Select "Bots" from the "Add features and functionality" -> click "Review scopes to add"
1. Scroll to bot token scopes and add scopes. Some useful ones are
    *. channels:history
    *. channels:read
    *. chat:write
    *. commands
    *. groups:read
    *. im:read
    *. reactions:read
    *. reactions:write
    *. users:read
1. Scroll up and click install to workspace, when you do changes to the app in the management portal you might need to reinstall it
1. Copy the Bot User OAuth Token into you SLACK_BOT_TOKEN env variable
1. Go to event subscriptions and enable it, adding member_joined_channel and reaction_added (remember to save changes)
1. Go to Socket Mode and enable it. Keep the token, this should go into the SLACK_APP_TOKEN environment variable in Glitch
1. It's time to re-install your app 😀
1. Go to Basic information and copy the Signing Secret into you SLACK_SIGNING_SECRET env variable
