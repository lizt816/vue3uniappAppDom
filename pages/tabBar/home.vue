<template>
	<view class="">
	<button @click="goos">点击</button>
	<mys ref="toast"></mys>
	</view>
</template>

<script>
	import mys from "@/components/tm-message/tm-message.vue"
	export default {
		components:{mys},
		data() {
			return {
				selectedCardIndex: 0,
				cardList: [
					"https://wallpaper-static.cheetahfun.com/wallpaper/sites/scenery/pic1.jpg",
					"https://wallpaper-static.cheetahfun.com/wallpaper/sites/scenery/pic2.jpg"
				]
			}
		},

		methods: {
			goos(){
				this.$refs.toast.show({model:'load'})
			},
			swiperChange(e) {
				this.selectedCardIndex = e.detail.current
			}
		}


	}
</script>

<style lang="scss">
	page {
		background-color: #FAFAFA;
	}

	.swiper-box {
		.swiper-bg {
			width: 100%;
			position: absolute;
			height: 500rpx;

			&::after {
				// 背景图从上往下渐变效果，慢慢渐变到网页背景色
				content: '';
				position: absolute;
				z-index: 1;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				background-image: linear-gradient(to bottom, transparent, #FAFAFA);
			}
		}

		.swiper {
			padding-top: 64rpx;
			height: 728rpx; // 考虑到卡片对应图片大小以及手机分辨率不同，大家可以根据实际情况设置

			image {
				width: 100%;
				height: 100%;
				transform: scale(0.78); // 通过缩放实现待选卡片缩小效果
				transition: transform 0.3s ease-in-out 0s;
				border-radius: 26rpx;
				box-shadow: 0px 2rpx 12rpx rgba(0, 0, 0, 0.1);

				&.swiper-active {
					transform: scale(1);
				}
			}
		}
	}
</style>