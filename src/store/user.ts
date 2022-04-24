import { defineStore, DefineStoreOptions, _GettersTree } from 'pinia';
import { DefineStoreConfig } from './types';
export interface UserState {
    name?: string
}
export interface UserGetters {

}
export interface UserActions {
}
export const useUserStore = defineStore({
    id: 'user',
    state: (): UserState => ({
        name: '超级管理员'
    }),
    getters: {

    },
    actions: {

    }
} as DefineStoreConfig<UserState, UserGetters, UserActions>);
