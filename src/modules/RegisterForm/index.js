import {Form, Input} from "antd";
import {LockOutlined, UserOutlined, MailOutlined} from "@ant-design/icons";


import {Button} from "../../components";
import {Link} from "react-router-dom";

const RegisterForm = () => {

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
                    name="email"
                    hasFeedback
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input
                        prefix={<MailOutlined className="site-form-item-icon" />}
                        placeholder="E-mail"
                        size="large"
                    />
                </Form.Item>

                <Form.Item
                    name="username"
                    hasFeedback
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Username"
                        size="large"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    hasFeedback
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        size="large"
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item
                    name="repeatPassword"
                    hasFeedback
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        size="large"
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>

                    <Button className="button" htmlType="submit" type="primary" size="large">Ввойти </Button>

                </Form.Item>

                <Link to="/login" className="link" > Ввойти </Link>
            </Form>
        </>
    );
};

export default RegisterForm;