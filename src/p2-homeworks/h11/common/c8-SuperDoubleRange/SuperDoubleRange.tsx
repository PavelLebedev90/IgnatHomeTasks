import React from 'react'
import {makeStyles, Slider, Typography} from '@material-ui/core';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]


}

const SuperDoubleRange = (props:SuperDoubleRangePropsType) => {


    const useStyles = makeStyles({
        root: {
            width: 300,

        },
    });
    const classes = useStyles();



    function valuetext(value:number) {
        return `${value}`;
    }
    const handleChange = (event: any, value: number | number[]) => {
        props.onChangeRange && props.onChangeRange(value as [number,number])

    };


    return (
        <div
            className={classes.root}
        >
            <Typography id="range-slider" gutterBottom>

            </Typography>
            <Slider
                value={props.value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    )
}

export default SuperDoubleRange
