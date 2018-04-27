import fetch from '../config/fetch'
import {getStore} from '../config/mUtils'

/**
 * 获取首页默认地址
 */

<<<<<<< HEAD
export const cityGuess = () => fetch('/v1/cities', {
	type: 'guess'
});


/**
 * 获取首页热门城市
 */
=======
/**
 * 获取首页默认地址
 */

export const cityGuess = () => fetch('GET', '/v1/cities', {
	type: 'guess'
});


/**
 * 获取首页热门城市
 */

export const hotcity = () => fetch('GET', '/v1/cities', {
	type: 'hot'
});


/**
 * 获取首页所有城市
 */

export const groupcity = () => fetch('GET', '/v1/cities', {
	type: 'group'
});
>>>>>>> parent of 6067c3f... update

export const hotcity = () => fetch('/v1/cities', {
	type: 'hot'
});

<<<<<<< HEAD

/**
 * 获取首页所有城市
 */
=======
/**
 * 获取当前所在城市
 */

export const currentcity = number => fetch('GET', '/v1/cities/' + number, {});
>>>>>>> parent of 6067c3f... update

export const groupcity = () => fetch('/v1/cities', {
	type: 'group'
});

<<<<<<< HEAD

/**
 * 获取当前所在城市
 */
=======
/**
 * 获取搜索地址
 */

export const searchplace = (cityid, value) => fetch('GET', '/v1/pois', {
	type: 'search',
	city_id: cityid,
	keyword: value
});
>>>>>>> parent of 6067c3f... update

export const currentcity = number => fetch('/v1/cities/' + number);

<<<<<<< HEAD

/**
 * 获取搜索地址
 */
=======
/**
 * 获取msite页面地址信息
 */

export const msiteAdress = geohash => fetch('GET', '/v2/pois/' + geohash, {});
>>>>>>> parent of 6067c3f... update

export const searchplace = (cityid, value) => fetch('/v1/pois', {
	type: 'search',
	city_id: cityid,
	keyword: value
});

<<<<<<< HEAD

/**
 * 获取msite页面地址信息
 */
=======
/**
 * 获取msite页面食品分类列表
 */

export const msiteFoodTypes = geohash => fetch('GET', '/v2/index_entry', {
	geohash,
	group_type: '1',
	'flags[]': 'F'
});
>>>>>>> parent of 6067c3f... update

export const msiteAddress = geohash => fetch('/v2/pois/' + geohash);

<<<<<<< HEAD

/**
 * 获取msite页面食品分类列表
 */

export const msiteFoodTypes = geohash => fetch('/v2/index_entry', {
	geohash,
	group_type: '1',
	'flags[]': 'F'
});


=======
>>>>>>> parent of 6067c3f... update
/**
 * 获取msite商铺列表
 */

export const shopList = (latitude, longitude, offset, restaurant_category_id = '', restaurant_category_ids = '', order_by = '', delivery_mode = '', support_ids = []) => {
	let supportStr = '';
	support_ids.forEach(item => {
		if (item.status) {
			supportStr += '&support_ids[]=' + item.id;
		}
	});
	let data = {
		latitude,
		longitude,
		offset,
		limit: '20',
		'extras[]': 'activities',
		keyword: '',
		restaurant_category_id,
		'restaurant_category_ids[]': restaurant_category_ids,
		order_by,
		'delivery_mode[]': delivery_mode + supportStr
	};
<<<<<<< HEAD
	return fetch('/shopping/restaurants', data);
=======
	return fetch('GET', '/shopping/restaurants', data);
>>>>>>> parent of 6067c3f... update
};


/**
 * 获取search页面搜索结果
 */

