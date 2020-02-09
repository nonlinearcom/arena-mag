<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div
				v-for="(block, index) in slides"
				:key="index"
				class="swiper-slide"
			>
				<div class="block" :class="block.class">
					<Component :is="blockType(block)"  :block="block" />
				</div>

	<!-- <template v-for="(block, index) in channel"  >
			<div class="block" :class="block.class" :key="index">
				<Component :is="blockType(block)"  :block="block" />
			</div>
		</template> -->
				<!-- <ProjectGalleryImage
					v-if="slide.type !== 'video'"
					:image-object="getImageObject(slide.image)"
				/>
				<ProjectGalleryVideo
					v-else
					:video-url="slide.videoUrl"
					:video-poster="slide.videoPoster"
				/> -->
			</div>
		</div>
	</div>
</template>

<script>
import {
	Swiper,
	Navigation,
	Pagination,
	EffectFade,
	Autoplay,
	Lazy
} from 'swiper/js/swiper.esm.js'
import 'swiper/css/swiper.css'

// Install Swiper modules
Swiper.use([Navigation, Pagination, EffectFade, Autoplay, Lazy])
export default {

	props: {
		slides: {
			type: Array,
			default: () => []
		}
	},

	data() {
		return {
			mySwiper: null,
		}
	},

	mounted() {
		this.mySwiper = new Swiper('.swiper-container', {
			
			speed: 1600,
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			// Responsive breakpoints
			observer: true,
			observeParents: true,
			// Disable preloading of all images
			// preloadImages: false,
			// Enable lazy loading
			breakpoints: {},
			keyboard: {
				enabled: true,
				onlyInViewport: false
			}
		})
	},

	methods: {
		blockType(block) {
			return `Block${block.class}`
		}
	},
}
</script>

<style lang="css">
.swiper-container {
	position: absolute;
	z-index: 1;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
}
.swiper-container .swiper-slide {
	height: 100vh;
	max-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: none;
}
</style>
