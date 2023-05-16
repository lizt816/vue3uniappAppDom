<template>
	<view class="AppBar" :style="fixed==true? `height:${ dsys.height+'px'};`:'height:0px' " @touchmove.stop.prevent="() => {}">
		<view class="app"  :style="{ height: dsys.height + 'px',background:background }"  >
			<view class="apppages" :style="{height: dsys.height + 'px', paddingTop: dsys.top + 'px'}">
				<slot name="left">	</slot>
				<view class="xu-flex1 navbtext text-bold7" :style="{color:color,fontSize:sizi+'rpx'}" >
				 {{title}}
				</view>
				<slot name="content"></slot>
				<slot name="bar"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:"d-nvabar",
		data(){
			return {
				dsys:this.$d.getSystemInfoSync()
			}
		},
		model:{
			prop: 'value',
			event:'update:value'
		},
		props:{
			numShow:{
				type:Boolean,
				default(){
					return false
				}
			},
			value:{
				type:Number,
				default:()=>{
					return 0
				}
			},
			// 标题
			title:{
				type:[String,Number],
				default(){
					return ''
				}
			},
			// 背景色	
			background:{
				type:String,
				default(){
					return 'transparent'
				}
			},
			fixed:{
				type:Boolean,
				default(){
					return true
				}
			},
			color:{
				type:String,
				default(){
					return '#000'
				}
			},
			sizi:{
				type:Number,
				default(){
					return 32
				}
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.AppBar{
		// background-color:#fff;
		box-sizing: border-box;
	}
	.h{
		height: 0 !important;
	}
	.apppages{
		padding: 0rpx 12rpx;
		display: flex;
		align-items: center;
		position: relative;
		justify-content: space-between;
		
	}
	.navbtext{
		position: absolute;
		left: 136rpx;
		right: 136rpx;
		text-align: center;
	}
	.app{
		    position: fixed;
			top: 0;
			right: var(--window-left);
			left: var(--window-left);
			width: 100%;
			z-index: 100;
	}
</style>