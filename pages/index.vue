<template>
	<div class="home">
		<button class="menu-panel--toggle" @click="tooglePanel()"></button>
		<div class="menu-panel" :class="{'open': menuIsOpen}">
			<div v-html="about.content_html"></div>
		</div>
		<nav class="article-list">
			<template v-for="(block, index) in channel">
				<!-- slug or id -->
				<nuxt-link :class="block.class" :key="index" :to="`/${block.slug}`">{{ block.title}}</nuxt-link>
			</template>
		</nav>

	</div>
</template>

<script>

export default {

	components: {
	
	},
	data() {
		return {
			blocks: [],
			menuIsOpen: false
		}
	},
    async asyncData({ $axios, params, store }) {
		//https://api.are.na/v2/channels/arena-mag?&direction=desc
        const channel = await $axios
			.$get(`https://api.are.na/v2/channels/${process.env.arenaChannel}?&direction=desc`)
            .then(response => {

				// get only channels
				const articles = response.contents.filter(function(obj) {
					return obj.class == 'Channel';
				})
				// get only text blocks
				const about = response.contents.filter(function(obj) {
					return obj.class == 'Text';
				})

				return {
					articles,
					about
				}
            })
			.catch(e => console.log(e, "error"));
			
		

		return {
			// description: articles.metadata.description,
			channel : channel.articles,
			about: 	channel.about[0] // only the first
        };
	},
	methods: {
		tooglePanel() {
			this.menuIsOpen = !this.menuIsOpen;
		}
	}
};
</script>

<style lang="css">

.article-list{
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	
}
.article-list a{
	font-size: 42px;
	line-height: 1.4;

	margin-bottom:24px;
}

/* MENU */

.menu-panel--toggle{
	display: block;
	position: fixed;
	top:32px;
	right:32px;
	
	width: 24px;
	height: 24px;
	border:none;
	border-radius: 50%;
	padding: 0;
	margin:0;
	z-index: 20!important;
	background-color: #222;
	cursor: pointer;
}


.menu-panel{

	position:fixed;
	width: 50%;
	top:0;
	right:0;
	height:100%;
	
	padding: 32px 64px 32px 32px;
	background-color: #e5e5e5;
	background-color: white;

	border-left: 1px solid #222;

	transform: translateX(100%);
	transition: all 0.5s ease-in-out;
	z-index: 10;
}
.menu-panel.open{
	transform: translateY(0);
}
</style>