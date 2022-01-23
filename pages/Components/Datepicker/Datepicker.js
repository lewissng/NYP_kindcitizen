import React from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from '@material-ui/pickers'

function DatePicker() {
    const [selectedDate, setSelectedDate] = React.useState(
        // if want to set value of new Date("2020-09-11T12:00:00")
    )

    const handleDateChange = (date) => (
        setSelectedDate(date)
    )

    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid>
                    <KeyboardDatePicker
                        disableToolbar
                        variant='inline'
                        format='MM/dd/yyy'
                        margin='normal'
                        id='date-picker'
                        label=""
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date'
                        }}
                    />

                </Grid>

            </MuiPickersUtilsProvider>
        </div>
    )
}

export default DatePicker;