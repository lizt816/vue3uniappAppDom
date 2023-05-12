
/**
 * @param 获取手机系统信息
*/
const getSystemInfoSync = () => {
	let sys = uni.getSystemInfoSync();
	let data = {
		top: sys.statusBarHeight,
		height: sys.statusBarHeight + uni.upx2px(90),
		screenHeight: sys.screenHeight,
		platform: sys.platform,
		model: sys.model,
		windowHeight: sys.windowHeight,
		windowBottom: sys.windowBottom
	};
		// #ifndef MP||APP-PLUS
		data.height = sys.statusBarHeight + 44;
		// #endif
	// #ifdef APP-PLUS
		if(sys.platform =='android'){
			data.height = sys.statusBarHeight + 50;
		}else{
			data.height = sys.statusBarHeight + 44;
		}
	// #endif
	// #ifdef MP-WEIXIN || MP-BAIDU || MP-QQ || MP-TOUTIAO || MP-WEIXIN
		let custom = uni.getMenuButtonBoundingClientRect();
		data.height = custom.bottom + custom.top - sys.statusBarHeight;
	// #endif		
	// #ifdef MP-ALIPAY
	data.height = sys.statusBarHeight + sys.titleBarHeight;
	// #endif
	// console.log(sys,'sys');
	
	return data;
}

export default {
	getSystemInfoSync
}