require("dotenv").config();

module.exports = (token, signingSecret) => (
  new App({
    token: token || process.env.SLACK_BOT_TOKEN,
    signingSecret: signingSecret || process.env.SLACK_SIGNING_SECRET,
  })
)