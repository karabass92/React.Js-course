import axios from "axios";


const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: { "API-KEY": "0930e596-4bb5-43c6-930b-d3cce65542d0" }
    });


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, { withCredentials: true })
            .then(response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
};


export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
        .then(response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status})
        .then(response => response.data);
    }
};


export const authAPI = {
    me() {
        return instance.get(`auth/me`, { withCredentials: true });
    }
};