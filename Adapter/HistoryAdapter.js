

export default HistoryAdapter = (bikeName, historyObj) => (
    {
        bike : null,
        name : historyObj.user.first_name + " " + historyObj.user.last_name,
        timestamps : historyObj.timestamp,

    }
)


//bike, name, date, time

// id
// integer
// required
// bike
// object
// required
// timestamps
// object
// required
// borrow_date
// string
// required
// borrow_time
// string
// required
// return_date
// string
// required
// return_time
// string
// required
// duration
// string
// required
// distance
// string
// required
// selected_plan
// integer
// optional
// route_line
// array[object]
// optional
// latitude
// number
// optional
// longitude
// number
// optional
// time
// number
