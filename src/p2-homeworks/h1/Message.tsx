import React from 'react'
import classes from "./Message.module.css";

type messageDataPropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}
type PropsType = {
    tasks: messageDataPropsType,
}

export function Message(props: PropsType) {
    return (
        <div className={classes.message}>
            <div className={classes.element_1}>

                <img className={classes.img} src={props.tasks.avatar}/>
            </div>
            <div className={classes.element_2}>
                <p className={classes.element_2_name}>{props.tasks.name}</p>
                <p className={classes.element_2_message}>{props.tasks.message}</p>
                <p className={classes.element_2_time}>{props.tasks.time}</p>
            </div>
        </div>
    )
}


