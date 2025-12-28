import React, { useState } from 'react';
import { Button, Menu, Tabs } from 'antd';
import {
    CheckCircleOutlined, RobotOutlined, MenuFoldOutlined, MenuUnfoldOutlined,
    EditOutlined, BulbOutlined, SmileOutlined, SendOutlined, FileSearchOutlined
} from '@ant-design/icons';


// TOP OPTIONS
const item1 = [
    {
        label: 'Review suggestions',
        key: 'review',
        icon: <FileSearchOutlined />,
    },
    {
        label: 'Write with generative AI',
        key: 'ai',
        icon: <RobotOutlined />,
    },
];

const Options = ({ onChange }) => {
    const onClick = (e) => {
        onChange(e.key);
    };

    return (
        <Menu
            onClick={onClick}
            defaultSelectedKeys={['review']}
            mode="horizontal"
            items={item1}
        />
    );
};

//Options của Review Suggestions

const Options_Of_RS = ({ onChange }) => {
    return (
        <Tabs
            defaultActiveKey="correctness"
            onChange={onChange}
            items={[
                {
                    key: "correctness",
                    label: (<span><CheckCircleOutlined /> Correctness </span>),
                },
                {
                    key: "clarity",
                    label: (<span><BulbOutlined /> Clarity </span>),
                },
                {
                    key: "engagement",
                    label: (<span><SmileOutlined /> Engagement </span>),
                },
                {
                    key: "delivery",
                    label: (<span><SendOutlined /> Delivery </span>),
                },
            ]}
        />
    );
}



// AI OPTIONS
const item2 = [
    { key: '1', icon: <EditOutlined />, label: 'Improve', title: 'Improve' },
    { key: '2', icon: <BulbOutlined />, label: 'More ideas', title: 'More ideas' },
];

const AIOptions = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div style={{ width: 256, marginTop: 10 }}>
            <Button
                type="primary"
                onClick={() => setCollapsed(!collapsed)}
                style={{ marginBottom: 16 }}
            >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>

            <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={item2}
            />

            <Button type="primary" style={{ marginTop: 10 }}>Start</Button>


        </div>
    );
};




export default Options;
export { AIOptions, Options_Of_RS };
