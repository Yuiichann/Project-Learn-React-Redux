
const hobbyList = JSON.parse(localStorage.getItem('hobbyList'))

const setStorage = (data) => {
    localStorage.setItem('hobbyList', JSON.stringify(data))
}

const initState = {
    list: hobbyList ?? [],
    activeId: null,
}

const hobbyReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY': {
            const newList = [...state.list]
            newList.push(action.payload)
            setStorage(newList)
            return {
                ...state,
                list: newList
            }
        }
        case 'SET_ACTIVE_HOBBY': {
            return {
                ...state,
                activeId: action.payload
            }
        }
        
        case 'DELETE_HOBBY': {
            const newList = [...state.list]
            newList.splice(action.payload, 1)
            setStorage(newList)
            return {
                ...state,
                list: newList
            }
        }
        
        default: {
            return state;
        }
    }
}

export default hobbyReducer
