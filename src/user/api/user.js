import { instance } from '@/core/api';
import { requestWrapper } from "@/core";

//登录
export const login = params => {
    return instance.post(`/login`, params)
}

//用户权限
export const permission = (params, opt) => {
    return requestWrapper(params => {
        return instance.get(`/getPermissions`, { params })
    }, params, opt)
}

//用户信息
export const info = (params, opt) => {
    return requestWrapper(params => {
        return instance.get(`/getAccountInfo`, { params })
    }, params, opt)
}


//修改密码
export const editPassword = params => {
    return instance.put(`/updatePassword`, params)
}

//切换身份
export const switchRole = params => {
    return instance.get(`/switchIdentity`, { params })
}