<<<<<<< HEAD
export const searchRestaurant = (geohash, keyword) => fetch('/v4/restaurants', {
=======
export const searchRestaurant = (geohash, keyword) => fetch('GET', '/v4/restaurants', {
>>>>>>> parent of 6067c3f... update
	'extras[]': 'restaurant_activity',
	geohash,
	keyword,
	type: 'search'
});


/**
 * 获取food页面的 category 种类列表
 */

<<<<<<< HEAD
export const foodCategory = (latitude, longitude) => fetch('/shopping/v2/restaurant/category', {
=======
export const foodCategory = (latitude, longitude) => fetch('GET', '/shopping/v2/restaurant/category', {
>>>>>>> parent of 6067c3f... update
	latitude,
	longitude
});


/**
 * 获取food页面的配送方式
 */

<<<<<<< HEAD
export const foodDelivery = (latitude, longitude) => fetch('/shopping/v1/restaurants/delivery_modes', {
=======
export const foodDelivery = (latitude, longitude) => fetch('GET', '/shopping/v1/restaurants/delivery_modes', {
>>>>>>> parent of 6067c3f... update
	latitude,
	longitude,
	kw: ''
});


/**
 * 获取food页面的商家属性活动列表
 */

<<<<<<< HEAD
export const foodActivity = (latitude, longitude) => fetch('/shopping/v1/restaurants/activity_attributes', {
=======
export const foodActivity = (latitude, longitude) => fetch('GET', '/shopping/v1/restaurants/activity_attributes', {
>>>>>>> parent of 6067c3f... update
	latitude,
	longitude,
	kw: ''
});


/**
 * 获取shop页面商铺详情
 */

<<<<<<< HEAD
export const shopDetails = (shopid, latitude, longitude) => fetch('/shopping/restaurant/' + shopid, {
=======
export const shopDetails = (shopid, latitude, longitude) => fetch('GET', '/shopping/restaurant/' + shopid, {
>>>>>>> parent of 6067c3f... update
	latitude,
	longitude: longitude + '&extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics'
});



/**
<<<<<<< HEAD
 * 获取shop页面菜单列表
 */

export const foodMenu = restaurant_id => fetch('/shopping/v2/menu', {
=======
 * 获取food页面的商家属性活动列表
 */

export const foodMenu = restaurant_id => fetch('GET', '/shopping/v2/menu', {
>>>>>>> parent of 6067c3f... update
	restaurant_id
});


/**
 * 获取商铺评价列表
 */

<<<<<<< HEAD
export const getRatingList = (shopid, offset, tag_name = '') => fetch('/ugc/v2/restaurants/' + shopid + '/ratings', {
=======
export const getRatingList = (offset, tag_name = '') => fetch('GET', '/ugc/v2/restaurants/834828/ratings', {
>>>>>>> parent of 6067c3f... update
	has_content: true,
	offset,
	limit: 10,
	tag_name
});


/**
 * 获取商铺评价分数
 */

<<<<<<< HEAD
export const ratingScores = shopid => fetch('/ugc/v2/restaurants/' + shopid + '/ratings/scores');
=======
export const ratingScores = shopid => fetch('GET', '/ugc/v2/restaurants/' + shopid + '/ratings/scores', {});
>>>>>>> parent of 6067c3f... update


/**
 * 获取商铺评价分类
 */

<<<<<<< HEAD
export const ratingTags = shopid => fetch('/ugc/v2/restaurants/' + shopid + '/ratings/tags');
=======
export const ratingTags = shopid => fetch('GET', '/ugc/v2/restaurants/' + shopid + '/ratings/tags', {});
>>>>>>> parent of 6067c3f... update


/**
 * 获取短信验证码
 */

<<<<<<< HEAD
export const mobileCode = phone => fetch('/v4/mobile/verify_code/send', {
	mobile: phone,
	scene: 'login',
	type: 'sms'
}, 'POST');


/**
 * 获取图片验证码
 */

export const getcaptchas = () => fetch('/v1/captchas', {},'POST');
=======
export const mobileCode = phone => fetch('POST', '/v4/mobile/verify_code/send', {
	mobile: phone,
	scene: 'login',
	type: 'sms'
});


/**
 * 手机号登陆
 */

// export const sendLogin = (code, mobile, validate_token) => fetch('POST', '/v1/login/app_mobile', {
// 	code,
// 	mobile,
// 	validate_token
// });
>>>>>>> parent of 6067c3f... update


/**
 * 检测帐号是否存在
 */

<<<<<<< HEAD
export const checkExsis = (checkNumber, type) => fetch('/v1/users/exists', {
	[type]: checkNumber,
	type
});

=======
/**
 * 获取用户信息
 */

export const getUser = () => fetch('GET', '/v1/user', {});
>>>>>>> parent of 6067c3f... update

/**
 * 发送帐号
 */

<<<<<<< HEAD
export const sendMobile = (sendData, captcha_code, type, password) => fetch('/v1/mobile/verify_code/send', {
	action: "send",
	captcha_code,
	[type]: sendData,
	type: "sms",
	way: type,
	password,
}, 'POST');


/**
 * 确认订单
 */

export const checkout = (geohash, entities, shopid) => fetch('/v1/carts/checkout', {
	come_from: "web",
	geohash,
	entities,
	restaurant_id: shopid,
}, 'POST');


/**
 * 获取快速备注列表
 */

export const getRemark = (id, sig) => fetch('/v1/carts/' + id + '/remarks', {
	sig
});


/**
 * 获取地址列表
 */

export const getAddress = (id, sig) => fetch('/v1/carts/' + id + '/addresses', {
	sig
});


/**
 * 搜索地址
 */

export const searchNearby = keyword => fetch('/v1/pois', {
	type: 'nearby',
	keyword
});


/**
 * 添加地址
 */

export const postAddAddress = (userId, address, address_detail, geohash, name, phone, phone_bk, poi_type, sex, tag, tag_type) => fetch('/v1/users/' + userId + '/addresses', {
	address,
	address_detail,
	geohash,
	name,
	phone,
	phone_bk,
	poi_type,
	sex,
	tag,
	tag_type,
}, 'POST');


/**
 * 下订单
 */

export const placeOrders = (user_id, cart_id, address_id, description, entities, geohash, sig) => fetch('/v1/users/' + user_id + '/carts/' + cart_id + '/orders', {
	address_id,
	come_from: "mobile_web",
	deliver_time: "",
	description,
	entities,
	geohash,
	paymethod_id: 1,
	sig,
}, 'POST');


/**
 * 重新发送订单验证码
 */

export const rePostVerify = (cart_id, sig, type) => fetch('/v1/carts/' + cart_id + '/verify_code', {
	sig,
	type,
}, 'POST');

=======

/**
 * 获取图片验证码
 */

export const getcaptchas = () => fetch('POST', '/v1/captchas', {});


/**
 * 账号密码登陆
 */

export const accountLogin = (username, password, captcha_code) => fetch('POST', '/v2/login', {username, password, captcha_code});


/**
 * 检测帐号是否存在
 */

export const checkExsis = (checkNumber, type) => fetch('GET', '/v1/users/exists', {
	[type]: checkNumber,
	type
});


/**
 * 发送帐号
 */

export const sendMobile = (sendData, captcha_code, type, password) => fetch('POST', '/v1/mobile/verify_code/send', {
	action: "send",
	captcha_code,
	[type]: sendData,
	type: "sms",
	way: type,
	password,
});


/**
 * 确认订单
 */

export const checkout = (geohash, entities) => fetch('POST', '/v1/carts/checkout', {
	come_from: "web",
	geohash,
	entities,
});


/**
 * 获取快速备注列表
 */

export const getRemark = (id, sig) => fetch('GET', '/v1/carts/' + id + '/remarks', {
	sig
});


/**
 * 获取地址列表
 */

export const getAddress = (id, sig) => fetch('GET', '/v1/carts/' + id + '/addresses', {
	sig
});


/**
 * 搜索地址
 */
>>>>>>> parent of 6067c3f... update

export const searchNearby = keyword => fetch('GET', '/v1/pois', {
	type: 'nearby',
	keyword
});

<<<<<<< HEAD
/**
 * 下订单
 */

=======

/**
 * 添加地址
 */

export const postAddAddress = (userId, address, address_detail, geohash, name, phone, phone_bk, poi_type, sex, tag, tag_type) => fetch('POST', '/v1/users/' + userId + '/addresses', {
	address,
	address_detail,
	geohash,
	name,
	phone,
	phone_bk,
	poi_type,
	sex,
	tag,
	tag_type,
});


/**
 * 下订单
 */

export const placeOrders = (user_id, cart_id, address_id, description, entities, geohash, sig) => fetch('POST', '/v1/users/' + user_id + '/carts/' + cart_id + '/orders', {
	address_id,
	come_from: "mobile_web",
	deliver_time: "",
	description,
	entities,
	geohash,
	paymethod_id: 1,
	sig,
});


/**
 * 重新发送订单验证码
 */

export const rePostVerify = (cart_id, sig, type) => fetch('POST', '/v1/carts/' + cart_id + '/verify_code', {
	sig,
	type,
});



/**
 * 下订单
 */

>>>>>>> parent of 6067c3f... update
export const validateOrders = ({
	user_id,
	cart_id,
	address_id,
	description,
	entities,
	geohash,
	sig,
	validation_code,
	validation_token
<<<<<<< HEAD
}) => fetch('/v1/users/' + user_id + '/carts/' + cart_id + '/orders', {
=======
}) => fetch('POST', '/v1/users/' + user_id + '/carts/' + cart_id + '/orders', {
>>>>>>> parent of 6067c3f... update
	address_id,
	come_from: "mobile_web",
	deliver_time: "",
	description,
	entities,
	geohash,
	paymethod_id: 1,
	sig,
	validation_code,
	validation_token,
<<<<<<< HEAD
}, 'POST');
=======
});
>>>>>>> parent of 6067c3f... update


/**
 * 重新发送订单验证码
 */

<<<<<<< HEAD
export const payRequest = (merchantOrderNo, userId) => fetch('/payapi/payment/queryOrder', {
=======
export const payRequest = (merchantOrderNo, userId) => fetch('GET', '/payapi/payment/queryOrder', {
>>>>>>> parent of 6067c3f... update
	merchantId: 5,
	merchantOrderNo,
	source: 'MOBILE_WAP',
	userId,
	version: '1.0.0',
});


<<<<<<< HEAD

/**
 * 获取服务中心信息
 */

export const getService = () => fetch('/v3/profile/explain');



/**
*兑换会员卡
*/

export const vipCart = (id, number, password) => fetch('/member/v1/users/' + id + '/delivery_card/physical_card/bind',{
	number,
	password
}, 'POST')



/**
 * 获取红包
*/

export const getHongbaoNum = id => fetch('/promotion/v2/users/' + id + '/hongbaos?limit=20&offset=0');



/**
 * 获取过期红包
*/


export const getExpired = id => fetch('/promotion/v2/users/' + id + '/expired_hongbaos?limit=20&offset=0');


/**
 * 兑换红包
*/

export const exChangeHongbao = (id, exchange_code, captcha_code) => fetch('/v1/users/' + id + '/hongbao/exchange',{
	exchange_code,
	captcha_code,
}, 'POST');


/**
 * 获取用户信息
 */

export const getUser = () => fetch('/v1/user', {user_id: getStore('user_id')});


/**
 * 手机号登录
 */

var sendLogin = (code, mobile, validate_token) => fetch('/v1/login/app_mobile', {
	code,
	mobile,
	validate_token
}, 'POST');


=======
>>>>>>> parent of 6067c3f... update
/**
 * 获取订单列表
 */

<<<<<<< HEAD
export const getOrderList = (user_id, offset) => fetch('/bos/v2/users/' + user_id + '/orders', {
	limit: 10,
	offset,
});
=======
// export const getOrderList = (user_id, offset) => fetch('GET', '/bos/v2/users/' + user_id + '/orders', {
// 	limit: 10,
// 	offset,
// });
>>>>>>> parent of 6067c3f... update


/**
 * 获取订单详情
 */

<<<<<<< HEAD
export const getOrderDetail = (user_id, orderid) => fetch('/bos/v1/users/' + user_id + '/orders/' + orderid + '/snapshot');


/**
*个人中心里编辑地址
*/

export const getAddressList = (user_id) => fetch('/v1/users/'+user_id+'/addresses')

/**
*个人中心里搜索地址
*/

export const getSearchAddress = (keyword) => fetch('v1/pois',{
	keyword:keyword,
	type:'nearby'
})

/**
* 删除地址
*/

export const deleteAddress = (userid, addressid) => fetch( '/v1/users/' + userid + '/addresses/' + addressid, {}, 'DELETE')



/**
 * 账号密码登录
 */
export const accountLogin = (username, password, captcha_code) => fetch('/v2/login', {username, password, captcha_code}, 'POST');


/**
 * 退出登录
 */
export const signout = () => fetch('/v2/signout');


/**
 * 改密码
 */
export const changePassword = (username, oldpassWord, newpassword, confirmpassword, captcha_code) => fetch('/v2/changepassword', {username, oldpassWord, newpassword, confirmpassword, captcha_code}, 'POST');
=======
// export const getOrderDetail = (user_id, orderid) => fetch('GET', '/bos/v1/users/' + user_id + '/orders/' + orderid + '/snapshot', {});



/**
 * 以下是临时数据
 */
const setpromise = data => {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
}

// export const cityGuess = () => setpromise(home.guesscity);
// export const hotcity = () => setpromise(home.hotcity);
// export const groupcity = () => setpromise(home.groupcity);
// export const currentcity = number => setpromise(city.currentcity);
// export const searchplace = (cityid, value) => setpromise(city.searchdata);
// export const msiteAdress = geohash => setpromise(msite.msiteAdress);
// export const msiteFoodTypes = geohash => setpromise(msite.foodTypes);
// export const shopList = (latitude, longitude, offset) => setpromise(msite.shopList);
// export const searchRestaurant = (geohash, keyword) => setpromise(search.searchData);
// export const foodCategory = (latitude, longitude) => setpromise(food.category);
// export const foodDelivery = (latitude, longitude) => setpromise(food.delivery);
// export const foodActivity = (latitude, longitude) => setpromise(food.activity);
// export const shopDetails = (shopid, latitude, longitude) => setpromise(shop.shopDetails);
// export const foodMenu = restaurant_id => setpromise(shop.shopMenu);
// export const getRatingList = (offset, tag_name = '') => setpromise(shop.ratingList);
// export const ratingScores = shopid => setpromise(shop.scores);
// export const ratingTags = shopid => setpromise(shop.tage);
// export const mobileCode = phone => setpromise(login.validate_token);
export const sendLogin = (code, mobile, validate_token) => setpromise(login.userInfo);
// export const accountLogin = (username, password, captcha_code) => setpromise(login.userInfo);
// export const checkExsis = (checkNumber, type) => setpromise(login.checkExsis);
// export const sendMobile = (sendData, captcha_code, type, password) => setpromise(login.send);
// export const checkout = (geohash, entities) => setpromise(confirm.checkout);
// export const getRemark = (id, sig) => setpromise(confirm.remark);
// export const getAddress = (id, sig) => setpromise(confirm.addressList);
// export const getUser = () => setpromise(login.userInfo);
// export const getcaptchas = () => setpromise(login.cpatchs);
// export const searchNearby = keyword => setpromise(confirm.searchAddress);
// export const postAddAddress = (userId, address, address_detail, geohash, name, phone, phone_bk, poi_type, sex, tag, tag_type) => setpromise(confirm.addAddress);
// export const placeOrders = (user_id, cart_id, address_id, description, entities, geohash, sig) => setpromise(confirm.palceOrder);
// export const rePostVerify = (cart_id, sig, type) => setpromise(confirm.verfiyCode);
// export const validateOrders = ({
// 	user_id,
// 	cart_id,
// 	address_id,
// 	description,
// 	entities,
// 	geohash,
// 	sig,
// 	validation_code,
// 	validation_token
// }) => setpromise(confirm.orderSuccess);
// export const payRequest = (merchantOrderNo, userId) => setpromise(confirm.payDetail);
export const getOrderList = (user_id, offset) => setpromise(order.orderList);
export const getOrderDetail = (user_id, orderid) => setpromise(order.orderDetail);
>>>>>>> parent of 6067c3f... update
