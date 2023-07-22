export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-18afbfd4"]},"/zh/":{"path":"/zh/article/","keys":["v-0a84bec5"]}},"star":{"/":{"path":"/star/","keys":[]},"/zh/":{"path":"/zh/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-18afbfd4"]},"/zh/":{"path":"/zh/timeline/","keys":["v-0a84bec5"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

