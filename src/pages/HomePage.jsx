import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HobbyList from '../components/Home/HobbyList';
import { addNewHobby, setActiveHobby, deleteHobby } from '../actions/hobby';

HomePage.propTypes = {

}

const randomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000)
}

function HomePage() {
    const hobbyList = useSelector(state => state.hobby.list)
    const activeId = useSelector(state => state.hobby.activeId)

    const dispatch = useDispatch()

    const handleAddHobby = () => {
        const newId = randomNumber();
        const newHobby = {
            id: newId,
            title: `Hobby ${newId}`
        }

        const action = addNewHobby(newHobby)
        dispatch(action)
    }

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby)
        dispatch(action)
    }

    const handleClickDelete = (index) => {
        dispatch(deleteHobby(index))
    }

    return (
        <div className="home-page">
            <h1>Redux - HomePage</h1>

            <button onClick={handleAddHobby}>Random Hobby</button>

            <HobbyList 
                hobbyList={hobbyList}
                activeId = {activeId}
                onHobbyClick={handleHobbyClick}
                onClickDelete={handleClickDelete}
             />
        </div>
    )
}

export default HomePage
