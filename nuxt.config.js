import axios from 'axios'

const arenaChannel = 'arena-mag'

export default {

	env: {
		arenaChannel
	},
	mode: 'universal',

	generate: {
		routes() {
			return axios.get(`https://api.are.na/v2/channels/${arenaChannel}`)
				.then((res) => {
					return res.data.contents.map((channel) => {
						return {
							route: '/' + channel.slug
						}
					})
				})
		}
	},


	/*
	** Headers of the page
	*/
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#222' },
	/*
	** Global CSS
	*/
	css: [
		'plyr/dist/plyr.css',
	],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		'~/plugins/plyr.client.js',
	],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
		'@nuxtjs/global-components',
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
	],
	/*
	** Axios module configuration
	** See https://axios.nuxtjs.org/options
	*/
	axios: {
	},
	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {
		}
	}
}
