const headers = {'app-id': '62244f196db59039f13b12fb'};
const api_base = 'https://dummyapi.io/data/v1';
async function getUser () {
    let userData;
    const users = fetch(`${api_base}/user?limit=10`, {headers});
    userData = await (await users).json();
    return userData;


}

async function getComments (userId) {
    let commentData;
    const comments = fetch(`${api_base}/user/${userId}/comment`, {headers});
    commentData = await (await comments).json();
    return commentData;

}

export { getUser, getComments}