import axios from 'axios'
import UserProfile from '../../layout/components/UserProfile'

const BASE_URL = "https://api.github.com/users"

export function findUser(userName){

    const request = axios.get(`${BASE_URL}/${userName}`)

    return {
        type: "NEW_USER",
        payload: request
    }
}