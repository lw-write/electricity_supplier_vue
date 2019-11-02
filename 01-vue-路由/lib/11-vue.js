    const App = {
        template: `
        <div>
        <!-- 头部区域 -->
        <header class="header">传智后台管理系统</header>
        <!-- 中间主体区域 -->
        <div class="main">
            <!-- 左侧菜单栏 -->
            <div class="content left">
                <ul>
                    <li><router-link to="/users">用户管理</router-link></li>
                    <li><router-link to="/rights">权限管理</router-link></li>
                    <li><router-link to="/goods">商品管理</router-link></li>
                    <li><router-link to="/orders">订单管理</router-link></li>
                    <li><router-link to="/settings">系统设置</router-link></li>
                </ul>
            </div>
            <!-- 右侧内容区域 -->
            <div class="content right">
                <div class="main-content">
                <!--路由占位符-->
                <router-view></router-view>
                </div>
            </div>
        </div>
        <!-- 尾部区域 -->
        <footer class="footer">版权信息</footer>
    </div>
    `
    }
    const Home = {

        template: `<div>
        <h3>欢迎</h3>
        </div>`
    }
    const Users = {
        data() {
            return {
                userlist: [{
                    id: 1,
                    name: '张三',
                    age: 10
                }, {
                    id: 2,
                    name: '李四',
                    age: 20
                }, {
                    id: 3,
                    name: '王五',
                    age: 30
                }, {
                    id: 4,
                    name: '赵六',
                    age: 40
                }]
            }
        },
        methods: {
            goDetail(id) {
                console.log(id);
                this.$router.push('/userinfo/' + id)
            }
        },
        template: `
        <div>
            <h3>用户管理区域</h3>
            <table>
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in userlist" :key="item.id">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.age}}</td>
                    <td>
                        <a href="javascript:;" @click="goDetail(item.id)">详情</a>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
        `
    }
    const UserInfo = {
        props: ['id'],
        template: `<div>
            <h3>用户详情页---用户的id为{{id}}</h3>
            <button @click=goback()>返回列表页</button>
            </div>`,
        methods: {
            goback() {
                this.$router.go(-1)
            }
        }
    }
    const Rights = {
        template: `<div>
            <h3>权限管理区域</h3>
            </div>`
    }
    const Goods = {
        template: `<div>
        <h3>商品管理区域</h3>
        </div>`
    }
    const Orders = {
        template: `<div>
        <h3>订单管理区域</h3>
        </div>`
    }
    const Settings = {
        template: `<div>
        <h3>系统设置区域</h3>
        </div>`
    }
    const router = new VueRouter({
        routes: [{
            path: '/',
            component: App,
            redirect: '/users',
            children: [{
                path: '/users',
                component: Users
            }, {
                path: '/userinfo/:id',
                component: UserInfo,
                props: true
            }, {
                path: '/rights',
                component: Rights
            }, {
                path: '/goods',
                component: Goods
            }, {
                path: '/orders',
                component: Orders
            }, {
                path: '/settings',
                component: Settings
            }]

        }]
    })
    const vm = new Vue({
        el: '#app',
        data: {},
        router
    })