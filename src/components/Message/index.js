import {useState, useRef, useEffect} from "react";
import cn from 'classnames';


import './Messga.scss';
import wave from './../../assets/img/wave.png';
import {UserTypingIndicator, Attachments, Time, MessageStatus} from "../index";
import {convertCurrentTime} from './../../utils/index';
import {PauseOutlined, CaretRightOutlined} from "@ant-design/icons";


const MessageAudio = ({audio}) => {

    const [isPlay, setIsPlay] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioElem = useRef(null);


    useEffect(() => {
        audioElem.current.addEventListener('playing', () => {
                setIsPlay(true);
            },
        );
        audioElem.current.addEventListener('ended', () => {
                setIsPlay(false);
                setCurrentTime(0);
                setProgress(0);
            },
        );
        audioElem.current.addEventListener('pause', () => {
                setIsPlay(false);
            },
        );
        audioElem.current.addEventListener('timeupdate', () => {
            const duration = audioElem.current && audioElem.current.duration || 0;
            setCurrentTime(audioElem.current.currentTime)
            setProgress((audioElem.current.currentTime / duration) * 100);
        })
    }, [])


    const togglePlay = () => {
        audioElem.current.volume = "0.5"

        if (!isPlay) {
            audioElem.current.play();
        } else {
            audioElem.current.pause();

        }

    }

    return (
        <div className="message__audio">
                <audio ref={audioElem} src={audio} preload="auto"/>
                <div className="message__audio-progress" style={{width: progress + '%'}}></div>
                <div className="message__audio-info">
                    <div className="message__audio-btn">
                        <button onClick={() => togglePlay()}>
                            {isPlay ? <PauseOutlined/> :
                                <CaretRightOutlined/>}
                        </button>
                    </div>
                    <div className="message__audio-wave">
                        <img src={wave} alt="wave"/>
                    </div>
                    <span className="message__audio-duration">
                                    {convertCurrentTime(currentTime)}
                                </span>
                </div>
            </div>
    )
}


const Message = ({ava, text, date, user, isMe, isRead, isTyping, attachments, audio}) => {


    return (
        <div className={cn(
            "message",
            {
                'message--isme': isMe,
                'message__isTyping': isTyping,
                'message--is-audio': audio,
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
                            "message__bubble__with-attachments": !!(attachments && attachments[0]),
                            "message__bubble__is-audio": audio,
                        }
                    )}>
                        {/*
                        {audio && <div className="message__audio">
                            <audio ref={audioElem} src={audio} preload="auto" />
                            <div className="message__audio-progress" style={{width: progress + '%'}}></div>
                            <div className="message__audio-info">
                                <div className="message__audio-btn">
                                    <button onClick={() => togglePlay()}>
                                        {isPlay ? <PauseOutlined /> :
                                        <CaretRightOutlined />}
                                    </button>
                                </div>
                                <div className="message__audio-wave">
                                    <img src={wave} alt="wave"/>
                                </div>
                                <span className="message__audio-duration">
                                    {convertCurrentTime(currentTime)}
                                </span>
                            </div>
                        </div>}
*/}
                        {audio && <MessageAudio audio={audio} />}

                        <div className="display-none">
                            {!isTyping && <p className="message__text">{text}</p>}
                            {isTyping && <UserTypingIndicator isMe={isMe}/>}
                        </div>
                        {!!(attachments && attachments[0]) && <Attachments isMe={isMe} attachments={attachments}/>}
                    </div>
                    {!isTyping && <span className="message__date">
                        <Time isDialogs={false} date={date}/>
                    </span>}
                </div>
                {!isTyping && <MessageStatus
                    isMe={isMe}
                    isRead={isRead}
                    numberMissingMessgae={null}
                    isDialogs={false}
                />}
                {/*                {isMe && !isTyping && <img
                    className="message-icon-readed"
                    src={!!isRead ? checkIcon : nocheckIcon}
                    alt="Checked icon"
                />}*/}

            </div>
        </div>
    );
};

Message.defaultProps = {
    user: {},

}

export default Message;