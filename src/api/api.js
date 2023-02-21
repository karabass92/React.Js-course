import axios from "axios";


const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: { "API-KEY": "c87ecaf5-a961-4a92-9053-263299695ffb" }
    });


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, { withCredentials: true })
            .then(response => response.data);
    },
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    },
    getAuth() {
        return instance.get(`auth/me`, { withCredentials: true });
    },
    follow(userId) {
        return instance.post(`/follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`/follow/${userId}`)
            .then(response => response.data)
    }
};