export function initialize(application) {
  application.inject('route', 'store', 'service:store');
}

export default {
  name: 'inject-store',
  initialize
};
