import React, { useState } from 'react';
import './hobbylist.css'
import PropTypes from 'prop-types';

HobbyList.propTypes = {
    hobbyList: PropTypes.array,
    activeId: PropTypes.number,
    onHobbyClick: PropTypes.func,
    onClickDelete: PropTypes.func,
}

HobbyList.defaultProps = {
    hobbyList: [],
    activeId: null,
    onHobbyClick: null,
    onClickDelete: null
}

function HobbyList(props) {

    const { hobbyList, activeId, onHobbyClick, onClickDelete } = props

    console.log(hobbyList.length);

    const [itemPage, setItemPage] = useState(5)

    const handleClick = (hobby, e, index) => {
        const item = e.target.closest('.delete-hobby')

        if (!item  && onHobbyClick) {
            onHobbyClick(hobby.id)
        }

        if (item && onClickDelete) {
            onClickDelete(index)
        }

    }

    const handleViewMore = () => {
        setItemPage(itemPage + 2)
    }

    return (
        <>
            <ul className="hobby-list">
                {hobbyList.map((item, index) => 
                    index < itemPage &&
                    <li 
                    className={item.id === activeId ? 'active' : ''}
                    onClick={(e) => handleClick(item, e, index)}
                    key={item.id}
                    >
                        {item.title}
                        <span
                            className="delete-hobby"
                        >
                            &times;
                        </span>
                    </li>
                )}
            </ul>
            {itemPage < hobbyList.length + 1 && <button onClick={handleViewMore}>View More</button>}
        </>
    )
}

export default HobbyList
