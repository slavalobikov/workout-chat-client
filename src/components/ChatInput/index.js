import {SmileOutlined, CameraOutlined, AudioOutlined, SendOutlined} from "@ant-design/icons";
import {Input} from "antd";

import "./ChatInput.scss";

const ChatInput = () => {
    return (
        <div className="chat-input">
            <Input
                prefix={<SmileOutlined/>}
                suffix={<>
                    <CameraOutlined className="ml15" />
                    <AudioOutlined className="ml15"/>
                    <SendOutlined className="ml15"/>
                </>}
                placeholder="Введите сообщение"
                size="large"
            />

        </div>
    );
};

export default ChatInput;