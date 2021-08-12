import { Button as BaseButton } from 'antd';

import './Button.scss';

const Button = (props) => {
    return (
        <BaseButton {...props} />
    );
};

export default Button;