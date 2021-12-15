import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value.trim().toLowerCase());
        setError("");
    }

    const addUser = () => {
        if (name.match(/\d/)) {
            setName("");
            return setError("name cannot contain numbers");
        }

        if (name.length === 0) {
            return setError("Enter correct name");
        }


        alert(`Hello ${name}!`);
        addUserCallback(name);
        setName("");
    }


    const keyPressAddUser = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key == "Enter") {
            addUser();
        }
    }

    const totalUsers = users.length; // need to fix

    const onFocusHandler = () => {
        setError("");
    }

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            keyPressAddUser={keyPressAddUser}
            onFocusHandler={onFocusHandler}
        />
    )
}

export default GreetingContainer
