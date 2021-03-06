const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

function srcPath(subdir) {
  return path.join(__dirname, 'src', subdir);
}

module.exports = env => {
  return {
    entry: './src/index.ts',
    mode: env && env.production ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    target: 'node',
    externals: [nodeExternals()],
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        routes: srcPath('routes'),
        utils: srcPath('utils'),
      },
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new CopyPlugin([{ from: 'src/views', to: 'views' }])],
  };
};
