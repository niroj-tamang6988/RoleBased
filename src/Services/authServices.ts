import {apiClient} from "../Config/Config"

export const Login = async(
    phone_number:string,
    password:string,
) =>{
    return apiClient (
        "/api/auth/login/",
        {
            method:"POST",

            headers:{
                "Content-Type" : "application/json",
            },
            body:JSON.stringify({
                phone_number,
                password,
            })
        }
    );
}

