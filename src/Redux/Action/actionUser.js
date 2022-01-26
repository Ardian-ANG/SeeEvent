
export const setUser=(user)=>{
    return{
        type: 'SET_USER',
        payload: user
    }
}

export const setToken=(token)=>{
    localStorage.setItem('token', token)
    return{
        type: 'TOKEN',
        payload : token
    }
}

export const userLogOut=()=>{
    localStorage.removeItem('token')
    // localStorage.removeItem('user')
    return{
        type: 'USER_LOGOUT'
    }
}