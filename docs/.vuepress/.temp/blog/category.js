export const categoryMap = {"category":{"/":{"path":"/category/","map":{"DL-based RCC Radiomics":{"path":"/category/dl-based-rcc-radiomics/","keys":["v-18afbfd4"]}}},"/zh/":{"path":"/zh/category/","map":{"DL-based RCC Radiomics":{"path":"/zh/category/dl-based-rcc-radiomics/","keys":["v-0a84bec5"]}}}},"tag":{"/":{"path":"/tag/","map":{"cancer image classification":{"path":"/tag/cancer-image-classification/","keys":["v-18afbfd4"]},"convolutional neural network":{"path":"/tag/convolutional-neural-network/","keys":["v-18afbfd4"]}}},"/zh/":{"path":"/zh/tag/","map":{"cancer image classification":{"path":"/zh/tag/cancer-image-classification/","keys":["v-0a84bec5"]},"convolutional neural network":{"path":"/zh/tag/convolutional-neural-network/","keys":["v-0a84bec5"]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


