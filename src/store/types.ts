import { DefineStoreOptions, _GettersTree } from "pinia";
// 定义store的选项
export type DefineStoreConfig<S, G, A> = DefineStoreOptions<string, S, _GettersTree<G>, A>;