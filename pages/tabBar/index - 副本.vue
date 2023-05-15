<template>
	<view class="content">
		<view :style="{display: currentIndex === 0 ? '' : 'none'}">
			<d-nvabar title="首页" background="#fff"></d-nvabar>
			<mescroll-item :i="0" :index="currentIndex" ref="mescrollItem0">
				<home></home>
			</mescroll-item>
		</view>
		
		<view  :style="{display: currentIndex === 1 ? '' : 'none'}" >
			<d-nvabar title="分类" background="#fff"></d-nvabar>
			<mescroll-item :i="1" :index="currentIndex" ref="mescrollItem1">
				<classification></classification>
			</mescroll-item>
		</view>
		
		<view :style="{display: currentIndex === 2 ? '' : 'none'}">
			<d-nvabar title="会员" background="#fff"></d-nvabar>
			<mescroll-item :i="2" :index="currentIndex" ref="mescrollItem2" >
				<vip></vip>
			</mescroll-item>
		</view>
		
		<view  :style="{display: currentIndex === 3 ? '' : 'none'}">
			<d-nvabar title="购物车" background="#fff"></d-nvabar>
			<mescroll-item :i="3" :index="currentIndex" ref="mescrollItem3" >
				<cart></cart>
			</mescroll-item>
		</view>
		
		<view  :style="{display: currentIndex === 4 ? '' : 'none'}">
			<d-nvabar title="我的" background="#fff"></d-nvabar>
			<mescroll-item :i="4" :index="currentIndex" ref="mescrollItem4" >
				<my></my>
			</mescroll-item>
		</view>
		
		<!-- <view style="height:50px;"></view> -->
	<!-- 	<view style="position: fixed;bottom: 0;">
			<me-tabs v-model="currentIndex" :tabs="tabs" @change="tabChange" :tab-width="150"></me-tabs>
		</view> -->


		<d-tabbar v-model="currentIndex" :list="tabbarList" activeColor="#00aaff" inactiveColor="#000"
			:safeAreaInsetBottom="true" activeIconColor="tn-cool-bg-color-7" inactiveIconColor="#000" @change="tabChange"
			:fontSize="22" :iconSize="45" :shadow="false"></d-tabbar>
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
						title: '会员',
						activeIcon: 'circle-lack',
						inactiveIcon: 'circle-arrow',
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
		onLoad(options) {
			const index = Number(options.index || 0)
			// 根据底部tabbar菜单列表设置对应页面的加载情况
			this.tabberPageLoadFlag = this.tabs.map((item, tabbar_index) => {
				return index === tabbar_index
			})
			this.switchTabbar(index)
		},
		methods: {
			
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
				this.currentIndex = index
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