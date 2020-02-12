<template>
	<div>
		<GalleryCursor ref="cursor" :cursor="cursor" />

		<h2 class="arena-info">
			{{title }} 
		</h2>
	
		<div class="swiper-container"
				ref="arenaGallery"
				@click="galleryNav($event)"
				@mousemove="onMouseMove($event)"
				@mouseover="cursor.show = true"
				@mouseleave="cursor.show = false"
			>
			<div class="swiper-wrapper">
				<div
					v-for="(block, index) in slides"
					:key="index"
					class="swiper-slide"
				>
					<div class="block" :class="block.class">
						<Component :is="blockType(block)"  :block="block" />
					</div>
				</div>
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

import GalleryCursor from '@/components/GalleryCursor'

// Install Swiper modules
Swiper.use([Navigation, Pagination, EffectFade, Autoplay, Lazy])
export default {
	components: {
		GalleryCursor,
	},
	props: {
		slides: {
			type: Array,
			default: () => []
		},
		title: {
			type: String,
			default: ''
		},
	},

	data() {
		return {
			mySwiper: null,
			cursor: {
				left: 0,
				top: 0,
				show: false,
				icon: 'right'
			}
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
		},
		onMouseMove(e) {
			this.cursor.left = e.pageX
			this.cursor.top = e.pageY
			if(e.target.className == 'swiper-slide swiper-slide-active'){
				if (e.pageX > window.innerWidth / 2) {
					this.cursor.icon = 'right'
				} else {
					this.cursor.icon = 'left'
				}
			}else{
				this.cursor.show = false
				this.cursor.icon = 'pause'
			}	
		},
		galleryNav(e) {
			if(e.target.className == 'swiper-slide swiper-slide-active'){

				if (e.pageX > window.innerWidth / 2) {
					this.mySwiper.slideNext()
				} else {
					this.mySwiper.slidePrev()
				}

			} else{
				this.cursor.show = false
				this.cursor.icon = 'pause'
			}
		
		},


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

.arena-info{
	position: fixed;
	bottom: 32px;
	left:32px;
	z-index: 10;
}

</style>
