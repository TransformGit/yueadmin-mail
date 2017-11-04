import Mock from 'mockjs'
import Md5 from '@/assets/js/md5'
const UserList = [
	{
		userId: 201708091001,
		name: 'Transform',
		password: Md5.hex_md5('ysj12345678'),
		realname: '李效腾',
		financeName: '李效腾',
		balance: 10000000,
		frozen: 200000,
		unpayCount: 3,
		avatar: 'https://avatars1.githubusercontent.com/u/20084997?v=4&s=460',
		sexual: 1,
		email: '2630243397@qq.com',
		birthday: '1992-08-08',
		qq: '2630243397',
		mobile: '15212347536',
		mobVerified: 0,
    emailVerified: 0,
		idcardNum: '130110199208081234',
		partnerId: 20170809001,
		partnerName: '悦视觉全球摄影',
		orgId: 103,
		orgName: '',
		areaId: 5,
		areaName: '朝阳区',
		idcardPicFront: '',
		idcardPicBack: '',
		status: 1,
		isAdmin: 1,
		createTime: '2016-12-01',
		titleId: 201709051032,
		titleName: '',
	},
	{
		userId: 201708091002,
		name: '笑雪吟风',
		password: Md5.hex_md5('13811858856'),
		realname: '周鲁超',
		financeName: '周鲁超',
		balance: 10000000,
		frozen: 200000,
		unpayCount: 3,
		avatar: `https://img10.360buyimg.com/shaidan/s645x515_jfs/t9358/305/
		582877401/3960/4b0ed07f/59ab64bcN30e04bca.jpg`,
		sexual: 1,
		email: '34405161@qq.com',
		birthday: '1979-09-01',
		qq: '34405161',
		mobile: '13811858856',
		mobVerified: 0,
    emailVerified: 0,
		idcardNum: '370301197909011234',
		partnerId: 20170809001,
		partnerName: '悦视觉全球摄影',
		orgId: 103,
		orgName: '',
		areaId: 4,
		areaName: '西城区',
		idcardPicFront: '',
		idcardPicBack: '',
		status: 1,
		isAdmin: 1,
		createTime: '2016-12-01',
		titleId: 201709051031,
		titleName: '',
	},
	{
		userId: 201708091003,
		name: '斜月三星',
		password: Md5.hex_md5('17600297953'),
		realname: '黄文龙',
		financeName: '黄文龙',
		balance: 10000000,
		frozen: 200000,
		unpayCount: 3,
		avatar: `https://img20.360buyimg.com/shaidan/s645x515_jfs/t7459/156/
		2410768724/60110/6cde7633/59ae0a70Nc1b8219a.jpg`,
		sexual: 1,
		email: '1296979998@qq.com',
		birthday: '1990-10-18',
		qq: '1296979998',
		mobile: '17600297953',
		mobVerified: 0,
    emailVerified: 0,
		idcardNum: '412082199010181234',
		partnerId: 20170809001,
		partnerName: '悦视觉全球摄影',
		orgId: 103,
		orgName: '',
		areaId: 8,
		areaName: '海淀区',
		idcardPicFront: '',
		idcardPicBack: '',
		status: 1,
		isAdmin: 1,
		createTime: '2017-08-01',
		titleId: 201709051033,
		titleName: '',
	},
	{
		userId: 201708091004,
		name: '採阳光',
		password: Md5.hex_md5('13020073112'),
		realname: '薛香华',
		financeName: '薛香华',
		balance: 10000000,
		frozen: 200000,
		unpayCount: 3,
		avatar: `http://img20.360buyimg.com/shaidan/s645x515_jfs/t7531/201/
		2278391825/55623/2f285f9a/59ab79e5Ndf6736bb.jpg`,
		sexual: 0,
		email: '790026022@qq.com',
		birthday: '1990-05-28',
		qq: '790026022',
		mobile: '13020073112',
		mobVerified: 0,
    emailVerified: 0,
		idcardNum: '37292519900528123X',
		partnerId: 20170809001,
		partnerName: '悦视觉全球摄影',
		orgId: 1071,
		orgName: '',
		areaId: 5,
		areaName: '朝阳区',
		idcardPicFront: '',
		idcardPicBack: '',
		status: 1,
		isAdmin: 1,
		createTime: '2017-03-01',
		titleId: 201709051070,
		titleName: '',
	},
]
const SmsRecords = []
for(let i = 0; i < 20; i++) {
	SmsRecords.push(Mock.mock({
	  recordId: Mock.Random.id(),
		phone: '152'+ Mock.Random.string('number', 8),
		checkCode: Mock.Random.string('number', 4),
		createTime: new Date(),
		sendStatus: Mock.Random.integer(0, 1),
		clientId: 1,
		tempId: 1,
		partnerId: 1,
		userName: '笑雪吟风',
	}))
}
const SmsClientList = [
	{
		clientId: '20171103101',
		clientName: '1001',
		signCode: '201709031731167621',
		signName: '悦分期',
		createTime: '2017-09-03 17:31:16',
		updateTime: '2017-09-03 17:31:16',
	}
]
const SmsTemplateList = [
	{
		tempId: '20171103101',
		tempCode: '201709031731167621',
		tempName: '1001',
		tempContent: '悦分期',
		status: 1,
		createTime: '2017-09-03 17:31:16',
		updateTime: '2017-09-03 17:31:16',
	}
]
export {
	UserList,
	SmsRecords,
	SmsClientList,
	SmsTemplateList,
}