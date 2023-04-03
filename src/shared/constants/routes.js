export default Object.freeze({
  HOME: {
    name: 'Home',
    route: '/home',
  },
  ERROR: {
    name: 'Error',
    route: '/error',
  },
  DASHBOARD: {
    name: 'Dashboard',
    route: '/dashboard',
    exact: true,
  },
  LOGIN: {
    name: 'Login',
    route: '/login',
    exact: true,
  },
  AUTH: {
    name: 'Auth',
    route: '/auth',
    protected: false,
    subRoutes: {
      REGISTRATION: {
        name: 'Registration',
        route: '/auth/registration',
      },
      LOGIN: {
        name: 'Login',
        route: '/auth/login',
      },
    },
  },
});
