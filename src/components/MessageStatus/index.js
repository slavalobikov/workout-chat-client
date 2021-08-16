import checkIcon from "../../assets/img/readed.png";
import nocheckIcon from "../../assets/img/noreaded.png";
import './MessageStatus.scss';


const MessageStatus = ({isMe, isRead, isDialogs, numberMissingMessgae}) => {

    return (
       <div className="icon">
           {isMe && !isDialogs && <img
               className="message-icon-readed"
               src={!!isRead ? checkIcon : nocheckIcon}
               alt="Checked icon"
           />}
           {!!isDialogs && <>
               {!!isMe && <>
                   <img
                       className="dialogs-icon"
                       src={!!isRead ? checkIcon : nocheckIcon}
                       alt="Checked icon"
                   />
               </>}
               {!isMe && !isRead && !!numberMissingMessgae && <div className="count">
                   {numberMissingMessgae > 9 ? '+9' : numberMissingMessgae}
               </div>}
           </>}
       </div>
    );
};

export default MessageStatus;