import Moment from 'react-moment';
import 'moment/locale/ru';
import cn from 'classnames';

import './Messga.scss';

const Message = ({ava, text, date, user, isMe}) => {
    return (
        <div className={cn(
            "message",
            {'message--isme': isMe}
        )}>
            {/*<div className="message__avatar">
                <img className="ava" src={ava} alt={`Avatar ${user.fullname}`}/>
            </div>
            <div className="message__info">
                <div className="message__content">
                    <div className="message__bubble">
                        <p className="message__text">{text}</p>
                    </div>
                    <span className="message__date">Вчера, в 12:31<Moment locale="ru" fromNow date={date}/></span>
                </div>
                </div>*/}
            6 минут 20 секунд, до рефакторить как на этом скрине, у него вылетело
            https://www.youtube.com/watch?v=EwMtA42QaJE
            </div>
            );
            };

            Message.defaultProps = {
            user: {},

        }

            export default Message;