export default [
  { path: '/welcome', name: 'Home', icon: 'home', component: './Welcome' },
  { path: '/login', component: './user/Login', layout: false },
  { path: '/games', name: 'Games', icon: 'desktop', component: './Welcome' },
  {
    path: '/admin',
    name: 'Information',
    icon: 'crown',
    component: './Admin',
    routes: [{ path: '/admin/sub-page', name: 'FAQ', icon: 'smile', component: './Welcome' }],
  },
  { path: '/', redirect: '/welcome' },
  { component: './404' },
];
