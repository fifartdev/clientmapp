import { useAuth } from "../utils/AuthContext"



function Profile() {
  const { user } = useAuth()

  return (
    <div className="container">
      <h1>{ user ? "Πίνακας Προφίλ " : null}{user ? user.name : null }</h1>
      <p>{user ? "Τηλέφωνο: " + user.phone : null }</p>
    
    
    
    </div>
  )
}

export default Profile