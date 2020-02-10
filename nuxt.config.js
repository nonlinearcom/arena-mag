require('dotenv').config()
import axios from 'axios'

// const arenaChannel = 'arena-mag'


export default {

	mode: 'universal',

	generate: {
		routes() {
			// console.log(`https://api.are.na/v2/channels/${process.env.arenaChannel}`, 'env vars')
			return axios.get(`https://api.are.na/v2/channels/${process.env.arenaChannel}`)
				.then((res) => {
					return res.data.contents.map((channel) => {
						// console.log(channel.class ==='Channel', 'channel')
						if (channel.class ==='Channel') {
							return {
								route: '/' + channel.slug
							}
						} else {
							return { route: '/' }
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
		'@nuxtjs/dotenv',
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
