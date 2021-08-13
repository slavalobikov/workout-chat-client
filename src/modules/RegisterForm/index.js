import {Form, Input} from "antd";
import {LockOutlined, UserOutlined, MailOutlined} from "@ant-design/icons";


import {Button} from "../../components";
import {Link} from "react-router-dom";

const RegisterForm = () => {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const validateUsername = (rule, value) => {
        if (value === '1412207') {
            return Promise.reject('Данный пользователь уже существует!');

        } else {
            return Promise.resolve();
        }
    }

    return (
        <>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{remember: true}}
                onFinish={onFinish}
            >
                <Form.Item
                    name="email"
                    validateTrigger='onBlur'

                    rules={
                        [
                            {required: true, message: 'Пожалуйста, введите вашу почту!'},
                            {type: "email", message: "E-mail введен не корректно"}
                        ]
                    }
                >
                    <Input
                        prefix={<MailOutlined className="site-form-item-icon"/>}
                        placeholder="E-mail"
                        size="large"
                    />
                </Form.Item>

                <Form.Item
                    name="username"
                    validateTrigger='onBlur'
                    rules={[
                        {required: true, message: 'Пожалуйста введите имя пользователя!'},
                        {min: 4, message: 'Минимальная длинна 4 символов!'},
                        {max: 18, message: 'Максимальая длинна 18 символов!'},
                        {pattern: '^[a-zA-Z0-9]+$', message: 'Имя должно состоять из букв английского алфавита!'},
                        {validator: validateUsername}
                    ]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon"/>}
                        placeholder="Введите имя пользователя"
                        size="large"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    hasFeedback
                    rules={[
                        {required: true, message: 'Пожалуйста, введите пароль!'},
                        {pattern: '(?=.*\\d)', message: 'Пароль должен содержать как минимум одну цифру!'},
                        {
                            pattern: '(?=.*[a-z])',
                            message: 'Пароль должен содержать как минимум одну маленькую букву английского алфавита!'
                        },
                        {
                            pattern: '(?=.*[A-Z])',
                            message: 'Пароль должен содержать как минимум одну заглавную букву английского алфавита!'
                        },


                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        size="large"
                        type="password"
                        placeholder="Введите пароль!"
                    />
                </Form.Item>

                <Form.Item
                    name="repeatPassword"

                    hasFeedback
                    rules={[
                        {required: true, message: 'Пожалуйста, введите пароль еще раз!'},
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        })
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        size="large"
                        type="password"
                        placeholder="Повторите пароль!"
                    />
                </Form.Item>

                <Form.Item>

                    <Button className="button" htmlType="submit" type="primary" size="large">Ввойти </Button>

                </Form.Item>

                <Link to="/login" className="link"> Ввойти </Link>
            </Form>
        </>
    );
};

export default RegisterForm;