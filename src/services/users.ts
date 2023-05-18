import { HTTP } from './http';
import { Logger } from './logger';
import { ILogger } from './logger';

import type { ApiConfig, User } from '../types';
export class Users {
  http: HTTP;
  apiConfig: ApiConfig;
  logger: ILogger
  static $inject = ['config', 'http'];

  constructor(apiConfig: ApiConfig, http: HTTP) {
//     this.http = new HTTP(apiConfig, logger);
    this.http = http;
    this.apiConfig = apiConfig;
  }

  getUsers() {
    return this.http.get(this.apiConfig.resources.users) as unknown as User[];
  }
}
