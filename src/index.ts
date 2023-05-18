import { Users } from './services/users';
import { Logger } from './services/logger';
import { createIoCContainer } from './ioc/index';

const ioc = createIoCContainer();


import type { User, ApiConfig } from './types';

const renderUsers = async (config: ApiConfig) => {
//   const usersService = new Users(config);
  const usersService = ioc.resolve('users')
  const users = await usersService.getUsers();

  const listNode = document.getElementById('users-list');

  users.forEach((user: User) => {
    const listItemNode = document.createElement('li');

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = () => {
  const config = (window as any).__CONFIG__;
  ioc.register('config', config.api)
  delete (window as any).__CONFIG__;

  renderUsers(config.api);
};

window.onload = (event: Event) => {

//   const logger = new Logger();
  const logger = ioc.resolve('logger')
  logger.info('------------|||------------');
  logger.info('Page is loaded.');

  app();
};
