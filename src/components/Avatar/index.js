import './Avatar.scss';

import {generateAvatar} from "../../utils";

const Avatar = ( {img, fullname, id}) => {
    if (img) {
        return (
            <img src={img} alt={`${fullname} avatar`}/>
        );
    } else {
        const { color, colorLighten } = generateAvatar(id);
        const firstChar = fullname[0].toUpperCase();
        return (
            <div
                style={{
                    background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`
                }}
                className="avatar avatar--symbol"
            >
                {firstChar}
            </div>
        );
    }

};

export default Avatar;