

export default UserAdapter = ( userObj ) => (
    {
        _id : userObj.id,
        name : userObj.first_name + " " + userObj.last_name,
        avatar : null
    }
)
// id
// integer
// required
// username
// string
// required
// first_name
// string
// required
// last_name
// string
// required
// email
// string
// required
// gender
// integer
// required
// phone_no
// string
// required
// point