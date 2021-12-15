import React, {ChangeEvent,KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    keyPressAddUser: (e: KeyboardEvent<HTMLInputElement>) => void
    onFocusHandler: () => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,keyPressAddUser, onFocusHandler} // деструктуризация пропсов
) => {
    const inputClass = error? s.error: s.someClass; // need to fix with (?:)

    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   onKeyPress={keyPressAddUser}
                   onFocus={onFocusHandler}
                   className={inputClass}/>
            <span>{error}</span>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
