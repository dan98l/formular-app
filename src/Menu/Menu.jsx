import React from 'react'
import css from './Menu.module.css'
import Subjects from './Subjects/Subjects'

const Menu = () => {
    return (
        <div className={css.menu}>
            <Subjects title='Математика' path='maths'/>
            <Subjects title='Физика' path='physics'/>
            <Subjects title='История' path='history'/>
            <Subjects title='Химия' path='chemistry'/>
        </div>
    );
}

export default Menu;