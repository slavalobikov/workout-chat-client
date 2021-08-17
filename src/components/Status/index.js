import cn from 'classnames';

import './Status.scss';

const Status = ( {online} ) => {
    return (
        <div className="chat__dialog-header-status">
            <div className={cn("status",
                {"status--online": online}
            )}>
                {online ? 'онлайн' : 'офлайн'}
            </div>
        </div>
    );
};

export default Status;