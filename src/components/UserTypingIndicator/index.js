import cn from 'classnames';

import './UserTypingIndicator.scss';

const UserTypingIndicator = ({isMe}) => {
    return (
        <div className={cn("typing-indicator",
            {
                "typing-indicator__isMe": isMe,
            }
        )}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default UserTypingIndicator;