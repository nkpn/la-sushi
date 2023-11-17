const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',
	entry: {
		index: './src/js/pages/homepage.js',
		product: './src/js/pages/product.js',
		sushiList: './src/js/pages/sushiList.js',
		contacts: './src/js/pages/contacts.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	experiments: {
		topLevelAwait: true,
	  },
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
			{
				test: /\.(scss|css|sass)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},
			{ test: /\.hbs$/, loader: 'handlebars-loader' },
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/inline',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				useShortDoctype: true,
			},
			chunks: ['index'],
		}),
		new HtmlWebpackPlugin({
			filename: 'product.html',
			template: './src/product.html',
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				useShortDoctype: true,
			},
			chunks: ['product'],
		}),
		new HtmlWebpackPlugin({
			filename: 'sushi-list.html',
			template: './src/sushi-list.html',
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				useShortDoctype: true,
			},
			chunks: ['sushiList'],
		}),
		new HtmlWebpackPlugin({
			filename: 'contacts.html',
			template: './src/contacts.html',
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				useShortDoctype: true,
			},
			chunks: ['contacts'],
		}),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, 'src'),
		},
		compress: true,
		port: 8000,
		host: '0.0.0.0',
	},
};
