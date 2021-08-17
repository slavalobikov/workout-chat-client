import { Empty } from 'antd';

import { DialogsItem } from "../index";

const Dialogs = ( {items} ) => {
    return (
        <div className="dialogs" >
            {
                items.length ?
                    items.map(item => (
                        <DialogsItem
                            key={item._id}
                            user={item.user}
                            lastMessage={item}
                            numberMissingMessgae={0}
                        />
                    )) :
                    <Empty description="Ничего не найдено" image={Empty.PRESENTED_IMAGE_SIMPLE} />

            }

        </div>
    );
};

export default Dialogs;