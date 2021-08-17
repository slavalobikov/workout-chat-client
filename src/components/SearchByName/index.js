import {Input} from "antd";

import './SearchByName.scss';
import {useState} from "react";

const { Search } = Input;


const SearchByName = ({setFiltred, items, filtred}) => {

    const [value, setValue] = useState('')

    const onSearch = value => {
        setValue(value)
        setFiltred(items.filter(dialog => dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0))
    }

    return (
        <div className="search">
            <Search placeholder="Поиск среди контактов" value={value} onChange={(e) => onSearch(e.currentTarget.value)} onSearch={onSearch}  />
        </div>
    );
};

export default SearchByName;