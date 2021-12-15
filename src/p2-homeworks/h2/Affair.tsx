import React from 'react'
import {AffairType} from "./HW2";
import classes from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
         props.deleteAffairCallback(props.affair._id)
    };// need to fix

    return (
        <div className={classes.wrapper}>
            <div>
                {`${props.affair.name} ${props.affair.priority}`}
            </div>
            <div className={classes.button}>
                <div className={classes.pos}>
                <div onClick={deleteCallback}>X</div>
                </div>
            </div>
        </div>
    )
}

export default Affair
