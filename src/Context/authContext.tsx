import { createContext, useContext, useState } from "react";

interface AuthUser {
    user_id: number,
    name: string,
    role: string,
    access: string,
    refresh: string,
}
 
interface AuthContextType{
    user: AuthUser | null;
    login:(userData: AuthUser) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children } : { children: React.ReactNode }) {
    const [user, setUser ] = useState<AuthUser | null> (() => {
        const stored = localStorage.getItem("auth");
        return stored ? JSON.parse(stored) : null;

    });


    function login(userData: AuthUser) {
        setUser(userData);
        localStorage.setItem("auth", JSON.stringify(userData));
    }

    return(
        <AuthContext.Provider value={{user, login}}>
            {children}
        </AuthContext.Provider>
    )
}
    export function useAuth(){
        const context = useContext(AuthContext);
        if (!context) { 
            throw new Error("use Auth must be used inside AuthProvider")
            
    }
    return context;
    }
    