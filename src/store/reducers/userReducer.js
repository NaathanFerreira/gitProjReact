const initialState = {
    name: "Nathan",
    bio: "Estudante"
}

export default function(state = initialState, action){
    switch(action.type){
        case "NEW_USER":
            return { ...state, name: action.payload.data.name, bio: action.payload.data.bio}
        default:
            return state
    }
}