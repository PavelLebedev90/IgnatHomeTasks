import React from 'react'
import Affair from './Affair'
import {AffairType, deleteAffair, FilterType} from './HW2'
import classes from "./Affairs.module.css";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter("all")
    } // need to fix
    const setHigh = () => {
        props.setFilter("high")
    }
    const setMiddle = () => {
        props.setFilter("middle")
    }
    const setLow = () => {
        props.setFilter("low")
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.affairs}>
                {mappedAffairs}
            </div>
            <div className={classes.button}>
                <div onClick={setAll}>All</div>
                <div onClick={setHigh}>High</div>
                <div onClick={setMiddle}>Middle</div>
                <div onClick={setLow}>Low</div>
            </div>
        </div>
    )
}

export default Affairs
