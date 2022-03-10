const BASE_URL = process.env.REACT_APP_BASE_URL;
const TOKEN = process.env.REACT_APP_TOKEN;

const headers = { "app-id": TOKEN };
async function getUser() {
  let userData;
  const users = fetch(`${BASE_URL}/user?limit=10`, { headers });
  userData = await (await users).json();
  return userData;
}

async function getComments(userId) {
  let commentData;
  const comments = fetch(`${BASE_URL}/user/${userId}/comment`, { headers });
  commentData = await (await comments).json();
  return commentData;
}

export { getUser, getComments };
