
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
    'index.csr.html': {size: 521, hash: 'c4ffb2b4285f80a030d6800da30d7ae1b65829856c2d84bc7e64f50b32711ff2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1034, hash: 'c5ad177ab24add212461d5ee1f9fedad0e118cdd834ff2232a16244b6167ce95', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 4476, hash: '86c7b349c6f68c95062b8fad363c0e60c2ddac41d4f73c6c45f496429571a7bf', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'index.html': {size: 10054, hash: '7100f1aefc23988bf1d989263e9293a7a6953bfd8fa10807f4ff46dd05141722', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'docs/index.html': {size: 11970, hash: 'a165573576f293d2c012cba329994d112db71b8ac52d1dfb98d7827dfa483ff5', text: () => import('./assets-chunks/docs_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
