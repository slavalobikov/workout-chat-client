import {Form, Input} from "antd";
import {LockOutlined, UserOutlined, } from "@ant-design/icons";
import { Link } from 'react-router-dom';


import {Button} from "../../components";

const LoginForm = () => {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >

                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Логин"
                        size="large"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        size="large"
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>

                    <Button className="button" htmlType="submit" type="primary" size="large">Пароль </Button>

                </Form.Item>

                <Link to="/register" className="link" > Зарегистрироваться </Link>
            </Form>
        </>
    );
};

export default LoginForm;