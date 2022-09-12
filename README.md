# Slack Bolt App

This is an example App built with [Slack's Bolt Framework](https://slack.dev/bolt-js/tutorial/getting-started) in node.js.

Our App is a simple reactji channeler which reposts messages from any channel the Bot user is part of to a configured channel, 
simply by reacting with the ⚡ emoji to any of these messages.

### Features

* Once our App is invited to a channel it will introduce itself with [`member_joined_channel`](https://api.slack.com/events/member_joined_channel) event
* When a user adds a reaction with the ⚡ emoji to a message in a channel where the Bot User is part of, it will post a link of this message to the configured channel.

### Requirements

* A Bot User must be added to your App
* Your App must be subscribed to [Events API](https://api.slack.com/events-api)
* [Interactive components](https://api.slack.com/reference/messaging/interactive-components) must be enabled
* Your app needs to be subscribed to the events mentioned in the *Events* section

### Scopes

* [`bot`](https://api.slack.com/scopes/bot)
* [`channels:write`](https://api.slack.com/scopes/channels:write)

### Events

#### Workspace events
* [`app_home_opened`](https://api.slack.com/events/app_home_opened)

#### Bot events
* [`member_joined_channel`](https://api.slack.com/events/member_joined_channel)
* [`reaction_added`](https://api.slack.com/events/reaction_added)


1. [Create a Slack app](https://api.slack.com/apps?new_app=1&ref=bolt_start_hub)
1. Select "From scratch", give your app a name and select the Slackathon workspace to install it
1. Select "Bots" from the "Add features and functionality" -> click "Review scopes to add"
1. Scroll to bot token scopes and add scopes. Some useful ones are
  1. channels:history
  1. channels:read
  1. chat:write
  1. commands
  1. groups:read
  1. im:read
  1. reactions:read
  1. reactions:write
  1. users:read
1. Scroll up and click install to workspace, when you do changes to the app in the management portal you might need to reinstall it
1. Go to event subscriptions and enable it, adding member_joined_channel and reaction_added
1. 


SLACK_BOT_TOKEN
SLACK_SIGNING_SECRET
SLACK_APP_TOKEN