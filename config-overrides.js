const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@card-shadow': '10px 10px 21px 0px rgba(0,0,0,1.0);',
      '@primary-color': '#66CDAA'
    }
  })
);
