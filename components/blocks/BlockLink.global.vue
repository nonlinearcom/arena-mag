<template>
		<a :href="block.source.url" target="_blank">
			<img :src="block.image.thumb.url" alt="">
			{{ block.source.title}}
		</a>
</template>

<script>
	
	export default {
		name: "BlockLink",
		props: {
			block: {
				type: Object,
				default: ()=>{}
			},
		},
	}
</script>

<style>

.block.Link{
	border: 1px solid #222222;
	border-radius: 10px;
	padding: 0 16px 0 0;
	transition: all 0.2s ease-out;
	overflow: hidden;
}	
.block.Link:hover{
	transform: scale(1.02);
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.block.Link	a{
		font-size: 16px;
		width:100%;
		color: currentColor;
		display: flex;
		align-items: center;
		justify-content: flex-start;	
}		

.block.Link	a img{
	width: 100px;
	margin-right:16px; 
}
	
</style>