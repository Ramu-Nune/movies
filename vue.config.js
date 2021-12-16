// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const {gitDescribeSync} = require('git-describe');

// const vuexConfig = require('./src/config/vuex.json');
// const vuexPaths = vuexConfig.map(({api, name}) => '/api/cp/' + (api || name))

// process.env.VUE_APP_GIT_HASH = gitDescribeSync().hash

module.exports = {
	publicPath: '/',
	runtimeCompiler: true,
	devServer: {
		port: 9000,
		host: '0.0.0.0',
		useLocalIp: false,
		proxy: 'http://localhost:9000',
		public: 'bl1dev2.connexcs.net',
		hot: true,
		watchOptions: {
			poll: true
		},
//		watch: true,
		overlay: {
			warnings: true,
			errors: true
		}
	}
	// chainWebpack: config => {
		// config
			// .plugin('define')
			// .tap(definitions => {
				// definitions[0] = Object.assign(definitions[0], {
					// VUEXLIST: vuexPaths
				// })
				// return definitions
			// })
// //		config
// //			.plugin("webpack-bundle-analyzer")
// //			.use(BundleAnalyzerPlugin)
// //			.init(Plugin => new Plugin({}));
		// config.module
			// .rule('worker-loader')
			// .test(/\.worker\.js$/)
			// .use('worker-loader')
			// .loader('worker-loader')
			// .end()
		// config.module.rule('js').exclude.add(/\.worker\.js$/);
	// },
//	pluginOptions: {
//		webpackBundleAnalyzer: {
//			openAnalyzer: false
//		}
//	}
}
