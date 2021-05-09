import axios from "axios";

export const API_BASE_URL = `https://taskmanager-service.mahdipakravan.ir`;
export interface CustomObject {[key : string] : any}
export interface User {
    username ?: string ,
    password ?: string ,
}
export enum TaskStatus {
    TODO = 'todo',
    DOING = 'doing',
    DONE = 'done',
    DELETED = 'deleted',
}
export interface Task {
    _id ?: string,
    title : string,
    desc : string;
    status : TaskStatus
}

export type TasksResponseType = Array<Task>;
export const getTasks = () => axios({
    url: `${API_BASE_URL}/task`,
    method: "GET"
}).then<TasksResponseType>((res) => res.data);

export type PostTaskType = Omit<Task , "_id">;
export const PostTask = (data : PostTaskType) => axios({
    url: `${API_BASE_URL}/task`,
    method: "POST",
    data
}).then<Task>((res) => res.data);

export const getTask = (id : string) => axios({
    url: `${API_BASE_URL}/task/${id}`,
    method: "GET",
}).then<Task>((res) => res.data);

export const postUpdate = (id : string , data : Partial<Task>) => axios({
    url: `${API_BASE_URL}/task/${id}`,
    method: "PATCH",
    data
}).then<Task>((res) => res.data);
