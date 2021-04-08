const initialState = {
    searched: false,
    photoUrl: "",
    name: "",
    bio: "",
    location: "",
    blog: "",
    gitLink: "",
    reposCount: 0,
    reposList: [],
}

export default function(state = initialState, action){
    switch(action.type){
        case "NEW_USER":
            return { ...state,
                    searched: true, 
                    photoUrl: action.payload.data.avatar_url,
                    name: action.payload.data.name, 
                    bio: action.payload.data.bio,
                    location: action.payload.data.location,
                    blog: action.payload.data.blog,
                    gitLink: action.payload.data.html_url,
                    reposCount: action.payload.data.public_repos,
                    reposList: action.reposList
                }
        default:
            return state
    }
}