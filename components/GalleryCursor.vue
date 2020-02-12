<template>
	<svg
		v-show="cursor.show"
		id="appCursor"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 50 50"
		width="50"
		height="50"
		:style="{
			left: cursor.left + 'px',
			top: cursor.top + 'px'
		}"
		:class="cursor.icon"
	>
		<g fill="currentColor">
			<AppIconArrow v-show="showArrow" />

			<circle v-show="cursor.icon == 'pause'" cx="25" cy="25" r="12" />
		</g>
	</svg>
</template>

<script>
import AppIconArrow from '@/components/ui/AppIconArrow'
export default {
	components: {
		AppIconArrow
	},
	props: {
		cursor: {
			type: Object,
			default: () => {}
		}
	},
	computed: {
		showArrow() {
			return this.cursor.icon === 'left' || this.cursor.icon === 'right'
		}
	}
}
</script>

<style lang="postcss">
#appCursor {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2000;
	pointer-events: none;
	transform: translate(-50%, -50%);
	color: currentColor;
}

#appCursor.left {
	transform: translate(-50%, -50%) rotate(180deg);
}
</style>
