<template>
	<view class="content">
	<view :style="{display: tabIndex === 0 ? '' : 'none'}" v-if="tabberPageLoadFlag[0]" class="bg-gray flex-sub" style="width: 100%;">
				<home></home>
	</view>
	
	<view :style="{display: tabIndex === 1 ? '' : 'none'}"  v-if="tabberPageLoadFlag[1]" style="width: 100%;" class="bg-gray flex-sub">
		<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top >
			<classification></classification>
		</scroll-view>
	</view>

	<view :style="{display: tabIndex === 3 ? '' : 'none'}"  v-if="tabberPageLoadFlag[3]" style="width: 100%;" class="bg-gray flex-sub">
		<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top >
			<cart></cart>
		</scroll-view>
	</view>
	
	<view :style="{display: tabIndex === 4 ? '' : 'none'}"  v-if="tabberPageLoadFlag[4]" style="width: 100%;" class="bg-gray flex-sub">
		<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top >
			<my></my>
		</scroll-view>
	</view>
		<d-tabbar 
		v-model="tabIndex" 
		:list="tabbarList" 
		activeColor="#5555ff" 
		inactiveColor="#313131"
		:safeAreaInsetBottom="true" 
		activeIconColor="tn-cool-bg-color-17" 
		inactiveIconColor="#000" 
		@change="switchTabbar"
		:fontSize="22" 
		:iconSize="50" 
		:shadow="false">
		</d-tabbar>


	 <d-message ref="toast"></d-message>
	</view>
</template>

<script>
	import my from "./my.vue" //我的
	import home from "./home.vue" //首页
	import vip from "./vip.vue" //vip
	import cart from "./cart.vue" //购物车
	import classification from "./classification.vue" //分类
	import MescrollItem from "@/components/mescroll-more-item.vue"
	import MescrollMoreMixin from "@/components/mescroll-uni/components/mescroll-uni/mixins/mescroll-more.js";
	import MescrollMixin from "@/components/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";
	export default {
		mixins: [MescrollMixin,MescrollMoreMixin], // 多个mescroll-body写在子组件时, 则使用mescroll-more.js补充子组件的页面生命周期
		components: {
			// ZPaging,
			MescrollItem,
			my,
			home,
			vip,
			cart,
			classification
		},
		data() {
			return {
				tabIndex: 0 ,
				scrollTop: 0,
				dsy: this.$d.getSystemInfoSync(),
				currentIndex: 0,
				tabberPageLoadFlag: [],
				tabbarList: [{
						title: '首页',
						activeIcon: 'home-smile-fill',
						inactiveIcon: 'home'
					},
					{
						title: '分类',
						activeIcon: 'honor-fill',
						inactiveIcon: 'honor',
					},
					{
						title: '',
						activeIcon: 'add',
						inactiveIcon: 'add',
						activeIconColor: '#fff',
						inactiveIconColor: '#fff',
						iconSize:50,
						bg:'repeating-linear-gradient(45deg, #892fe8, #58FFF5)',
						padding:'5rpx 15rpx',
						borderRadius:'20rpx'
						
					},
					{
						title: '购物车',
						activeIcon: 'discover-fill',
						inactiveIcon: 'discover',
					},
					{
						title: '我的',
						activeIcon: 'computer-fill',
						inactiveIcon: 'computer',
					}
				],
				mescroll:null

			}
		},
		watch:{
			tabIndex(value,onvaule){
			if(value==2){
						uni.navigateTo({
							url:'/pages/index/index',
							animationType:"slide-in-bottom"
						})
						this.tabIndex = onvaule
						this.switchTabbar(onvaule)
				}
			}
		},
		onLoad(options) {
			const index = Number(options.index || 0)
			// 根据底部tabbar菜单列表设置对应页面的加载情况
			this.tabberPageLoadFlag = this.tabbarList.map((item, tabbar_index) => {
				return index === tabbar_index
			})
			this.switchTabbar(index)
		},
		mounted() {
			this.inits()
		},
		methods: {
			inits(){
			},
			switchTabbar(index) {
				this._switchTabbarPage(index)
			},
			// 切换导航页面
			_switchTabbarPage(index) {
				const selectPageFlag = this.tabberPageLoadFlag[index]
				if (selectPageFlag === undefined) {
					return
				}
				if (selectPageFlag === false) {
					this.tabberPageLoadFlag[index] = true
				}
				this.tabIndex = index
				
			}

		}
	}
</script>

<style>
	.content,
	page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		height: 100%;
		width: 100%;
	}

	.custom-tabbar-page {
		height: calc(100vh - (100rpx + env(safe-area-inset-bottom) / 2));
	}
	

	
</style>