import React, {useContext} from 'react'
import UserContext from './UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.name} your password {user.password}</div>
}

export default Profile