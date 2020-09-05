async function getUserInfo(app, token, user) {
  const response = await app.client.users.info({
    token,
    user,
  })
  return response.user
}

async function getUsersInfo(app, tokens, userIdList) {
  let promises = userIdList.map(userId => (
     getUserInfo(app, tokens, userId)
  ))
  return Promise.all(promises)
}

async function getMemberList(app, token, channel) {
  const response = await app.client.conversations.members({
    token,
    channel,
  })
  if (response.ok) {
    return response.members
  }
  return false;
}

async function getMembers(app, token, channel, includeBots) {
  const memberList = await getMemberList(app, token, channel)
  const members = await getUsersInfo(app, token, memberList)
  const livingMembers = members.filter(member => !member.deleted)
  if (!includeBots) {
    return livingMembers.filter(member => !member.is_bot)
  }
  return livingMembers
}

module.exports = getMembers