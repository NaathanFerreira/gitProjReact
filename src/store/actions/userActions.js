import axios from 'axios'
import UserProfile from '../../layout/components/UserProfile'

const BASE_URL = "https://api.github.com/users"

export async function findUser(userName){

    const request = await axios.get(`${BASE_URL}/${userName}`)
    const reposList = await getUserRepos(request.data.repos_url)

    return {
        type: "NEW_USER",
        payload: request,
        reposList: reposList,
    }
}

async function getUserRepos(url){

    const requestRepos = await axios.get(url)
    return requestRepos.data

}