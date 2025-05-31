
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/docs"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 505, hash: '5b429158f8c4928c7fb6f3d67cf134ed97744d5ed646cf1086217ae1e012a9e5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: 'cbe5ef61e5dad790c703f9ff663f323a0c05fd37123e19528c2f46fd3dcb69ad', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 4467, hash: '7222bcfa3eb967b85cd77ddc8a1b57c0426aec03d167df6aad3ac1b0d8d201a6', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'docs/index.html': {size: 11957, hash: 'f5753df501eeddc0ba8ee9e78d48a4beb63bc35845d136c185e41f3ff790ae74', text: () => import('./assets-chunks/docs_index_html.mjs').then(m => m.default)},
    'index.html': {size: 9956, hash: '900eece4888555c813cbb028909596552f50fab99e43ebfe239c39c95ed3bd79', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
