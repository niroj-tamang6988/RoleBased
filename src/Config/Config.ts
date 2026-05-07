const BASE_URL = import.meta.env.VITE_BASE_URL

    export const apiClient = async(
        endpoint: string,
        options: RequestInit ={}
    ): Promise<any> =>{

        const url = `${BASE_URL}${endpoint}`

        try{
            const response = await fetch (url, {...options});
            if(!response.ok){
                throw new Error(`Api request failed with status ${response.status}`);
        }
        return await response.json();
    } catch (error){
        console.error("Api request error:", error);
        throw error;
    }


}