
export const setUser=(data)=>{
    // JSON.stringify(localStorage.setItem('user', data))
    // console.log(data, 'data user');
    return{
        type: 'SET_USER',
        payload: data
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