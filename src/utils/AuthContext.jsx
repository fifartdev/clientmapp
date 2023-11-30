import { createContext, useContext, useState, useEffect } from "react";
import { account } from "../appwriteConfig";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    
    const navigate = useNavigate()

    useEffect(()=>{
        checkUserStatus()
    },[])

    const loginUser = async (userInfo) => {
        setLoading(true)
        try {
            let response = await account.createEmailSession(
                userInfo.email,
                userInfo.password
            )
            let accountDetails = await account.get()
            setUser(accountDetails)
            navigate('/profile')
            console.log(response);

        } catch (error) {
            console.log(error.message);
        }
        setLoading(false)
    }
    const logoutUser = async () => {
        try {
            await account.deleteSession('current')
            setUser(null)
        } catch (error) {
            console.log(error.message);
        }
    }
    const checkUserStatus = async () => {
        try {
            let accountDetails = await account.get()
            setUser(accountDetails)
        } catch (error) {
            console.log(error.message);
        }
        setLoading(false)
    }

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const contextData = {
        user,
        loginUser,
        logoutUser,
        
    }

    return (
        <AuthContext.Provider value={contextData}>
            
            {loading ? <h1>Loading...</h1> : children}
            
        </AuthContext.Provider>
    )

}

export const useAuth = () => { return useContext(AuthContext) }

export default AuthContext