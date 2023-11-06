<template>
	<view class="bg-gray" style="height: 100%;">
<!-- 		<view v-for="item in 100">{{item}}分类</view>
	 <view class="tn-safe-area-inset-bottom"></view> -->
	 
	    <z-paging ref="paging" 
			refresher-background="#55ff7f"
			v-model="dataList"
			 @query="queryList" 
			:loading-more-enabled="false"
			 refresher-vibrate
			 :refresher-fixed-bac-height="200"
			 :refresher-default-duration="500" 
			 bg-color="rgb(85, 170, 255)"
			 :refresher-complete-delay="500">
			 <!-- <view slot="top">1321</view> -->
	             <view class="item" v-for="(item,index) in dataList">
	                 <view class="item-title">{{item}}</view>
	             </view>
							  <view class="tn-safe-area-inset-bottom"></view> 
	         </z-paging>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList:[]
			};
		},
		methods:{
			queryList(){
				this.$refs.paging.complete([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,100]);
			}
		}
	}
</script>

<style lang="scss">
page{
	width: 100%;
}
</style>
