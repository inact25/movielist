import React from 'react';
import {Grid, Layout, Menu} from "antd";
import {
    BellOutlined,
    HomeOutlined,
    BookOutlined,
    ShopOutlined,
    ShoppingOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';


const MainLayout = (props) => {
    const {Header, Content, Footer, Sider} = Layout;

    const myMenu = [
        {
            key: "home",
            icon: HomeOutlined,
            label: "Home",
        },
        {
            key: "favorite",
            icon: BookOutlined,
            label: "Favorite",
        },
        {
            key: "purchase",
            icon: ShoppingOutlined,
            label: "Purchase",
        },
        {
            key: "reminder",
            icon: BellOutlined,
            label: "Reminder",
        },
    ]

    const items = myMenu.map((item, index) => ({
        key: item.key,
        icon: React.createElement(item.icon),
        label: item.label,
    }));
    const {useBreakpoint} = Grid;
    const {md, lg} = useBreakpoint()

    return (
        <Layout hasSider>
            <Sider
                breakpoint="lg"
                collapsedWidth="75"
                className="site-layout-background"
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    background: "white",
                    width: 300,
                    maxWidth: 300,
                    minWidth: 300,

                }}
            >
                <div className="logo" style={{paddingTop: "1.5rem", paddingBottom: "2rem"}}>
                    <img src="/logo.png" style={{width: "100%"}} alt=""/>
                </div>
                <Menu mode="inline" defaultSelectedKeys={['home']} items={items}/>
            </Sider>
            <Layout className="site-layout" style={{marginLeft: lg ? 350 : 75}}>
                <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                    <div className="site-layout-background">
                        {props.children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
