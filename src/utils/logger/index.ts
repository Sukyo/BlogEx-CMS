/* eslint-disable @typescript-eslint/no-explicit-any */
import log, { Logger } from 'loglevel';

/**
 * 创建 logger 实例
 */
export function createLogger({ enable = true }: {
  enable?: boolean
}): Logger {
  // 如果与其它log库冲突
  const logger = log.noConflict() as Logger;
  // 开启/禁用logger
  if (!enable) {
    logger.disableAll();
  } else {
    logger.enableAll();
  }
  return logger;
}

export const LOG_INSTANCE = createLogger({});

/**
 * logger 方法
 */
export const LOGGER = {
  debug: (...msg: any[]): void => {
    LOG_INSTANCE.debug(...msg);
  },
  warn: (...msg: any[]): void => {
    LOG_INSTANCE.warn(...msg);
  },
  error: (...msg: any[]): void => {
    LOG_INSTANCE.error(...msg);
  },
  trace: (...msg: any[]): void => {
    LOG_INSTANCE.trace(...msg);
  },
  log: (...msg: any[]): void => {
    LOG_INSTANCE.log(...msg);
  },
  info: (...msg: any[]): void => {
    LOG_INSTANCE.info(...msg);
  },
};
