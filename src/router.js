import React from "react";
import {HashRouter, Route,Switch} from 'react-router-dom';
import App from "./App";

//导入自定义的组件
import Login from './pages/login';//登录页面
import Admin from './admin.js';//admin主页面
import Buttons from './pages/ui/buttons/buttons';//admin页面下的UI下的buttons组件
import Modals from './pages/ui/modals/modals';//admin页面下的UI下的modal组件
import Loads from './pages/ui/loading/loadings';//admin页面下的UI下的buttons组件
import Notices from './pages/ui/notices/notices';//admin页面下的UI下的notices组件
import Messages from './pages/ui/messages/messages';//admin页面下的UI下的messages组件
import MyTabs from './pages/ui/tabs/tabs';//admin页面下的UI下的messages组件

import NoMatch from "./pages/nomatch";//404


export default class IRouter extends React.Component{
    render() {
        return (
            <HashRouter>
                <App>{/* 项目的根组件，最先渲染的组件*/}
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={()=>
                        <Admin>{/*加载admin的子路由*/}
                            <Switch>
                                <Route path="/admin/ui/buttons" component={Buttons}/>
                                <Route path="/admin/ui/modals" component={Modals}/>
                                <Route path="/admin/ui/loads" component={Loads}/>
                                <Route path="/admin/ui/notices" component={Notices}/>
                                <Route path="/admin/ui/massages" component={Messages}/>
                                <Route path="/admin/ui/tabs" component={MyTabs}/>
                                <Route  component={NoMatch}/>
                            </Switch>
                        </Admin>
                    }/>
                    <Route path="/order/detail" component={Login}/>
                </App>
            </HashRouter>
        );
    }
}