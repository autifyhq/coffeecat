module.exports = async (app, token, channel_id) => {
  const response = await app.client.conversations.members({
    token: token,
    channel: channel_id,
  })
  if (response.ok) {
    return response.members
  }
  return false;
}