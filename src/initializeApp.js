require("dotenv").config();

module.exports = () => (
  new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
  })
)