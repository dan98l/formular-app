import React from 'react'
import css from './Subjects.module.css'
import { NavLink } from 'react-router-dom'
import { BrowserRouter, Route } from 'react-router-dom';
import Maths from './Maths/Maths';

const Subjects = (props) => {
    return (
        <div className={css.title}>
            <div className={css.title}>
                <div className={css.text}>
                    <NavLink to={props.path} >{props.title}</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Subjects;