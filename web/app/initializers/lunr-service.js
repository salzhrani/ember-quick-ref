export function initialize(container, application) {
  application.inject('route', 'lunrService', 'service:lunr');
  application.inject('controller', 'lunrService', 'service:lunr');
};

export default {
  name: 'lunr-service',
  initialize: initialize
};
