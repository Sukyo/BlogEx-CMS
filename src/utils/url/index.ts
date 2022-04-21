/**
 * url 参数实例
 * 通过URL_PARAMS.get('a')获取对应值
 */
export const URL_PARAMS = new URLSearchParams(window.location.search);


/**
 * 移除链接中的协议头
 * @param src 链接
 */
export function removeHttp(src: string): string {
  return src.replace(/^http(s?):/, '');
}

/**
 * 获取hash参数
 * @param variable
 */

export function getQueryVariable(variable: string): string {
  const query = window.location.hash.substring(1);
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (pair[0] === variable) {
      return pair[1];
    }
  }
  return '';
}
