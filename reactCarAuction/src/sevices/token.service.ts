const accessTokenKey = "access-token";

export const tokenService = {
    save(accessToken: string){
        localStorage.setItem(accessTokenKey, accessToken);
    },
    get(): string | null{
        return localStorage.getItem(accessTokenKey);
    },
    clear(){
        localStorage.removeItem(accessTokenKey);
    },
    getPayload(){
        // TODO
    }
}