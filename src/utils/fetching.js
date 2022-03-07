export const getUser = () => {
    const headers = {'app-id': '62244f196db59039f13b12fb'};
    const users = fetch('https://dummyapi.io/data/v1/user?limit=10', {headers});
    users.then((response) => {
        const respnoseJson = response.json().then((value) => {
            console.log(value);
        })
    })
}