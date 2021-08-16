import Moment from "react-moment";
import 'moment/locale/ru';


const Time = ({date, isDialogs}) => {

    const calendarStrings = {
        lastDay: '[Вчера в] LT',
        sameDay: 'LT',
        sameElse: 'L'
    };

    const dialogStrings = {
        sameDay: 'LT',
        lastDay: 'DD/MM',
        sameElse: 'DD/MM/YY',

    }


    return (
        <>
            {!isDialogs && <Moment calendar={calendarStrings}>
                {new Date(date)}
            </Moment>}
            {isDialogs && <Moment calendar={dialogStrings}>
                {new Date(date)}
            </Moment>}
        </>

    );
};

export default Time;