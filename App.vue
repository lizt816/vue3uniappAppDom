<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "@/styles/index.scss";
	@import "@/styles/colorui/main.css";
	@import "@/styles/colorui/icon.css";
	@import "@/styles/colorui/animation.css";
	@import "@/styles/iconfont.css";
	
	// .safe-padding {
	// 		padding-bottom: 0;
	// 		padding-bottom: constant(safe-area-inset-bottom);
	// 		padding-bottom: env(safe-area-inset-bottom);
	// 		box-sizing: content-box;
	// 	}
	
	.tn-safe-area-inset-bottom {
	  padding-bottom: 0;  
	  padding-bottom: constant(safe-area-inset-bottom);  
	  padding-bottom: env(safe-area-inset-bottom);  
	} 
</style>
