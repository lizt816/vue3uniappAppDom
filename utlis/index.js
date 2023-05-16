/*
 * @2023-5-16 李·
 *
 */

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

/**
 * 
 * @author页面跳转
 * 
 * @param {Object} to 跳转
 */
const to = (url, animationType = 'pop-in', animationDuration = 300) => {
	uni.navigateTo({
		url,
		animationType,
		animationDuration,
		success: function (res) {
			// console.log(res);
		},
		fail: function (e) {
			console.log(e);
		}
	})
}
/**
 * @返回通用方法导航栏
 */
const goBack =()=>{
	//返回按钮点击处理
	let pages = getCurrentPages();
	// 当前级路由
	if (pages.length==1) {
			to('/pages/tabBar/index')
	}
	// 上一级路由
	if (pages.length>1) {
			uni.navigateBack()
	}
}
/**
 * 页面认证
 * @param 判断是否登录，没有登录跳转登录页面 url 地址
 */
// 
const auth = (url)=> {
	
	// to(store.state.user.isLogin ? url : '/pages/login/auth');
}


/**
 * @全局预览图片
 * @param {url}  图片路径
 */

const imgPreview = (url,index=0,loop=true) =>{
	uni.previewImage({
	  urls: [url], //需要预览的图片http链接列表，多张的时候，url直接写在后面就行了
	  loop:true,
		success: function(res) {},//接口调用成功的回调函数，详见返回参数说明
	  fail: function(res) {},//接口调用失败的回调函数
	  complete: function(res) {},//接口调用结束的回调函数（调用成功、失败都会执行）
	})
}
/**
 * 获取当前页面栈
 * @author 
 */
const prePage = () => {
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}

/**
 * @param 禁止父元素滑动页面滚动
 */
 const moveHandle = ()=>{
	return false;
}





export default {
	getSystemInfoSync,
	goBack,
	imgPreview,
	prePage,
	to,
	moveHandle,
	auth
	
}