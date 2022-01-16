
export const addNewHobby = payload => {
    return {
        type: 'ADD_HOBBY',
        payload
    }
}

export const setActiveHobby = payload => {
    return {
        type: 'SET_ACTIVE_HOBBY',
        payload
    }
}

export const deleteHobby = payload => {
    return {
        type: 'DELETE_HOBBY',
        payload
    }
}
