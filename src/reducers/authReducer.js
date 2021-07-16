//Reducers names start with small letter 
//In reducer we'll pass two parameter to function
const initState={
    authError: null
}
const authReducer = (state  = initState,action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('Login failed')
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('Login success')
            return{
                ...state,
                authError: null
            }

        case 'SIGNOUT_SUCCESS':
            console.log('Sign Out successfully')
            return state


        case 'SIGNUP_SUCCESS':
            console.log('Signed In Sucessfully')
            return{
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('Signed Out Successfully')
            return{
                ...state,
                authError: action.err.message
            }

    
        default:
            return state
    }
     
}


export default authReducer