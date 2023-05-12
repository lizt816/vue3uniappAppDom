<template>
	<view class="content">
					<view v-if="tabberPageLoadFlag[0]" :style="{display: currentIndex === 0 ? '' : 'none'}" >
						<!-- class="custom-tabbar-page" -->
							<!-- :top="`${dsy.height+dsy.top}px`" -->
							<d-nvabar title="首页" background="#fff" ></d-nvabar>
							<mescroll-body  @init="mescrollInit"  @down="downCallback" :up="upOption" :safearea="true" :down="downOption"  >
								<home></home>
							</mescroll-body>
					</view>
					<view v-if="tabberPageLoadFlag[1]" :style="{display: currentIndex === 1 ? '' : 'none'}">
						<classification></classification>
					</view>
					<view v-if="tabberPageLoadFlag[2]" :style="{display: currentIndex === 2 ? '' : 'none'}">
						<vip></vip>
					</view>
					<view v-if="tabberPageLoadFlag[3]" :style="{display: currentIndex === 3 ? '' : 'none'}">
						<cart></cart>
					</view>
					<view v-if="tabberPageLoadFlag[4]" :style="{display: currentIndex === 4 ? '' : 'none'}">
						<my></my>
					</view>
					
				<d-tabbar
				  v-model="currentIndex"
				  :list="tabbarList"
				  activeColor="#00aaff"
				  inactiveColor="#000"
				  :safeAreaInsetBottom="true"
					activeIconColor="tn-cool-bg-color-7"
					inactiveIconColor="#000"
				  @change="switchTabbar"
					:fontSize="22"
					:iconSize="45"
					:shadow="false"
				></d-tabbar>
	</view>
</template>

<script>
	import my from "./my.vue"//我的
	import home from "./home.vue"//首页
	import vip from "./vip.vue" //vip
	import cart from "./cart.vue" //购物车
	import classification from "./classification.vue" //分类
	import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";
	import mescroll from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-uni.js";
	export default {
		mixins:[MescrollMixin],
		components:{
			my,
			home,
			vip,
			cart,
			classification
		},
		onPageScroll(e){
			// console.log(e);
			this.scrollTop = e.scrollTop
		},
		onShow() {
			// this.mescroll.scrollTo(e.scrollTop,300)
			// mescroll.setScrollTop(this.scrollTop,300)
			// console.log(mescroll,"this.mescroll");
		},
		data() {
			return {
				scrollTop:0,
				dsy:this.$d.getSystemInfoSync(),
				currentIndex: 0,
				tabberPageLoadFlag:[],
				tabbarList: [
				  {
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
				    title: '发现',
				    activeIcon: 'discover-fill',
				    inactiveIcon: 'discover',
				  },
				  {
				    title: '我的',
				    activeIcon: 'computer-fill',
				    inactiveIcon: 'computer',
				  }
				],
				// 下拉刷新的配置(可选, 绝大部分情况无需配置)
				downOption: { 
					use:true,
					offset:50,
					beforeEndDelay:500,
					textColor:"red",
					bgColor:'#f8f8f8',
					auto:false
				},
				// 上拉加载的配置(可选, 绝大部分情况无需配置)
				upOption: {
					use:false,
					auto:false,
					onScroll:true,
					toTop:{
						src:""
					}
				},
		
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
		methods: {
			
			scroll(e){
				console.log(e);
				
			},
				switchTabbar(index) {
					 this._switchTabbarPage(index)
				  // this._switchTabbarPage(index)
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
	.content,page {
		/* display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center; */
		/* overflow: hidden; */
		/* height: 100%; */
	}
	.custom-tabbar-page {
	  /* height: calc(100vh - (100rpx + env(safe-area-inset-bottom) / 2)); */
	}
</style>
