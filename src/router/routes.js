
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'pages/game/2015', component: () => import('pages/game/2015.vue')},
      { path: 'pages/game/2016', component: () => import('pages/game/2016.vue')},
      { path: 'pages/game/2017', component: () => import('pages/game/2017.vue')},
      { path: 'pages/game/2018', component: () => import('pages/game/2018.vue')},
      { path: 'pages/game/2019', component: () => import('pages/game/2019.vue')},
      { path: 'pages/game/2020', component: () => import('pages/game/2020.vue')},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
