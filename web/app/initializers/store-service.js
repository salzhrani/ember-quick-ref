export function initialize(container, application) {
  application.inject('route', 'store', 'store:main');
}

export default {
  name: 'store-service',
  initialize: initialize
};
