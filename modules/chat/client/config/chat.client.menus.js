/*(function () {
  'use strict';

  angular
    .module('chat')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // We will eventually turn this into a post instead of a chat.
    menuService.addMenuItem('topbar', {
      title: 'Chat',
      state: 'chat'
    });
  }
}());*/
