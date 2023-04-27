import { API } from "./apiInterceptor";

// USERS
export const getData =  (api_url,body) =>  API.post(api_url,body);
export const patchData= (api_url,body) =>  API.patch(api_url,body);
export const postData = (api_url,body) =>  API.post(api_url,body);
export const deleteData =(api_url,body) => API.patch(api_url,body);

//AUTH
export const signIn = (fromData) => API.post("/login", fromData);
export const signUp = (fromData) => API.post("/register", fromData);