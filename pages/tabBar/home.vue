<template>
	<view class="ce" style="width: 100%;height: 100%;">
		<z-paging ref="paging"  @query="queryList"
		:loading-more-enabled="false"
		 refresher-vibrate
		 refresher-threshold="120rpx"
		 :refresher-default-duration="700" 
		 :refresher-complete-delay="700"
		 :safe-area-inset-bottom="true"
		 :use-safe-area-placeholder="true"
		 :auto-show-back-to-top="true"
		 :refresher-complete-duration="500"
		 back-to-top-bottom="240rpx"
		 @onRefresh="onRefresh"
		>
		<!-- :empty-view-style="{'display':'initial'}" -->
			<view slot="top">
				<d-nvabar title="" background="linear-gradient(93deg, #f7f7f7, #f5e9f0)">
					<template v-slot:left>
						<d-icon type="more-horizontal" size="50" bold="900" class="= tn-margin-right-xs"></d-icon>
					</template>
					<template v-slot:content>
						<view class="bg tn-flex-1  padding-lr-sm  tn-flex-center  tn-flex justify-between"
							style="border-radius: 100rpx;padding-top: 15rpx;padding-bottom: 15rpx;">
							<view class="flex tn-flex-1 ">
								<d-icon type="search" size="40" color="#999"></d-icon>
								<view class="tn-margin-left-xs lines-gray tn-flex-1  ">
									<swiper :vertical="true" circular autoplay disable-touch easing-function="easeOutCubic">
										<swiper-item class="text-cut ">
											鞋子鞋子鞋子鞋子鞋子鞋子鞋子鞋子鞋子鞋子鞋子
										</swiper-item>
										<swiper-item class="text-cut ">
											手机手机手机手机手机手机手机
										</swiper-item>
										<swiper-item class="text-cut ">
											衣服衣服衣服衣服衣服
										</swiper-item>
									</swiper>
								</view>
							</view>
							<d-icon type="scan" size="40" color="#999"></d-icon>
						</view>
					</template>
					<template v-slot:bar>
						<view class="tn-flex">
							<d-icon type="vip-text" size="50" class="tn-margin-left-xs tn-margin-right-xs"></d-icon>
							<d-icon type="sing" size="50" class="tn-margin-left-xs tn-margin-right-xs"></d-icon>
						</view>
					</template>
				</d-nvabar>
			</view>
			<!-- 内容区域 -->
			<view class="padding-lr padding-top">
				<!-- <button @click="goos" type="primary">点击</button> -->
				<swiper class="card-swiper round-dot" :indicator-dots="true" :circular="true"
				 :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
				 indicator-active-color="#0081ff">
					<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
						<view class="swiper-item">
							<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
							<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<!--#ifdef  APP-PLUS-->
			<view class="tn-safe-area-inset-bottom"></view>
			<view class="tn-safe-area-inset-bottom"></view>
			<!-- #endif -->
			<!--#ifdef  H5-->
			<view class="" style="height: 50px;"></view>
			<!-- #endif -->
		</z-paging>
		<d-message ref="toast"></d-message>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardCur:0
			}
		},
		methods: {
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// 下拉结束事件
			onRefresh(){
				// console.log(132);
				// setTimeout(()=>{
				// 	this.$refs.paging.endRefresh()
				// },500)
				this.$refs.toast.show({
					model: 'load',
					black: true,
					mask: false,
					
				})
			},
			queryList(pageNo, pageSize,value) {
				 // console.log(pageNo,"参数");
				// if(value==1){
				// 	this.$refs.paging.complete([1]);
				// }else{
				// 	console.log(value,"参数");
				// }
			
				setTimeout(()=>{
					// this.$refs.paging.complete(false);
					this.$refs.paging.complete([1]);
					this.$refs.toast.hide()
				},700)
				// this.$refs.paging.complete([1]);
				// 模拟数据自动关闭下拉
				// setTimeout(()=>{
				// 		this.$refs.paging.complete([1]);
				// },3000)
			},
			goos() {
				this.$refs.toast.show({
					model: 'success',
					black: false,
					mask: false
				})
				setTimeout(() => {
					// this.$refs.toast.hide()
				}, 1000)
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

	.bg {
		background: linear-gradient(110deg, #f7dcdc, #f9b9df);
	}

	uni-swiper {
		height: 35rpx !important;
	}
</style>