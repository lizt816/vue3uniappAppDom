<template>
	<view :class="[prefixClass+type]" :style="setStyle" @tap="$_click" class="tn-icon flex align-center" hover-stop-propagation :hover-class="hoverClass" :hover-start-time="100" :hover-stay-time="100"></view>
</template>

<script>
	/**  
	 * 图标组件  
	 * @description 用于展示 icon。该组件的 icon 图形基于 Webfont，因此可任意放大、改变颜色。  
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=175  
	 * @property {String} prefix-class 自定义字体图标库前缀 - 默认ry-icon  
	 * @property {String} type 图标图案类型 - 列如：cisso-home、cisso-add  
	 * @property {String} color 图标颜色 - 默认白色  
	 * @property {Number} size 图标大小 - 默认24，单位px  
	 * @event {Function} click 图标组件点击事件  
	 * @example <Soothing-icon type="bell" size="30" color="#654321"></cisso-icon>  
	 */
	export default {
		name: 'Soothing-icon',
		props: {
			hoverClass:{
				type: String,
				default: 'none'
			},
			/**
			 * 自定义字体图标库前缀
			 */
			prefixClass: {
				type: String,
				default: 'tn-icon-'
			},
			/**
			 * 图标类型
			 */
			type:{
				type: String,
				default: 'left'
			},
			/**
			 * 图标颜色
			 */
			color: {
				type: String,
				default: '#000'
			},
			/**
			 * 图标大小
			 */
			size: {
				type: [Number, String],
				default: '40'
			},
			/**
			 * 是否加粗
			 * */
			 bold:{
				 type:String,
				 default:'initial'
			 },
			 
			/**
			 * 定位
			 * */
			top:{
				type: [Number, String],
				default: '0'
			}
		},
		
		computed: {
			setStyle() {
				return `color:${this.color};
				font-size:${this.size}rpx;
				 line-height:${this.size}rpx;
				 font-weight:${this.bold};
				 top:${this.top}rpx
				`
			}
		},

		methods: {
			$_click(e) {
				this.$emit('click', e)
				this.$d.goBack()
			}
		}
	}
</script>

<style>
[class*='tn-icon-'] {
  font-family: 'tuniaoFont' !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  text-decoration: none;
}
	.hoverClass{
		opacity: .5;
	}
	.wanl-text-red {
		background-image: -webkit-linear-gradient(right, #f43f3b, #ec008c);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>