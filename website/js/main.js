const PREPEND_FILE_PATH = './js/';
const APPEND_FILE_PATH = '.js';
document.addEventListener('DOMContentLoaded', (e) => {
  console.log('dom loaded');

  console.log('loading sketch js file');
  loadScript('lab_1');
});
/**
  dyanmically load script
*/
const loadScript = (fileName) => {
  const src = PREPEND_FILE_PATH + fileName + APPEND_FILE_PATH;
  const script = document.createElement('script');
  script.src = src;
  document.head.append(script);
};
