<template>
	<!-- key bugfix vimeo's dynamic src loading -->
	<vue-plyr class="block__video"  :key="this.block.id">
		<div class="plyr__video-embed">
			<iframe :src="videoUrl" 
			allowfullscreen 
			allowtransparency 
			allow="autoplay"></iframe>
		</div>
	</vue-plyr>
</template>

<script>
	
	export default {
		name: "BlockMedia",
		props: {
			block: {
				type: Object,
				default: ()=>{}
			},
		},
		computed: {
			videoUrl() {
				if (this.block.source.provider.name ==='YouTube'){
					return `${this.block.source.url}?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1`
				}else{
					return `${this.block.source.url}?loop=false&byline=false&portrait=false&title=false&speed=true&transparent=0&gesture=media`
				}
				
			}
		},
		mounted () {
		},
	}
</script>
<style>
.block.Media .block__video{
	width:100%!important;
	min-width: 80vmin;
}


</style>