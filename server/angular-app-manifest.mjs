
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
    'index.csr.html': {size: 521, hash: '334752a603342d1c2dfd054dde231e06dca3954b9e266333fb79a85160e52728', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1034, hash: '55a380b6ddbabb8e8ff87663c7d93c780ea1e0c99ffa6205dfb9d6a774d781a5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 4476, hash: '04f823b29d4fd8804a780669edaa8a31662fa0d32d9ef61ae75c30d91b5834e5', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'index.html': {size: 9968, hash: '4780fcb18241a6123acfde214e39b295beecb836a46b6c632cee0834ae7354b3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'docs/index.html': {size: 11970, hash: 'b668f2c0a704a58f1f7d99c7f05da5ae209f268e29530f14fbea32b2b1870b65', text: () => import('./assets-chunks/docs_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
