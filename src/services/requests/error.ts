import { Response } from './types';

/**
 * 请求错误类
 */
export class RequestError extends Error {
  public code?: number;
  public msg?: string;
  public response?: Response<unknown>;

  public constructor(code?: number, message?: string, response?: Response<unknown>) {
    super(`返回码:${code},提示信息:${message}`);
    this.code = code;
    this.msg = message;
    this.response = response;
  }
}
