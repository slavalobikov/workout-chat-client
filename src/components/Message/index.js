import Moment from 'react-moment';
import 'moment/locale/ru';
import cn from 'classnames';

import './Messga.scss';
import checkIcon from './../../assets/img/readed.png';
import nocheckIcon from './../../assets/img/noreaded.png';
import {UserTypingIndicator, Attachments} from "../index";

const Message = ({ava, text, date, user, isMe, isRead, isTyping, attachments}) => {

    return (
        <div className={cn(
            "message",
            {
                'message--isme': isMe,
                'message__isTyping': isTyping
            }
        )}>
            <div className="message__content">
                <div className="message__avatar">
                    <img className="ava" src={ava} alt={`Avatar ${user.fullname}`}/>
                </div>
                <div className="message__info">
                    <div className={cn("message__bubble",
                        {
                            "message__bubble-isTyping": isTyping,
                            "message__bubble__with-attachments": !!(attachments && attachments[0])
                        }
                    )}>
                        <div className="display-none">
                            {!isTyping && <p className="message__text">{text}</p>}
                            {isTyping && <UserTypingIndicator isMe={isMe}/>}
                        </div>
                        {!!(attachments && attachments[0]) && <Attachments isMe={isMe} attachments={attachments} />}
                    </div>
                    {!isTyping && <span className="message__date">
                        <Moment fromNow>
                            {new Date(date)}
                        </Moment>
                    </span>}
                </div>
                {isMe && !isTyping && <img
                    className="message-icon-readed"
                    src={!!isRead ? checkIcon : nocheckIcon}
                    alt="Checked icon"
                />}

            </div>
        </div>
    );
};

Message.defaultProps = {
    user: {},

}

export default Message;