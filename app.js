require("dotenv").config();
const { App } = require("@slack/bolt");

const allocateMember = require('./src/allocate')
const shuffle = require('./src/shuffle')
const getMembers = require('./src/getMembers')

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

app.message("coffeechat", async ({ message, say, context }) => {
  if (message.subtype === 'reminder_add') return
  const found = message.text.match(/coffeechat (?<rooms>\d)/)
  if (!found) {
    console.log(`no room found on ${message.text}`)
    return
  }
  const token = context.botToken;
  const members = await getMembers(app, token, message.channel)
  const shuffledMembers = shuffle(members)
  const allocated = allocateMember(shuffledMembers, found.groups.rooms)

  const notifyText = allocated.reduce((text, current, currentIndex) => {
    text += `Meeting-Room-${currentIndex + 1}` + "\n"
    text += current.reduce((text, current) => {
      return text + `- ${current.real_name}` + "\n"
    }, '')
    return text
  }, '')
  await say(notifyText)
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
