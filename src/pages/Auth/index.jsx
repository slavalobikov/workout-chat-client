import { Route } from 'react-router-dom';

import {Block} from "../../components";
import './Auth.scss'
import {LoginForm, RegisterForm} from "../../modules";

const Auth = () => {


    return (
        <section className="auth">
            <Block>
                <div className="block__content">
                    <div className="auth__top">

                        <Route exact path={["/", "/login"]} render={() => <>
                            <h2>Войти в аккаунт</h2>
                            <p>Пожалуйста, ввойдите в свой аккаунт</p>
                        </>}
                        />

                        <Route path="/register" render={() => <>
                            <h2>Регистрация</h2>
                            <p>Для входа в чат, вам нужно зарегистрироваться</p>
                        </>}
                        />

                    </div>
                    <Route exact path={["/", "/login"]} component={LoginForm}/>
                    <Route path="/register" component={RegisterForm}/>

{/*
                    <LoginForm />
*/}

{/*
                    <Button className="button" type="primary" size="large">  Hello </Button>
*/}
                </div>
            </Block>
        </section>
    );
};

export default Auth;