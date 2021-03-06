module.exports = {
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: 'entry',
        corejs: { version: 3, proposal: true }
      }
    ],
    '@babel/react'
  ],
  plugins: [
    '@babel/transform-runtime',
    '@babel/proposal-class-properties',
    '@babel/syntax-dynamic-import',
    'react-hot-loader/babel',
    [
      'module-resolver',
      {
        alias: {
          '#config': './config',
          '#src': './src',
          '#client': './src/client',
          '#tests': './src/client/__tests__',
          '#actions': './src/client/actions',
          '#components': './src/client/components',
          '#pages': './src/client/pages',
          '#reducers': './src/client/reducers',
          '#sass': './src/client/sass',
          '#data': './src/data',
          '#img': './src/img',
          '#server': './src/server',
          '#helpers': './src/server/helpers'
        }
      }
    ]
  ]
};
