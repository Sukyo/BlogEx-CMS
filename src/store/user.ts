import { defineStore } from 'pinia';
interface UserInfo {
    name: string
}
export const useUserStore = defineStore({
    id: 'user',
    state: (): UserInfo => ({
        name: '超级管理员'
    })
})
