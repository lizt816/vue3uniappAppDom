<template>
	<!-- 不能用v-if (i: 每个tab页的专属下标;  index: 当前tab的下标; 申明在 MescrollMoreItemMixin )-->
	<view v-show="i === index">
		<!-- top="120"下拉布局往下偏移,防止被悬浮菜单遮住 -->
		<!-- ref动态生成: 字节跳动小程序编辑器不支持一个页面存在相同的ref (如不考虑字节跳动小程序可固定值为 ref="mescrollRef") -->
		<mescroll-body :ref="'mescrollRef'+i" @init="mescrollInit"   @down="downCallback" :up="upOption" :safearea="true" :down="downOption">
			<!-- 数据列表 -->
			<slot></slot>
		</mescroll-body>
	</view>
</template>

<script>
	import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";
	import MescrollMoreItemMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mixins/mescroll-more-item.js";
	export default {
		mixins: [MescrollMixin, MescrollMoreItemMixin], // 注意此处还需使用MescrollMoreItemMixin (必须写在MescrollMixin后面)
		props: {
			i: Number, // 每个tab页的专属下标 (除了支付宝小程序必须在这里定义, 其他平台都可不用写, 因为已在MescrollMoreItemMixin定义)
			index: { // 当前tab的下标 (除了支付宝小程序必须在这里定义, 其他平台都可不用写, 因为已在MescrollMoreItemMixin定义)
				type: Number,
				default () {
					return 0
				}
			},
			top:String
		},
		data() {
			return {
				// 下拉刷新的配置(可选, 绝大部分情况无需配置)
				downOption: {
					use: true,
					offset:60,
					beforeEndDelay: 500,
					textColor: "#000",
					bgColor: '#f8f8f8',
					auto: false
				},
				// 上拉加载的配置(可选, 绝大部分情况无需配置)
				upOption: {
					isBounce:true,
					use: false,
					auto: false,
					toTop: {
						src: ""
					}
				},
			}
		},

		methods: {
			// downCallback(page){
			// 	// this.mescroll.triggerDownScroll()
			// console.log(page);
			// this.downOption.use = false
			// },
			/*上拉加载的回调: 其中page.num:当前页 从1开始, page.size:每页数据条数,默认10 */
			upCallback(page) {
				// this.i: 每个tab页的专属下标
				// this.index: 当前tab的下标
			
			},
			//点击空布局按钮的回调
			emptyClick() {
				uni.showToast({
					title: '点击了按钮,具体逻辑自行实现'
				})
			}
		}
	}
</script>