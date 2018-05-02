
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') }
    ]
  },
  {
    path: '/editor',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/codeEditor') }
    ]
  },
  {
    path: '/ace',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/aceEditor') }
    ]
  },
  {
    path: '/cm',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/cm') }
    ]
  },
  {
    path: '/brace',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/brace') }
    ]
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
