import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';



const HW11 = () => {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    const onChangeDoubleRange = (value: [number, number]) => {
        setValue1(value[0])
        setValue2(value[1])
    }
    return (
        <div>
            <hr/>
            homeworks 11

            should work (должно работать)
            <div>
                <span>{value1}</span>
                <SuperRange onChangeRange={setValue1}
                    // сделать так чтоб value1 изменялось
                />

            </div>

            <div>


                <SuperDoubleRange value={[value1, value2]} onChangeRange={onChangeDoubleRange}/>

                <span>{value2}</span>
            </div>
            <div>

            </div>

        </div>
    )
}

export default HW11





