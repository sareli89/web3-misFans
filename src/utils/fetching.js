export async function getUser () {
    let userData;
    const headers = {'app-id': '62244f196db59039f13b12fb'};
    const users = fetch('https://dummyapi.io/data/v1/user?limit=10', {headers});
    userData = await (await users).json();
    return userData;

}