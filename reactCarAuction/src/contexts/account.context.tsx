import { tokenService } from "@/sevices/token.service";
import React, { useContext, useEffect } from "react";

export type AccountContextType = {
    email: string | null;
    clear: () => void;
    isAuth: () => boolean;
    setEmail: (email: string | null) => void;
}

export const AccountContext = React.createContext<AccountContextType | null>(null);

export const AccountProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [email, setEmail] = React.useState<string | null>(null);

    useEffect(() => {
        const token = tokenService.get();
        if (token) {
            // Assuming the token payload contains the email
            const payload = JSON.parse(atob(token.split('.')[1]));
            setEmail(payload.Email);
            console.log("Email: " + payload.Email);
        }
    }, []);

    const clear = () => setEmail(null); 
    const isAuth = () => email !== null;

    return(
        <AccountContext.Provider value={{ email, setEmail, clear, isAuth}}>
            {children}
        </AccountContext.Provider>
    );
}

export const useAccountContext = (): AccountContextType => {
    const context = useContext(AccountContext);
    if(!context){
        throw new Error("useAccountContext must be used within an AccountProvider")
    }
    return context;
}