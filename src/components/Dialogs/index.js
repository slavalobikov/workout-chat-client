
import { DialogsItem } from "../index";

const Dialogs = ( {items} ) => {
    return (
        <div className="dialogs">
            {items.map(item => (
                <DialogsItem
                    key={item._id}
                    user={item.user}
                    lastMessage={item}
                    numberMissingMessgae={0}
                />
            ))}

        </div>
    );
};

export default Dialogs;