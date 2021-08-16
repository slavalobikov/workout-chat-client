import Moment from "react-moment";
import 'moment/locale/ru';


const Time = ({date}) => {
    return (
        <Moment fromNow>
            {new Date(date)}
        </Moment>
    );
};

export default Time;