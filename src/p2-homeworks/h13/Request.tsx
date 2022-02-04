import React, {useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {requestsAPI} from './api/requestsAPI';


type ErrorType = {
    data: {
        errorText: string
        info: string
        yourBody: { success: boolean }
        success: false
        yourQuery: {}
    }
}
const Request = () => {
    const [checked, setChecked] = useState(false)
    const [state, setState] = useState('')
    const onChangeChecked = (checked: boolean) => {
        setChecked(checked)
    }

    const onClickAPI = async () => {
        try {
            let data = await requestsAPI.onChangeChecked(checked)
            setState(data.data.errorText)
        } catch (error: any) {
            let rej: ErrorType = error.response
            setState(rej.data.info)
        }
    }
    return (
        <div>
            <div>{state}</div>
            <SuperButton onClick={onClickAPI}> Отправить запрос </SuperButton>
            <SuperCheckbox checked={checked} onChangeChecked={onChangeChecked}/>
        </div>
    );
};

export default Request;