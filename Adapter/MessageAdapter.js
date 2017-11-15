import { UserAdapter } from './'


//currently ignore payload type (assume it's always message string)
export default MessageAdapter = ( messageObj ) => (
    {
        _id : messageObj.id,
        text : messageObj.payload,
        createdAt : messageObj.createdAt,
        user : UserAdapter(messageObj.user),
    }
)
