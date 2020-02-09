<template>
	<nav class="article__list">

		<div v-html="about.content_html"></div>
		<template v-for="(block, index) in channel">
			<!-- slug or id -->
			<nuxt-link :class="block.class" :key="index" :to="`/${block.slug}`">{{ block.title}}</nuxt-link>
		</template>
	</nav>
</template>

<script>

export default {

	components: {
	
	},
	data() {
		return {
			blocks: [],
		}
	},
    async asyncData({ $axios, params, store }) {
		//https://api.are.na/v2/channels/arena-mag?&direction=desc
        const channel = await $axios
			.$get(`https://api.are.na/v2/channels/${process.env.arenaChannel}?&direction=desc`)
            .then(response => {

				// get only channels
                // return response.contents.filter(function(obj) {
				// 	return obj.class == 'Channel';
				// })

				const articles = response.contents.filter(function(obj) {
					return obj.class == 'Channel';
				})

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
			// channel: channel.contents
			channel : channel.articles,
			about: 	channel.about[0]
        };
	},
};
</script>

<style lang="css">

.article__list{
	font-size: 36px;
	line-height: 1.4;
}
</style>