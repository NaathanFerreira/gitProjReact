import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { NEW_USER, SET_LOADING, CLEAR_USER} from '../types'

const BASE_URL = "https://api.github.com/users"

export async function findUser(userName){

    validate(userName)
    const request = await axios.get(`${BASE_URL}/${userName}`)
    const reposList = await getUserRepos(request.data.repos_url)

    return {
        type: NEW_USER,
        payload: request,
        reposList: reposList,
    }
}

export function clearUser(){
    return {
        type: CLEAR_USER
    }
}


export function setLoading(){
    return {
        type: SET_LOADING
    }
}

async function getUserRepos(url){

    const requestRepos = await axios.get(url)
    return requestRepos.data

}

async function validate(userName){
    await axios.get(`${BASE_URL}/${userName}`).catch(e => toastr.error("Error", "User not found"))
}