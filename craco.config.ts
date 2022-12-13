const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    babel: {
      plugins: [
        [
          // antd 的按需加载用和自动引入样式文件
          'import',
          {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true
          }
        ]
      ]
    }
  },
};

export {};
