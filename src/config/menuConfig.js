const menuList = [
    {
        title:'首页',
        key:'/admin/home'
    },
    {
        title:'UI',
        key:'/admin/ui',
        children:[
            {
                title:'button组件',
                key:'/admin/ui/buttons',
            },
            {
                title:'modal组件',
                key:'/admin/ui/modals',
            },
            {
                title:'loading组件',
                key:'/admin/ui/loads',
            },
            {
                title:'notice组件',
                key:'/admin/ui/notices',
            },
            {
                title:'massage组件',
                key:'/admin/ui/massages',
            },
            {
                title:'Tab组件',
                key:'/admin/ui/tabs',
            },
            {
                title:'Gallery组件',
                key:'/admin/ui/gallerys',
            },
            {
                title:'Carousel组件',
                key:'/admin/ui/carousels',
            }
        ]
    },
    {
        title:'表单',
        key:'/admin/form',
        children:[
            {
                title:'登录',
                key:'/admin/form/login',
            },
            {
                title:'注册',
                key:'/admin/form/reg',
            },
            {
                title:'动态表单',
                key:'/admin/form/dynamic_form',
            }
        ]
    },
    {
        title:'表格',
        key:'/admin/table',
        children:[
            {
                title:'基本表格',
                key:'/admin/table/basic-table',
            },
            {
                title:'高级表格',
                key:'/admin/table/high-table',
            },
        ]
    },
    {
        title:'富文本',
        key:'/admin/fwb'
    },
    {
        title:'城市管理',
        key:'/admin/city'
    },
    {
        title:'订单管理',
        key:'/admin/order'
    },
    {
        title:'员工管理',
        key:'/admin/staff'
    },
    {
        title:'车辆地图',
        key:'/admin/car-map'
    },
    {
        title:'统计图',
        key:'/admin/charts',
        children:[
            {
                title:'柱状图',
                key:'/admin/charts/bar',
            },
            {
                title:'饼图',
                key:'/admin/charts/pie',
            },
            {
                title:'折线图',
                key:'/admin/charts/line',
            },
        ]
    },
    {
        title:'权限',
        key:'/admin/auth'
    },
    {
        title:'测试',
        key:'/admin/test'
    },
];
export default menuList;