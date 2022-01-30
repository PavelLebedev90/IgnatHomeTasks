import React from 'react';
import s from './HW12.module.css';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeThemeC} from './bll/themeReducer';



function HW12() {
    //const theme = 'some'; // useSelector
    const theme = useSelector<AppStoreType, Array<'dark' | 'red' | 'some'>>(state => state.theme.theme)
    const activeTheme = useSelector<AppStoreType, 'dark' | 'red' | 'some'>(state => state.theme.activeTheme)
    // useDispatch, onChangeCallback
    const dispatch = useDispatch()
    const onChangeCallback = (value: 'dark' | 'red' | 'some') => {
        dispatch(changeThemeC(value))
    }
    return (
        <div className={s[activeTheme]}>
            <hr/>
            <span className={s[activeTheme + '-text']}>
                homeworks 12
            </span>
            <SuperSelect options={theme} onChangeOption={onChangeCallback}/>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
