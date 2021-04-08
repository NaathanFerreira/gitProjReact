import initialState from '../initialState'
import { NEW_USER, SET_LOADING, CLEAR_USER} from '../types'

export default function(state = initialState, action){
    switch(action.type){
        case NEW_USER:
            const { avatar_url, name, bio, location, blog, html_url, public_repos} = action.payload.data
            return { ...state,
                    loading: false,
                    searched: true, 
                    photoUrl: avatar_url,
                    name: name, 
                    bio: bio,
                    location: location,
                    blog: blog,
                    gitLink: html_url,
                    reposCount: public_repos,
                    reposList: action.reposList
                }
        case SET_LOADING:
            return {
                ...state, loading: true
            }
        case CLEAR_USER:
            return {
                ...initialState
            }
        default:
            return state
    }
}