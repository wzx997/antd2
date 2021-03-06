import React from "react";
import {HashRouter, Route, Switch,} from 'react-router-dom';
import App from "./App";

//导入自定义的组件
import Login from './pages/login';//登录页面
import Admin from './admin.js';//admin主页面
import Common from './common';//菜单的根组件
import Home from './pages/home/index';//Home组件

//导入ui模块
import Buttons from './pages/ui/buttons/buttons';
import Modals from './pages/ui/modals/modals';
import Loads from './pages/ui/loading/loadings';
import Notices from './pages/ui/notices/notices';
import Messages from './pages/ui/messages/messages';
import MyTabs from './pages/ui/tabs/tabs';
import Gallery from './pages/ui/gallery/gallery';
import Carousels from './pages/ui/carousel/carousels';

//导入form模块
import FormLogin from './pages/form/login/login';
import Reg from './pages/form/reg/reg';
import DynamicForm from './pages/form/dynamic_form/index';

//导入table模块
import BasicTable from './pages/table/basicTable/basicTable';
import HighTable from './pages/table/highTable/highTable';

//导入城市管理
import City from './pages/city/index';

//导入订单管理
import Order from './pages/order/index';
import OrderDetail from './pages/order/detail';

//导入用户管理
import User from './pages/user/index';
import UserDetail from  './pages/user/detail';

//统计图
import Bar from './pages/echarts/bar/index';
import Pie from './pages/echarts/pie/index';
import Line from './pages/echarts/line/index';

//富文本编辑器
import Rich from './pages/rich/index';

//权限控制
import PermissionUser from "./pages/permission";

//测试页面
import Test from "./pages/test";

//404页面
import NoMatch from "./pages/nomatch";
//404


export default class IRouter extends React.Component{
    render() {
        return (
            <HashRouter>
                <App>{/* 项目的根组件，最先渲染的组件*/}
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={()=>
                        <Admin>{/*加载admin的子路由*/}
                            <Switch>
                                <Route path="/admin/home" component={Home}/>

                                <Route path="/admin/ui/buttons" component={Buttons}/>
                                <Route path="/admin/ui/modals" component={Modals}/>
                                <Route path="/admin/ui/loads" component={Loads}/>
                                <Route path="/admin/ui/notices" component={Notices}/>
                                <Route path="/admin/ui/massages" component={Messages}/>
                                <Route path="/admin/ui/tabs" component={MyTabs}/>
                                <Route path="/admin/ui/gallerys" component={Gallery}/>
                                <Route path="/admin/ui/carousels" component={Carousels}/>

                                <Route path="/admin/form/login" component={FormLogin}/>
                                <Route path="/admin/form/reg" component={Reg}/>
                                <Route path="/admin/form/dynamic_form" component={DynamicForm}/>

                                <Route path="/admin/table/basic-table" component={BasicTable}/>
                                <Route path="/admin/table/high-table" component={HighTable}/>

                                <Route path="/admin/city" component={City}/>

                                <Route path="/admin/order" component={Order}/>

                                <Route path="/admin/staff" component={User}/>

                                <Route path="/admin/charts/bar" component={Bar}/>
                                <Route path="/admin/charts/pie" component={Pie}/>
                                <Route path="/admin/charts/line" component={Line}/>

                                <Route path="/admin/fwb" component={Rich}/>

                                <Route path="/admin/auth" component={PermissionUser}/>

                                <Route path="/admin/test" component={Test}/>

                                <Route  component={NoMatch}/>
                            </Switch>
                        </Admin>
                    }/>
                    <Route path="/common" render={()=>
                        <Common>{/*加载Common的子路由*/}
                            <Switch>
                                <Route path="/common/order/detail/:orderId" component={OrderDetail}/>
                                <Route path="/common/staff/detail/:userId" component={UserDetail}/>
                            </Switch>
                        </Common>
                    }/>
                </App>
            </HashRouter>
        );
    }
}