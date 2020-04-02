const all: any = {
	NotFound: () => import('@/views/NotFound/NotFound.vue'), //404
	Login: () => import('@/views/Login/Login.vue'), //登录
	Home: () => import('@/views/Home/Home.vue'), //首页
	Content: () => import('@/views/Content.vue'), //app路由页
	Dashboard: () => import('@/views/Dashboard/Dashboard.vue'), // dashboard
	UserManage: () => import('@/views/UserManage/UserManage.vue'), // 用户管理
	UI: () => import('@/views/UI/UI.vue'), // UI 路由页
	BBotton: () => import('@/views/UI/Botton/Botton.vue'), // 按钮
	BIcon: () => import('@/views/UI/Icon/Icon.vue'), // 图标
	BLoad: () => import('@/views/Load/Load.vue'), // 加载
	Neumorphism: () => import('@/views/UI/Neumorphism/Neumorphism.vue'), // 新拟态
	MouseAnimation: () => import('@/views/MouseAnimation/MouseAnimation.vue'), // 鼠标动画路由
	Particle: () => import('@/views/MouseAnimation/Particle/Particle.vue'), // 粒子效果
}


export function getComponents(name: string) {
	return all[name] ? all[name] : all['NotFound'];
}