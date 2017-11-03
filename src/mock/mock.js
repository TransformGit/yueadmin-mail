import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Utils from '@/assets/js/utils.js'
import { UserList, SmsRecords, SmsClientList } from './data.js'
let _UserList = UserList,
		_SmsRecords = SmsRecords,
		_SmsClientList = SmsClientList;
const retObj = {
	code: '0001',
	message: '操作成功',
	result: {}
}
const retExpireObj = {
	code: '0000',
	message: '当前会话已过期，请重新登录',
	result: {}
}
export default {
	bootstrap() {
		let mock = new MockAdapter(axios)
		// 登录
		mock.onPost('/login').reply(config => {
			let { username, password } = JSON.parse(config.data);
			let loginUser = _UserList.filter(user => user.email === username)[0];
			if(loginUser) {
				if(loginUser.password === password) {
					return new Promise((resolve, reject) => {
						setTimeout(() => {
							retObj.result = {
								userInfo: loginUser
							}
							resolve([200, retObj])
						}, 1000)
					})
				} else {
					let retObj = {
						code: '1002',
						message: '密码错误'
					}
					return new Promise((resolve, reject) => {
						setTimeout(() => {
							resolve([200, retObj])
						}, 1000)
					})
				}
			} else {
				let retObj = {
					code: '1001',
					message: '用户名不存在'
				}
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve([200, retObj])
					}, 1000)
				})
			}
		})
		// 登出
		mock.onGet('/accountInter/logout.do').reply(config => {
			Utils.delCookie('userId')
			retObj.result = {}
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, retObj])
				}, 500)
			})
		})
		// 查询邮箱或手机号是否已被使用
		mock.onGet('/baseInter/accountFind.do').reply(config => {
			let { account } = config.params;
			// console.log(account)
			let _user = _UserList.filter(user => user.email === account);
			let finded = _user.length > 0 ? true : false;
			retObj.result = {
				finded
			}
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, retObj])
				}, 500)
			})
		})
		// 获取账户信息
		mock.onGet('/accountInter/getMyInfo.do').reply(config => {
			let userId = Utils.getCookie('userId');
			if(!userId) {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve([200, retExpireObj])
					}, 500)
				})
			}
			let userInfo = _UserList.filter(user => user.userId == userId)[0];
			let retObj = {
				code: '0001',
				message: '操作成功',
				result: {
					userInfo,
				}
			}
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, retObj])
				}, 500)
			})
		})
		// 发送找回支付密码邮箱验证码
		mock.onGet('/accountInter/sendEmailCode.do').reply(config => {
			// let { account, findType } = JSON.parse(config.data);
			// console.log(account, findType)
			let userId = Utils.getCookie('userId');
			if(!userId) {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve([200, retExpireObj])
					}, 500)
				})
			}
			let financeInfo = _UserList.filter(user => user.userId == userId)[0];
			console.log(financeInfo.email)
			retObj.result = {}
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, retObj])
				}, 500)
			})
		})
		// 获取手机短信验证码
		mock.onGet('/accountInter/sendSmsCode.do').reply(config => {
			// let { mobile } = JSON.parse(config.data);
			// console.log(mobile)
			let userId = Utils.getCookie('userId');
			if(!userId) {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve([200, retExpireObj])
					}, 500)
				})
			}
			let financeInfo = _UserList.filter(user => user.userId == userId)[0];
			console.log(financeInfo.mobile)
			retObj.result = {}
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, retObj])
				}, 500)
			})
		})
		// 获取群发信息列表
		mock.onGet('/smsInter/findRecordBatch.do').reply(config => {
			let { pageNo, pageSize } = config.params;
			console.log(pageNo, pageSize)
			let total = SmsRecords.length;
			let recordPage = SmsRecords.filter((record, index) => index < pageNo * pageSize && index >= (pageNo - 1) * pageSize );
			retObj.result = {
				records: recordPage,
				pageInfo: {
					total
				}
			}
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, retObj])
				}, 500)
			})
		})
		// 获取信息应用列表
		mock.onGet('/smsInter/findClientList.do').reply(config => {
			let { pageNo, pageSize } = config.params;
			// console.log(pageNo, pageSize)
			let total = _SmsClientList.length;
			let clientPage = _SmsClientList.filter((record, index) => index < pageNo * pageSize && index >= (pageNo - 1) * pageSize );
			retObj.result = {
				clients: clientPage,
				pageInfo: {
					total
				}
			}
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, retObj])
				}, 500)
			})
		})
		// 新建信息应用列表
		mock.onPost('/smsInter/createSmsClient.do').reply(config => {
			let { clientName, signName } = JSON.parse(config.data);
			// console.log(clientName, signName)
			_SmsClientList.push({
				clientId: new Date().getTime(),
				clientName,
				signName,
				signCode: new Date().getTime(),
			})
			retObj.result = {}
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, retObj])
				}, 1000)
			})
		})
		// 更新信息应用列表
		mock.onPost('/smsInter/updateSmsClient.do').reply(config => {
			let { clientId, clientName, signName } = JSON.parse(config.data);
			// console.log(clientId, clientName, signName)
			_SmsClientList.filter(cli => {
				if(cli.clientId === clientId) {
					cli.clientName = clientName,
					cli.signName = signName
				}
			})
			retObj.result = {}
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, retObj])
				}, 1000)
			})
		})
		// 删除信息应用列表
		mock.onPost('/smsInter/delSmsClient.do').reply(config => {
			let { clientId } = JSON.parse(config.data);
			// console.log(clientId, clientName, signName)
			_SmsClientList = _SmsClientList.filter(client => client.clientId != clientId)
			retObj.result = {}
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, retObj])
				}, 1000)
			})
		})
	}
}