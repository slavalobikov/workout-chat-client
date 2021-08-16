import cn from 'classnames';

import "./Attachments.scss";

/*
Сделать так, что бы, когда была одна фотка, она была больше!

5.33  https://www.youtube.com/watch?v=oS3vO-kuPgE
*/

const Attachments = ({attachments, isMe}) => {
    return (
        <div className={cn("attachments__photos",
            {
                "attachments__photos-isMe": isMe,
                "attachments__one__photos": attachments.length === 1,
            }
        )}>
            {
                attachments.map((f, item) => <div key={item}>
                    {f.filename === 'image.jpg' && <img src={f.url} alt="Attachments file"/>}
                </div>)
            }
        </div>
    );
};

export default Attachments;