import history from '../history'

export const autoLogin = (user) => {

    return dispatch => {
        dispatch({type:"LOGIN"})

        const token = localStorage.getItem("token")
        
        if(token){
            fetch('http://localhost:3000/api/v1/auto_login', {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
            .then(resp => resp.json())
            .then(user => {
                dispatch({type:"AUTO_LOG_IN", user})            })
          } else if (!window.location.href.includes('/signup')) {
            history.push('/login')
            dispatch({type:"AUTO_LOGIN_ERROR"}) 
          } else {
              dispatch ({ type: "SIGUP_PAGE" })
          }
    }
}

export const login = (user) => {
    return (dispatch) => {
        dispatch({type:"LOGIN"})

        fetch(`http://localhost:3000/api/v1/login`,{ 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
         })
         .then(resp => resp.json())
         .then(user => {
            if (user.errors) {
            dispatch({type: "LOGIN_ERROR", errors: user.errors})
            history.push('/login')
            } else {
                debugger
            dispatch({ type: "LOGGED_IN", user })
            localStorage.setItem("token", user.jwt)           
            history.push('/dashboard')
            }
        })
    }
}

export const signup = (user) => {
    return (dispatch) => {
        dispatch({type:"LOGIN"})

        fetch(`http://localhost:3000/api/v1/users`,{ 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
         })
         .then(resp => resp.json())
         .then(user => {
             if(user.errors) {
             dispatch({type: "LOGIN_ERROR", errors: user.errors})
             history.push('/signup')
             } else {
             dispatch({ type: "LOGGED_IN", user })
             localStorage.setItem("token", user.jwt)
             history.push('notes')
             }
         })
    }
}



export const logout = () => {
    window.localStorage.removeItem("token")
    return dispatch => {
        dispatch({
        type: 'LOGOUT',
        username: "",
        id: ""
        })
    history.push('/login')
    }
}




