<template>
	<view class="content">
	<view :style="{display: tabIndex === 0 ? '' : 'none'}" v-show="tabberPageLoadFlag[0]">
		<d-nvabar title="首页" background="#fff"></d-nvabar>
		<mescroll-item ref="mescrollItem0" :i="0" :index="tabIndex" >
				<home></home>
		</mescroll-item>
	</view>
	
	<view :style="{display: tabIndex === 1 ? '' : 'none'}"  v-show="tabberPageLoadFlag[1]">
		<d-nvabar title="分类" background="#fff"></d-nvabar>
		<mescroll-item ref="mescrollItem1" :i="1" :index="tabIndex" >
				<classification></classification>
		</mescroll-item>
	</view>

<!-- 	<view :style="{display: tabIndex === 2 ? '' : 'none'}"  v-show="tabberPageLoadFlag[2]">
		<d-nvabar title="会员" background="#fff"></d-nvabar>
		<mescroll-item ref="mescrollItem2" :i="2" :index="tabIndex">
			<vip></vip>
		</mescroll-item>
	</view> -->
	
	<view :style="{display: tabIndex === 3 ? '' : 'none'}"  v-show="tabberPageLoadFlag[3]">
		<d-nvabar title="购物车" background="#fff"></d-nvabar>
		<mescroll-item ref="mescrollItem3" :i="3" :index="tabIndex">
			<cart></cart>
		</mescroll-item>
	</view>
	
	<view :style="{display: tabIndex === 4 ? '' : 'none'}"  v-show="tabberPageLoadFlag[4]">
		<d-nvabar title="我的" background="#fff"></d-nvabar>
		<mescroll-item ref="mescrollItem4" :i="4" :index="tabIndex">
			<my></my>
		</mescroll-item>
	</view>
	
		<d-tabbar 
		v-model="tabIndex" 
		:list="tabbarList" 
		activeColor="#5555ff" 
		inactiveColor="#313131"
		:safeAreaInsetBottom="true" 
		activeIconColor="#5555ff" 
		inactiveIconColor="#000" 
		@change="tabChange"
		:fontSize="22" 
		:iconSize="50" 
		:shadow="false">
		</d-tabbar>




	</view>
</template>

<script>
	import my from "./my.vue" //我的
	import home from "./home.vue" //首页
	import vip from "./vip.vue" //vip
	import cart from "./cart.vue" //购物车
	import classification from "./classification.vue" //分类
	import MescrollItem from "@/components/mescroll-more-item.vue"
	import MescrollMoreMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mixins/mescroll-more.js";
	import unims from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-uni.js"
	export default {
		mixins: [MescrollMoreMixin], // 多个mescroll-body写在子组件时, 则使用mescroll-more.js补充子组件的页面生命周期
		components: {
			MescrollItem,
			my,
			home,
			vip,
			cart,
			classification
		},

		data() {
			return {
				tabs: [{name:'全部'}, {name:'奶粉'}, {name:'面膜'}, {name:'图书'}, {name:'果汁'}],
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
						bg:'#5555ff',
						padding:'8rpx 15rpx',
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
			this.tabberPageLoadFlag = this.tabs.map((item, tabbar_index) => {
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
		/* display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center; */
		height: 100%;
	}

	.custom-tabbar-page {
		/* height: calc(100vh - (100rpx + env(safe-area-inset-bottom) / 2)); */
	}
</style>