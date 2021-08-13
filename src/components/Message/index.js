import Moment from 'react-moment';
import 'moment/locale/ru';
import cn from 'classnames';

import './Messga.scss';
import checkIcon from './../../assets/img/readed.png';
import nocheckIcon from './../../assets/img/noreaded.png';

const Message = ({ava, text, date, user, isMe, isReaded}) => {
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
            <div className="message__content">
                <div className="message__avatar">
                    <img className="ava" src={ava} alt={`Avatar ${user.fullname}`}/>
                </div>
                <div className="message__info">
                    <div className="message__bubble">
                        <p className="message__text">{text}</p>
                    </div>
                    <span className="message__date">
                        <Moment  fromNow >
                            {new Date(date)}
                        </Moment>
                    </span>
                </div>
                {isMe && <img
                    className="message-icon-readed"
                    src={!!isReaded ? checkIcon : nocheckIcon}
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