import cn from 'classnames';

import './DialogsItem.scss';
import {Time, MessageStatus, Avatar} from "../index";

const DialogsItem = ({ lastMessage, isOnline, user }) => {


    return (
        <div className={cn("dialogs__item",
            {
                "dialogs__item-online": isOnline,
            }
           )}>
            <div className="dialogs__item-avatar">
                <Avatar
                    img={user.avatar}
                    id={user._id}
                    fullname={user.fullname}
                />
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{user.fullname}</b>
                    <span>
{/*
                        13:03
*/}

                        <Time isDialogs={true} date={lastMessage.date} />

                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>{lastMessage.text}</p>
                    <>
                        <MessageStatus isRead={false} isMe={false} isDialogs={true} numberMissingMessgae={15} />
                    </>
                </div>
            </div>
        </div>
    );
};

export default DialogsItem;