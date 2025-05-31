
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://amina-kifayat0.github.io/Portfolio/',
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
    'index.csr.html': {size: 537, hash: 'cbc5f786fff9733afcf3827efa8fc2dfac743d86f3e27e65ff102e510924d5da', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1050, hash: '9feb08b1a21c4a4d29ea2b98350f8cf894d60042e2bd9fb7cf85165ce6162bd0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 10052, hash: 'f070cd275257e457fd6594e63e2188e6b3850e7131c6022b202ce76fcfebfb1e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 4499, hash: 'ad959c96f94f69ba91b5273b8a07c623d0442a7929b2d48765761283be586d36', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'docs/index.html': {size: 11989, hash: '50d7c49d4e5b32c29f806ee7458945a052635596976f9216e6ca3bc435f5c0e5', text: () => import('./assets-chunks/docs_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
