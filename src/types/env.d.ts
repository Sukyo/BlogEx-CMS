interface Env {
  MODE: string, // 当前环境
  VITE_BASE_URL: string, // 接口基地址
  VITE_BASE: string, // 部署时的基本url
}

interface ImportMeta {
  env: Env
}