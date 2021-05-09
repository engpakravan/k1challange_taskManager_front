import {User} from "./index";

export function getAuth() : User {
    return {
        username : localStorage.getItem("username") || "",
        password : localStorage.getItem("password") || ""
    }
}